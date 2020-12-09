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
    
    if (badwords.badwords.some(substring=>msg.content.includes(substring.toLowerCase()))) {
        msg.delete()
    }

});


client.on('voiceStateUpdate', (oldState, newState) =>{
    let oldChannel = oldState.channel;
    let newChannel = newState.channel;
    console.log(oldChannel === undefined && newChannel !== undefined)
    if(oldChannel === undefined && newChannel !== undefined){
      let channel = client.channels.cache.get(newChannel.id)
      channel.send('Test')
    }

});
  


 
client.login(process.env.BOT_TOKEN);