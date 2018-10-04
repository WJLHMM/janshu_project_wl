import styled from 'styled-components';
// import ListdetailNoteimg from './component/000000001.png';

export const LoginWrapper = styled.div`
	position:absolute;
	width:100%;
    min-height: 750px;
    z-index:1050;
    background-color: #f1f1f1; 
`;

export const Logintab = styled.div`
	margin:0 auto;
	width:400px;
	display:flex;
	flex-direction:column;
    min-height: 500px;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-sizing:border-box;
    box-shadow: 0 0 8px rgba(0,0,0,.1); 
`;

export const Logintabtitle = styled.div`
	margin:0 auto;
	display:flex;
	width:100%;
    color: #969696;
    font-size:18px;
    margin-bottom:50px;
	justify-content:center;
	a {
		text-decoration:none;
	}
	b {
		display:block;
		margin:0 20px;
		height:42px;
		line-height:42px;

	}
	p {
		width:56px;
		height:42px;
		line-height:42px;
		text-align:center;
		cursor:pointer;
		&.active {
			border-bottom:2px solid #ea6f5a;
			color:#ea6f5a;
			font-weight:bold;
		}
		&:hover {
			border-bottom:2px solid #ea6f5a;
		}
	}
`;
export const Logintabinputarea = styled.div`
	width:100%;
	display:flex;
	position:relative;
	flex-direction:column;
	border-radius:5px;
	margin-bottom:15px;
	border-bottom: 1px solid #c8c8c8;
	i {
		display:block;
		left:8px;
		position:absolute;
		font-size:22px;
		color: #969696;
	}
	.logicon1 {
		top:14px;
		
	}
	.logicon2 {
		top:64px;
	}
	.logicon3 {
		top:114px;
		font-size:18px;
	}
`;

export const Input = styled.input`
	width:100%;
	height:50px;
	padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    box-sizing:border-box;
	border-bottom: none;
    background-color: hsla(0,0%,71%,.1);
`;


export const Logincheck = styled.div`
	 width：100%;
	 color: #969696;
	 font-size:12px;
	 padding:0 28px;
	 line-height:20px;
	 text-align:center;
	 margin-bottom:20px;
	 b {
	 	color:#498ad5;
	 	cursor:pointer;
	 }
`;

export const Loginsubmit = styled.div`
	width:100%;
	height:40px;
	font-size:20px;
	color:#fff;
	line-height:40px;
	text-align:center;
	cursor:pointer;
    box-sizing:border-box;
    border-radius:20px;
    margin-bottom:50px;
    background: #3db922;
`;

export const Moreloginway = styled.div`
	width:100%;
	height:16px;
	font-size:12px;
	color:#969696;
	line-height:16px;
	text-align:center;
	margin-bottom:10px;
    box-sizing:border-box;
	h6 {
		display: block;     
		position: relative;  
	}
	h6:before, h6:after {
		content: '';               
		position: absolute;       
		top: 52%;
		background: #969696;      
		width: 20%;
		height: 1px;
	}
	h6:before{
		left: 10%;        
	}
	h6:after {
		right: 10%;
	}
`;

export const Moreloginwayitem = styled.ul`
	width:100%;
	height:50px;
	color:#969696;
	line-height:50px;
	font-size:14px;
	display:flex;
	justify-content:center;
	list-style:none;
	padding:0 15px;
	cursor:pointer;
	li {
		margin-right:30px;
		cursor:pointer;
	}
	.weichat {
		color:#00bb29;
		font-size:28px;
	}
	.qq {
		color:#498ad5;
		font-size:28px;
	}
`;



