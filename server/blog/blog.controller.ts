import { Controller, Param, Get } from '@nestjs/common';
import { IBlog } from './blog.interface';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(
    private _blogService: BlogService
  ) {}

  @Get('/')
  public async getBlogs() : Promise<IBlog[]> {
    return await this._blogService.getBlogs()
  }

  @Get('/:id')
  public async getBlog(@Param('id') id: number) : Promise<IBlog> {
    return await this._blogService.getBlog(id)
  }
}
