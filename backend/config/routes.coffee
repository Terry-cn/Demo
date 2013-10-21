module.exports = (app) ->
  user = require('./../dal/user') (app)

  app.get     '/api/userinfo/:userid',user.getDetail
  app.post    '/api/userinfo',user.save
  app.put     '/api/userinfo/:userid',user.update
  app.delete  '/api/userinfo/:userid',user.delete
