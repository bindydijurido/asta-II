exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
    },

    'chromeOptions': {
        prefs: {
            download: {
                'prompt_for_download': false,
                'default_directory': chrome.downloads.DownloadItem.filename,

            }
        }
    },

    specs: ['tests/weatherServiceTest.js'],
    specs: ['tests/reportTopicTest.js'],
    specs: ['tests/loginFormTest.js'],
    specs: ['tests/registerUserTest.js'],
    specs: ['searchBarTest.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};