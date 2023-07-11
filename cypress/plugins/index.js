const {commitInfo} = require('@cypress/commit-info')
// default folder is current working directory
commitInfo(folder)
  .then(info => {
    // info object will have properties
    // branch
    // message
    // email
    // author
    // sha
    // timestamp (in seconds since epoch)
    // remote
  })
  