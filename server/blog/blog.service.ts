import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IBlog } from './blog.interface';

@Injectable()
export class BlogService {
  _url: string = 'https://jsonplaceholder.typicode.com';

  public async getBlogs (): Promise<IBlog[]>{
    const res = await axios.get(`${ this._url }/posts`)
    .catch(err=>{ return err })
    return res && res.data ? res.data : []
  }

  public async getBlog (id: number): Promise<IBlog>{
    const res = await axios.get(`${ this._url }/posts/${ id }`)
    .catch(err=>{ return err })
    return res && res.data ? res.data : []
  }
}
