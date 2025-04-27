// src/saved-apis/schemas/saved-api.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SavedApi extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  apiUrl: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  score: number;
}

export const SavedApiSchema = SchemaFactory.createForClass(SavedApi);
