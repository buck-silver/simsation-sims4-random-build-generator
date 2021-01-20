import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { SimsationLogoComponent } from './components/simsation-logo/simsation-logo.component';
import { SimsationSocialComponent } from './components/simsation-social/simsation-social.component';
import { Sims4PackSettingsComponent } from './components/sims4-pack-settings/sims4-pack-settings.component';
import { Sims4BuildSuggestionComponent } from './components/sims4-build-suggestion/sims4-build-suggestion.component';
import { Sims4MiscSettingsComponent } from './components/sims4-misc-settings/sims4-misc-settings.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SimsationLogoComponent,
    SimsationSocialComponent,
    Sims4PackSettingsComponent,
    Sims4BuildSuggestionComponent,
    Sims4MiscSettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
