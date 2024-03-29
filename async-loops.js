function loadUsers(userIds, load, done) {
  var users = []
  userIds.forEach(function (userId) {
    users.push(load(userId, function (user) {
      return user
    }))
  })
  return done(users)
}

module.exports = loadUsers

