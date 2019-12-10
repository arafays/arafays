import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Footer, { Chat } from '../components/Footer';

import { GA_TRACKING_ID } from '../util/analytics';

const innerAnalyticsHtml = {
	__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}');
    `
};

export default class extends Document {
	componentDidMount() {}
	render() {
		return (
			<html>
				<Head>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script dangerouslySetInnerHTML={innerAnalyticsHtml} />
					<style>
						{` #__next {
							min-height: 100vh;
							padding-top: 124px;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
						} `}
					</style>
				</Head>
				<body>
					<Main />
					<NextScript />
					<Footer />
					{/* <script dangerouslySetInnerHTML={Chat} /> */}
				</body>
			</html>
		);
	}
}
