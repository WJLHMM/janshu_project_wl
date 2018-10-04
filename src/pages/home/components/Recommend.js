import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


import { 
	RecommendBoard,
	RecommendItem,

} from  '../style';

class Recommend extends PureComponent {
	render () {
		const { recommondList } = this.props;
		return (
			<RecommendBoard>
			{
				recommondList.map((item,index)=>{
					return (
						<RecommendItem  key={index}><img className="boardpic" src={item.get('imgUrl')} alt="Banner s 7"/></RecommendItem>
					)

				})
			}
				
			</RecommendBoard>
		)
	}
}

const mapStateToProps =(state)=> {
	return {
		recommondList:state.getIn(['home','recommondList']),


	}
}

export default connect(mapStateToProps,null) (Recommend);
