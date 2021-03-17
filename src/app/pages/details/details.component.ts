import { Observable } from 'rxjs';
import { ArticlesT } from './../../services/news.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { selectArticle } from '../../state/selectors/news.seletors';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  selectedArticle$: Observable<ArticlesT>;
  constructor(private route: ActivatedRoute, private store: Store) {
    this.route.params.subscribe((params) => {
      this.selectedArticle$ = this.store.pipe(
        select(selectArticle(params.title))
      );
    });
  }
}
