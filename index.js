const _0x39b694=_0x5165;(function(_0x26c4ab,_0x50175d){const _0x8b2991=_0x5165,_0x3d01d0=_0x26c4ab();while(!![]){try{const _0x3d9b98=-parseInt(_0x8b2991(0xbd))/0x1*(-parseInt(_0x8b2991(0xcc))/0x2)+-parseInt(_0x8b2991(0xc2))/0x3*(-parseInt(_0x8b2991(0xc8))/0x4)+-parseInt(_0x8b2991(0xc9))/0x5*(parseInt(_0x8b2991(0xdd))/0x6)+parseInt(_0x8b2991(0xd1))/0x7*(parseInt(_0x8b2991(0xc6))/0x8)+-parseInt(_0x8b2991(0xd5))/0x9+-parseInt(_0x8b2991(0xda))/0xa*(-parseInt(_0x8b2991(0xc4))/0xb)+parseInt(_0x8b2991(0xde))/0xc;if(_0x3d9b98===_0x50175d)break;else _0x3d01d0['push'](_0x3d01d0['shift']());}catch(_0x145a5e){_0x3d01d0['push'](_0x3d01d0['shift']());}}}(_0x2e8c,0x9c5dc));const fs=require(_0x39b694(0xcb)),path=require(_0x39b694(0xd2)),{Client,Collection,Events,GatewayIntentBits,ActivityType}=require(_0x39b694(0xd4)),{token}=require('./config.json'),client=new Client({'intents':[GatewayIntentBits[_0x39b694(0xc5)]]});client[_0x39b694(0xd0)]=new Collection();const foldersPath=path['join'](__dirname,'commands'),commandFolders=fs[_0x39b694(0xd6)](foldersPath);for(const folder of commandFolders){const commandsPath=path[_0x39b694(0xca)](foldersPath,folder),commandFiles=fs[_0x39b694(0xd6)](commandsPath)['filter'](_0x17a18a=>_0x17a18a[_0x39b694(0xce)](_0x39b694(0xc1)));for(const file of commandFiles){const filePath=path[_0x39b694(0xca)](commandsPath,file),command=require(filePath);_0x39b694(0xc7)in command&&_0x39b694(0xcd)in command?client[_0x39b694(0xd0)][_0x39b694(0xdb)](command[_0x39b694(0xc7)]['name'],command):console[_0x39b694(0xd3)](_0x39b694(0xd9)+filePath+_0x39b694(0xdc));}}const comandsync=require('./deploy-commands');function _0x2e8c(){const _0x32804a=['node:path','log','discord.js','10952154HyzaBA','readdirSync','replied','InteractionCreate','[WARNING]\x20The\x20command\x20at\x20','1503880HceMlz','set','\x20is\x20missing\x20a\x20required\x20\x22data\x22\x20or\x20\x22execute\x22\x20property.','5633898ZOlwaw','2836452xsYgdj','There\x20was\x20an\x20error\x20while\x20executing\x20this\x20command!','commandName','45lEChin','error','get','followUp','.js','81vePMpO','deferred','22LQjvFx','Guilds','240808xOdZdE','data','52704HSivsQ','5hNFQFW','join','node:fs','43126hPuXji','execute','endsWith','reply','commands','217rnTcGw'];_0x2e8c=function(){return _0x32804a;};return _0x2e8c();}function _0x5165(_0x3a8957,_0x2519e4){const _0x2e8c31=_0x2e8c();return _0x5165=function(_0x51653d,_0x236129){_0x51653d=_0x51653d-0xbd;let _0x4a7ae6=_0x2e8c31[_0x51653d];return _0x4a7ae6;},_0x5165(_0x3a8957,_0x2519e4);}client['on'](Events[_0x39b694(0xd8)],async _0x51e927=>{const _0x209f82=_0x39b694;if(!_0x51e927['isChatInputCommand']())return;const _0x19ad27=client[_0x209f82(0xd0)][_0x209f82(0xbf)](_0x51e927[_0x209f82(0xe0)]);if(!_0x19ad27)return;try{await _0x19ad27[_0x209f82(0xcd)](_0x51e927,client);}catch(_0xbac443){console[_0x209f82(0xbe)](_0xbac443),_0x51e927[_0x209f82(0xd7)]||_0x51e927[_0x209f82(0xc3)]?await _0x51e927[_0x209f82(0xc0)]({'content':_0x209f82(0xdf),'ephemeral':!![]}):await _0x51e927[_0x209f82(0xcf)]({'content':_0x209f82(0xdf),'ephemeral':!![]});}}),client['login'](token);