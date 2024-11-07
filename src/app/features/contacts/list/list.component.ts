import { Component } from '@angular/core';
import { GridComponent } from '@scomponents/grid/grid.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GridComponent],
  template: `
<section>
    <app-grid/>
</section>
  `,
  styles: ``
})
export class ListComponent {

}