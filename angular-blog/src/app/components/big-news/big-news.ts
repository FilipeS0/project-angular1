import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-news',
  imports: [],
  templateUrl: './big-news.html',
  styleUrl: './big-news.css',
})
export class BigNews {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = '';

  @Input()
  cardDescription: string = '';
}
