import { Controller,Get,Post,Body,Param,Put,Delete} from '@nestjs/common';
//import {CreateCatDto } from '../cats/dto/create-cats.dto';
import bodyParser = require('body-parser');
import {CatsService} from './cats.service';
import {DeleteResult} from 'typeorm';
//import {Cat} from './interfaces/cats.interface';
import {Cat} from './cat.entity'; 


@Controller('cats')
export class CatsController {

constructor(private readonly catService:CatsService){}

@Get()
async findall():Promise<Cat[]> {
    return this.catService.findAll();
}

@Get(':id')
async findOne(@Param() param):Promise<Cat> {
    return this.catService.findOne(param.id);
}


@Post()
create(@Body() createcatdto:Cat): Promise<Cat>{
    return this.catService.create(createcatdto);
}

@Delete(':id')
    delete(@Param('id') id):Promise<DeleteResult>{
        return this.catService.delete(id)
    }

@Put(':id')
update(@Body() cat:Cat, @Param('id') id):Promise<Cat>{
    return this.catService.update(id,cat);
}


/*
@Post()
create(@Body() createcatdto:CreateCatDto): Promise<Cat>{
    return this.catService.create(createcatdto);
}

@Delete(':id')
delete(@Param('id') id):Promise<Cat>{
    return this.catService.delete(id) ;
}

 
@Put(':id')
update(@Body() updatedcatto:CreateCatDto, @Param('id') id):Promise<Cat>{
    return this.catService.update(id,updatedcatto);
}

*/
}
