import React ,{ Component } from 'react';
import Home from './Home';
import NavBar from './shared/NavBar';

class Point extends Component
{
	render() {
		return (
			<div className="app-wrap">
				<NavBar />
				<Home />
				<div className="app-footer">My Footer</div>
			</div>
		);
	}
}

export default Point;
