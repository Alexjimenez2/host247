
const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("test")
      .setDescription("Comprueba si estoy funcionando correctamente"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
      interaction.reply({ content: "Si estoy aqui, ¿O no me ves?" });
    },
  };
  