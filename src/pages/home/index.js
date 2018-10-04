import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { 
		HomeWrapper,
		HomeLeft,
		HomeRight,
		Readmore,
		BackTop,
} from './style';

import  Banner  from './components/Banner';
// import  Banner1  from './components/Banner1';
import  List  from './components/List';
import  Topic  from './components/Topic';
import  Recommend  from './components/Recommend';
import  Recommendauthors  from './components/recommendauthors';
import { actionCreators } from './store';

class Home extends PureComponent {
	backtop = () => {
		window.scrollTo(0,0);
	}
	
	render() {
		const { loadmoredata,page} = this.props;
		return (
 			<HomeWrapper>
 				<HomeLeft>
 					<Banner></Banner>
 					{/*<Banner1></Banner1>*/}
 					<Topic></Topic>
 					<List></List>
 					<Readmore onClick={()=>loadmoredata(page)}>阅读更多</Readmore>
 				</HomeLeft>
 				
 				<HomeRight>
 					<Recommend  ></Recommend>
 					<Recommendauthors></Recommendauthors>
 				</HomeRight>
 				{
 					this.props.Isbacktop?<BackTop onClick = {this.backtop}><i className="iconfont">&#xe61a;</i></BackTop> : null
 				}
 			
 			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.gethomelist();
		// this.bindEvent();
		window.addEventListener('scroll',this.props.backtopscroll);
	}
   
	// bindEvent = () => {

	// 	window.addEventListener('scroll',this.props.backtopscroll);
	// 	// const top= document.documentElement.scrollTop || document.body.scrollTop;
	// 	// console.log(window.scrollY);
		
	// }
	
	componentWillUnmount() {
		window.removeEventListener('scroll',this.props.backtopscroll);
	} 

	// shouldComponentUpdate(nextProps,nextState) {
	// 	if(nextProps.content!==this.props.content) {
	// 		return true;
	// 	}else {
	// 		return false;
	// 	}
		
	// }
	
}

const mapStateToProps =(state)=> {
	return {
		topicList:state.getIn(['home','topicList']),
		recommondList:state.getIn(['home','recommondList']),
		contentlist:state.getIn(['home','contentlist']),
		page:state.getIn(['home','contentlistpage']),
		Isbacktop:state.getIn(['home','Isbacktop']),
		
	}
}

// const top= document.documentElement.scrollTop || document.body.scrollTop;
const mapDispatchToProps = (dispatch) => {
	return {
		gethomelist(){
			dispatch(actionCreators.gethomeInfo());
		},

		loadmoredata(page) {
			dispatch(actionCreators.loadmoreinfo(page));
		},
	
		backtopscroll () {
			const top= document.documentElement.scrollTop || document.body.scrollTop;
			// console.log(top);
			if(top>200) {
				dispatch(actionCreators.backtopscrollinfo(true));
			}else {
				dispatch(actionCreators.backtopscrollinfo(false));
			}
			
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)

