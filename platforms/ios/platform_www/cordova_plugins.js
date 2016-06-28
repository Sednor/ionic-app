cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
        "id": "cordova-plugin-googleplus.GooglePlus",
        "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
            "window.plugins.googleplus"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-googleplus": "4.0.8"
}
// BOTTOM OF METADATA
});