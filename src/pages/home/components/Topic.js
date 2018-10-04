import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { 
	TopicWrapper, 
	TopicItem,
	TopicItemtext,
	TopicItemMore,

} from '../style';


class Topic extends PureComponent {
	render () {
		const { topicList} = this.props;
		return (
			<TopicWrapper>
			{
				topicList.map((item)=>{
					return (
						<TopicItem key={ item.get('id') }>
							<img className="topicitempic" src={item.get('imgUrl')} alt="64"/>
							<TopicItemtext>{item.get('title')}</TopicItemtext>
				    	</TopicItem>

					)
				
				})
			}	
				<TopicItemMore>更多热门专题 <i className="iconfont moretopic" >&#xe624;</i></TopicItemMore>
			</TopicWrapper>
		)
	}
}

const mapStateToProps =(state)=> {
	return {
		topicList:state.getIn(['home','topicList']),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps) (Topic);