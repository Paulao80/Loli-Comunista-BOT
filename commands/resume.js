module.exports = {
  name: "resume",
  description: "Resumir Música",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!message.member.voice.channel)
      return message.reply("Você precisa ingressar em um canal de voz primeiro!").catch(console.error);

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return serverQueue.textChannel.send(`${message.author} ▶ retomou a música!`).catch(console.error);
    }
    return message.reply("Não há nada tocando.").catch(console.error);
  }
};
