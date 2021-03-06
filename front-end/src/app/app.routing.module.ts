import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { RssFeedViewComponent } from './components/rss-feed-view/rss-feed-view.component';
import { RssFeedSubmitComponent } from './components/rss-feed-submit/rss-feed-submit.component';


const routes: Routes = [
    {
        path: '', redirectTo: 'rss-feed-submit', pathMatch: 'full'
    },

    {
        path: 'rss-feed-submit', component: RssFeedSubmitComponent
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
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
})
export class RoutingModule {
}
