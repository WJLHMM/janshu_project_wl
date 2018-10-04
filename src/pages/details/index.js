import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';


import Listdetail from './component/Listdetail';
// import Listdetail3 from './component/Listdetail3';

class Detail extends PureComponent {
	render() {
		return (
 			<Listdetail></Listdetail>
 			// <Listdetail3></Listdetail3>
		)
	}
}

export default withRouter(Detail);

