import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Mainlogin from './component/login';

class Login extends PureComponent {
	render() {

		// const { ListdetaiTitle,} = this.props;
		return (
			<Mainlogin></Mainlogin>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		// ListdetaiTitle:state.getIn(['detail','ListdetaiTitle']),
	}
}

export default connect (mapStateToProps,null)(Login);
