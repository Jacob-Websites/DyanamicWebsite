import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingComponent } from './features/loading/loading.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './features/about/about.component';
import { SocialeventsComponent } from './features/socialevents/socialevents.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { VideosComponent } from './features/videos/videos.component';
import { UpcomingComponent } from './features/upcoming/upcoming.component';
import { ContactComponent } from './features/contact/contact.component';
import { DenoteComponent } from './features/denote/denote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoadingComponent,
    HomeComponent,
    AboutComponent,
    SocialeventsComponent,
    GalleryComponent,
    VideosComponent,
    UpcomingComponent,
    ContactComponent,
    DenoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
