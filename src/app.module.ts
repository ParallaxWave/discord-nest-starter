import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DiscordModule } from 'discord-nestjs';
import { AppService } from './app.service';
import {BotGateway} from './bot.gateway';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [
		 DiscordModule.forRoot({
      token: process.env.TOKEN,
      commandPrefix: '!',
//      allowGuilds: ['745366351929016363'],
//      denyGuilds: ['520622812742811698'],
//      allowCommands: [
//        {
//          name: 'some',
//          channels: ['745366352386326572'],
//          users: ['261863053329563648'],
//          channelType: ['dm'],
//        },
//      ],
//      webhook: {
//        webhookId: 'your_webhook_id',
//        webhookToken: 'your_webhook_token',
//      },
//      usePipes: [TransformPipe, ValidationPipe],
      // and other discord options
    }),
		 CommandsModule,
	],
  controllers: [AppController],
  providers: [AppService, BotGateway],
})
export class AppModule {}
