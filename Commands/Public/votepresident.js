const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("votepresident")
      .setDescription("Elige quien sera el proximo presidente del Roleplay")
      .addStringOption((option) =>
        option
          .setName(`votepresident`)
          .setDescription(`Elige quien sera el proximo presidente del Roleplay`)
          .setRequired(true)
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
      const sugerencia = interaction.options.getString(`votacion`);
  
      const { guild } = interaction;
  
      const channel = interaction.guild.channels.cache.find(
        (c) => c.id === `1061084082911588423`
      );
  
      const embed = new EmbedBuilder()
        .setTitle(`Voto de ${interaction.user.username}`)
        .setColor(`f5ff00`)
        .setDescription(`${sugerencia}`)
        .setFooter({
          text: `${guild.name}`,
          iconURL: `${guild.iconURL({ dynamic: true })}`,
        });
  
      const message = await channel.send({
        embeds: [embed],
        fetchReply: true,
      });
  
      message.react(`👍`);
      message.react(`👎`);
  
      interaction.reply({
        content: `Tu voto fue agregado con exito`,
        ephemeral: true,
      });
    },
  };