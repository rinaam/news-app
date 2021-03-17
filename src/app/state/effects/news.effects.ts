import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { NewsService } from '../../services/news.service';
import {
  topHeadlinesAction,
  topHeadlinesActionSucces,
  topHeadlinesActionError,
  sourcesAction,
  sourcesActionSucces,
  sourcesActionError,
  everythingAction,
  everythingActionSucces,
  everythingActionError,
  topHeadlinesBySourcesAction,
  topHeadlinesBySourcesActionSucces,
  topHeadlinesBySourcesActionError,
} from '../actions/news.actions';

@Injectable()
export class TopHeadlinesEffects {
  topHeadlines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(topHeadlinesAction),
      mergeMap((item) =>
        this.newsService.getTopHeadlines(item.category, item.country).pipe(
          map((topHeadlines) => topHeadlinesActionSucces({ topHeadlines })),
          catchError(() => of(topHeadlinesActionError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}

@Injectable()
export class SourcesEffects {
  sources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sourcesAction),
      mergeMap(() =>
        this.newsService.getSources().pipe(
          map((sources) => sourcesActionSucces({ sources })),
          catchError(() => of(sourcesActionError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}

@Injectable()
export class EverythingEffects {
  everything$ = createEffect(() =>
    this.actions$.pipe(
      ofType(everythingAction),
      mergeMap((item) =>
        this.newsService.getEverything(item.query, item.sortBy).pipe(
          map((everything) => everythingActionSucces({ everything })),
          catchError(() => of(everythingActionError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}

@Injectable()
export class TopHeadlinesBySourcesEffects {
  topHeadlinesBySources$ = createEffect(() =>
    this.actions$.pipe(
      ofType(topHeadlinesBySourcesAction),
      mergeMap((item) =>
        this.newsService.getTopHeadlinesBySources(item.source).pipe(
          map((topHeadlinesBySources) =>
            topHeadlinesBySourcesActionSucces({ topHeadlinesBySources })
          ),
          catchError(() => of(topHeadlinesBySourcesActionError()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private newsService: NewsService) {}
}
