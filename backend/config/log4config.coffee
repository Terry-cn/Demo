exports.getConfig = ()->
  return {
  appenders:[{
    type:'console'
  },

    {
      type: 'file',
      filename: 'logs/access.log',
      maxLogSize: 1024*1024,
      backups:20,
      category: 'normal'
    },
    {
      type: 'file',
      filename: 'logs/mail.log',
      maxLogSize: 1024*1024,
      backups:20,
      category: 'mail'
    },{
      type: 'file',
      filename: 'logs/trans.log',
      maxLogSize: 1024*1024,
      backups:20,
      category: 'trans'
    },
    {
      type: 'file',
      filename: 'logs/upload.log',
      maxLogSize: 1024*1024,
      backups:20,
      category: 'upload'
    }]
  }