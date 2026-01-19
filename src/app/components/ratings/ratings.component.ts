import { Component } from '@angular/core';
import { input, computed } from '@angular/core';

@Component({
  selector: 'app-ratings',
  imports: [],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.css',
})
export class RatingsComponent {
  score = input<number>(0);

  //Computed Signal for stars
  stars = computed(() => {
    const value = Math.min(this.score(), 5);
    const stars: string[] = [];

    const solid = Math.floor(value);
    const half = value - solid >= 0.5;
    // 4.5 - 4 = 0.5 True - show a half star
    // 3.8 - 3 = 0.8 True - show a half star
    // 4.2 - 4 = 0.2 False - don't show a half star,this is not acceptable

    for (let i = 0; i < solid; i++) {
      stars.push('fa-solid fa-star');
    }

    if (half) {
      stars.push('fa-solid fa-star-half-stroke');
    }

    while (stars.length < 5) {
      stars.push('fa-regular fa-star');
    }
    return [...stars];
  });
}
