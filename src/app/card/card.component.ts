import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialog } from '../dialog/dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatBadgeModule],
})
export class CardComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {data: '2'});
  }

  openTale() {
    this.openDialog();
    this.router.navigate(['/tale']);
  }
}
