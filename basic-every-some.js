function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function (sUser) {
      return goodUsers.some(function(gUser) {
        return gUser.id === sUser.id;
      });
    });
  };
}

module.exports = checkUsersValid
