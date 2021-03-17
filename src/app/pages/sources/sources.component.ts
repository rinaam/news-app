import { SourcesT } from './../../services/news.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { sourcesAction } from '../../state/actions/news.actions';
import { selectSources } from '../../state/selectors/news.seletors';
@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss'],
})
export class SourcesComponent {
  sources$: Observable<SourcesT> = this.store.pipe(select(selectSources));
  firstLettersArray: string[] = [];

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(sourcesAction());
    this.sources$.subscribe((item) => {
      item.sources.forEach((source) => {
        const firstLetter = source.name.charAt(0);
        if (!this.firstLettersArray.includes(firstLetter)) {
          this.firstLettersArray.push(firstLetter);
        }
      });
    });
  }

  handleClick(source: string): void {
    this.router.navigate(['articles', source]);
  }

  getArrForLetter(letter, sources: SourcesT) {
    return sources.sources.filter((source) => source.name.charAt(0) === letter);
  }
}
