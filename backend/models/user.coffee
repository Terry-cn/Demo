mongoose  = require 'mongoose'
Schema    = mongoose.Schema
ObjectId  = Schema.Types.ObjectId

Users = module.exports = new Schema
  username:String
  pwd:String
  isFree:Boolean
  email:String
  gender:String
  isprofessional:Boolean
  honorid:[{ type: ObjectId }]
  age:Number
  image:String
  tags:[
    {type:ObjectId,ref:'Tags'}
  ]
  details:[String]
  class:String
  specialty1:String
  specialty2:String
  groups:[{ type: ObjectId }]
  reputation:{
    count:Number
  }
  bio:String
  badges:[{ type: ObjectId }]
  reg_at :{
    type:Date,

    'default':Date.now
  }
  lastlogin_at :{
    type:Date,

    'default':Date.now
  }
  invites:[
    String
  ]
  isactive:
    type:Boolean
    default :true
