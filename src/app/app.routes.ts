import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


export const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to home
    { path: 'home', component: HomeComponent }, // Create a home component
    { path: 'gallery', component: GalleryComponent },
    { path: 'photos', component: PhotosComponent },
    {path: 'about', component: AboutComponent},
];

