import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { Chat } from '../util/chat';
import Footer from '../components/Footer';
import { GA_TRACKING_ID } from '../util/analytics';

const innerAnalyticsHtml = {
	__html: `
		window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
    `
};

const jsonLtd = {
	__html: `
	{
		"@context": "https://schema.org/",
		"@type": "Person",
		"name": "Abdul Rafay Shaikh",
		"url": "http://arafays.com/",
		"image": "https://secure.gravatar.com/avatar/cc0a5eaf4de5e3dcced1ef2879c8f5dc?s=500",
		"sameAs": [
			"https://www.facebook.com/arafays/",
			"https://twitter.com/arafays",
			"https://www.instagram.com/arafays/",
			"https://www.youtube.com/channel/UCbL4KDNQTkfzybgYu9eIQQQ",
			"https://www.linkedin.com/in/arafays",
			"https://github.com/arafays",
			"http://arafays.com/"
		],
		"jobTitle": "Full Stack Developer",
		"worksFor": {
			"@type": "Organization",
			"name": "Freelance"
		}  
	}
	`
};

export default class extends Document {
	componentDidMount() {}
	render() {
		return (
			<html lang="en">
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
					<link rel="manifest" href="/manifest.json"></link>

					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={jsonLtd}
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
					<Footer />
					<script dangerouslySetInnerHTML={Chat} />
				</body>
			</html>
		);
	}
}
