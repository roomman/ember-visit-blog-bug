import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BlogController extends Controller {
  @service applicationState;

  @tracked cardView = true;

  get locale() {
    return this.applicationState.locale;
  }

  @action setCardView(bool) {
    this.cardView = bool;
  }
}
