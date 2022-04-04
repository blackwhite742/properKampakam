import { Injectable } from '@nestjs/common';
import { Message } from '@kampakam/api-interfaces';

@Injectable()
export class AppService {


  getData(): Message {
    return { message: 'bcybyb' };
  }
}
