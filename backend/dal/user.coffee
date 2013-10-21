routes  = {}
app     = null
db      = null
users   = null
module.exports = (app) ->
  db = app.set 'db'
  users = db.main.model 'Users'
  return routes

routes.getDetail = (req,res)->

  users.findById req.params.userid,(err,model)->
    if err
      res.json 500,err
    else
      if model.length == 0
        res.send 404
      else
        res.json model

routes.save = (req,res)->
  user = new users req.body
  user.save (err,model)->
    if err
      res.json 500,err
    res.json model

routes.update = (req,res)->
  users.findByIdAndUpdate req.params.userid,req.body,(err,model,numberAffected)->
    if err
      res.json 500,err
    else
      console.log model,numberAffected
      if !model
        res.send 404
      else
        res.json model

routes.delete = (req,res)->
  users.remove {_id:req.params.userid},(err)->
    if err
      res.json 500,err
    res.send 200

