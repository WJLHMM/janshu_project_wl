import React,{ PureComponent,Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// import * as actionCreators from './actionCreators';
import { actionCreators } from './store';
import { actionCreators  as loginactionCreators } from '../../pages/login/store';




import { 
			HeaderFixWrpper,
			HearderWrapper,
			Logo,
			Nav,
			NavItem,
			SearchWrapper,
			NavSearch,
			Searchinfo,
			Seachinfotitle,
			SeachinfoitemWrapper,
			Seachinfoitem,
			Addition,
			Buttonl,
			Buttonr,

} from './style';

let ang1 = 0;
class Header extends PureComponent {
	render () {
		const { focused,list,Islogin,handleInputFocus,handleInputBlur,logoutfn } = this.props; 
		return(
			<HeaderFixWrpper>
			<HearderWrapper>
				<Logo/>
				<Nav>

					<Link to='./'><NavItem className="left red1">首页</NavItem></Link>
					<NavItem className="left">下载App</NavItem>

					{
						(!Islogin)?<Link  to ={"./login" }><NavItem className="right">登录</NavItem></Link>:<NavItem className="right" onClick= {logoutfn}>退出</NavItem>
					}
					
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={500}
							classNames="slide"
						>
							<NavSearch 
								className={focused ?'focused':''}
								onFocus = {()=>{handleInputFocus(list)}}
								onBlur = {handleInputBlur}
							>
							</NavSearch>
						</CSSTransition>
							<i className={focused ?'focused iconfont inputincon':'iconfont inputincon'}>&#xe623;</i>
					    {
					    	this.ShowSearchinfo()
					    }
					</SearchWrapper>
					<Addition>
					{
						(!Islogin)?
						<Link  to ="./login"><Buttonr><i className="iconfont">&#xe6a4;</i>写文章</Buttonr></Link>
						:<Link  to ="./write"><Buttonr><i className="iconfont">&#xe6a4;</i>写文章</Buttonr></Link>
					}
					

						<Link  to ={"./register" }>
						<Buttonl>注冊</Buttonl>
						</Link>

					</Addition>
				</Nav>
			</HearderWrapper>
			</HeaderFixWrpper>
		)

	}

	ShowSearchinfo =()=> {
		const { focused,mousestate,page,list,list1,ilength0,onmouseenterf,onmouseleavef,freshItem } = this.props; 
		if(focused||mousestate) {
			return (
				<Fragment>
					<div className='arrow-box3'></div>
					<div className='arrow-box4'></div>
					<Searchinfo 
						onMouseEnter= {onmouseenterf}
						onMouseLeave= {onmouseleavef}
					>
						<Seachinfotitle className="left">热门搜索</Seachinfotitle>
						<Seachinfotitle 
							className="right" 
							onClick={(e)=>freshItem(page,list,e,ilength0)}
						>
							<i className="iconfont searchicon" >&#xe64e;</i>换一批
						</Seachinfotitle>
						
						<SeachinfoitemWrapper>
						{
							list1.map((item)=>{
	 							return <Seachinfoitem key={item}>{item}</Seachinfoitem>
							})

						}
							
					   </SeachinfoitemWrapper>
					</Searchinfo>
				</Fragment>
			)
		}else {
			return null;
	    }
    }
}	

const mapStateToProps =(state)=> {
		return {
			// 以下两种写法等价？
			// focused:state.get('header').get('focused'),
			focused:state.getIn(['header','focused']),
			list:state.getIn(['header','list']),
			list1:state.getIn(['header','list1']),
			mousestate:state.getIn(['header','mousestate']),
			page:state.getIn(['header','page']),
			ilength0:state.getIn(['header','ilength0']),
			Islogin:state.getIn(['login','Islogin']),
		}
	}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus (list) {
			// console.log(list);
			((list.size===0)&&dispatch(actionCreators.getListfn()));
			// if(list.size===0) {
			// 	dispatch(actionCreators.getListfn());
			// }
			dispatch(actionCreators.handleinputfocusfn());
			
    	},

    	handleInputBlur () {
			dispatch(actionCreators.handleinputblurfn());
    	},

    	freshItem (page,list,e,ilength0) {
    		if(page<ilength0) {
    			dispatch(actionCreators.freshItemfn(page,list));
    		}else {
    			dispatch(actionCreators.freshItemfn (0,list));
    		}
    		if(e.target.firstElementChild) {
    			e.target.firstElementChild.style.transform='rotate(' + (ang1 + 360) + 'deg)';
    		}else {
    			e.target.style.transform= 'rotate(' + (ang1 + 360) + 'deg)';
    		}
    		ang1=ang1+360;
    	},
    	onmouseenterf () {
			dispatch(actionCreators.onmouseenterfn());
    	},
    	onmouseleavef () {
			dispatch(actionCreators.onmouseleavefn());
    	},

    	logoutfn() {
    		dispatch(loginactionCreators.logout(false));
    	},
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);