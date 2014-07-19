// define common server / client routes here. Great if you want fast-render.

var HomeController = RouteController.extend({
  template: 'home'
});

Router.map(function () {
  this.route('home', {
    path :  '/',
    controller :  HomeController
  });
});