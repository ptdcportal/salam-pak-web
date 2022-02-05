import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blog: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blog = this.route.snapshot.data.blog;
  }
}
