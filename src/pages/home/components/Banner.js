import React, { PureComponent,Fragment } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { actionCreators } from '../store';

import { 
	BannerWrapper,
	BannerpicItem,
	Bannercontrol,
	Bannerindicate,
	Bannerindicateitem,

} from  '../style';

let i =0;
let Bannerrolling = null;

class Banner extends PureComponent {
	// constructor(props) {
	//   super(props);
	
	// this.BannerpicItem = React.createRef();
		
	 // }

	render () {
		const { Isbciconshow,bannerpiclist,bciconshowfn,bciconhidefn,banneermoveleftfn,banneermoverightfn} =this.props;
	
		return (
			<BannerWrapper 
				onMouseEnter={bciconshowfn}
				onMouseLeave={()=> {bciconhidefn(this.BannerpicItem,this.Bannerindicate)}}
				
			>
				{/*<BannerpicItem ref={this.BannerpicItem}>*/}
				<BannerpicItem 
					innerRef={el => this.BannerpicItem = el}
					style = {{transform: 'translateX(-12.5%)',transition:'all .3s'}}
				>
					{
						bannerpiclist.map ((item,index)=>{
							return (
								<img key = {index} className="bannerpic" src={item.get('imgUrl')} alt="540"/>
							)
						})
					}
					
				</BannerpicItem>
				{
					Isbciconshow ?
					<Fragment>
						<Bannercontrol className="bcleft"
							onClick = {()=> {banneermoveleftfn(this.BannerpicItem,this.Bannerindicate)}}
						>
							<i className="iconfont bclicon" >&#xe613;</i>
						</Bannercontrol>
						<Bannercontrol className="bcright"
							onClick = {()=>{banneermoverightfn(this.BannerpicItem,this.Bannerindicate)}}
						>
							<i className="iconfont bcricon" >&#xe624;</i>
						</Bannercontrol>
					</Fragment>:null
				
				}
				<Bannerindicate innerRef={(el)=>{this.Bannerindicate = el}}>
					<Bannerindicateitem style = {{'background':'#F91900'}}></Bannerindicateitem>
					<Bannerindicateitem style = {{'background':'#333'}}></Bannerindicateitem>
					<Bannerindicateitem style = {{'background':'#333'}}></Bannerindicateitem>
					<Bannerindicateitem style = {{'background':'#333'}}></Bannerindicateitem>
					<Bannerindicateitem style = {{'background':'#333'}}></Bannerindicateitem>
					<Bannerindicateitem style = {{'background':'#333'}}></Bannerindicateitem>
				</Bannerindicate>

			</BannerWrapper>
		)
	}

    
	componentDidMount () {
		// 直接使用innerref来获得bannerpicItem dom方法，相对简单一些
		// console.log(this.Bannerindicate.childNodes.length);
  	 	this.props.getbannerpiclistfn();
  	 	this.rollingfn();
  }
	componentWillUnmount() {
		clearInterval(Bannerrolling);
	} 

	rollingfn () {

		const arrlength = this.Bannerindicate.childNodes.length;
		if(!Bannerrolling) {
			Bannerrolling = setInterval(()=> {
				i++;
				for(let k =0;k<arrlength;k++) {
				 this.Bannerindicate.childNodes[k].style.background = '#333';
				}
				if(i===7){
				    i=1;
				}
			    this.BannerpicItem.style.transition = 'all .3s';
				this.BannerpicItem.style.transform ='translateX(' + -(i/8)*100+'%)';
				this.Bannerindicate.childNodes[i-1].style.background = '#F91900';
			},5000)
		}else {
			Bannerrolling = null;
			Bannerrolling = setInterval( ()=> {
				i++;
				for(let k =0;k<arrlength;k++) {
				 this.Bannerindicate.childNodes[k].style.background = '#333';
				}
				if(i===7){
				    i=1;
				}
			    this.BannerpicItem.style.transition = 'all .3s';
				this.BannerpicItem.style.transform ='translateX(' + -(i/8)*100+'%)';
				this.Bannerindicate.childNodes[i-1].style.background = '#F91900';
			},5000)
		}
	}
}

const mapStateToProps =(state)=> {
	return {
		Isbciconshow:state.getIn(['home','Isbciconshow']),
		bannerpiclist:state.getIn(['home','bannerpiclist']),
	}
}

const mapDispatchToProps =(dispatch)=> {
	return {
		getbannerpiclistfn() {
			dispatch(actionCreators.getbannerpiclist());
		},

		bciconshowfn() {
			dispatch(actionCreators.bcicontoggle(true));
			clearInterval(Bannerrolling);
		},
		bciconhidefn(BannerpicItem,Bannerindicate) {
			dispatch(actionCreators.bcicontoggle(false));
			const arrlength = Bannerindicate.childNodes.length;
			if(!Bannerrolling) {
				Bannerrolling = setInterval(()=> {
					i++;
					for(let k =0;k<arrlength;k++) {
						Bannerindicate.childNodes[k].style.background = '#333';
					}
					if(i===7){
					    i=1;
					}
				    	BannerpicItem.style.transition = 'all .3s';
						BannerpicItem.style.transform ='translateX(' + -(i/8)*100+'%)';
						Bannerindicate.childNodes[i-1].style.background = '#F91900';
				},5000)
			}else {
				Bannerrolling = null;
				Bannerrolling = setInterval( ()=> {
					i++;
					for(let k =0;k<arrlength;k++) {
						Bannerindicate.childNodes[k].style.background = '#333';
					}
					if(i===7){
					    i=1;
					}
				    	BannerpicItem.style.transition = 'all .3s';
						BannerpicItem.style.transform ='translateX(' + -(i/8)*100+'%)';
						Bannerindicate.childNodes[i-1].style.background = '#F91900';
				},5000)
			}
		},

		banneermoveleftfn(BannerpicItem,Bannerindicate) {
			const BannerpicItemindex = parseFloat(BannerpicItem.style.transform.split("-")[1].split("%")[0])/12.5;
			const arrlength = Bannerindicate.childNodes.length;
			for(let k =0;k<arrlength;k++) {
				Bannerindicate.childNodes[k].style.background = '#333';
			}
		    if (BannerpicItemindex < 6) {
		    	BannerpicItem.style.transform ='translateX(' + -((BannerpicItemindex+1)/8)*100+'%)';
		    	Bannerindicate.childNodes[BannerpicItemindex].style.background = '#F91900';
		    } else {
		    	BannerpicItem.style.transform ='translateX(' + -(1/8)*100+'%)';
		    	Bannerindicate.childNodes[0].style.background = '#F91900';
		    }
		},
		banneermoverightfn(BannerpicItem,Bannerindicate) {
			const BannerpicItemindex = parseFloat(BannerpicItem.style.transform.split("-")[1].split("%")[0])/12.5;
			const arrlength = Bannerindicate.childNodes.length;
			for(let k =0;k<arrlength;k++) {
				Bannerindicate.childNodes[k].style.background = '#333';
			}
		    if (BannerpicItemindex > 1) {
		    	BannerpicItem.style.transform ='translateX(' + -((BannerpicItemindex-1)/8)*100+'%)';
		    	Bannerindicate.childNodes[BannerpicItemindex-2].style.background = '#F91900';
		    } else {
		    	BannerpicItem.style.transform ='translateX(' + -(6/8)*100+'%)';
		    	Bannerindicate.childNodes[5].style.background = '#F91900';
		    }
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (Banner);
 