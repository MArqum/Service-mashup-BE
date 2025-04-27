// src/saved-apis/saved-apis.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SavedApisService } from './saved-apis.service';
import { SavedApisController } from './saved-apis.controller';
import { SavedApi, SavedApiSchema } from './schemas/saved-api.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SavedApi.name, schema: SavedApiSchema },
    ]),
  ],
  providers: [SavedApisService],
  controllers: [SavedApisController],
})
export class SavedApisModule {}
