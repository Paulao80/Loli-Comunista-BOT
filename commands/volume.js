module.exports = {
  name: "volume",
  description: "Alterar o volume entre 1 a 100 %",
  execute(message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Você precisa ingressar em um canal de voz primeiro!").catch(console.error);
    if (!serverQueue) return message.reply("Não há nada tocando.").catch(console.error);

    if (!args[0])
      return message.reply(`🔊 O volume atual é: **${serverQueue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Por favor, use um número para definir o volume.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Por favor, use um número entre 0 - 100.").catch(console.error);

    serverQueue.volume = args[0];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return serverQueue.textChannel.send(`Volume definido como: **${args[0]}%**`).catch(console.error);
  }
};
