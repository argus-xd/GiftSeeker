const ENV = require("./environment");

const appName = "GiftSeeker";
const installableStorage = ENV.homedir + "/" + appName;
const portableStorage = ENV.execPath + "data";

const storagePath = ENV.isPortable ? portableStorage : installableStorage;

module.exports = {
  appName: appName,
  websiteUrl: "https://giftseeker.ru/",
  storagePath: storagePath,
  oldStoragePath: portableStorage,
  defaultLanguage: "ru_RU",
  appIcon: __dirname + "/../resources/images/icon.ico",
  window: {
    defaultWidth: 750,
    minWidth: 650,
    maxWidth: 1200,
    defaultHeight: 500,
    minHeight: 400,
    maxHeight: 900
  },
  defaultUseragent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/83.0.4103.88 Mobile/15E148 Safari/604.1"
};
