import React from 'react';
import { logPageView } from '../util/analytics';
export default class Layout extends React.Component {
	componentDidMount() {
		if (!window.GA_INITIALIZED) {
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}
	render() {
		return <div>{this.props.children}</div>;
	}
}
