import React from 'react';
import {connect} from 'react-redux';
import './App.css';

import Header from '../common/header/Header.jsx';
import DepartDate from './departdate/DepartDate';
import HighSpeed from './highSpeed/HighSpeed';
import Journery from './journery/Journery';
import Submit from './submit/Submit.jsx';

function App(props){
    return (
        <div>
            <Header/>
            <Journery/>
            <DepartDate/>
            <HighSpeed/>
            <Submit/>
        </div>
    )
}

const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch) => ({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(App);