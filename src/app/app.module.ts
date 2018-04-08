import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material2
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatCardModule, MatIconModule, MatFormFieldModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import 'hammerjs';

// Components
import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelCardComponent } from './hotels-list/hotel-card/hotel-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Services
import { HotelsService } from './hotels-list/hotels.service';
import { HotelFilterComponent } from './hotels-list/hotel-filter/hotel-filter.component';
import { HotelSearchPipe } from './hotels-list/hotel-search.pipe';
import { CitySearchPipe } from './hotels-list/city-search.pipe';

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
    HotelFilterComponent,
    HotelSearchPipe,
    CitySearchPipe,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: environment.production }
    ),
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
