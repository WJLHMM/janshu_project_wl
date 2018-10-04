import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';

import { actionCreators } from '../store';
import { 
	LoginWrapper,
	// Loginlogo,
	Logintab,
	Logintabtitle,
	Logintabinputarea,
	Input,
	Logincheck,
	Loginsubmit,
	Moreloginway,
	Moreloginwayitem,
} from '../style.js';

class Mainlogin extends PureComponent {

	render() {
		const { Islogin,} = this.props;
		if(!Islogin){
			return (
				<Fragment>



					<LoginWrapper>
					    <Link to = {'/'}>
						<div style={{'cursor':'pointer'}}>
							<img 
								style = {{'display':'block','margin': '56px 0 0 50px','width':'100px','height':'46px'}}
								src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"
							/>
						</div>
						</Link>
						<Logintab>
							<Logintabtitle>
								<p className="active">登录</p>
								<b>·</b>
								<Link to= {'./register'}>
									<p>注册</p>
								</Link>
							</Logintabtitle>
							<Logintabinputarea>
								<form>
									<Input placeholder="手机号或邮箱" innerRef={account=> this.account = account}  autocomplete/>
								</form>
								<form>
									<Input placeholder="密码" innerRef={password=> this.password = password}type='password'  autocomplete/>
								</form>
								<i className="iconfont logicon1" >&#xe603;</i>
								<i className="iconfont logicon3" >&#xe65f;</i>
							</Logintabinputarea>
							<Logincheck>
								<form>
									<input type="checkbox"/>
									<span>记住我</span>
								</form>
								<p>登录遇到问题?</p>
							</Logincheck>
							<Loginsubmit
								onClick={()=>this.props.logininfn(this.account,this.password)}
							>
								登录
							</Loginsubmit>
							<Moreloginway>
								<h6>社交账号登录</h6>
							</Moreloginway>
							<Moreloginwayitem>
								<li><i className="iconfont weibo" >&#xe619;</i></li>
								<li><i className="iconfont weichat" >&#xe650;</i></li>
								<li><i className="iconfont qq" >&#xe64f;</i></li>
								<li>其它</li>
							</Moreloginwayitem>
						</Logintab>
					</LoginWrapper>
 				</Fragment>
			)		
		}else {
			return (<Redirect to= '/'/>)
			}
		
	}

	componentDidMount () {
		
	}
}




const mapstateToProps = (state) => {
	return {
		'Islogin':state.getIn(['login','Islogin']),
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		logininfn(accountelment,passwordelement) {
			dispatch(actionCreators.loginin(accountelment.value,passwordelement.value))
		}
	}
}

export default connect (mapstateToProps,mapDispatchToProps)(Mainlogin);

