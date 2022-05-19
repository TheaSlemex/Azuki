const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const config = require("./config");
const request = require('request');
const puppeteer = require("puppeteer");
const fs = require('fs')
var image = 0;

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on("ready", () => {
    console.log(`${client.user.tag} now online!`)
});

client.on("message", async message => {
    const prefix = (config.prefix);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.bot) {
        return;
    } else if (!message.content.startsWith(prefix)) {
        return;
    } else if (message.channel.type === "dm") {
        return message.channel.send("You Can't Use Commands In Dm!\nPlease Join This Server To Using Commands\n https://discord.gg/3vZWHtQdjH");
    } else if (message.content === `<@${client.user.id}>`){
        return message.channel.send(`${message.author} My Prefix is ${prefix}`);
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.");
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.");
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.");
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.");
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.")
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.");
    } else if (message.channel.id === "") {
        return message.channel.send("I Don't Have Access Here.")
    }


    //server data reader
     if (command === "sdatareader") {
        let ip = args[0];

        let sdata = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription('!sdatareader <ip>')
        .setTimestamp()
        .setFooter(`Requested By ${message.author.tag}`);

        if (!ip)
            return message.channel.send(sdata)
        try {
            request.post(`http://${ip}/growtopia/server_data.php`, function (err, response, body) {

                let sdata2 = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Result Form ${ip}`)
                .setDescription(`${body}`)
                .setTimestamp()
                .setFooter(`Requested By ${message.author.tag}`);

                message.channel.send(sdata2)
            })
        } catch (err) {
            return message.channel.send(err)
        }
        //hostmaker
    } else if (command == "hostmaker") {
        const ips = args[0];
        const fakeip = args[1];

        let ip = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription('!hostmaker <ip>')
        .setTimestamp()
        .setFooter(`Requested By ${message.author.tag}`);

        if (!ips) {
            return message.reply(ip)
        } else if (!fakeip) {
            return message.reply(`Please input how much fake ip you want to generate\nFor example: ${prefix}${command} 127.0.0.1 100`)
        } else if (fakeip < 1) {
            return message.reply("What would you use this instead make your own hosts?");
        } else if (isNaN(+fakeip) == true) {
            return message.reply("you can't use string to generate fake ip");
        } else if (fakeip > 100000) {
            return message.reply(`Something went wrong, Cannot generate fake ips more than 100000 variable.`);
        }
        try {
            var total = "#" + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 254) + " growtopia1.com\n";
            for (var a = 1; a < args[1]; a++) {
                total += "#" + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 254) + " growtopia1.com\n";
            }
            total += args[0] + "growtopia1.com\n" + args[0] + "growtopia2.com\n";
            for (var a = 1; a < args[1]; a++) {
                total += "#" + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 255) + "." + randomNum(0, 254) + " growtopia2.com\n";
            }
            fs.writeFileSync("./host/hosts.txt", total);
            return message.channel.send("Here you go", {
                files: ["./host/hosts.txt"]
            });
        } catch (err) {
            console.log(err);
            return message.channel.send("Something went wrong.");
        }

        //help
    } else if (command === "ahelp") {
        if (message.channel.id === "972346843667263528");

        const help = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Prefix : ${prefix}`)
            .setDescription(`${prefix}ahelp <See All Commands Azuki Bots>\n${prefix}hostmaker <Create Host With Random ip>\n${prefix}sdatamaker <Create server_data.php>\n${prefix}gtonline <See Player Online>\n${prefix}sdatareader <Server Data Reader>\n${prefix}itemsdat <Get Latest Items.dat>\n${prefix}coredata <Get Latest Coredata.txt>\n${prefix}osmfinder <Get Latest OnSuperMain>\n${prefix}sswebsite <Sent a Screenshot Website>\n${prefix}support`)
            .setTimestamp()
            .setFooter(`Requested By ${message.author.tag}`);

       message.channel.send(help);
       //support server
     } else if (command === "sdatamaker") {
        let ip = args[0];
        let port = args[1];
        let maint = args[2];
        
        let server = new MessageEmbed()
        .setColor('#0099ff')
        .setDescription('!sdatamaker <ip> <port>')
        .setTimestamp()
        .setFooter(`Requested By ${message.author.tag}`);

        if (!ip) {
            return message.reply(server)
        }
        // undefine shit
            if(!port) port = 17091
            if(!maint) maint = 
           
            fs.writeFileSync("server_data.php", `server|${ip}\nport|${port}\n#maint|${maint}\n\nbeta_server|${ip}\nbeta_port|${port}\n\nbeta_type|1\nmeta|localhost\nRTENDMAKERBS1001`)
        
            message.channel.send(`Here you go`, {
              files: ["server_data.php"]
            })
        } else if (command === "support") {

         const support = new MessageEmbed()
             .setColor('#0099ff')
             .setDescription(`Click on "Click Me" To Join My Server`)
             .setURL('https://discord.gg/3vZWHtQdjH')
             .setTitle('Click Me')
             .setTimestamp()
             .setFooter(`Requested By ${message.author.tag}`);

         message.channel.send(support);
     } else if (command === "itemsdat") {
        message.channel.send(`Here you go`, {
            files: ["./database/items.dat"]
          })
     } else if (command === "coredata") {
        message.channel.send(`Here you go`, {
            files: ["./database/Coredata.txt"]
          })
     } else if (command === "osmfinder") {

        let osm = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('OnSuperMain Latest')
        .setDescription('CDN URL = ubistatic-a.akamaihd.net\nCDN Path = 0098/63368/cache/\nAnother CDN Content = cc.cz.madkite.freedom org.aqua.gg idv.aqua.bulldog com.cih.gamecih2 com.cih.gamecih com.cih.game_cih cn.maocai.gamekiller com.gmd.speedtime org.dax.attack com.x0.strai.frep com.x0.strai.free org.cheatengine.cegui org.sbtools.gamehack com.skgames.traffikrider org.sbtoods.gamehaca com.skype.ralder org.cheatengine.cegui.xx.multi1458919170111 com.prohiro.macro me.autotouch.autotouch com.cygery.repetitouch.free com.cygery.repetitouch.pro com.proziro.zacro com.slash.gamebuster\nProto CDN = proto=160|choosemusic=audio/mp3/about_theme.mp3|active_holiday=18|wing_week_day=0|ubi_week_day=0|server_tick=22890597|clash_active=1|drop_lavacheck_faster=1|isPayingUser=0|usingStoreNavigation=1|enableInventoryTab=1|bigBackpack=1|')
        .setTimestamp()
        .setFooter(`Requested By ${message.author.tag}`);

        message.channel.send(osm)

     } else if (command === "gtonline") {
        try{
            request.get(`https://growtopiagame.com/detail`, function(err, response, data) {
                if (err) {
                    return message.channel.send(`Something went wrong?`)
                }
                const online = JSON.parse(data);
                if (response.statusCode == 200) {
					var onlineplayers = parseInt(online['online_user']);

                    let on = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Growtopia Online')
                    .setDescription(`There are ${onlineplayers.toLocaleString()} players online right now!`)
                    .setTimestamp()
                    .setFooter(`Requested By ${message.author.tag}`);

                    message.channel.send(on)
                } else if (response.statusCode == 502) {
                    return message.channel.send("Cannot access growtopia website, Maybe down?");
                }
            })
        } catch (err) {
			console.log(err)
        }
        //screenshot website
    } else if (command === "sswebsite") {
        let websitename = args[0];

        if (!websitename) {
            return message.channel.send(`Please input the website url\nfor example: ${prefix}sswebsite http://google.com/`)
        } else {
             message.channel.send(`Please wait it will takes 5 seconds.\nNote: abusing this command/directing bot to adult sites will result in permanently muted.`)

            request.get(`${websitename}`, function(err, response, data) {
                if (err) {
                    return message.reply(`**error can't find website's ip**.`)
                } else {
                    image++;
                    isSSWeb = true;
                    const capture = async () => {
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        await page.goto(websitename);
                        await page.screenshot({
                            path: `./images/${image}.png`,
                            fullpage: true
                        });
                        await browser.close();
                    };
                    capture()
                    setTimeout(() => {
                        message.reply(`Here you are the screenshot.`, {
                            files: [`./images/${image}.png`]
                        }).catch(err => message.reply(`Something went wrong.`));
                    }, 5000);
                }

            });
        }
    }

});



client.login(config.token);