import { Component, Input } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input()
  public article: Article = {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {
      id: null,
      name: "",
    },
    title: "",
    url: "",
    urlToImage: "",
  };

}
