require('dotenv').config();

const badwords = require('./badwords.json')

const BadLanguageFilter = require('bad-language-filter');
const filter = new BadLanguageFilter();

const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
    
    if (badwords.badwords.some(substring=>msg.content.includes(substring))) {
        msg.delete()
    }
    
});
 
client.login(process.env.BOT_TOKEN);