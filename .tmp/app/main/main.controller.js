'use strict';

angular.module('adsApp').controller('MainCtrl', function ($scope, $http) {
  $scope.awesomeThings = [];

  $http.get('/api/things').success(function (awesomeThings) {
    $scope.awesomeThings = awesomeThings;
  });

  $scope.addThing = function () {
    if ($scope.newThing === '') {
      return;
    }
    $http.post('/api/things', { name: $scope.newThing });
    $scope.newThing = '';
  };

  $scope.deleteThing = function (thing) {
    $http['delete']('/api/things/' + thing._id);
  };

  //From here

  $scope.getNumber = function (n) {
    return new Array(n);
  };

  $scope.loadNewPoll = function () {
    $scope.newPollBoolean = true;
    $scope.myPollBoolean = false;
    $scope.recentPollBoolean = false;
  };

  $scope.loadMyPoll = function () {
    $scope.newPollBoolean = false;
    $scope.myPollBoolean = true;
    $scope.recentPollBoolean = false;
    $scope.getMyPolls();
  };

  $scope.loadRecentPoll = function () {
    $scope.newPollBoolean = false;
    $scope.myPollBoolean = false;
    $scope.recentPollBoolean = true;
    $scope.getRecentPolls();
  };
  // ADD a new POLL
  $scope.addPoll = function () {
    $http.post('/api/polls', { pollname: $scope.newpoll, options: [$scope.newoption0, $scope.newoption1, $scope.newoption2, $scope.newoption3] });
  };

  // function get Recent polls

  $scope.getRecentPolls = function () {
    $http.get('/api/polls').success(function (polls) {
      $scope.recentpolls = polls;
    });
  };
  // fuction get User's Polls
  $scope.getMyPolls = function () {
    $http.get('api/polls/mypolls').success(function (polls) {});
  };
});
//# sourceMappingURL=main.controller.js.map
