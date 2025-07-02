// src/saved-apis/saved-apis.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SavedApi } from './schemas/saved-api.schema';
import { CreateApiDto } from './dto/create-api.dto';

@Injectable()
export class SavedApisService {
  constructor(
    @InjectModel(SavedApi.name) private savedApiModel: Model<SavedApi>,
  ) {}

  // Delete a saved API by its ID
  async deleteSavedApi(id: string): Promise<{ deleted: boolean }> {
    const result = await this.savedApiModel.deleteOne({ _id: id }).exec();
    return { deleted: result.deletedCount === 1 };
  }

  // Save the selected API to the database
  async saveApi(createApiDto: CreateApiDto): Promise<SavedApi> {
    const createdApi = new this.savedApiModel(createApiDto);
    return createdApi.save();
  }

  // Get saved APIs by userId
  async getSavedApisByUser(userId: string): Promise<SavedApi[]> {
    return this.savedApiModel.find({ userId }).exec();
  }
}
