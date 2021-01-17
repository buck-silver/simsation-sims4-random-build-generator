import { Component } from '@angular/core';
import { getRandomInt } from './util/get-random-int';
import { SuggestedBuildService } from './services/suggested-build.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Simsation - Everytime A different Build';

  suggestion: string = '';
  thinking = '🤔';
  reaction = '';

  // prettier-ignore
  private reactions = [
		'😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
		'😋','😎','😍','😘','🥰','😚','🙂','🤗','🤩','🤨',
		'😐','😑','🙄','😏','😣','😥','😮','😯','😪','😫',
		'🥱','😛','😜','😝','😒','😓','😔','😕','🙃','🤑',
		'😲','🙁','😖','😞','😟','😤','😢','😭','😦','😧',
		'😨','😩','🤯','😬','😱','😳','🤪','😵','😠','😡',
		'🤬','🤢','🤮','🥳','🥺','🤡','🤭','💩'
	]

  constructor(private suggester: SuggestedBuildService) {
    this.suggester.suggestion.subscribe((val) => {
      this.suggestion = val.suggestionCurrent;
      if (val.inProgress) {
        this.reaction = this.thinking;
      } else {
        this.reaction = this.reactions[
          getRandomInt(0, this.reactions.length - 1)
        ];
      }
    });
  }

  makeSuggestion() {
    this.suggester.suggest();
  }

  get canSuggest(): boolean {
    return this.suggester.suggestion.value.inProgress;
  }
}
