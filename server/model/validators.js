var validators = function () {
  return {
    email: function (email) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email)
    }
  };
}();

validators.email();

module.exports = validators;
