import { Events, Message } from "discord.js";
module.exports = {
    name: Events.MessageCreate,
    async execute(message: Message) {
        //console.log(message.content);
    },
};
