$(function () {

  // $(window).on('click',function (event) {
  //   console.log(event);
  // });

  // $('div').on('click', function(event) {
  //   // event.stopPropagation();
  //   console.log(event);
  // });
  // $(document).on('submit', function (event) {
  //   debugger;
  // });
  $(document).on('submit', function (event) {
    event.preventDefault();

    var $form = $(event.target);

    // get all the inputs into an array.
    var $inputs = $form.find(':input');
    console.log($inputs);

    var values = Object.create(null);
    $inputs.each(function () {
      values[this.name] = this.value;
    });
    console.log(values);

    var $logInStatusContainer = $form.siblings('.log-in-status');
    $logInStatusContainer.text('Fetching user data...');
    // get users.json to lookup for username and password
    $.get('../data/users.json', function (users) {

      var user = users.find(function (user) {
        return user.username === values.usernameValue && user.password === values.passwordValue;
      });

      if (user) {
        $logInStatusContainer.text('Hello ' + user.name + ' ' + user.surname + '!');
        $form.hide();
      } else {
        $logInStatusContainer.text('Username and password does not match.');
      }
    });

    //console.log(values);

    // return false;
  });
});
