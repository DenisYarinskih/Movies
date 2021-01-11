import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesDTOEnum } from 'src/app/config/enum/categoriesDTOEnum';
import { CategoriesEnum } from 'src/app/config/enum/categoriesEnum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  bufferValue: string;
  categories = CategoriesEnum;
  categoriesDTO = CategoriesDTOEnum;
  onDestroy$ = new Subject<void>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {   
    this.getActiveCategory()
  }
  goToHomePage(): void{
    this.router.navigate(['movies'])
  }
  ngOnDestroy(): void{
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
  goToMovieList(category: string): void {
    this.router.navigate(['movies'],{queryParams: {category}})
  }
  private getActiveCategory(): void{   
    this.activatedRoute.queryParams
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(params => this.bufferValue = params.category ? params.category : CategoriesDTOEnum.NOW_PLAYING) 
  }
}
