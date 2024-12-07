import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact/contact.component';
import { ServicesComponent } from '../services/services.component';
import { ProcessComponent } from '../process/process.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,
    FooterComponent,
    ContactComponent,
    ServicesComponent,
    ProcessComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


