import { Component } from '@angular/core';
import { Sims4PackListService } from '../../services/sims4-build-pack.service';

@Component({
  selector: 'app-sims4-pack-settings',
  templateUrl: './sims4-pack-settings.component.html',
  styleUrls: ['./sims4-pack-settings.component.scss'],
})
export class Sims4PackSettingsComponent {
  constructor(public service: Sims4PackListService) {}
}
