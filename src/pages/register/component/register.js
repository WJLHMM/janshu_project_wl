import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

class Registermain extends PureComponent {
	render() {
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
						    <Link to = {'./login'}>
								<p>登录</p>
							</Link>
							<b>·</b>
							<p className="active">注册</p>
						</Logintabtitle>
						<Logintabinputarea>
							<Input placeholder="你的昵称"/>
							<Input placeholder="手机号"/>
							<Input placeholder="设置密码"/>
							<i className="iconfont logicon1" >&#xe603;</i>
							<i className="iconfont logicon2" >&#xe622;</i>
							<i className="iconfont logicon3" >&#xe65f;</i>
						</Logintabinputarea>
						<Logincheck>
							点击 “注册” 即表示您同意并愿意遵守简书
							<b>用户协议</b> 和 <b>隐私政策</b> 。
						</Logincheck>
						<Loginsubmit>注册</Loginsubmit>
						<Moreloginway>
							<h6>社交账号登录</h6>
						</Moreloginway>
						<Moreloginwayitem>
							<li><i className="iconfont weichat" >&#xe650;</i></li>

							<li><i className="iconfont qq" >&#xe64f;</i></li>
						</Moreloginwayitem>
					</Logintab>
				</LoginWrapper>
 			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// ListdetaiTitle:state.getIn(['detail','ListdetaiTitle']),
	}
}

export default connect (mapStateToProps,null)(Registermain);

