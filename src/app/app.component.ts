import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Article, ArticlesResponse } from './article/article';
import { NewsService } from './news/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public newsKeywordControl = new FormControl("");
  public articles: Array<Article> = [];

  constructor(private _newsService: NewsService) {}

  ngOnInit() {

    this.newsKeywordControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe({
        next: (value: any) => {
          this._newsService.getNewsByKeyword(value).subscribe({
            next: (value: ArticlesResponse) => {
              this.articles = value.articles;
            },
            error: (error: any) => {
              console.log("E: ", error);
            }
          });
        },
        error: (error: any) => {
          console.log("Error: ", error);
        }
      });
  }
}
