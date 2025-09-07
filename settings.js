const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? 'KSMD~WowSXZYa#u-8fJhs8mPuDtefPgA-ez3QpP34klFRli8sESoseuAc' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
SUDO: process.env.SUDO === undefined ? '94741259325' : process.env.SUDO,
MODE: process.env.MODE === undefined ?"public" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
