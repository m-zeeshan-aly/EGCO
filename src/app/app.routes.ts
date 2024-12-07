import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactFormComponent }, 
  { path: 'about', component: AboutComponent },
  // { path: '**', redirectTo: '' }, 
];

