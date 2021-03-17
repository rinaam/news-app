import { NewsT, SourcesT } from '../../services/news.service';
import { createAction, props } from '@ngrx/store';

export const topHeadlinesAction = createAction(
  '[Top Headlines] Top Headlines',
  props<{ category?: string; country?: string }>()
);
export const topHeadlinesActionSucces = createAction(
  '[Top Headlines Succes] Top Headlines Succes',
  props<{ topHeadlines: NewsT }>()
);
export const topHeadlinesActionError = createAction(
  '[Top Headlines Error] Top Headlines Error'
);

export const sourcesAction = createAction('[Sources] Sources');
export const sourcesActionSucces = createAction(
  '[Sources Succes] Sources Succes',
  props<{ sources: SourcesT }>()
);
export const sourcesActionError = createAction('[Sources Error] Sources Error');

export const setActiveCountry = createAction(
  '[Active Country] Set Active Country',
  props<{ country: string }>()
);

export const everythingAction = createAction(
  '[Everything] Everything',
  props<{ query: string; sortBy?: string }>()
);
export const everythingActionSucces = createAction(
  '[Everything Succes] Everything Succes',
  props<{ everything: NewsT }>()
);
export const everythingActionError = createAction(
  '[Everything Error] Everything Error'
);

export const setActiveSortOption = createAction(
  '[Active Sort Option] Active Sort Option',
  props<{ sortBy: string }>()
);

export const topHeadlinesBySourcesAction = createAction(
  '[Top Headlines By Sources] Top Headlines By Sources',
  props<{ source: string }>()
);
export const topHeadlinesBySourcesActionSucces = createAction(
  '[Top Headlines By Sources Succes] Top Headlines By Sources Succes',
  props<{ topHeadlinesBySources: NewsT }>()
);
export const topHeadlinesBySourcesActionError = createAction(
  '[Top Headlines By Sources Error] Top Headlines By Sources Error'
);
