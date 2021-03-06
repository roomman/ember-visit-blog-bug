// import EmberRouter from '@ember/routing/router';
import EmberRouter from '@embroider/router';
import config from 'ember-visit-blog-bug/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('blog', function () {
    this.route('post', { path: '/:post_slug' });
  });
});
