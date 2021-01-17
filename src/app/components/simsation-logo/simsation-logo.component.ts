import { Component, Input } from '@angular/core';

@Component({
  selector: 'simsation-logo',
  templateUrl: './simsation-logo.component.html',
  styleUrls: ['./simsation-logo.component.scss'],
})
export class SimsationLogoComponent {
  @Input('src') src: string = 'href="https://simsation.ca/favicon.ico"';
  @Input('alt') alt: string = 'logo';
}
