import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Controller('api')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get('sites')
  findAll() {
    return this.sitesService.findAll();
  }

  @Get('sites/:id')
  findOne(@Param('id') id: string) {
    return this.sitesService.findOne(id);
  }

  @Post('sites/url/')
  async findByUrl(@Body() createSiteDto: CreateSiteDto) {
    let request = await this.sitesService.findByUrl(createSiteDto);
    if (request.length === 0) {
      return this.sitesService.create(createSiteDto);
    } else {
      let obj = {
        _id: request[0]._id,
        domain: request[0].domain,
        footprint: request[0].footprint
      };
      return obj;
    }
  }

  @Post('sites/new')
  async create(@Body() createSiteDto: CreateSiteDto) {
    let request = await this.sitesService.findByUrl(createSiteDto);
    if (request.length === 0) {
      request = this.sitesService.create(createSiteDto);
      return request
    } else {
      request = { status: 'Le site web éxiste déjà dans notre base de données.' }
      return request
    }
  }

  @Put('sites/update/:id')
  update(@Param('id') id: string, @Body() updateSiteDto: UpdateSiteDto) {
    return this.sitesService.update(id, updateSiteDto);
  }

  @Delete('sites/delete/:id')
  remove(@Param('id') id: string) {
    return this.sitesService.remove(id);
  }
}
