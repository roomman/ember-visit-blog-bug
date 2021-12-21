import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BlogController extends Controller {
  @tracked cardView = true;

  isLoading = true;

  content = [];

  get locale() {
    return 'en-gb';
  }

  @action setCardView(bool) {
    this.cardView = bool;
  }
}
