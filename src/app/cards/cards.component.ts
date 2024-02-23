import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule],
})
export class CardsComponent {

  constructor(private router: Router) {}
  
  openTale(){
    this.router.navigate(['/tale']);
  }

}
