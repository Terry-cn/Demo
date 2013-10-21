express     = require 'express'
log4js      = require 'log4js'
mongoose    = require 'mongoose'
log4config  = require './log4config'
routes      = require './routes'
models      = require './models'


module.exports = () ->
  app = express()

  log4js.configure log4config.getConfig()

  #全局变量
  global.config = {
    domain: '127.0.0.1:3000',
    dev: true,
    recordVideoPath: 'D:\\Red5\\webapps\\ttmlive\\streams',
    uploadS3Times: 10,
    interval: 5000,
    logger: log4js.getLogger('normal')
  }

  server = app.listen(8007)

  # Mongo
  dblink = process.env.MONGOHQ_URL || 'mongodb://localhost/NodeDemo'

  #捕获未处理异常，避免Node崩溃
  process.on 'uncaughtException', (err, req, res)->
    global.config.logger.error err


  db = mongoose.createConnection(dblink)

  app.configure ->
    #使用了express.bodyParser后，Backbone POST的数据才能通过req.body.{param}获取到
    app.use express.bodyParser
      keepExtensions: true
      #uploadDir: global.path.uploadDir
      defer: true

    app.use log4js.connectLogger(global.config.logger, {level: log4js.levels.INFO, format: ':method :status :url'})
    app.disable 'multipart'
    app.set '_server', server
    app.set 'db',
      'main': db

    app.use '/', express.static(path.join(__dirname, '../../public'))

    app.use express.methodOverride()
    app.use express.cookieParser()
    app.use express.session
      secret: 'poynt'

    models app
    routes app

  return app


