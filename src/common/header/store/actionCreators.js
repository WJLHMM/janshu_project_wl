// import * as actionTypeconst from './actionTypeconst';
import { actionTypeconst } from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

// 注意要保持immutable数组的一致性,所以list使用FromJS来转化一下
// 另外searchlistitem方法本文件引用无需要暴露出去，所以此类定义一起放在最前或最后



export const handleinputfocusfn = ()=> ({
	type:actionTypeconst.HANDLE_INPUT_FOCUS
});

export const handleinputblurfn = ()=> ({
	type:actionTypeconst.HANDLE_INPUT_BLUR
});
export const onmouseleavefn = ()=> ({
	type:actionTypeconst.ON_MOUSER_LEAVE
});
export const onmouseenterfn = ()=> ({
	type:actionTypeconst.ON_MOUSER_ENTER
});

export const freshItemfn = (page,list,e)=> ({
	type:actionTypeconst.FRESH_NEW_ITEM,
	page:page,
	list:list,
	// el:e.target.firstElementChild||e.target.children[0]
});

const searchlistitem = (data)=> ({
	type:actionTypeconst.SEARCH_LIST_ITEM,
	list:fromJS(data.data),
	ilength0:Math.ceil(data.data.length/8)
});

export const getListfn = ()=> {
	// 注意返回一个函数的写法
	return (dispatch) => {
		axios.get('./api/headinputsearchlist.json')
			.then((res)=>{
				const data =res.data;
				dispatch(searchlistitem(data));
			})
			.catch((e)=>{
				console.log(e);
			});
		
	}
};

