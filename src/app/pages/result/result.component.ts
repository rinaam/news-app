import { NewsT } from './../../services/news.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import {
  everythingAction,
  setActiveSortOption,
} from '../../state/actions/news.actions';
import {
  selectNews,
  selectActiveSortOption,
} from '../../state/selectors/news.seletors';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  options = {
    relevancy: 'relevancy',
    popularity: 'popularity',
    publishedAt: 'publishedAt',
  };

  news$: Observable<NewsT> = this.store.pipe(select(selectNews));
  sortBy$: Observable<string> = this.store.pipe(select(selectActiveSortOption));

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      this.store
        .pipe(select(selectActiveSortOption))
        .subscribe((selectedSortOption) => {
          this.store.dispatch(
            everythingAction({ query: param.query, sortBy: selectedSortOption })
          );
        });
    });
  }

  handleClick(title: string): void {
    this.router.navigate(['news', title]);
  }

  selectSortOption(selectedSortOption: string): void {
    this.store.dispatch(setActiveSortOption({ sortBy: selectedSortOption }));
    this.route.params.subscribe((param) => {
      this.store.dispatch(
        everythingAction({ query: param.query, sortBy: selectedSortOption })
      );
    });
  }
}
