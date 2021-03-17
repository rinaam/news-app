import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export type SourceT = {
  id: string | null;
  name: string;
};

export type ArticlesT = {
  source: SourceT;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};

export type NewsT = {
  status: string;
  totalResults: number;
  articles: ArticlesT[];
};

export type SourcesT = {
  status: string;
  sources: [
    {
      id: string;
      name: string;
      description: string;
      url: string;
      category: string;
      language: string;
      country: string;
    }
  ];
};

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(
    selectedCategory?: string,
    selectedCountry?: string
  ): Observable<NewsT> {
    const endpoint = new URL(
      `http://newsapi.org/v2/top-headlines?apiKey=${environment.app_key}`
    );

    if (selectedCountry) {
      endpoint.searchParams.append('country', selectedCountry);
    }
    if (selectedCategory) {
      endpoint.searchParams.append('category', selectedCategory);
    }

    return this.http.get<NewsT>(endpoint.href);
  }

  getEverything(query: string, sortBy?: string): Observable<NewsT> {
    const endpoint = new URL(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${environment.app_key}`
    );

    if (sortBy) {
      endpoint.searchParams.append('sortBy', sortBy);
    }

    return this.http.get<NewsT>(endpoint.href);
  }

  getSources(): Observable<SourcesT> {
    return this.http.get<SourcesT>(
      `https://newsapi.org/v2/sources?apiKey=${environment.app_key}`
    );
  }

  getTopHeadlinesBySources(source: string): Observable<NewsT> {
    return this.http.get<NewsT>(
      `http://newsapi.org/v2/top-headlines?apiKey=${environment.app_key}&sources=${source}`
    );
  }
}
