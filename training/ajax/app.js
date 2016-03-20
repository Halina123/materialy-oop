$(function () {
  $.get('http://localhost:3000/users', function (data) {
    console.log(data);
  });
});
