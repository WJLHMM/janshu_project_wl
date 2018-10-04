import styled from 'styled-components';

export const HomeWrapper = styled.div`
	width:960px;
	height:300px;
	margin:56px auto 0 auto;
	padding-top:30px;
	padding-left:15px;
	background:#fff;
`;

export const HomeLeft = styled.div`
	float:left;
	width:640px;
`;
export const BannerWrapper = styled.div`
	float:left;
	position:relative;
	width:625px;
	height:270px;
	overflow:hidden;
	margin-bottom:20px;
`;
export const BannerpicItem = styled.div`
	display:block;
	position:absolute;
	width:800%;
	height:100%;
	border-radius:5px;
	transform: translateX(-12.5%);
	.bannerpic {
		display:block;
		float:left;
		width:12.5%;
		height:100%;
		border-radius:5px;
	}
`;
export const Bannercontrol = styled.div`
	display:block;
	position:absolute;
	width:40px;
	height:50px;
    background: rgba(0,0,0,.4);
	z-index:101;
	&.bcleft {
		top:110px;
		left:0;
		border-top-right-radius:6px;
		border-bottom-right-radius:6px;
	}
	&.bcright {
		top:110px;
		right:0;
		border-top-left-radius:6px;
		border-bottom-left-radius:6px;
	}
	.bclicon{
		display:block;
		color: #fff;
		font-weight:800;
		margin-top:16px;
		margin-bottom:16px;
		margin-left:10px;
	}
	.bcricon{
		display:block;
		color: #fff;
		font-weight:800;
		margin-top:16px;
		margin-bottom:16px;
		margin-left:14px;
	}
`;

export const Bannerindicate = styled.ol`
	position:absolute;
	width:500px;
	height:20px;
	top:240px;
	left:65px;
	padding-left:150px;
	padding-right:150px;
	padding-top:9px;
	box-sizing:border-box;

`;
export const Bannerindicateitem = styled.li`
	float:left;
	width:25px;
	height:2px;
	margin-right:4px;
	border-radius:1px;
	background:#333;
	&.active {
		background:#fff;
	}
`;


export const TopicWrapper = styled.div`
	float:left;
	width:625px;
	height:104px;
	margin-top:18px;
	margin-bottom:20px;
	border-radius:5px;
	border-bottom: 1px solid #f0f0f0;
	
`;

export const TopicItem = styled.a`
	display:inline-block;;
	height:32px;
	overflow:hidden;
	float:left;
	margin-right:18px;
	margin-bottom:18px;
	padding-top:1px;
	cursor: pointer;
	padding-bottom:1px;
	box-sizing: border-box;
	border:1px solid #dcdcdc;
	border-radius:5px;
	background:#f7f7f7;
	.topicitempic {
		display:block;
		float:left;
		width:32px;
		height:34px;
	}
`;
export const TopicItemMore = styled.div`
	float:left;
	height:32px;
	color:#787878;
	font-size:14px;
	line-height:32px;
	text-align:center;
	cursor: pointer;
	.moretopic {
		font-size:11px;
	}
`;
export const TopicItemtext = styled.div`
	float:left;
	height:32px;
	color:#2f2f2f;;
	font-size:14px;
	cursor: pointer;
	line-height:32px;
	padding-left:6px;
	padding-right:11px;
	box-sizing: border-box;
`;

export const ListWrapper = styled.ul`
	display:block;
	float:left;
	width:625px;
	list-style:none;
`;

export const ListItem = styled.li`
	width:625px;
	min-height:140px;
	box-sizing: border-box;
	padding-right:2px;
	padding-bottom:20px;
	margin-bottom:15px;
	border-bottom: 1px solid #f0f0f0;
`;
export const ListItemimg = styled.div`
	float:right;
	width:125px;
	box-sizing: border-box;
	.listitemimg {
		display:block;
		width:125px;
	    height:100px;
	    cursor:pointer;
	    border-radius:4px;
	}
`;
export const ListItemcontent = styled.div`
	float:left;
	width:490px;
	height:107px;
	box-sizing: border-box;
`;
export const ListItemcontenttitle = styled.div`
	font-size:17px;
	color: #2f2f2f;
	font-weight: 700;
	width:425px;
	margin-bottom:4px;
	cursor:pointer;
	line-height: 1.5;
	box-sizing: border-box;
`;
export const ListItemcontenttext = styled.div`
	width:100%;
	font-size:13px;
	color: #999;
	line-height: 24px;
	box-sizing: border-box;
`;
export const ListItemmeta = styled.div`
	width:483px;
	height:20px;
	box-sizing: border-box;
`;
export const ListItemmetanikename = styled.div`
	float:left;
	color: #787878;
	font-size: 12px;
    font-weight: 400;
    line-height: 20px;
	margin-right: 10px;
	box-sizing: border-box;
`;
export const ListItemmetacomment = styled.div`
	float:left;
	color: #b4b4b4;
	font-size: 12px;
    font-weight: 400;
    line-height: 20px;
	margin-right: 10px;
	box-sizing: border-box;
`;
export const ListItemmetaloves = styled.div`
	float:left;
	color: #b4b4b4;
	font-size: 12px;
    font-weight: 400;
    line-height: 20px;
	margin-right: 10px;
	box-sizing: border-box;
`;

export const Readmore = styled.div`
	float:left;
	width:625px;
	height:40px;
	color:#fff;
	text-align:center;
	line-height:40px;
	cursor:pointer;
	margin-top:30px;
	margin-bottom:60px;
	padding:0px 15px;
	border-radius: 20px;
    background: #a5a5a5;
	box-sizing: border-box;
`;

