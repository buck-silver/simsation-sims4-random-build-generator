import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { Sims4PackSettingsComponent } from './components/sims4-pack-settings/sims4-pack-settings.component';
import { SimsationLogoComponent } from './components/simsation-logo/simsation-logo.component';
import { SimsationSocialComponent } from './components/simsation-social/simsation-social.component';

@NgModule({
  declarations: [
    AppComponent,
    Sims4PackSettingsComponent,
    SimsationLogoComponent,
    SimsationSocialComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
