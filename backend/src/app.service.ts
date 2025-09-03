import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Instagram Tracker API is running! 🚀';
  }
}
