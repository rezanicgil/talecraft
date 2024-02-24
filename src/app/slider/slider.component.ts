import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  constructor(private router: Router, @Inject(DOCUMENT) document: Document) {}
  images = [
    'https://moewalls.com/wp-content/uploads/2022/09/guardian-tales-thumb.jpg',
    'https://rare-gallery.com/uploads/posts/1254240-disney-snow-white-fairy-tale.jpg',
    'https://i.pinimg.com/originals/c8/9e/87/c89e8708b8916fa7aba3c36dcd787526.jpg',
  ];

  goHomepage() {
    this.router.navigate(['/']);
  }

  toggleSound() {
    var audioElement = document.getElementById(
      'audioPlayer'
    ) as HTMLMediaElement;
    var soundTxtElement = document.getElementById(
      'sound'
    ) as HTMLParagraphElement;
    audioElement.muted = !audioElement.muted;
    if (audioElement.muted) {
      soundTxtElement.innerHTML = 'Sesi Aç';
    } else {
      soundTxtElement.innerHTML = 'Sesi Kapat';
    }
  }
}
