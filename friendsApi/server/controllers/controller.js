var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


module.exports = {



  index: function(req,res){
    
    Friend.findOne({ name : req.params.id }, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json(result);

    });
    


    
  },

  create: function(req,res){

    Friend.create({ name : req.params.id  }, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json(result);

    });   


  },
  // update: function(req,res){
  //   //your code here
  //   res.json({placeholder:'update'});
  // },
  delete: function(req,res){
    //your code here
    Friend.remove({ name : req.params.id  }, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json({ message : req.params.id + ' has been deleted'  });

    });  



  },
  show: function(req,res){
 
     Friend.find({}, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json(result);

    });
    }




}