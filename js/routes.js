angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })
  
      .state('menu.paynow', {
    url: '/paynow',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paynow.html',
        controller: 'paynowCtrl'
      }
    }
  })    
      .state('menu.addforum',{
    url: '/addforum',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addforum.html',
        controller: 'addforumCtrl'
      }
    }
  })  
  

  .state('menu.payment', {
    url: '/payment',
    views: {
      'side-menu21': {
        templateUrl: 'templates/payment.html',
        controller: 'paymentCtrl'
      }
    }
  })

  .state('menu', {
    url: '/sidemenu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  
 .state('forgotpass', {
    url: '/forgotpass',
    templateUrl: 'templates/forgotpass.html',
    controller: 'forgotpassCtrl'
  })
   .state('logout', {
    url: '/logout',
    templateUrl: 'templates/logout.html',
    controller: 'logoutCtrl'
  })
  
  
  .state('menu.content', {
    url: '/content',
          views: {
      'side-menu21': {
    templateUrl: 'templates/content.html',
    controller: 'contentCtrl'
  }
          }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('menu.materials', {
    url: '/materials',
    views: {
      'side-menu21': {
        templateUrl: 'templates/materials.html',
        controller: 'materialsCtrl'
      }
    }
  })
  
  .state('menu.comments', {
    url: '/commentss',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comment.html',
        controller: 'commentsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});