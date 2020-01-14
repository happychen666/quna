import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/header/Header.jsx';
import DepartDate from './departdate/DepartDate';
import HighSpeed from './highSpeed/HighSpeed';
import Journey from './journey/Journey';
import Submit from './submit/Submit.jsx';

import {
    exchangeFromTo,
    showCitySelector
} from './store/actions';
function App(props) {

    const {
        from,
        to,
        dispatch
    } = props;

    //向子组件传入函数，为了避免子组件每次重渲染用useCallback将函数包裹起来
    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    const doExchangeFromTo = useCallback(() => {
        dispatch(exchangeFromTo());
    }, []);

    const doShowCitySelector = useCallback((m) => {
        dispatch(showCitySelector(m));
    }, [])

    return (
        <div>
            <div className="header-wrapper">
                <Header title="火车票" onBack={onBack} />
            </div>
            <form className="form">
                <Journey
                    from={from}
                    to={to}
                    showCitySelector={doShowCitySelector}
                    exchangeFromTo={doExchangeFromTo}
                />
                <DepartDate />
                <HighSpeed />
                <Submit />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);