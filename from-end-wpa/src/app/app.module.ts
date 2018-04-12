import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table'
import { environment } from '../environments/environment';
import { NewsFeederService } from './services/news-feeder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    Ng2SmartTableModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NewsFeederService],
  bootstrap: [AppComponent]
})
export class AppModule { }
