import {
  AfterViewInit,
  Component,
  input,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInput } from '@angular/material/input';
const MATERIAL_MODULES = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatPaginatorModule,
  MatLabel,
  MatFormField, MatInput
];

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent<T> implements OnInit {
  displayedColumns = input.required<string[]>();
  data = input.required<T[]>();

  dataSource = new MatTableDataSource<T>();
  private readonly _sort = viewChild.required<MatSort>(MatSort);
  private readonly _paginator = viewChild.required<MatPaginator>(MatPaginator);

  ngOnInit(): void {
    this.dataSource.data = this.data();
    this.dataSource.sort = this._sort();
    this.dataSource.paginator = this._paginator();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
