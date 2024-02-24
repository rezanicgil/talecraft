import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  constructor(private router: Router) {}
  images = [
    'https://moewalls.com/wp-content/uploads/2022/09/guardian-tales-thumb.jpg',
    'https://rare-gallery.com/uploads/posts/1254240-disney-snow-white-fairy-tale.jpg',
    'https://i.pinimg.com/originals/c8/9e/87/c89e8708b8916fa7aba3c36dcd787526.jpg',
  ];

  goHomepage() {
    this.router.navigate(['/']);
  }
}
