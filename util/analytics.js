export const GA_TRACKING_ID = 'UA-46218532-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
	console.log('Page View: ', url);
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url
	});
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
	console.log('Event: ', {
		event_category: category,
		event_label: label,
		value: value
	});
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value
	});
};
