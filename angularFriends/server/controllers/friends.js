var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');


module.exports = {



  index: function(req,res){
    
    Friend.findOne({ _id : req.params.id }, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json(result);

    });
    


    
  },

  create: function(req,res){

    console.log('In server', req.body );
    Friend.create( req.body, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json(result);

    });   


  },



  update: function(req,res){
   
    var id = req.params.id;
    Friend.update( {_id : id }, req.body, function(err,result)
    {
      if(err)
      {
        res.json(err);
      }
      else
      {
        res.json(result);
      }


    });




  },



  delete: function(req,res){
    //your code here
    Friend.remove({ _id : req.params.id  }, function(err, result){
        if(err)
        {
          res.json(err);
        }
        else
          res.json(result);

    });  



  },
  show: function(req,res){

     console.log( "server", req.body );
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