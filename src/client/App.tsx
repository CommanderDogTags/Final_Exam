import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import All from './pages/All';
import One from './pages/One';
import Compose from './pages/Compose';
import Edit from './pages/Edit';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC<IAppProps> = props => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/all' component={All} />
				<Route exact path='/one/:id' component={One} />
				<Route exact path='/edit/:id' component={Edit} />
				<Route exact path='/compose' component={Compose} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/register' component={Register} />
			</Switch>
		</Router>
	)
}

export interface IAppProps {}

export interface IAppState {}

export default App;