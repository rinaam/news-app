import { ArticlesT } from './../../services/news.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { topHeadlinesBySourcesAction } from '../../state/actions/news.actions';
import { selectTopHeadlinesBySourceId } from '../../state/selectors/news.seletors';

@Component({
  selector: 'app-sources-result',
  templateUrl: './sources-result.component.html',
  styleUrls: ['./sources-result.component.scss'],
})
export class SourcesResultComponent {
  news$: Observable<ArticlesT[]>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((param) => {
      this.store.dispatch(
        topHeadlinesBySourcesAction({ source: param.source })
      );
      this.news$ = this.store.pipe(
        select(selectTopHeadlinesBySourceId(param.source))
      );
    });
  }

  handleClick(title: string): void {
    this.router.navigate(['news', title]);
  }
}
