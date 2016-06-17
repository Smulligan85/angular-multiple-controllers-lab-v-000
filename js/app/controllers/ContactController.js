function ContactController() {
  this.name = "Sean";
  this.email = "example@example.com";
  this.phone = "999-999-9999";

  var vm = this;

  this.changeName = function() {
    vm.name = "Bob";
  };
}

angular
  .module('app')
  .controller('ContactController', ContactController);
