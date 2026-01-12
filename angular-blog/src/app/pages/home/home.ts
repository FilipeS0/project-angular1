import { Component } from '@angular/core';
import { MainTitle } from '../../components/main-title/main-title';
import { BigNews } from '../../components/big-news/big-news';
import { SmallNews } from '../../components/small-news/small-news';
import { MenuBar } from '../../components/menu-bar/menu-bar';

@Component({
  selector: 'app-home',
  imports: [MainTitle, BigNews, SmallNews, MenuBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
