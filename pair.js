const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Gifted_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `
┏━━━━━━━━━━━━━━
┃𝐃𝐫𝐞𝐚𝐝𝐞𝐝 𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐛𝐲 𝐂𝐨𝐧𝐟𝐫𝐨𝐧𝐭𝐞𝐫
┃𝑆𝑢𝑐𝑐𝑒𝑠𝑓𝑢𝑙𝑙𝑦
┃𝐶𝑜𝑛𝑛𝑒𝑐𝑡𝑒𝑑
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || 𝐶𝑟𝑒𝑎𝑡𝑜𝑟 =𝐂𝐨𝐧𝐟𝐫𝐨𝐧𝐭𝐞𝐫
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❤︎︎ wa.me/254796283064

🏓𝐅𝐨𝐫 𝐇𝐞𝐫𝐨𝐤𝐮 𝐚𝐜𝐜
🧨𝐅𝐨𝐫 𝐃𝐞𝐩𝐥𝐨𝐲𝐦𝐞𝐧𝐭
👄𝐅𝐨𝐫 𝐂𝐜 𝐁𝐢𝐧𝐬
🖥𝐍𝐞𝐭𝐟𝐥𝐢𝐱 𝐏𝐫𝐞𝐦𝐢𝐮𝐦

©*𝐂𝐨𝐧𝐟𝐫𝐨𝐧𝐭𝐞𝐫 𝐴 𝑃𝑟𝑜 𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑒𝑟*

_Normal bot & Bug bot Deployment_`
 await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
