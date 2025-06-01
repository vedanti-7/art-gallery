import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';


@Component({  
  selector: 'app-root',
  standalone:true,
  imports:[FormsModule,RouterOutlet,GalleryComponent,PhotosComponent,AboutComponent,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
