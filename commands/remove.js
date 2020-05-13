const { PREFIX } = require("../config.json");
module.exports = {
  name: "remove",
  description: "Remover Música da fila",
  async execute(message, args) {
    if (!args.length) return message.reply("Use: "+PREFIX+"remove <Número da fila>");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("Não há fila.").catch(console.error);

    const song = serverQueue.songs.splice(args[0] - 1, 1);
    serverQueue.textChannel.send(`${message.author} ❌ removido **${song[0].title}** da fila.`);
  }
};
