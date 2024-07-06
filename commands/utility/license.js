const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('license')
    .setDescription('Tworzy licencje.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addIntegerOption(option => option.setName('dlugosc').setDescription('Długość trwania licencji').setRequired(true)),
    async execute(interaction,client) {
      const dlugosc = interaction.options.getInteger('dlugosc');
      let requiredRoleId = "ID ROLI CO MOZE Z TEGO KORZYSTAC";
      if (!interaction.member.roles.cache.has(requiredRoleId)) {
        return interaction.reply('You do not have the required role to use this command.');
      }
      const options = {method: 'POST', headers: {accept: 'application/json'}};
      fetch('https://keyauth.win/api/seller/?sellerkey=TUDAJESZSELLERKEYA&type=add&format=JSON&expiry='+dlugosc+'&mask=trauma-****************&level=1&amount=1&owner='+interaction.user.username+'&character=1&note=Brak Niepotrzebnego gowna', options)
        .then(response => response.json())
        .then(response => interaction.reply(`Wygenerowano licencję: ||**${response.key}**||`))
        .catch(err => console.error(err));
    },
    
};
