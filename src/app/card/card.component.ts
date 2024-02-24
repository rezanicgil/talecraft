import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataExampleDialog } from '../dialog/dialog.component';
import { Tale } from '../models/tale.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    CommonModule,
  ],
})
export class CardComponent implements OnInit {
  tales: Tale[] = [];
  constructor(private router: Router, public dialog: MatDialog) {}
  ngOnInit(): void {
    //@TODO: Call getAllTales
    this.tales = [
      {
        id: 'bcdghefxsadasqwtqwrqwe',
        title: 'Tavşan Zıpzıp',
        categories: ['Hayvanlar'],
        thumbnail_url:
          'https://c4.wallpaperflare.com/wallpaper/379/455/753/cartoon-rabbit-best-animation-movies-of-2016-the-secret-life-of-pets-wallpaper-preview.jpg',
        summary: 'Tavşan Zıpzıp birgün ormanda giderken',
        pages: [
          {
            id: 1,
            image_url:
              'https://moewalls.com/wp-content/uploads/2022/09/guardian-tales-thumb.jpg',
            index_number: 0,
            tale_snippet:
              'Tavşan Zıpzıp birgün ormanda giderken. Bir ayıya rastlamış.',
          },
          {
            id: 2,
            image_url:
              'https://rare-gallery.com/uploads/posts/1254240-disney-snow-white-fairy-tale.jpg',
            index_number: 1,
            tale_snippet: 'Ayıya gülümseyerek merhaba demiş.',
          },
          {
            id: 3,
            image_url:
              'https://i.pinimg.com/originals/c8/9e/87/c89e8708b8916fa7aba3c36dcd787526.jpg',
            index_number: 2,
            tale_snippet: 'Ayıda ona gülümseyerek cevap vermiş, Merhaba',
          },
        ],
      },
      {
        id: 'bcdghefxsadasxazacasdas',
        title: 'Kurbağa Kuki',
        categories: ['Hayvanlar'],
        summary: 'Kurbağa Kuki birgün ormanda giderken',
        thumbnail_url:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05427869-908a-41ed-a9a6-ec6cf5e4a979/dg2qmrf-75f5f833-4255-4085-9244-959328756bb4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA1NDI3ODY5LTkwOGEtNDFlZC1hOWE2LWVjNmNmNWU0YTk3OVwvZGcycW1yZi03NWY1ZjgzMy00MjU1LTQwODUtOTI0NC05NTkzMjg3NTZiYjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Enorvzl-DyXpNiQkdie_Az0PdDidOLDko3-sqFW2Ngg',
        age: '2',
        pages: [
          {
            id: 1,
            image_url:
              'https://moewalls.com/wp-content/uploads/2022/09/guardian-tales-thumb.jpg',
            index_number: 0,
            tale_snippet:
              'Tavşan Zıpzıp birgün ormanda giderken. Bir ayıya rastlamış.',
          },
          {
            id: 2,
            image_url:
              'https://rare-gallery.com/uploads/posts/1254240-disney-snow-white-fairy-tale.jpg',
            index_number: 1,
            tale_snippet: 'Ayıya gülümseyerek merhaba demiş.',
          },
        ],
      },
      {
        id: 'bcdghefxsadasasdasqwe',
        title: 'Prenses Stella',
        categories: ['Aşk', 'Peri'],
        summary: 'Prenses Stella birgün şatoda gezerken..',
        age: '3',
        thumbnail_url:
          'https://c4.wallpaperflare.com/wallpaper/379/455/753/cartoon-rabbit-best-animation-movies-of-2016-the-secret-life-of-pets-wallpaper-preview.jpg',
        pages: [
          {
            id: 1,
            image_url:
              'https://moewalls.com/wp-content/uploads/2022/09/guardian-tales-thumb.jpg',
            index_number: 0,
            tale_snippet:
              'Tavşan Zıpzıp birgün ormanda giderken. Bir ayıya rastlamış.',
          },
          {
            id: 2,
            image_url:
              'https://rare-gallery.com/uploads/posts/1254240-disney-snow-white-fairy-tale.jpg',
            index_number: 1,
            tale_snippet: 'Ayıya gülümseyerek merhaba demiş.',
          },
        ],
      },
    ];
  }
  openDialog(age: string) {
    this.dialog.open(DialogDataExampleDialog, { data: age });
  }

  openTale(tale: Tale) {
    if (tale.age) {
      this.openDialog(tale.age);
    }
    this.router.navigate(['/tale']);
  }
}
