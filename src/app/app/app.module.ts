import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { PhotosComponent } from '../photos/photos.component';
import { AboutComponent } from '../about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtService } from '../art.service';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PhotosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ArtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
