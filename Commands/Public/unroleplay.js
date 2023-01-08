
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("unroleplay")
      .setDescription("Puedes quitarte del modo roleplay"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "**Modo roleplay desactivado**" });
    },
  };
  
  