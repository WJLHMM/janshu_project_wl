import React, { PureComponent,Fragment  } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import { 
	BarcodeWrapper,
	Barcodeguide1,
	Barcodeguide2,
	Barcodefadeinpic,
	Barcodefooter,
	RecommendauthorsBoard,
	RecommendauthorsItem,
	Checkmore,

} from  '../style';

let ang1 = 0;
class Recommendauthors extends PureComponent {
	render () {
		const { Isbarcodepicinfo,recommendal,i,ilength,recommendaltotal,barcodepicshowfn,barcodepichidefn,freshrecommendauthorslistfn} = this.props;
		return (
			<Fragment>
				<BarcodeWrapper
					onMouseEnter={barcodepicshowfn}
					onMouseLeave={barcodepichidefn}
				>
					<img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
					<Barcodeguide1>下载简书手机APP &gt;</Barcodeguide1>
					<Barcodeguide2>随时随地发现和创造内容</Barcodeguide2>
					{
						Isbarcodepicinfo?
						<Barcodefadeinpic>
							<img className="qrcode1" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Download index side qrcode"/>
							<div className='arrow-box1'></div>
							<div className='arrow-box2'></div>
					   </Barcodefadeinpic>:null
					}
				</BarcodeWrapper>
				<Barcodefooter>
					<span>推荐作者</span>
					<div 
						className="barcodeswift"
						onClick = {(e)=>{freshrecommendauthorslistfn(recommendaltotal,i,ilength,e)}}
					>
						<i className="iconfont searchicon1" >&#xe64e;</i>&nbsp;&nbsp;换一批
					</div>
				</Barcodefooter>
				<RecommendauthorsBoard   >
				{
					recommendal.map((item,index)=>{
						return (
							<RecommendauthorsItem key={index} className="fadeIn4">
								<img className="authorpic" src={item.get('imgUrl')} alt="64"/>
								<div className="authornickname">{item.get('nickname')}</div>
								<i className="iconfont authoradd" >&#xe608;关注</i>
								<p>{item.get('achievement')}</p>
							</RecommendauthorsItem>
						)
					})
				}
				</RecommendauthorsBoard>
				<Checkmore>查看全部&nbsp;&nbsp;<i className="iconfont checkall" >&#xe624;</i></Checkmore>
			</Fragment>
		)
	}

	componentDidMount() {
		this.props.getrecommednauthorsdata();
	}
}

const mapStateToProps =(state)=> {
	return {
		Isbarcodepicinfo:state.getIn(['home','Isbarcodepicinfo']),
		recommendal:state.getIn(['home','recommendal']),
		i:state.getIn(['home','i']),
		ilength:state.getIn(['home','ilength']),
		recommendaltotal:state.getIn(['home','recommendaltotal']),
		IsfadeIn4:state.getIn(['home','IsfadeIn4']),
	}
}

const mapDispatchToProps =(dispatch)=> {
	return {
		barcodepicshowfn(){
			dispatch(actionCreators.barcodepictoggle(true))
		},
        barcodepichidefn(){
			dispatch(actionCreators.barcodepictoggle(false))
		},

		getrecommednauthorsdata() {
			dispatch(actionCreators.getrecommednauthorsdatafn());
		},

		freshrecommendauthorslistfn(recommendaltotal,i,ilength,e) {
			if(i<(ilength/5)) {
				dispatch(actionCreators.refreshralist(recommendaltotal,i))
			}else {
				dispatch(actionCreators.refreshralist(recommendaltotal,0))
			}
			if(e.target.firstElementChild) {
    			e.target.firstElementChild.style.transform='rotate(' + (ang1 + 360) + 'deg)';
    		}else {
    			e.target.style.transform= 'rotate(' + (ang1 + 360) + 'deg)';
    		}
    		ang1=ang1+360;
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps) (Recommendauthors);
