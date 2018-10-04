// import * as actionTypeconst  from './actionTypeconst';
import { actionTypeconst } from './index';
import { fromJS } from 'immutable';
//immutable库，对象，保证state无法改变

const defaultState = fromJS({
	focused:false,
	mousestate:false,
	list:[],
	list1:[],
	page:0,
	ilength0:0
});

export default (state=defaultState,action) => {

	// if(action.type===actionTypeconst.FRESH_NEW_ITEM) {
	// 		const newState = JSON.parse(JSON.stringify(state));
	// 		newState.list1 = newState.list.slice(action.i,action.i+8);
	// 	    return newState
	// };
	switch(action.type) {
		case actionTypeconst.HANDLE_INPUT_FOCUS : return state.set('focused', true);
		case actionTypeconst.HANDLE_INPUT_BLUR : return state.set('focused', false);
		case actionTypeconst.ON_MOUSER_LEAVE : return state.set('mousestate', false);
		case actionTypeconst.ON_MOUSER_ENTER : return state.set('mousestate', true);
		case actionTypeconst.SEARCH_LIST_ITEM : return state.merge( {
			'list': action.list,
			 ilength0:action.ilength0,
			'list1': action.list.slice(0,8),
		});
		case actionTypeconst.FRESH_NEW_ITEM :return state.merge( {
			'page':action.page + 1,
			'list1': action.list.slice(action.page*8,action.page*8+8),
		});
		
		default : return state;

		

	}
	// if(action.type===actionTypeconst.HANDLE_INPUT_FOCUS) {
	// 	// immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
	// 	return state.set('focused', true);
	// }	
	// if(action.type===actionTypeconst.HANDLE_INPUT_BLUR) {
	// 	return state.set('focused', false);
	// }
	// if(action.type===actionTypeconst.SEARCH_LIST_ITEM) {
	// 	return state.set('list', action.list);
	// }
	// return state;
}
