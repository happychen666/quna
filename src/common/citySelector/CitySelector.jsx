import React, { useState, useEffect,useMemo } from 'react';
import PropTypes from 'prop-types';

import './CitySelector.css';
import classnames from 'classnames';

export default function CitySelector(props) {
    const {
        show,
        cityData,
        isLoading,
        getCityData,
        onBack
    } = props;

    const [searchKey, setSearchKey] = useState('');
    const key = useMemo(() => searchKey.trim(), [searchKey]);

    useEffect(() => {
        if(!show || cityData ||isLoading){
            return;
        }
        getCityData();
    },[show,cityData ,isLoading]);

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

        </div>
    )
}

CitySelector.propTypes = {
    show:PropTypes.bool.isRequired,
    cityData:PropTypes.object,
    isLoading:PropTypes.bool.isRequired,
    onBack:PropTypes.func.isRequired,
    getCityData:PropTypes.func.isRequired,
}