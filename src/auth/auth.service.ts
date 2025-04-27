import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async signup(name: string, email: string, password: string): Promise<User> {
    const user = new this.userModel({ name, email, password });
    return user.save();
  }


  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
  
  async getUserById(id: string) {
    const user = await this.userModel.findById(id).select('name email');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
  
}
