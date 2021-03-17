import { SourcesResultComponent } from './pages/sources-result/sources-result.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { ResultComponent } from './pages/result/result.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news/:title', component: DetailsComponent },
  { path: 'search/:query', component: ResultComponent },
  { path: 'sources', component: SourcesComponent },
  { path: 'articles/:source', component: SourcesResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
