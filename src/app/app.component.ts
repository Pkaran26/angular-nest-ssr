import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  blogs: any[] = [];

  async ngOnInit() {
    await this.getBlogs()
  }

  async getBlogs (): Promise<void> {
    const res = await axios.get(`/api/blog`)
    .catch(err=>{ return err })
    this.blogs = res && res.data? res.data : []
  }
}
