
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Te responder√© Pong"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "Pong" });
    },
  };
  
  
  