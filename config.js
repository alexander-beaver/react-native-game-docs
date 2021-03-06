const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://rn.docs.bz",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://photos.smugmug.com/Misc/WHS/n-QWxvWP/RN-Game-Media/i-HnsBvWb/0/49e5df36/S/download-S.png",
		"logoLink": "https://rn.docs.bz",
		"title": "React Native Game Documentation",
		"githubUrl": "https://github.com/alexander-beaver/react-native-game-docs",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "Project Github", "link": "https://github.com/alexander-beaver/react-native-game"}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
			"/gettingstarted",
			"/projectStructure"


			
			
		],
    	"collapsedNav": [
			
    	],
		"links": [
			{ "text": "Personal Website", "link": "https://alexbeaver.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "React Native Docs",
		"description": "Documentation on how to make a game in React Native ",
		"ogImage": null,
		"docsLocation": "https://github.com/alexander-beaver/react-native-game-docs/tree/master/content",
		"favicon": "https://photos.smugmug.com/Misc/WHS/n-QWxvWP/RN-Game-Media/i-HnsBvWb/0/49e5df36/Ti/download-Ti.png"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Gatsby Gitbook Starter",
			"short_name": "GitbookStarter",
			"start_url": "/",
			"background_color": "#4A728C",
			"theme_color": "#4A728C",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
