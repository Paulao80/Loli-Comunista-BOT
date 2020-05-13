const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Exibir todos os comandos e descrições",
  execute(message) {
    let commands = message.client.commands.array();
    
    // let helpEmbed = new MessageEmbed()
    // .setTitle("Help")
    // .setDescription("Lista de todos os comandos")
    // .setColor("#F8AA2A");

    // commands.forEach(cmd => {
    //   helpEmbed.addField(
    //     `${message.client.prefix}${cmd.name}`,
    //     `${cmd.description}`
    //   );
    // });

    // helpEmbed.setTimestamp();

    // return message.channel.send(helpEmbed);

    var msg = '**Comandos**\n\n';

    commands.forEach(cmd => {
      msg += '**'+message.client.prefix+cmd.name+'** \n'
      +cmd.description+'\n';
    });

    return message.channel.send(msg);
  }
};
