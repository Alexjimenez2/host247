
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("helpaventure")
      .setDescription("Visualiza la lista de comandos de mi cliente en Aventura"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "t!explore, /roleplay, /unroleplay, t!money" });
    },
  };