$(function () {

  var $forms = $('form').each(function (index) {
    $(this).attr('id', index);
  });

  // get all the inputs into an array.
  var $inputs = $(':input');

  $inputs.each(function () {
    $(this).val(localStorage.getItem($(this).parents('form').attr('id') + this.name));
  });

  $inputs.on('keyup', function () {
    localStorage.setItem($(this).parents('form').attr('id') + this.name, $(this).val());
  });

  $('.log-in-form').on('reset', function (event) {
    $(this).find(':input').each(function () {
      localStorage.removeItem($(this).parents('form').attr('id') + this.name);
    });
  });
  $('.log-in-form').on('submit', function (event) {
    event.preventDefault();

    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });

    var $logInStatusContainer = $('.log-in-status', $(this).parent());

    // get users.json to lookup for username and password
    $.get('../data/users.json', function (users) {
      var user = users.find(function (user) {
        return user.username === values.usernameValue && user.password === values.passwordValue;
      });

      if (user) {
        $logInStatusContainer.text('Hello ' + user.name + ' ' + user.surname + '!');
      } else {
        $logInStatusContainer.text('Username and password does not match.');
      }
    });
    $logInStatusContainer.text('Fetching user data...');

    //console.log(values);

    //return false;
  });
});
