import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RssFeedViewComponent } from './components/rss-feed-view/rss-feed-view.component';
import { CreateNewRssComponent } from './components/create-new-rss/create-new-rss.component';
import { HashLocationStrategy } from '@angular/common';


const routes: Routes = [
    {
        path: '', redirectTo: 'communications', pathMatch: 'full'
    },
    {
        path: 'create-new', component: CreateNewRssComponent
    },
    {
        path: 'rss-feed-view', component: RssFeedViewComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true }), HashLocationStrategy],
    exports: [RouterModule],
})
export class RoutingModule {
}