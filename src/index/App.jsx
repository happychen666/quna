import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/header/Header.jsx';
import DepartDate from './departdate/DepartDate';
import HighSpeed from './highSpeed/HighSpeed';
import Journery from './journery/Journery';
import Submit from './submit/Submit.jsx';

function App(props) {

    //向子组件传入函数，为了避免子组件每次重渲染用useCallback将函数包裹起来
    const onBack = useCallback(() => {
        window.history.back();
    }, [])
    return (
        <div>
            <div className="header-wrapper">
                <Header title="火车票" onBack={onBack} />
            </div>
            <Journery />
            <DepartDate />
            <HighSpeed />
            <Submit />
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(App);