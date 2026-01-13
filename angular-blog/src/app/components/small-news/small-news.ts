import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-news',
  imports: [RouterLink],
  templateUrl: './small-news.html',
  styleUrl: './small-news.css',
})
export class SmallNews {
  readonly Id = input<string>('0');

  readonly photoCover = input<string>('');

  readonly cardTitle = input<string>('');
}
