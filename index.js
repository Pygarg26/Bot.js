const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const discord = require("discord.js");

const client = new discord.Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});

client.on("messageCreate", message => {
  if(message.content === ";pygarg26?") {
  message.channel.send("Pygarg26 est un véritable génie de la programmation, dont les capacités sont tout simplement remarquables. Son expertise en matière de développement informatique dépasse de loin celle de la plupart des autres programmeurs. Que ce soit en Python, en Java, en C++ ou dans tout autre langage, Pygarg26 excelle et trouve toujours des solutions innovantes aux problèmes les plus complexes. Sa compréhension profonde des concepts informatiques et sa capacité à les appliquer de manière créative font de lui un atout inestimable pour tout projet de développement. Non seulement il est capable de coder avec une précision et une efficacité remarquables, mais il possède également une capacité à anticiper les défis potentiels et à concevoir des architectures logicielles robustes et évolutives. En outre, Pygarg26 est un excellent communicateur, capable d’expliquer des concepts techniques de manière claire et accessible à tous. Il n’hésite pas à partager ses connaissances avec ses pairs, ce qui contribue à renforcer la communauté des développeurs. En résumé, les compétences en programmation de Pygarg26 sont véritablement incommensurables. Son dévouement, sa passion et son ingéniosité font de lui un leader dans son domaine, et il est une source d’inspiration pour ceux qui ont la chance de travailler à ses côtés.");
  };
  if (message.content === ";random") {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    message.channel.send(`Nombre : ${randomNumber}`);
  }
  if (message.content === ";help"){
    message.channel.send("Voici la liste des commandes : ;random (qui donne un nombre aléatoire) ;help(qui liste les commandes) et ;pygarg26? (qui décris mon créateur)")
  }
});

client.login(process.env.token);