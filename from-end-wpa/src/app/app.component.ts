import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { NewsFeederService } from './services/news-feeder.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  title = 'RSS feed Reader';
  source: LocalDataSource;
  submitRssFeed:FormGroup;

  constructor(private newsFeederService:NewsFeederService) {
    this.source = new LocalDataSource(this.data); // create the source
  }

  ngOnInit(): void {

    this.submitRssFeed = new FormGroup ({
      rssFeedTextInput: new FormControl()
    });

   
  }

  onSubmit(){
    console.log(this.submitRssFeed.value);
    
    this.fetchAllNewsFeedAndMapToUIModel(this.submitRssFeed.value.rssFeedTextInput)
  }

  fetchAllNewsFeedAndMapToUIModel(url:string){
    this.newsFeederService.getAllRssFeeds(url).subscribe(
      res=>{
        console.log(res);
        
      }
    )
  }

  settings = {
    columns: {
      title: {
        title: 'Title'
      },
      author: {
        title: 'Author'
      },
      link: {
        title: 'Link'
      },
      contents: {
        title: 'Contents'
      }
    }
  };

  data = [
    {
      title: 1,
      author: "Leanne Graham",
      link: "Bret",
      contents: "Sincere@april.biz"
    },
    // ... other rows here
    {
      title: 11,
      author: "Nicholas DuBuque",
      link: "Nicholas.Stanton",
      contents: "Rey.Padberg@rosamond.biz"
    }
  ];
}
