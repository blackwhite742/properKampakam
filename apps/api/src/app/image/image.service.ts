import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from '../entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>
  ){}

  async getAll(){
    return await this.imageRepository.find();
  }

  async getById(id: number){
    return await this.imageRepository.findOne({id});
  }

  async getEntryImages(entryId:number){
    return await this.imageRepository.find({where: {entryId}})
  }


  // Edit
  async editSrc(){

  }


  // Save
  async saveImage(data:Image){
    return await this.imageRepository.save(data);
  }


  // Delete
  async deleteImage(id:number){
    return await this.imageRepository.delete(id);
  }

  async deleteEntryImages(entryId:number){
    return await this.imageRepository.delete({entryId})
  }

}
