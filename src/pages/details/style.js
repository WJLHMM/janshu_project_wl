import styled from 'styled-components';
import ListdetailNoteimg from './component/000000001.png';


export const ListdetailWapper = styled.div`
    display:flex;
	margin:56px auto;
	padding:30px 0px 40px 0px;
	width:620px;
	flex-wrap:wrap;
	justify-content:start;
`;

export const ListdetailNote = styled.div`
    position: fixed;
    top: 80px;
    right: 30px;
	width:180px;
	height:260px;
	border-radius:6px;
	background:url(${ListdetailNoteimg});
	background-size:contain;
	span {
		display:block;
		float:right;
		margin-top:10px;
		margin-right:10px;
		color:#999;
		opacity:0.5;
		font-size:26px;
		font-weight:200;
		cursor:pointer;
		&:hover {
			color:#333;
		}
	}
`;


export const ListdetaiTitle = styled.h1`
	margin-top:20px;
	width:100%;
	font-size: 34px;
    font-weight: 700;
    box-sizing:border-box;
`;

export const Listdetailinfo = styled.div`
	display:flex;
	box-sizing:border-box;
	margin:30px 0 40px 0;
	flex-wrap:wrap;
	width:100%;
	justify-content:start;
	.detailinfopic {
		display:block;
		width:48px;
		height:48px;
		cursor: pointer;
		border-radius:24px;
	}
`;


export const Listdetailright = styled.div`
	width:90%;
	display:flex;
	flex-wrap:wrap;
	padding-top:4px;
	padding-left:10px;
	justify-content:start;
`;

export const ListdetailAuthorinfo = styled.div`
	display:flex;
	width:100%;
	color: #333;
	cursor: pointer;
	font-size:16px;
	margin-bottom:5px;
	.detailauthoradd {
		display:block;
		margin-left:6px;
		width:52px;
		height:18px;
	    color: #fff;
	    cursor: pointer;
	    line-height:18px;
	    text-align:center;
	    font-size:12px;
		background:#42c02e;
		border-radius:10px; 
	}

	
`;

export const Listdetailmeta = styled.div`
	width:100%;
	font-size: 12px;
    color: #969696;
    span {
    	padding-right: 5px;
    }
`;

export const Listdetailcontext = styled.div`
	width:100%;
	margin-bottom:25px;
	box-sizing: border-box;
	p {
		margin-bottom:25px;
		line-height:1.5;
	}

	blockquote {
		padding: 20px;
	    margin-bottom: 25px;
	    background-color: #f7f7f7;
		border-left: 6px solid #b4b4b4;
		box-sizing: border-box;
		b {
			font-size: 16px;
		    font-weight: bold;
		    line-height: 1.5;
		    box-sizing: border-box;
		}
	}
	.picinfo {
		width:100%;
		display:table;
		img {
			display:block;
			width:600px;
			height:577px;
		}
	}

	.picnote {
		margin:20px auto;
		width:140px;
		height:40px;
	    font-size: 14px;
	    color: #969696;
	    line-height: 1.7;
		text-align:center;
		border-bottom:1px solid #d9d9d9;
	}

	.picinfo1 {
		width:100%;
		display:table;
		img {
			display:block;
			margin:0 auto;
		}
	}	
	.picinfo2 {
		width:100%;
		display:table;
		img {
			display:block;
			margin:0 auto;
			width:620px;
		}
	}
	.picinfo3 {
		width:100%;
		display:table;
		img {
			display:block;
			margin:0 auto;
		}
	}
	.picinfo4 {
		width:100%;
		display:table;
		img {
			display:block;
			margin:0 auto;
		}
	}
	.picinfo5 {
		width:100%;
		display:table;
		img {
			display:block;
			margin:0 auto;
		}
	}	
	.support {
		width:100%;
		display:flex;
		content-align:center;
		flex-wrap:wrap;
		p {
			width:100%;
			text-align:center;
			margin:0 auto;
		}
		button {
			margin:10px auto;
			width:116px;
			height:40px;
			color:#fff;
			font-size:16px;
			border:1px solid #ec6149;
			border-radius:20px;
			background:#ec6149;
			cursor:pointer;
		}
		
	}
 
`;