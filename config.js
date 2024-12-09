const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWY+qSBj9L/WqfWUT0KSTAUQU1JZFlJ7cTAoooGSVRYSO//2GXtL9MPdOz1ullvOdOud83wvIclwhDXVg/gKKEl9hjYZl3RUIzIHYBAEqwRj4sIZgDkJRYDm/MhgqSNr0FN8I1F7yJSMr9GyEmh1XsSvY7ORDfHgE9zEoGjfB3h8ACbUXF9iJj3zL6Uh0mw1cR675vJCIi7BepcX+qVVuhiIfqkdwHxAhLnEWykWEUlTCREPdHuLye/S3O+N6Y9SspM9OoR73mmpSzDZ/dma3a0RyyY29hvyuyHRl/T36bnPF3oXHRU70fitvl1boskfRSGGQ6sKSsfPyQj3zFyi3b/QrHGbIX/soq3HdfVt3YT292fqBCstlEfvERD0e97EhXwwri2dMaEoT0wri7pQo8feI02Li2KGvGkbPBTnXIURB+rI+MrNwYtw86shO49UeEoIQfiW+Lz+yEv8f3QXtaiverYojutV6d2JzSKvpaSsKC2vm+BNtsme7SiWro/c9+pbVdF48DX1CyXVWxZCn1WipbCzRTpMDdCQ5souU73Zh9Ukf1k35x3S4th8LPU7Wjeq15yw+IW/hTCdSaZP+4dS4tW7rssmOuBUMdSWIjwUXRLNr61sX7UmBZ5XQJslB54XtaNuuHCmf2FL4+PqjGHVrH8zJ+xiUKMRVXcIa59mwx0/HAPpXE3klql/VBeZ2YwTGTD5FJl3KFLc/9evmaOy6ZbtrhTQgljGiOoY4y8IjGIOizD1UVchf4arOy26LqgqGqALzv3+OQYZu9ZtvQzWaHIMAl1V9yJoiyaH/YerHIfS8vMlqs8s8aVigEsyJz21U1zgLq0HGJoOlF+ErkiJYV2AewKRC9zHw0RV7aMADHm74tZc7Fv+gI+afYKa6pSYMlKM8e7tC0hzPzgj0gFzIPjDTwH2ABOc+0KTrTWcu7yKXB2OA31tmePNbB1FU6SPKXySNluaOzodnQuxTPaqX1asLb9KjEvlgXpcNGgMXenFTWHmMsj/gGmISOnmAtke1afnbZfqkKXFT8s+U8wX3zVIwf/kcU1LuD3gss7VZ+3QEY5C+JhAPP6emDEcSDElxBDUn2b+qH+0gJCyKHxmqB9x30YcXPqohTiowB9J6cWzWoSw/XQ5kmSuKoIeCFA6qfpj0Efa3NPUOtWGtxnG5U1WHsS5sZv1uYTYRt9/FjRToxnODE65fCvnjv4CAOfD1/sxHI8ScF648yeVDMsp6zzR69axRbEjaKsS2v08TksWayNhywDDbp+jqOXlh0eaarvvlxKVETmRHLkOd6ZVWicLjUO0tLF+LXXm3WFpkosSzaNQmxcV8Ii6yElw221u7v4SzFm6lTWdOgs4It1Oz0/Z5taQ41U9FteT95YmnrqfmgP16arHSin5qt8J7G76OgeR9/OLXDnl5j1aA0es0y+Bg0X+Z8zXlxH38BeN9Pv4mSaJH7fAo5lJlRHIbR5UFaeL1OlHmqO+fN2FGyEc3LxB/0zVwv/8cgyKBdZCXKZgDmPlljn0wBgmsauGzUS2coqqGaQHmJEfT7HRGTdn7L79/go/dBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'No',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'No',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'No',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

