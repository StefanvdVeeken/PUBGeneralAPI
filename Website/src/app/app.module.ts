import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component'
import {HomeComponent} from './home/home.component'
import { StatsComponent } from './stats/stats.component';
import { PUBGService } from './services/pubg.service';
import { InterceptService } from './services/intercept.service';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './Items/items.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    StatsComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:"home", component: HomeComponent},
      {path:"stats", component: StatsComponent},
      {path:"items", component: ItemsComponent},
      {path:"", redirectTo:"home", pathMatch:'full'},
    ], {useHash:true}),
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PUBGService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
