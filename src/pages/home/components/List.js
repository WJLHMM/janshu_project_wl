import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { 
	ListWrapper,
	ListItem,
	ListItemimg,
	ListItemcontent,
	ListItemcontenttitle,
	ListItemcontenttext,
	ListItemmeta,
	ListItemmetanikename,
	ListItemmetacomment,
	ListItemmetaloves,

} from  '../style';

class List extends PureComponent {

	render () {
		const { contentlist } =this.props;

		
		return (
			<ListWrapper 
				// innerRef={ListWrapper => this.ListWrapper = ListWrapper}
			>
			{
				contentlist.map((item,index)=>{
					return (
						<Link key={index} to ={"./detail/" + item.get('id')}>
							<ListItem>  
								<ListItemimg  style= {{'display':item.get('type')===0?' ':'none'}}> 
									<img className="listitemimg"  src={item.get('imgUrl')} alt="120"/>
								</ListItemimg>
								<ListItemcontent 
									 style= {{'width':item.get('type')===0?' ':'600px'}}
								>
									<ListItemcontenttitle>{item.get('title')}</ListItemcontenttitle>
									<ListItemcontenttext>
								    {item.get('abstract')}
								    </ListItemcontenttext>
								</ListItemcontent>
								<ListItemmeta>
									<ListItemmetanikename>{item.get('nickname')}</ListItemmetanikename>
									<ListItemmetacomment>
										<i className="iconfont">&#xe6c7;</i>{item.get('comment')}
									</ListItemmetacomment>
									<ListItemmetaloves><i className="iconfont">&#xe61e;</i>{item.get('love')}</ListItemmetaloves>
								</ListItemmeta>
							</ListItem>
						</Link>
					);
				})
				
			}
			</ListWrapper>
		)
	}

	componentDidMount () {
	
	}

}


const mapStateToProps =(state)=> {
	return {
		contentlist:state.getIn(['home','contentlist']),
	}
}



export default connect(mapStateToProps,null) (List);
 