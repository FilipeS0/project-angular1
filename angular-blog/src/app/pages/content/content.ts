import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.contentTitle = result.title;
    this.photoCover = result.photoCover;
    this.contentDescription = result.description;

    // if (!result) {
    //   this.contentTitle = result.title;
    // }
  }
}
