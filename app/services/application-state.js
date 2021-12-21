import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationStateService extends Service {
  @tracked audience = 'placeManager';

  @tracked locale;

  @action setAudience(audience) {
    this.audience = audience;
  }

  @action setLocale(locale) {
    this.locale = locale;
  }
}
