import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppLoaderComponent} from './app-loader/app-loader.component';
import {environment} from '../environments/environment';
import {HotelsListComponent} from './hotels-list/hotels-list.component';

const routes: Routes = [
  {path: '', component: AppLoaderComponent},
  {path: 'hotels', component: HotelsListComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {
    enableTracing: !environment.production
  })],
})
export class AppRoutingModule {
}
