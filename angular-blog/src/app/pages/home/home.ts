import { Component } from '@angular/core';
import { MainTitle } from '../../components/main-title/main-title';
import { BigNews } from '../../components/big-news/big-news';
import { SmallNews } from '../../components/small-news/small-news';

@Component({
  selector: 'app-home',
  imports: [MainTitle, BigNews, SmallNews],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
