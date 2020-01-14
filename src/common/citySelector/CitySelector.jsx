import React, { useState, useEffect, useMemo, memo } from 'react';
import PropTypes, { func } from 'prop-types';

import './CitySelector.css';
import classnames from 'classnames';

const CityItem = memo(function CityItem(props) {
    const {
        name,
        onSelect,
    } = props;

    return (
        <li className="city-li" onClick={() => onSelect(name)}>
            {name}
        </li>
    )
});

CityItem.prototype = {
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

const CitySection = memo(function CitySection(props) {
    const {
        title,
        cities = [],
        onSelect
    } = props;
    return (
        <ul className="city-ul">
            <li className="city-li" key={title}>
                {title}
            </li>
            {
                cities.map(city => {
                    return <CityItem
                        key={city.name}
                        name={city.name}
                        onSelect={onSelect} />
                })
            }
        </ul>
    )
});

CitySection.prototype = {
    title: PropTypes.string.isRequired,
    cities: PropTypes.array,
    onSelect: PropTypes.func.isRequired,
};

const CityList = memo(function CityList(props) {
    const {
        sections,
        onSelect
    } = props;
    return (
        <div className="city-list">
            <div className="city-cate">
                {
                    sections.map(sec => {
                        return <CitySection
                            key={sec.title}
                            title={sec.title}
                            cities={sec.citys}
                            onSelect={onSelect}
                        />
                    })
                }
            </div>
        </div>
    );
});

CityList.prototype = {
    sections: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

const CitySelector = memo(function CitySelector(props) {
    const {
        show,
        cityData,
        isLoading,
        getCityData,
        onSelect,
        onBack
    } = props;

    const [searchKey, setSearchKey] = useState('');
    const key = useMemo(() => searchKey.trim(), [searchKey]);

    useEffect(() => {
        if (!show || cityData || isLoading) {
            return;
        }
        getCityData();
    }, [show, cityData, isLoading]);

    const outputCitySections = () => {
        if (isLoading) {
            return (<div>loading</div>);
        }

        if (cityData) {
            return (
                <CityList
                    sections={cityData.cityList}
                    onSelect={onSelect}
                />
            )
        }
        return <div>error</div>;
    }
    return (
        <div className={
            classnames('city-selector', { hidden: !show, })}>
            <div className="city-search">
                <div className="search-back" onClick={() => onBack()}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={searchKey}
                        onChange={e => setSearchKey(e.target.value)}
                        className="search-input"
                        placeholder="城市、车站的中文或拼音"
                    />
                </div>
                <i className={classnames('search-clean', {
                    hidden: key.length == 0
                })} onClick={() => setSearchKey('')}> &#xf063; </i>
            </div>
            {outputCitySections()}
        </div>
    )
});

CitySelector.propTypes = {
    show: PropTypes.bool.isRequired,
    cityData: PropTypes.object,
    isLoading: PropTypes.bool.isRequired,
    onBack: PropTypes.func.isRequired,
    getCityData: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default CitySelector;
