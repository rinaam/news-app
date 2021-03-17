import { NewsT, SourcesT } from './../../services/news.service';
import { Action, createReducer, on } from '@ngrx/store';
import * as NewsActions from '../actions/news.actions';

export interface NewsState {
  loading: boolean;
  error: boolean;
  data: {
    news: NewsT | null;
    sources: SourcesT | null;
    activeCountry: string;
    sortBy: 'publishedAt' | 'popularity' | 'relevance';
  };
}

export const initialState: NewsState = {
  loading: false,
  error: false,
  data: {
    news: null,
    sources: null,
    activeCountry: 'us',
    sortBy: 'publishedAt',
  },
};

const reducer = createReducer(
  initialState,
  on(NewsActions.topHeadlinesAction, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(NewsActions.topHeadlinesActionSucces, (state, { topHeadlines }) => ({
    ...state,
    loading: false,
    error: false,
    data: {
      ...state.data,
      news: topHeadlines,
    },
  })),
  on(NewsActions.topHeadlinesActionError, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(NewsActions.sourcesAction, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(NewsActions.sourcesActionSucces, (state, { sources }) => ({
    ...state,
    loading: false,
    error: false,
    data: {
      ...state.data,
      sources,
    },
  })),
  on(NewsActions.sourcesActionError, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(NewsActions.setActiveCountry, (state, { country }) => ({
    ...state,
    data: {
      ...state.data,
      activeCountry: country,
    },
    loading: false,
    error: false,
  })),
  on(NewsActions.everythingAction, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(NewsActions.everythingActionSucces, (state, { everything }) => ({
    ...state,
    loading: false,
    error: false,
    data: {
      ...state.data,
      news: everything,
    },
  })),
  on(NewsActions.everythingActionError, (state) => ({
    ...state,
    loading: false,
    error: true,
  })),
  on(NewsActions.setActiveSortOption, (state, { sortBy }) => ({
    ...state,
    data: {
      ...state.data,
      sortBy,
    },
    loading: false,
    error: false,
  })),
  on(NewsActions.topHeadlinesBySourcesAction, (state) => ({
    ...state,
    loading: true,
    error: false,
  })),
  on(
    NewsActions.topHeadlinesBySourcesActionSucces,
    (state, { topHeadlinesBySources }) => ({
      ...state,
      loading: false,
      error: false,
      data: {
        ...state.data,
        news: topHeadlinesBySources,
      },
    })
  ),
  on(NewsActions.topHeadlinesBySourcesActionError, (state) => ({
    ...state,
    loading: false,
    error: true,
  }))
);

export function newsReducer(state: NewsState | undefined, action: Action) {
  return reducer(state, action);
}
