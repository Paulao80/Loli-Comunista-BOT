module.exports = {
  name: "queue",
  description: "Mostrar fila de Música e Música que esta tocando",
  execute(message) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.reply("Não há nada tocando.").catch(console.error);
    return message
      .reply(
        `📃 **Fila de músicas**

${serverQueue.songs.map((song, index) => index + 1 + ". " + song.title).join("\n")}

Tocando agora: **${serverQueue.songs[0].title}**
		`,
        { split: true }
      )
      .catch(console.error);
  }
};
