ns('app.registration', function () {
  return function (validator, repository) {
    return {
      register: function (user) {
      },
      validate: function (user) {
        validator.validate();
      },
      persist: function (user) {
        repository.persist(user);
      }
    };
  };
});
