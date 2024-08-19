//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://youtu.be/z6jflnUNK3Q?si=qv2A5nOEe8tPU54K";
global.video = "https://youtu.be/mftXEm1QNM0?si=e37ODCbYSQCi7d16";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "pabayaff65@gmail.com";
global.location = "Asia/Colombo";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "94742343170";
global.sudo = process.env.SUDO || "94742343170";
global.owner = process.env.OWNER_NUMBER || "94742343170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RhTVFONjFJek5aaU1DakpQZXNvb21sSmEzRDVtZ3piaUlyV1RPVjdsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXpIellMR1VabkpBaENTdHUyZGI5aGFlTVFuOE5TKzc2WEF4bTZNOEdYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUEhiQ3lReFh3OTljZVk2bzVXdFgrZ2VpNjJEbDl2NDhPTThBdDhTQjJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcktncFJWa2Y0eFI1aytVYjlUMi80ZXFqaUFXUy9aSkNza0tLUVZqQzFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOSG1OQ2cxNWpRc29UVXNvcS93SWQvVEtxVW0zSlUrTTFsVWZlQ2xmbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPZjdXak04Um8rYWZsRS9BZjZiR3hYTnBBT2h4YmtFeTZhOGJwZXFRVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZTc3RsYkF1NDFsWTN0Rzk0QTZQU0l2WVdWWjhBVER6MVVCQ3JQSVBHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDc2bnJ0TjA1QmFKZjJrd3cybUVSRFZEemRScXJxVmpvVG1qRFlNbkxobz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRRbzVJVFlvOEExY3UvK01yYStCcUNNSExqeVNsamxmRTdMVXNxNWM1OEZ3MjJrSEwvaW03emhobldlSnNOcUxxNzJ6c1JMY3VOR0tiZ2pKUEdXVkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJVUEdVR1BtcjNydklQN3ZnS1ZXU2svMW9oOXJwckMrdUNDQWJKYzNYZkQ4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaaW5rbU1TeVJMV3Vvd056RnBhbTZ3IiwicGhvbmVJZCI6ImJhOWVmNTBjLTQ1ODUtNDVkMy1iMjViLTk0Y2M1MDM5N2JlOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6SXBwd21EeTB0cE1Uc3JWSWUxZGROQ09mQ2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFZocDNMNXByeW5zVTV6T2F3TW45Z3ZZWnNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpES1FMN1RIIiwibWUiOnsiaWQiOiI5NDc0MjM0MzE3MDo0MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFNnM2NzRUVJcllqYllHR0NZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia29NZ0puN2piU1FpRDh6R2lqWlVja0o3OGxQTXZnRDNKWmE4YzNQaS8xQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZzdNdlFIWDVOL29CdHc0dUhPbDFHdG9SUkZyTlpRdmF6eXJlOXE1RnZiN2cyZWNaOGN1RCtPY0dZMkZVRTNaZUJINUtiZVdISWJib1hYRjVuQUN3QlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik02S0NHU2VpSHFpQmZ1bVVkelBpTXNhNjBuVjZUOHk3bkxsZllYN1RPRWFudjlLVkdQQzQvMzZRc1BFRG1TcWxVcnRybWg2bFNvc2JpVFQ1eXQvQ0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDIzNDMxNzA6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWktESUNaKzQyMGtJZy9NeG9vMlZISkNlL0pUekw0QTl5V1d2SE56NHY5USJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA4MzIyNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHRWEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "FACKER EDITZ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
