function StaffController() {
  this.name = "Susan";
  this.email = "example2@example.com";
  this.phone = "999-888-9999";
}

angular
  .module('app')
  .controller('StaffController', StaffController);
