function getDependencies(tree) {
  var deps = {}
  function recurDeps(branch) {
    console.log(branch)
    if (branch) {
      Object.keys(branch).forEach(function (depName) {
        deps[depName + '@' + branch[depName].version] = null
        var subDeps = branch[depName].dependencies
        if (subDeps) recurDeps(subDeps)
      })
    }
  }
  recurDeps(tree.dependencies)
  return Object.keys(deps).sort()
}

module.exports = getDependencies

