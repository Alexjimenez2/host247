const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
     intents: 3276799,
    partials: [User, Message, GuildMember, ThreadMember]
    });

const { loadEvents } = require("../bot/Handlers/eventHandler");

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login(client.config.token)
   
const prefix = `t!`;

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];
  if (command === `explore`) {   
    message.channel.send("te has ido a explorar,no ves nada ni nadie, ¿que haces?,  t!advance para seguir, t!noadvance para irte");
  }

  if (command === `advance`) {   
    message.channel.send("Has seguido, y has encontrado algo, ¿lo observas o no? t!observe para mirar, t!noobserve para irte");
  }
  
    if (command === `observe`) {   
      message.channel.send("OOPS, habia una viuda negra, creo que te moriste");
    }

    if (command === `noadvance`) {   
      message.channel.send("Te fuiste por otro camino, sigue hacia la derecha t!right, izquierda t!left, sigue hacia la derecha t!right, izquierda t!left");
    }

    if (command === `noobserve`) {   
      message.channel.send("Te fuiste por otro camino, por prevenir, ¿donde quieres ir?: t!beach, t!monte, t!prado");
    }

    if (command === `right`) {   
      message.channel.send("Avanzaste a la derecha, pero no hay mas camino por aqui.. de momento");
    }
    if (command === `left`) {   
      message.channel.send("Avanzaste a la izquierda, pero no hay mas camino por aqui.. de momento");
    }

    if (command === `beach`) {   
      message.channel.send("Avanzaste a la playa, puff, ¿y ese viento?, t!tapar para taparse del viento en una cueva, t!gosea para irse al agua ");
    }

    if (command === `monte`) {   
      message.channel.send("Avanzaste al monte, escuchas un sonido, parece un oso, t!hide para esconderse en una cueva, t!huir para huir");
    }

    if (command === `prado`) {   
      message.channel.send("Avanzaste al prado, ¡ohh!, toros, t!go para acercarse a ellos, t!beach para irte de allí");
    }

    if (command === `tapar`) {   
      message.channel.send("te fuiste a la cueva y te tapaste con exito, espera, ¿ES ESO UNA SERPIENTE ANACONDA? t!run para escapar");
    }

    if (command === `gosea`) {   
      message.channel.send("El agua estaba demasiado fria, te congelaste y me temo que.. D.E.P");
    }

    if (command === `run`) {   
      message.channel.send("no pares, sigue corriendo, esa anaconda te persigue, oh, no corriste lo suficiente.. rezaré por ti al cielo cada noche.");
    }

    if (command === `hide`) {   
      message.channel.send("te escondiste, AHI ESTA EL OSO, DENTRO, o no.. D.E.P");
    }

    if (command === `huir`) {   
      message.channel.send("huiste, bien hecho, no se podia saber que podria haber en esa cueva, t!avanzar para seguir con tu camino");
    }

    if (command === `go`) {   
      message.channel.send("te acercaste, no parecen ser agresivos, ¿los tocas?, t!prado para regresar, t!acariciar para darles cariño");
    }

    if (command === `avanzar`) {   
      message.channel.send("Avanzaste por el río, pero no hay camino por aqui.. de momento..");
    }

    if (command === `acariciar`) {   
      message.channel.send("Oh, eran muy monos, ¡hasta te montaste en ellos!, t!avanzar para seguir con tu camino");
    }

    if (command === `money`) {   
      message.channel.send("Tienes **0** Adcoins");
    }
})