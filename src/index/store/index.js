import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

export default createStore(
    combineReducers(reducers),
    {
        from: '北京',//起始城市
        to: '深圳',//终点城市
        isCitySelectorVisible: false,//城市选择浮层开关
        currentSelectLeftCity: false,//城市填到哪里
        cityData: null,//城市数据
        isLoadingCityData: false,//做节流操作，如果当前正在加载城市数据就不再请求数据
        isDateSelectorVisible: false,//日期选择浮层开关
        highSpeed: false//是否选择高铁动车
    },
    applyMiddleware(thunk))