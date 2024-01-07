import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContainerComponent } from '../container/container.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,ContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


