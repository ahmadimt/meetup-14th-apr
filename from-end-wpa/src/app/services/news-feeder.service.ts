import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
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
    return this.http.post(environment.REST_API_LOCATION + '/newsfeed/', rssFeed, options);
  }

  getRssFeeds():Observable<any>{
    let options = { headers: this.httpHeaders}
    return this.http.get(environment.REST_API_LOCATION+'/all-rss-feeds');
  }

  deletebyTitle(title: string) {
   
    let params = new HttpParams().set('title', title)
    let options = { headers: this.httpHeaders, params: params };
    return this.http.delete(environment.REST_API_LOCATION + '/newsfeed/', options);
  }
}
