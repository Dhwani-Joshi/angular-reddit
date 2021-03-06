import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding(`attr.class`) cssClass = 'row';
  @Input() article: Article;
  // article: Article;
  // votes: number;
  // title: string;
  // link: string;

  constructor() {
    // this.title = 'Angular 2';
    // this.link = 'http://angular.io';
    // this.votes = 10;

    this.article = new Article(
      'Angular 2',
      'http://angular.io',
      10
    );
  }
voteUp(): boolean {
this.article.votes += 1;
return false;
}
voteDown(): boolean {
  this.article.votes -= 1;
  return false;
}
  ngOnInit() {
  }

}
