mongoose  = require 'mongoose'

module.exports = (app) ->
  mongoose.model 'Users',             require('../models/user')
  return
