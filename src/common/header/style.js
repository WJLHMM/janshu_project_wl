import styled from 'styled-components';
import logoPic from '../../statics/logo1.png';

export const HeaderFixWrpper = styled.div`
	position:fixed;
	width:100%;	
	top:0;
	left:0;
	z-index:1000;
`;

export const HearderWrapper = styled.div `
	position:relative;
	height:56px;
	background:#fff;
	border-bottom:1px solid #AFABAB;
`;
export const Logo = styled.a.attrs({href:'/'}) `
	position:absolute;
	top:0;
	left:0;
	display:block;
	width:100px;
	height:56px;
	background:url(${logoPic});
	background-size:contain;
`;
export const Nav = styled.div `
	width:945px;
	height:100%;
	margin:0 auto;
`;
export const NavItem = styled.div `
	color:#333;
	line-height:56px;
	font-size:17px;
	padding:0 15px;
	cursor:pointer;
	&.left {
		float:left;
		
	}
	&.right {
		float:right;
		color:#969696;
	}
	&.red1 {
		color:#ea6f5a;
	}
`;
export const SearchWrapper = styled.div `
	float:left;
	position:relative;
	.inputincon {
		position:absolute;
		top:14px;
		right:10px;
		width:30px;

		line-height:30px;
		border-radius:15px;
		text-align:center;
		&.focused {
			color:#fff;
			background:#777;
		}
	}
	.arrow-box3 {
		position:absolute;
		z-index:101;
		top:33px;
		left:60px;
		width:0;
		height:0;
		overflow:hidden;
		border:12px solid transparent;
		border-bottom-color:#999;
	} 
    .arrow-box4 {
   		position:absolute;
   		z-index:101;
   	    top:37px;
   	    left:62px;
		width:0;
		height:0;
		overflow:hidden;
		border:10px solid transparent;
		border-bottom-color:#fff;
    }
`;

export const Searchinfo = styled.div `
	position:absolute;
	top:56px;
	left:20px;
	width:250px;
	heigth:400px;
	padding:15px;
	
	background:#fff;
	box-sizing: border-box;
	border:1px solid #999;
    border-radius:4px;
    box-shadow:0 0 2px rgba(0,0,0,.2);
	&.left {
		float:left;
	}
`;

export const Seachinfotitle = styled.div `
	height:20px;
	line-height:20px;
	color:#969696;
	font-size:14px;
	text-align:center;
	cursor: pointer;
	margin-bottom:15px;
	&.left {
		float:left;
	}
	&.right {
		float:right;
		margin-right:20px;
	}
	.searchicon {
		display: block;
		float: left;
		margin-right:5px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SeachinfoitemWrapper = styled.ul `
	float:left;
	width:100%;
	display:table;
	margin-top:10px;
	list-style:none;
	color:#969696;
	font-size:12px;
`;

export const Seachinfoitem = styled.a.attrs({href:'/'})`
	display:block;
	text-decoration:none;
	color:#969696;
	float:left;
	padding:0 3px;
	margin-bottom:10px;
	margin-right:10px;
	height:16px;
	line-height:16px;
	text-align:center;
	border:1px solid #969696;
    border-radius:4px;
    &:hover {
		color:#080707;
		border:1px solid #080707;
	}
`;
	
export const NavSearch = styled.input.attrs({placeholder:'搜索'}) `
	width:160px;
	height:38px;
	font-size: 14px;
	margin-top:9px;
	margin-left:20px;
	box-sizing: border-box;
	line-height:inherit;
	padding: 0 30px 0 20px;
	border: 1px solid #eee;
	outline:none;
    border-radius: 40px;
	background:#eee;
	&::placeholder {
		color:#999;
	}
	&.focused {
		width:240px;
	}
	&.slide-enter{
		transition: all .5s ease-out;
	}
	&.slide-enter-active{
		width:240px;
	}
	&.slide-exit{
		transition: all .5s ease-out;
	}
	&.slide-exit-active{
		width:160px;
	}
`;
export const Addition = styled.div `
	position:absolute;
	top:0;
	right:0;
	height:56px;
`;

export const Buttonl = styled.div `
	float:right;
	margin-top:9px;
	margin-right:10px;
	line-height:38px;
	width:80px;
	color:#ec6149;
	text-align:center;
	border-radius:19px;
	border:1px solid #ec6149;
`;
export const Buttonr = styled.div `
	float:right;
	margin-top:9px;
	margin-right:10px;
	line-height:38px;
	width:100px;
	cursor:pointer;
	text-align:center;
	border-radius:19px;
	border:1px solid #ec6149;
	background:#ec6149;
	color:#fff;
`;

