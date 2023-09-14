import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioModule } from './audio/audio.module';
import { PlaylistModule } from './playlist/playlist.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AudioModule, PlaylistModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
