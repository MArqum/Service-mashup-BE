// src/saved-apis/saved-apis.controller.ts

import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { SavedApisService } from './saved-apis.service';
import { CreateApiDto } from './dto/create-api.dto';

@Controller('saved-apis')
export class SavedApisController {
  constructor(private readonly savedApisService: SavedApisService) {}

  // Endpoint for saving the API
  @Post('save')
  async saveApi(@Body() createApiDto: CreateApiDto) {
    return this.savedApisService.saveApi(createApiDto);
  }

  // Endpoint for deleting a saved API by its id
  @Delete(':id')  // More RESTful
  async deleteSavedApi(@Param('id') id: string) {
    return this.savedApisService.deleteSavedApi(id);
  }

  // Endpoint for getting saved APIs by userId
  @Get(':userId')
  async getSavedApis(@Param('userId') userId: string) {
    return this.savedApisService.getSavedApisByUser(userId);
  }
}
