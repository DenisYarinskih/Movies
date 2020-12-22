import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TypeButtonEnum } from 'src/app/config/enum/enum';
import { IPagination } from 'src/app/config/interfaces/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PaginationComponent {
  @Input() pagination: IPagination;
  @Output() newPage = new EventEmitter<number>();

  typeButtonEnum = TypeButtonEnum;

  changePage(typeButton: TypeButtonEnum){
    switch(typeButton){
      case TypeButtonEnum.FIRST_PAGE:
        this.newPage.emit(1);
        break;
      case TypeButtonEnum.PREV_PAGE:
        if(this.pagination.page !== 1){
          this.newPage.emit(this.pagination.page - 1);
        }
        break;
        case TypeButtonEnum.NEXT_PAGE:
          if(this.pagination.page !== this.pagination.total_page){
            this.newPage.emit(this.pagination.page + 1);
          }
        break;
      case TypeButtonEnum.LAST_PAGE:
        this.newPage.emit(this.pagination.total_page);
        break;
    }
  }
}