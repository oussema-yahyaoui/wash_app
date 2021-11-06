import { Injectable } from '@nestjs/common';
import {DeleteResult, Repository, UpdateResult} from "typeorm"
import {InjectRepository} from '@nestjs/typeorm'
import { from,Observable } from 'rxjs';
import { RequestEntity } from './entities/request.entity';
import { Request } from './request.interface';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(RequestEntity)
    private  RequestRepository: Repository<RequestEntity>
){}

  create(request:RequestEntity):Observable<RequestEntity> {
    return from(this.RequestRepository.save(request)) 
  }
  

  findAll():Observable<RequestEntity[]> {
    return from(this.RequestRepository.find())
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
