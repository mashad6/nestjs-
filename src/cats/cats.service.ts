import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {CreateCatDto} from './dto/create-cats.dto';
//import {Cat} from './interfaces/cats.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cat } from './cat.entity';
import {DeleteResult} from 'typeorm';

@Injectable()
export class CatsService {
   constructor(  @InjectRepository(Cat)
   private readonly catRepository: Repository<Cat>,
 ) {}

async findAll(): Promise<Cat[]> {
   return await this.catRepository.find();
 } 
 

  findOne(id:number):Promise<Cat>{
   return this.catRepository.findOne({id})
}

async  create(contact: Cat): Promise<Cat> {
   return await this.catRepository.save(contact);
}


async update (id: number, cat: Cat):Promise<Cat> {
      let newCat=await this.catRepository.findOne(id)
      newCat.name=cat.name;
      return await this.catRepository.save(newCat) 
}

async delete (id:number): Promise<DeleteResult>{
   return await this.catRepository.delete(id)
}      
   

/* async create(cat:Cat):Promise<Cat>{
         const newCat= new this.catModel(cat);
         return await newCat.save();
  }
   async findall():Promise<Cat[]>{
        return await this.catModel.find();
   } 
   async findOne(id:string):Promise<Cat>{
       return await this.catModel.findOne({_id:id})
   }

   async delete(id:string):Promise<Cat>{
      return await this.catModel.findByIdAndRemove(id);
   }

   async update(id:string,cat:Cat):Promise<Cat>{
      return await this.catModel.findByIdAndUpdate(id,cat,{new: true});
   }
   

*/

}