export const HomeRight = styled.div`
	float:right;
	width:280px;
`;

export const RecommendBoard = styled.div`
	width:280px;
	margin-bottom:12px;
	box-sizing: border-box;
`;
export const RecommendItem = styled.a`
	display:block;
	width:100%;
	height:50px;
	cursor:pointer;
	margin-bottom:5px;
	box-sizing: border-box;
	.boardpic {
		display:block;
		height:100%;
		width:100%;
		border-radius:4px;
	}
`;
export const BarcodeWrapper = styled.div`
	position:relative;
	width:280px;
	height:82px;
	color:#000;
	cursor:pointer;
	margin-top:5px;
	margin-bottom: 20px;
    padding: 10px 22px;
	border:1px solid #f0f0f0;
	border-radius: 6px;
	box-sizing: border-box;
	.qrcode {
		display:block;
		float:left;
		width:60px;
		height:60px;
		margin-right:8px;
	}
`;
export const Barcodeguide1 = styled.div`
	width:143px;
	height:22px;
	line-height:22px;
	float:left;
	color:#000;
	margin-top:10px;
	font-size:15px;
	cursor:pointer;
	box-sizing: border-box;
`;
export const Barcodeguide2 = styled.div`
	width:143px;
	height:18px;
	line-height:14px;
	float:left;
	color:#999;
	margin-top:5px;
	font-size:13px;
	cursor:pointer;
	box-sizing: border-box;
`;
export const Barcodefadeinpic = styled.div`
	position:absolute;
	z-index:10;
	top:-196px;
	left:49px;
	width:184px;
	height:184px;
	padding:4px;
	background:#fff;
	color:#999;
	border:1px solid #999;
	border-radius:4px;
	box-sizing: border-box;
	@keyframes  fadeIn{		
		0% {
			opacity: 0;
			border:1px solid red;		
	    }		
	100% {
			opacity: 1;
		    border:1px solid red;
		    box-shadow:0px 5px red;		
		}
	}
    animation:  fadeIn 2s ease 0.5s 1 both;
	.qrcode1 {
		display:block;
		padding:4px 9px 9px 4px;
		width:180px;
		height:180px;
		box-sizing: border-box;
	}
	.arrow-box1 {
		position:relative;
		z-index:101;
		top:-2px;
		left:84px;
		width:0;
		height:0;
		overflow:hidden;
		border:13px solid transparent;
		border-top-color:#999;
		@keyframes  fadeIn1{		
			0% {
				opacity: 0;
		    }		
			100% {
				opacity: 1;	
			    border-top-color:red;			
			}
		}
		animation:  fadeIn1 2s ease 0.5s 1 both;
	}
    .arrow-box2 {
   		position:relative;
   		z-index:101;
   	    top:-28px;
   	    left:85px;
		width:0;
		height:0;
		overflow:hidden;
		border:12px solid transparent;
		border-top-color:#fff;
		@keyframes  fadeIn2{		
			0% {
				opacity: 0;
		    }		
			100% {
				opacity: 1;
			}
		}
		animation:  fadeIn2 2s ease 0.5s 1 both;
	}
`;

export const Barcodefooter = styled.div`
		float:left;
		width:280px;
	    height:20px;
	    font-size: 14px;
    	color: #969696;
	    .barcodeswift {
	    	float:right;
	    	cursor:pointer;
	    	.searchicon1 {
				display: block;
				float: left;
				transition: all .2s ease-in;
				transform-origin: center center;
			}
	    }
`;


export const RecommendauthorsBoard = styled.div`
	float:left;
	width:280px;
	color:#000;
	margin-top:10px
	box-sizing: border-box;
	
`;
export const RecommendauthorsItem = styled.div`
	position:relative;
	width:280px;
	height:50px;
	margin-top:10px;
	box-sizing: border-box;
	&.fadeIn4 {
		@keyframes  fadeIn4{		
			0% {
				opacity: 0;
		    }		
			100% {
				opacity: 1;
			}
	   }
	   animation:  fadeIn4 3s ease 0.5s 1 both;
	}
	.authorpic{
		display:block;
		width:48px;
	    height:48px;
	    float:left;
	    border: 1px solid #ddd;
	    border-radius:24px;
		cursor:pointer;
	}
	.authornickname {
		float:left;
		color:#333;
		padding-top: 5px;
		padding-left:12px;
		margin-right: 60px;
  		font-size: 14px;
		cursor:pointer;
	}
	.authoradd {
		display:block;
		float:right;
		font-size: 13px;
        color: #42c02e;
        margin-top:5px;
        cursor:pointer;
	}
	p {
		float:left;
		padding-left:12px;
	    margin-top:10px;
	    font-size: 12px;
	    color: #969696;
	}
	
`;
	
export const Checkmore = styled.div`
	float:left;
	width:280px;
	height:36px;
	margin-top:16px;
	line-height:36px;
	text-align:center;
	font-size: 13px;
    color: #787878;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
	border-radius:2px;
	cursor:pointer;
	.checkall {
		font-size: 11px;
	}
`;
export const BackTop = styled.div`
	position:fixed;
    bottom: 40px;
    right: 40px;
    font-size:12px;
    z-index: 1040;
	width:52px;
	height:52px;
	color:#000;
	background:#f7f7f7;
	text-align:center;
	line-height:52px;
	cursor:pointer;
	border:1px solid #B6B5B5;
	border-radius: 2px;
	box-sizing: border-box;
	&.hide {
		display:none;
	}
	transition: all .5s ease-in;
`;

