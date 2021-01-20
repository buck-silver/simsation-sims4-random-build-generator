import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sims4RandomBuildGeneratorComponent } from './components/sims4-random-build-generator/sims4-random-build-generator.component';

const routes: Routes = [
  { path: '', component: Sims4RandomBuildGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
