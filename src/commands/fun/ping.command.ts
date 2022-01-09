import { Injectable, Logger } from '@nestjs/common';
import { ClientProvider, Client, OnCommand } from 'discord-nestjs';
import { Message } from 'discord.js';

@Injectable()
export class PingCommand {
  private readonly logger = new Logger(PingCommand.name);

  @Client()
  discordProvider: ClientProvider;

	@OnCommand({ name: 'ping' })
  async onCommand(message: Message): Promise<void> {
    await message.reply("Pong!");
  }
}
