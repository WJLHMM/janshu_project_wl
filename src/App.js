import React, { PureComponent,Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';

import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/details/loadable.js';
import Login from './pages/login';
import Register from './pages/register';
import Write from './pages/write';

class App extends PureComponent {
	render() {
	    return (
	    	<Provider store={store}>
				<BrowserRouter>
					<Fragment>
						<Header/>
						<Route path='/' exact component={Home}></Route>
						<Route path='/detail/:id' exact component={Detail}></Route>
						<Route path='/login' exact component={Login}></Route>
						<Route path='/register' exact component={Register}></Route>
						<Route path='/write' exact component={Write}></Route>
					</Fragment>
				</BrowserRouter>
	    	</Provider>
	    )
	}
}
export default App;
