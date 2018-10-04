// import * as actionTypeconst  from './actionTypeconst';
import { actionTypeconst } from './index';
import { fromJS } from 'immutable';
//immutable库，对象，保证state无法改变

const defaultState = fromJS({
	

});


export default (state=defaultState,action) => {

	switch(action.type) {
		case actionTypeconst.GET_HOME_LIST : return state.merge({
			// 'recommendal': fromJS(action.recommendal),
		});
		
		default : return state;
	}
}
