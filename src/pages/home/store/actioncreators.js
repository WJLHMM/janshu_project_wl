import axios from 'axios';
import { fromJS } from 'immutable';

// import * as actionTypeconst from './actionTypeconst';
import { actionTypeconst } from './index';

const gethomedata = (result)=> {
	return {
		type:actionTypeconst.GET_HOME_LIST,
		topicList:fromJS(result.topicList),
		recommondList:fromJS(result.recommondList),
		contentlist:fromJS(result.contentlist),
		recommendal:fromJS(result.recommendauthorslist)
	}
};

export const gethomeInfo = ()=> {
	return(dispatch) => {
		axios.get('./api/homelist.json')
			.then((res)=>{
				const result =res.data.data;
				dispatch(gethomedata(result));
			})
			.catch((e)=>{
				console.log(e);
			});
	}
};

const loarmoredata = (result)=> {
	return {
		type:actionTypeconst.LOAD_MORE_LIST,
		contentlist:fromJS(result.contentlist)
	}
};

export const loadmoreinfo= (page) => {
	return(dispatch) => {
		axios.get('./api/homelist1.json?page=' + page)
			.then((res)=>{
				const result =res.data.data;
				console.log(result);
				dispatch(loarmoredata(result,page));
			})
			.catch((e)=>{
				console.log(e);
			});

	}
};

export const backtopscrollinfo = (j) =>{
	return {
		type:actionTypeconst.BACKTOP_SCROLL_INFO,
		Isbacktop:j
	}
};

export const barcodepictoggle = (j) =>{
	return {
		type:actionTypeconst.BARCODE_SHOW_INFO,
		Isbarcodepicinfo:j
	}
};
export const bcicontoggle = (j) =>{
	return {
		type:actionTypeconst.BC_ICON_TOGGLE,
		Isbciconshow:j
	}
};

const gettotalrecommendauthorslist = (result) =>{
	return {
		type:actionTypeconst.GET_TOTAL_RECOMMENDAUTHORSLIST,
		recommendauthorslist:fromJS(result.recommendauthorslist),
		ilength:Math.ceil(result.recommendauthorslist.length)
	}
};

export const getrecommednauthorsdatafn= () => {
	return(dispatch) => {
		axios.get('./api/recommendauthorslist.json')
			.then((res)=>{
				const result =res.data.data;
				// console.log(result);
				dispatch(gettotalrecommendauthorslist(result));
			})
			.catch((e)=>{
				console.log(e);
			});

	}
};

export const refreshralist = (recommendaltotal,i,recommendal1) =>{
	return {
		type:actionTypeconst.REFRESH_RECOMMENDAUTHOR_LIST,
		recommendaltotal:recommendaltotal,
		recommendal1:recommendal1,
		i:i,
	}
};

		
const getbannerpiclistType = (result) =>{
	return {
		type:actionTypeconst.GET_BANNERPIC_LIST,
		bannerpiclist:fromJS(result.bannerpiclist)
	}
};


export const getbannerpiclist= () => {
	return(dispatch) => {
		axios.get('./api/Bannerpics.json')
			.then((res)=>{
				const result =res.data.data;
				dispatch(getbannerpiclistType(result));
			})
			.catch((e)=>{
				console.log(e);
			});

	}
};


