import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewsFeederService } from '../../services/news-feeder.service';
import { BroadCastdataServiceService } from '../../services/broad-castdata-service.service';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-rss-feed-submit',
  templateUrl: './rss-feed-submit.component.html',
  styleUrls: ['./rss-feed-submit.component.css']
})
export class RssFeedSubmitComponent implements OnInit {

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
