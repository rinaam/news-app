import { NewsState } from './../reducers/news.reducers';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';

export const selectNewsState = (state: AppState) => state.news;

export const selectNews = createSelector(
  selectNewsState,
  (state: NewsState) => state.data.news
);

export const selectArticle = (title: string) =>
  createSelector(selectNewsState, (state: NewsState) =>
    state.data.news.articles.find((article) => article.title === title)
  );

export const selectSources = createSelector(
  selectNewsState,
  (state: NewsState) => state.data.sources
);
export const selectActiveCountry = createSelector(
  selectNewsState,
  (state: NewsState) => state.data.activeCountry
);

export const selectActiveSortOption = createSelector(
  selectNewsState,
  (state: NewsState) => state.data.sortBy
);

export const selectTopHeadlinesBySourceId = (sourceId: string) =>
  createSelector(selectNewsState, (state: NewsState) =>
    state.data.news.articles.filter((article) => article.source.id === sourceId)
  );
