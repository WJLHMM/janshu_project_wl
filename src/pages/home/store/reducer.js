// import * as actionTypeconst  from './actionTypeconst';
import { actionTypeconst } from './index';
import { fromJS } from 'immutable';
//immutable库，对象，保证state无法改变

const defaultState = fromJS({
	topicList:[],
	recommondList: [],
	contentlist:[],
	contentlistpage:1,
	Isbacktop:false,
	Isbarcodepicinfo:false,
	recommendal:[],
	recommendaltotal:[],
	i:2,
	ilength:1,
	Isbciconshow:false,
	bannerpiclist:[],
});

export default (state=defaultState,action) => {

	switch(action.type) {
		case actionTypeconst.GET_HOME_LIST : return state.merge({
			'topicList': fromJS(action.topicList),
			'recommondList': fromJS(action.recommondList),
			'contentlist': fromJS(action.contentlist),
			'recommendal': fromJS(action.recommendal),
		});
		case actionTypeconst.LOAD_MORE_LIST : return state.merge({
			'contentlist':state.get('contentlist').concat(action.contentlist),
			'contentlistpage':state.get('contentlistpage')+1,
		});
		case actionTypeconst.BACKTOP_SCROLL_INFO : return state.set(
			'Isbacktop',action.Isbacktop
		);
		case actionTypeconst.BARCODE_SHOW_INFO : return state.set(
			'Isbarcodepicinfo',action.Isbarcodepicinfo
		);
		case actionTypeconst.GET_TOTAL_RECOMMENDAUTHORSLIST : return state.merge({
			'recommendaltotal':fromJS(action.recommendauthorslist),
			'ilength':action.ilength,
		});

		case actionTypeconst.REFRESH_RECOMMENDAUTHOR_LIST : return state.merge({
			'i':action.i+1,
			'recommendal':fromJS(action.recommendaltotal.slice(action.i*5,action.i*5+5))
		});
		case actionTypeconst.BC_ICON_TOGGLE : return state.set(
			'Isbciconshow',action.Isbciconshow
		);
		case actionTypeconst.GET_BANNERPIC_LIST : return state.set(
			'bannerpiclist',action.bannerpiclist
		);
		
		default : return state;
	}
}
