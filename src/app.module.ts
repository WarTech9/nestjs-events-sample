import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { OtherModule } from './other/other.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/events'),
    EventsModule,
    OtherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
