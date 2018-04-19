// NG5
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Material2
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';

// Components
import {AppLoaderComponent} from './app-loader/app-loader.component'; // TODO: Refactor app-loader.component into app.component.
import {AppComponent} from './app.component';
import {DynamicModalBaseComponent} from './dynamic-modal-base/dynamic-modal-base.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

// Hotels List Components
import {HotelsListComponent} from './hotels-list/hotels-list.component';
import {HotelCardComponent} from './hotels-list/hotel-card/hotel-card.component';
import {HotelFilterComponent} from './hotels-list/hotel-filter/hotel-filter.component';
import {HotelQuickViewComponent} from './hotels-list/hotel-quick-view/hotel-quick-view.component';
import {ConfirmDeleteComponent} from './hotels-list/hotel-card/confirm-delete/confirm-delete.component';

// Pipes
import {NgPipesModule} from 'ngx-pipes'; // TODO: Create custom pipe for filtering. Remove NgPipes dependency

// Services
import {HotelsService} from './hotels-list/hotels.service';

// Router
import {AppRoutingModule} from './app-routing.module';

// Directives
import {ViewContainerRefDirective} from './view-container-ref.directive';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HotelsListComponent,
    HotelCardComponent,
    HotelFilterComponent,
    HotelQuickViewComponent,
    AppLoaderComponent,
    DynamicModalBaseComponent,
    ConfirmDeleteComponent,
    ViewContainerRefDirective
  ],
  entryComponents: [
    HotelQuickViewComponent,
    DynamicModalBaseComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    NgPipesModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
