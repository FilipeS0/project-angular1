import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-news.html',
  styleUrl: './big-news.css',
})
export class BigNews {
  readonly photoCover = input<string>('');

  readonly cardTitle = input<string>('');

  readonly cardDescription = input<string>('');

  readonly Id = input<string>('0');
}
