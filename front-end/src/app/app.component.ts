import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { NewsFeederService } from './services/news-feeder.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RssFeed } from './model/rss-feed';
import { Router, ActivatedRoute } from '@angular/router';
import { BroadCastdataServiceService } from './services/broad-castdata-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'RSS feed Reader';

  constructor(private router:Router) {

  }

  ngOnInit(): void {

    if(!((location.href.indexOf('rss-feed-view')) >-1 ))    
      this.router.navigate(['/rss-feed-submit'])

  }



}
