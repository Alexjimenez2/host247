
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("help")
      .setDescription("Visualiza la lista de comandos de mi cliente"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "¿De que categoria quieres saber? ¿Aventura o Moderacion?" });
    },
  };
  