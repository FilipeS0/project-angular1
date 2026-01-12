import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  photoCover: string =
    'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQR-yWK8nGFN4es_k0fV1vtdRY63ByAzn65MkPgn9FdVZi0S8l5gMKENbYAV7G3a5SOLIjT3G233Gwf0ahb3Zag4itLxjpTnHGol.jpg?r=f97';
  contentTitle: string = 'EXAMPLE NEWS';
  contentDescription: string = 'Look at the Iron Man';
}
