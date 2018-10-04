// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

// import { headerReducer } from '../common/header/store/headerReducer';
import { headerReducer } from '../common/header/store/';
import { homeReducer }  from '../pages/home/store/';
import { detailReducer }  from '../pages/details/store/';
import { loginReducer }  from '../pages/login/store/';

const reducer = combineReducers ({
	header:headerReducer,
	home:homeReducer,
	detail:detailReducer,
	login:loginReducer,
});

 export default reducer;