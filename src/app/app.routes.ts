import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ServicesComponent } from './components/services/services.component';
import { AccountingServicesComponent } from './components/accounting-services/accounting-services.component';
import { HrServicesComponent } from './components/hr-services/hr-services.component';
import { ItServicesComponent } from './components/it-services/it-services.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'contact', 
    component: ContactFormComponent 
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'services/accounting-services',
    component: AccountingServicesComponent
  },
  {
    path: 'services/hr-services',
    component: HrServicesComponent
  },
  {
    path: 'services/it-services',
    component: ItServicesComponent
  }
];