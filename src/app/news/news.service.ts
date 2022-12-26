import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticlesResponse } from '../article/article'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient: HttpClient) { }

  getNewsByKeyword(keyword: string) {
    let date = "2022-12-25";

    return this._httpClient.get<ArticlesResponse>(`https://newsapi.org/v2/everything?q=${keyword}&from=${date}&sortBy=popularity`);
  }
}
