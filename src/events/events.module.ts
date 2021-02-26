import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClickedLinkEvent,
  ClickedLinkEventSchema,
} from 'src/events/clicked-link-event.schema';
import { EventSchema, Event } from 'src/events/event.schema';
import { SignUpEvent, SignUpEventSchema } from 'src/events/signup-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
        discriminators: [
          { name: ClickedLinkEvent.name, schema: ClickedLinkEventSchema },
          { name: SignUpEvent.name, schema: SignUpEventSchema },
        ],
      },
    ]),
  ],
})
export class EventsModule {}
