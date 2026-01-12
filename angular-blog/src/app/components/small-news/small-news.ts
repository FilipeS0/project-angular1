import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-news',
  imports: [],
  templateUrl: './small-news.html',
  styleUrl: './small-news.css',
})
export class SmallNews {
  @Input()
  photoCover: string = '';

  @Input()
  cardTitle: string = '';
}
