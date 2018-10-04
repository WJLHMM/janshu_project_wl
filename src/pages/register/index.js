import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Registermain from './component/register';

class Register extends PureComponent {
	render() {

		// const { ListdetaiTitle,} = this.props;
		return (
			<Registermain></Registermain>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// ListdetaiTitle:state.getIn(['detail','ListdetaiTitle']),
	}
}

export default connect (mapStateToProps,null)(Register);
