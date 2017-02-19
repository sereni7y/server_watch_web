/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('serverWatch', [])
    .controller('MainCtrl', ['$http', function($http) {
      var self = this;
      self.project = 'ServerWatch';
      self.env = 'serverWatch Test';
      self.server_data = [];
      $http.get('data/server_data.json').then(function(response) {
          self.server_data = response.data;
      }, function(errRespones) {
          console.error("Error while fetching notes");
      });
  }]);

