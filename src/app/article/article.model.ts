export class Article {  title: string;  link: string;  votes: number;
     constructor(title: string, link: string, votes?: number) {
    this.title = title;  this.link = link;
    // tslint:disable-next-line: no-unused-expression
    this.votes = votes || 0;
 }

 }
