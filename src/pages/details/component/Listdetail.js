import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';

import {
	ListdetailNote,
	ListdetailWapper,
	ListdetaiTitle,
	Listdetailinfo,
	Listdetailright,
	ListdetailAuthorinfo,
	Listdetailmeta,
	Listdetailcontext,


} from '../style.js';

class Listdetail extends PureComponent {
	render() {

		// const { ListdetaiTitle,} = this.props;
		return (
			<Fragment>
				<ListdetailNote>
					<span>×</span>
				</ListdetailNote>
	 			<ListdetailWapper>
	 				<ListdetaiTitle>九宫格日记</ListdetaiTitle>
	 				<Listdetailinfo>
	 					<img className="detailinfopic" src="//upload.jianshu.io/users/upload_avatars/9076470/6ab63920-7264-4575-b32d-3e024f3b4090?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96" alt="96"/>
	 					<Listdetailright>
	 						<ListdetailAuthorinfo>
		 						<p>泉水_544e</p>
		 						<i className="iconfont detailauthoradd" >&#xe608;关注</i>
		 					</ListdetailAuthorinfo>
		 					<Listdetailmeta>
		 						<span>2018.08.25 11:46</span>
		 						<span>字数 492</span>
		 						<span>阅读 490</span>
		 						<span>评论 4</span>
		 						<span>喜欢 19</span>
		 					</Listdetailmeta>
	 					</Listdetailright>
	 				</Listdetailinfo>
	 				<Listdetailcontext>
	 					<p>对一个老宝宝来说，什么都是新奇的。让人眼花缭乱。</p>
	 					<blockquote>
	 						<p>
	 							<b>
	 								九宫格日记是一种新的日记方式:九个方方正正的小格子，像做填空题那样"对号入座"，填写上相应内容，就	完成一篇日记，整个过程不过几分钟。这种被称为"九宫格日记"的新型日记方式，因为便捷省时在网上风行开来。
								</b>
							</p>
						</blockquote>
						<p>
							若干年前，如果有这个工具，估计宝宝爸爸也不会满大街地追着宝宝屁股打她了。也不会再有每周日检查日记时，宝宝紧张地躲在阳台上补日记的糗事了。也不会有宝宝对日记这一类的文书深恶痛绝的感想了。
						</p>
						<p>
							九宫格的主要内容有:开心的事、为他人做的事、计划/工作/备忘、比起昨天的进步、心情/感悟/灵感、关注/八卦/新闻、健康/饮食/体重、昨日梦境等，九宫格的正中央那格是天气。格子内限写9个字，九宫格日记以其简单便捷获得不少网友的青睐。
						</p>
						<p>
							用九宫格记日记很方便，只是记录你一天的心情。不同的宫格内，短短的一句话，就可以让你简单快速地总结自己的一天，提高了写日记的效率，而且也能长久保留下来。
						</p>
						<div  className="picinfo">
							<img src="//upload-images.jianshu.io/upload_images/9076470-b6c80a8c17f69d32.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp" alt="96"/>
						</div>
						<div  className="picnote">图片来自网络</div>
						<p></p>
						<div className="picinfo1">
							<img src="//upload-images.jianshu.io/upload_images/9076470-82fc42a19da5ed00.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/352/format/webp" alt="96"/>
						</div>
						<div  className="picnote">图片来自网络</div>
						<p>下面这个模板可以引用到新人培训和新人成长计划中来。</p>
						<div className="picinfo2">
							<img src="//upload-images.jianshu.io/upload_images/9076470-b7a695aa845fce0c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/713/format/webp" alt="96"/>
						</div>
						<div  className="picnote">图片来自网络</div>
						<p>下面这张，可以考虑用来构思百度动态，每天九条贴子。哈哈。</p>
						<div className="picinfo3">
							<img src="//upload-images.jianshu.io/upload_images/9076470-df602a5d12a7a0ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/338/format/webp" alt="96"/>
						</div>
						<div  className="picnote">图片来自网络</div>
						<p>还有这张，也可以结合百度动态来写。</p>
						<div className="picinfo4">
							<img  src="//upload-images.jianshu.io/upload_images/9076470-fbdce36719e01c81.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/536/format/webp" alt="96"/>
						</div>
						<div  className="picnote">图片来自网络</div>
						<p>还有这张，也可以结合百度动态来写。哈哈，我找到神器了吗？</p>
						<div className="picinfo5">
							<img  src="//upload-images.jianshu.io/upload_images/9076470-b3e17483d4b12d4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/500/format/webp" alt="96"/>
						</div>
						<div  className="picnote">图片来自网络</div>
						<div className="support">
							 <p>小礼物来走一走，来简书关注我！</p>
							 <button>赞赏支持</button>
						</div>
	 				</Listdetailcontext>
	 			</ListdetailWapper>
 			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ListdetaiTitle:state.getIn(['detail','ListdetaiTitle']),
	}
}

export default connect (mapStateToProps,null)(Listdetail);

