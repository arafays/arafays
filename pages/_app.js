import App from 'next/app';
import React from 'react';
import Router from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Fonts from '../components/Fonts';
import { DefaultSeo } from 'next-seo';
import './app.scss';

import SEO from '../next-seo.config';
import * as gtag from '../util/analytics';

Router.events.on('routeChangeComplete', url => gtag.pageView(url));
export default class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	componentDidMount() {
		Fonts();
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<DefaultSeo {...SEO} />
				<Header />
				<Component {...pageProps} />
				<Footer></Footer>
			</>
		);
	}
}
