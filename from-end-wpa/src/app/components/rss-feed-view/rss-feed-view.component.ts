import { Component, OnInit } from '@angular/core';
import { NewsFeederService } from '../../services/news-feeder.service';
import { LocalDataSource } from 'ng2-smart-table';
import { BroadCastdataServiceService } from '../../service/broad-castdata-service.service';
import { RssFeed } from '../../model/rss-feed';

@Component({
  selector: 'app-rss-feed-view',
  templateUrl: './rss-feed-view.component.html',
  styleUrls: ['./rss-feed-view.component.css']
})
export class RssFeedViewComponent implements OnInit {

  
 

  constructor(private newsFeederService:NewsFeederService,private broadCastdataServiceService:BroadCastdataServiceService) { }

  ngOnInit() { }

  
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
      console.log("create data",event);
      let rssfeed=new RssFeed(event.newData)
      this.newsFeederService.getUpdateOrCreatNewsFeed(rssfeed).subscribe(res=>{
        console.log("saved entity",res);
        
      })
    } else {
      event.confirm.reject();
    }
  }

  rowSelected(event){
    console.log('row selected',event);
    
  }
  
  settings = {
        columns: {
          title: {
            title: 'Title'
          },
          authors: {
            title: 'Author'
          },
          link: {
            title: 'Link'
          },
          contents: {
            title: 'Contents',
            width: '60px',
            type: 'html'
          }
        },
        mode:'inline',
        noDataMessage: 'Data is Loading please Wait ....',
        delete: {
          confirmDelete: true,
        },
        add: {
          confirmCreate: true,
        },
        edit: {
          confirmSave: true,
        }
  };

}
