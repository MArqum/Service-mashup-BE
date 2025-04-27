import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module'; // We'll create this soon
import { SavedApisModule } from './saved-apis/saved-apis.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/authdb'),
    AuthModule,
    SavedApisModule,
  ],
})
export class AppModule {}
