import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  API_URL = 'https://api.themoviedb.org/3/search/multi';
  API_KEY = '3c4d12662639e6926f8be2f2f73b50a4';

  constructor(private httpClient: HttpClient) { }

  get(searchTerm: string): Promise<any> {
    const params: HttpParams  = new HttpParams()
    .set('api_key', this.API_KEY)
    .set('query', searchTerm);

    return this.httpClient.get<any>(this.API_URL, {params}).toPromise();
  }
}
