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

    specs: ['tests/Test_6.js'],
    specs: ['tests/Test_7.js'],
    specs: ['tests/Test_8.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};