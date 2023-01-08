
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    Embed,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("helpmod")
      .setDescription("Visualiza la lista de comandos de mi cliente en Moderacion"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "/ping, /test, /sugerencia" });
    },
  };