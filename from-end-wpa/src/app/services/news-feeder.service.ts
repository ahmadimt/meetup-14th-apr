import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { RssFeed } from '../model/rss-feed';

@Injectable()
export class NewsFeederService {

  constructor(private http: HttpClient) { }

  private httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getAllRssFeeds(url: string): Observable<any> {

    const options = { headers: this.httpHeaders };

    return this.http.post(environment.REST_API_LOCATION + '/rss', url, options);
  }

  getUpdateOrCreatNewsFeed(rssFeed: RssFeed) {
    const options = { headers: this.httpHeaders };
    return this.http.put(environment.REST_API_LOCATION + '/newsfeed/', rssFeed, options);
  }
}
