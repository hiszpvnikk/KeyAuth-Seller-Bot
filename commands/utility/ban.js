const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Banuje konto.')
    .addStringOption(option => option.setName('username').setDescription('Nazwa użytkownika').setRequired(true))
    .addStringOption(option => option.setName("reason").setDescription(`Podaj klucz licencji`).setRequired(true)),
  async execute(interaction, client) {
    const username = interaction.options.getString('username');
    const reason = interaction.options.getString("reason");
    const options = { method: 'POST', headers: { accept: 'application/json' } };

    let requiredRoleId = "ID ROLI CO MOZE Z TEGO KORZYSTAC";
    if (!interaction.member.roles.cache.has(requiredRoleId)) {
      return interaction.reply('You do not have the required role to use this command.');
    }
    try {
      await interaction.deferReply();

      const kurwa = await fetch(`https://keyauth.win/api/seller/?sellerkey=TUDAJESZSELLERKEYA&type=banuser&user=${username}&reason=${reason}`, options);
      const resp = await kurwa.json();

      if (interaction.deleted) {
        console.log('Interaction was deleted before editing reply.');
        return;
      }

      await interaction.editReply({ content: (resp.success && "Zbanowano konto" || resp.message), ephemeral: true });
    } catch (error) {
      console.error('Error during fetch or JSON parsing:', error);
      await interaction.followUp({ content: 'An error occurred during account creation.', ephemeral: true });
    }
  },
};
