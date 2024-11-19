const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PENhACwB#4fg6Udb14mHYruTuRgN91AgD9oiHQJl_oVh2iQ6mhJU",     // මෙතනට ඔයාගෙ සෙශන් අයි ඩී එක දාන්න
MONGODB: process.env.MONGODB || "mongodb+srv://lithumhelitha2008:7rDwXUVeTnIfmnjl@cluster0.1d0bq.mongodb.net/",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/myW7D5f/2df27fbd1a812920.jpg",
AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
AUTO_BIO:"true"
};
