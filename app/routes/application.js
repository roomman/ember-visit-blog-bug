import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service fastboot;

  @service applicationState;

  activate() {
    let locale;
    if (!this.applicationState.locale) {
      if (!this.fastboot.isFastBoot) {
        if (navigator?.language) {
          locale = navigator?.language || 'en-gb';
        }
      } else {
        // TODO: pick from accept-language in cases where multi options provided
        locale = this.fastboot.request.headers.headers['accept-language'];
      }
      this.applicationState.setLocale(locale);
    }
  }
}
