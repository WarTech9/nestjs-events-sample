import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { ClickedLinkEvent } from "./clicked-link-event.schema";
import { SignUpEvent } from "./signup-event.schema";

@Schema({ discriminatorKey: 'kind' })
export class Event {
  @Prop({
    type: String,
    required: true,
    enum: [ClickedLinkEvent.name, SignUpEvent.name],
  })
  kind: string;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
