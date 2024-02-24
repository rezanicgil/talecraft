import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialog } from '../dialog/dialog.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatBadgeModule],
})
export class CardsComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog);
  }

  openTale() {
    this.router.navigate(['/tale']);
  }
}
