import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AudioModule } from './audio/audio.module';
import { PlaylistModule } from './playlist/playlist.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import {Audio} from "./audio/entities/audio.entity";
import {Playlist} from "./playlist/entities/playlist.entity";
import {User} from "./users/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.ejrqvwdnkovuhxzzrjde.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'Renolation29',
      database: 'postgres',
      entities: [Audio, Playlist, User],
      synchronize: true,
    }),
      AudioModule, PlaylistModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
