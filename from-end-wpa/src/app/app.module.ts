import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { environment } from '../environments/environment';
import { NewsFeederService } from './services/news-feeder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RssFeedViewComponent } from './components/rss-feed-view/rss-feed-view.component';
import { CreateNewRssComponent } from './components/create-new-rss/create-new-rss.component';
import { BroadCastdataServiceService } from './service/broad-castdata-service.service';
import { RoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RssFeedViewComponent,
    CreateNewRssComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    Ng2SmartTableModule,
    HttpClientModule,
    RoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NewsFeederService,BroadCastdataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
