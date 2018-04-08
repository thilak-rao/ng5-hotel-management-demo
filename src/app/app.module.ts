import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';

// Material2
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatIconModule} from '@angular/material';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Services
import { HotelsService } from './hotels.service';

const appRoutes: Routes = [
  { path: '', component: HotelsListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HotelsListComponent,
    HotelCardComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: environment.production }
    ),
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
