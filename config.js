const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_04_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTksXG4gICAgICAgIDMzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgMjI5LFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUwLFxuICAgICAgICA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBwbEFWbllyZSsvbmxMOUwrckpOT2kxNU9DZXJFcVBQRnNjdHcxUU83SlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNtYjU2dXNaUU8tY2VDYlNCLWVjSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWZmZmNmYjctMWNiYy00NjhhLWI0MWQtZGY1NWQxM2NhYTY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDEwMyxcbiAgICAgIDEzMCxcbiAgICAgIDEwMCxcbiAgICAgIDE0NixcbiAgICAgIDIzMixcbiAgICAgIDEwLFxuICAgICAgNTcsXG4gICAgICA0NyxcbiAgICAgIDE1NCxcbiAgICAgIDM2LFxuICAgICAgMTk3LFxuICAgICAgNzMsXG4gICAgICAxNDAsXG4gICAgICAxMDksXG4gICAgICAxNDgsXG4gICAgICAxMjcsXG4gICAgICAxNTcsXG4gICAgICA1OSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAyLFxuICAgICAgMTksXG4gICAgICA2LFxuICAgICAgOTksXG4gICAgICAyMjEsXG4gICAgICAyMDYsXG4gICAgICAxNjcsXG4gICAgICAxODIsXG4gICAgICAxMjcsXG4gICAgICAxNTcsXG4gICAgICAxNjUsXG4gICAgICAxNDUsXG4gICAgICAxMDksXG4gICAgICAxODgsXG4gICAgICAxNDAsXG4gICAgICA5NixcbiAgICAgIDEzOSxcbiAgICAgIDIyMixcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlhWVEtWMkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4NTg0NDYzNTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzgwNDk1NjgyNjg0Njc6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZaaHE0RkVLdnowTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6YWpzTi9IdU5Nb0JGUFVSaG9IK2dmZUh6UmRHcjJrVUo0U1JiZEdFU1RNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhOSVpQMGJJclY2bGJPYUNiTExlWkZGSU9TcklGVUxkZ3JGL0xwS2gvNmhpNlg0S2RmbGczM1hLYjlmU0pnZFdQM1A4K2JvL0trTmIrMi9vZmhsWUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm8xaDRsb0pqbWw3OUVJRGQ4QVBvbDJPckJDajM5S1NxcXhtQ0JXeHF3eGx1ZXYzaFNHUzc0MkIyeHRPM0huRU83bGFmNkdNQ3VRSVRBRWNTNmtvOUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI4NTg0NDYzNTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzU3MzAzNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdQYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1BiLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDEwa0tvZ0t3dFRVNXNhQVR2WSs1YlhpYUYzem13YlR6TnVsTTl6TmxrZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDM4NzQ3ODM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzNTQwNTA3MTg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
