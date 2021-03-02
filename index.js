const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', async (message) => {
	if (message.content.startsWith(`${prefix}shift`)) {
		if(message.member.roles.cache.find(Role => Role.name === "ROLE NAME")) {
			let sessionchannel = await message.guild.channels.cache.get(
				process.env.sessionchannelid
			);
			message.channel.send("Announced shift in <#SHIFT CHANNEL ID HERE>")
			sessionchannel.send("@everyone")
    		let shift = new Discord.MessageEmbed()
				.setTitle("Shift Notification")
				.setColor("GREEN")
				.setDescription("Group Name Here")
				.addField("Game Link", "[Click Here](https://discord.gg/flamingo)", true)
				.addField("Hosted by", `${message.author}`, true)
				.setFooter("Shift Notification")
				.setTimestamp()
				.setThumbnail("https://images-ext-1.discordapp.net/external/FrhBrD9Qmw8J9vvvJ7JAvMrORTTwsu3TzJE6LRE0WB0/https/storage.googleapis.com/replit/images/1614710943226_33553bcc0d5b85d9e4a0d17723888140.png?width=477&height=477")
				sessionchannel.send(shift)
		}
	}
})

client.on('message', async (message) => {
	if (message.content.startsWith(`${prefix}shift`)) {
		if(!message.member.roles.cache.find(Role => Role.name === "ROLE NAME HERE")) {
			message.channel.send("You do not have permission to use this command!")
		}
	}
})

client.on('message', async (message) => {
	if (message.content.startsWith(`${prefix}training`)) {
		if(message.member.roles.cache.find(Role => Role.name === "ROLE NAME")) {
			let sessionchannel = await message.guild.channels.cache.get(
				process.env.sessionchannelid
			);
			message.channel.send("Announced training in <#TRAINING CHANNEL ID>")
			sessionchannel.send("@everyone")
    		let shift = new Discord.MessageEmbed()
				.setTitle("Shift Notification")
				.setColor("GREEN")
				.setDescription("Group Name")
				.addField("Game Link", "[Click Here](https://discord.gg/flamingo)", true)
				.addField("Hosted by", `${message.author}`, true)
				.setFooter("Shift Notification")
				.setTimestamp()
				.setThumbnail("https://images-ext-1.discordapp.net/external/FrhBrD9Qmw8J9vvvJ7JAvMrORTTwsu3TzJE6LRE0WB0/https/storage.googleapis.com/replit/images/1614710943226_33553bcc0d5b85d9e4a0d17723888140.png?width=477&height=477")
				sessionchannel.send(shift)
		}
	}
})

client.login(token)
