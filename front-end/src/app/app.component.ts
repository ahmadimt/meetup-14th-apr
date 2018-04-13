import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { NewsFeederService } from './services/news-feeder.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RssFeed } from './model/rss-feed';
import { Router } from '@angular/router';
import { BroadCastdataServiceService } from './services/broad-castdata-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'RSS feed Reader';
  submitRssFeed: FormGroup;

  actualData: any[];

  constructor(private newsFeederService: NewsFeederService,
    private broadCastdataServiceService: BroadCastdataServiceService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.submitRssFeed = new FormGroup({
      rssFeedTextInput: new FormControl()
    });


  }

  onSubmit() {
    console.log(this.submitRssFeed.value);

    this.fetchAllNewsFeedAndMapToUIModel(this.submitRssFeed.value.rssFeedTextInput);
  }

  fetchAllNewsFeedAndMapToUIModel(url: string) {
    this.newsFeederService.getAllRssFeeds(url).subscribe(
      res => {
        this.actualData = res;
        console.log(res);

      }, (error) => {

      }, () => {
        this.broadCastdataServiceService.source = new LocalDataSource(this.actualData);
        this.router.navigate(['/rss-feed-view']);
      }
    );
  }

}
