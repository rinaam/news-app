import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers, effects, metaReducers } from './state/app.state';
import { DetailsComponent } from './pages/details/details.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ResultComponent } from './pages/result/result.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { RemoveDuplicatesPipe } from './pipes/remove-duplicates.pipe';
import { SourcesResultComponent } from './pages/sources-result/sources-result.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    FormatDatePipe,
    DropdownComponent,
    ResultComponent,
    SourcesComponent,
    RemoveDuplicatesPipe,
    SourcesResultComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
