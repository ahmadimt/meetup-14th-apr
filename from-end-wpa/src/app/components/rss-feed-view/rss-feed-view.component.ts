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
  settings = {
    actions: {
      position: 'right'
    },
    columns: {
      title: {
        title: 'Title'
      },
      authors: {
        title: 'Author'
      },
      link: {
        title: 'Link',
      },
      contents: {
        title: 'Contents',
        type: 'html'
      }
    },
    mode: 'inline',
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



  actualData:any[]
  constructor(private newsFeederService:NewsFeederService,public broadCastdataServiceService:BroadCastdataServiceService) {
   }

  ngOnInit() { 

    if(!this.broadCastdataServiceService.source){
      this.newsFeederService.getRssFeeds().subscribe(res=>{
        this.actualData=res;
        this.broadCastdataServiceService.source=new LocalDataSource(this.actualData); ;
      },(error)=>{

      },()=>{

      })
    }
  }


  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
     
      console.log("on delete",event);
      
      this.newsFeederService.deletebyTitle(event.data.title).subscribe(res=>{
        
      },(error)=>{
        event.confirm.reject();
      },()=>{
        event.confirm.resolve();
      })
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

      let rssfeed:any=Object.assign({},event.newData)
      let authors:any[]=new Array();
      authors.push(event.newData.authors)

      rssfeed.id="any";
      rssfeed.updatedDate='';
      rssfeed.publishedDate= '';
      rssfeed.authors=authors;

      console.log("create data",rssfeed);

      this.newsFeederService.getUpdateOrCreatNewsFeed(rssfeed).subscribe(res=>{
        console.log("saved entity",res);

      },(error)=>{

      },()=>{
          this.newsFeederService.getRssFeeds().subscribe(res=>{
            this.actualData=res;
            this.broadCastdataServiceService.source=new LocalDataSource(this.actualData); ;
          })
      })
    } else {
      event.confirm.reject();
    }
  }

  rowSelected(event) {
    console.log('row selected', event);

  }



}
