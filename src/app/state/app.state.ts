import { newsReducer, NewsState } from './reducers/news.reducers';
import { hydrationMetaReducer } from './reducers/hydration.reducers';
import {
  TopHeadlinesEffects,
  SourcesEffects,
  EverythingEffects,
  TopHeadlinesBySourcesEffects,
} from './effects/news.effects';
import { MetaReducer } from '@ngrx/store';

export interface AppState {
  news: NewsState;
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

export const reducers = {
  news: newsReducer,
};
export const effects = [
  TopHeadlinesEffects,
  SourcesEffects,
  EverythingEffects,
  TopHeadlinesBySourcesEffects,
];
