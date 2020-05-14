![logo](https://i.imgur.com/VGt1tOh.jpg)﻿

 # Loli Comunista BOT (Discord Music Bot)
 > Loli-Comunista-BOT é um Bot de Música do Discord criado com o discord.js.
 
## Requisitos

1. Discord Bot Token **[Guia](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guia](https://developers.google.com/youtube/v3/getting-started)**
3. Node.js v12.0.0 ou superior

## Instalação

```
git clone https://github.com/Paulao80/Loli-Comunista-BOT.git
cd Loli-Comunista-BOT
npm install
```

## Configuração

Editar o arquivo `config.json` e preencher os valores:

```json
{
	"TOKEN": "",
	"YOUTUBE_API_KEY": "",
	"MAX_PLAYLIST_SIZE": 50,
	"PREFIX": "!"
}
```

## Comandos

>OBS: O prefixo padrão é '!'

* 🎶 Tocar Música usando url do Youtube 
  * `!play https://www.youtube.com/watch?v=B4HZMcWciRY`
* 🔎 Tocar Música do Youtube usando busca
  * `!play Black Veil Brides Rebel Yell`
* 📃 Tocar Playlist do Youtube usando url
  * `!playlist https://www.youtube.com/watch?v=YgqydMN5VQw&list=PL3DC2971409B70C32`
* 🔎 Tocar Playlist do Youtube usando busca
  * `!playlist linkin park meteora`
  
Para mais informações consulte o projeto original no creditos.
  
## Creditos

[@Eritislami](https://github.com/eritislami) Esse bot foi feito baseado no projeto: [@eritislami/evobot](https://github.com/eritislami/evobot)
