import { countries, categories } from './../../utils/constants';
import { selectActiveCountry } from './../../state/selectors/news.seletors';
import { NewsT } from './../../services/news.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNews } from '../../state/selectors/news.seletors';
import {
  topHeadlinesAction,
  setActiveCountry,
} from '../../state/actions/news.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  news$: Observable<NewsT> = this.store.pipe(select(selectNews));
  country$: Observable<string> = this.store.pipe(select(selectActiveCountry));
  selectedCategory: string = 'all';
  countries = countries;
  categories = categories;

  constructor(private store: Store, private router: Router) {
    this.store.pipe(select(selectActiveCountry)).subscribe((country) => {
      this.store.dispatch(topHeadlinesAction({ country }));
    });
  }
  handleClick(title: string): void {
    this.router.navigate(['news', title]);
  }

  selectCategory(category: string): void {
    this.store.pipe(select(selectActiveCountry)).subscribe((country) => {
      if (category === 'all') {
        this.store.dispatch(topHeadlinesAction({ country }));
      } else {
        this.store.dispatch(topHeadlinesAction({ category, country }));
      }
    });
    this.selectedCategory = category;
  }

  selectCountry(selectedCountry: string): void {
    this.store.dispatch(setActiveCountry({ country: selectedCountry }));
    this.store.dispatch(topHeadlinesAction({ country: selectedCountry }));
  }
}
