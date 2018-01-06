var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
res.json({ message: 'Hooray! Create a Job Now!' });
});

module.exports = router;

var Job = require ('./jobSchema.js');

router.route('/job')   
 .post(function(req, res) {
      var job = new Job();
      job.Name = req.body.Name;
      job.Amount = req.body.Amount;
      job.DueDate= req.body.DueDate;
      job.jobNo= req.body.jobNo; 
      job.AcctNo= req.body.AcctNo;    
      job.Frequency= req.body.Frequency;     
      job.Priority= req.body.Priority;      
      job.IsPaid= req.body.IsPaid; 

      job.save(function(err) {      
             if (err)   
             res.send(err);
        res.json({ message: 'Job Created!' 
        }); 
      }); 
  });
 
 router.route('/job')   
  .get(function(req, res) {
      Job.find(function(err, job) {
          if (err)                
              res.send(err);            
              res.json(job);        
      });    
  });


// router.route ('/job')
// .get(function(req,res){
// 	var timestamp = req.params.start;
// 	if (moment(timestamp).isValid()){
// 		start = moment(timestamp);
// 	}

// 	else {
// 		start = moment(parseInt(timestamp)*1000);
// 	};
	
// 	var timestamp1 = req.params.end;
// 	if (moment(timestamp1).isValid()){
// 		end = moment(timestamp1);
// 	}

// 	else {
// 		end = moment(parseInt(timestamp1)*1000);
// 	}
	

// Bill.find ({
// 	DueDate: {$gte:start,$lte:end}
// }).exec (function (err,bill){
// 	if (err)
// 	res.send(err);
// 	res.json(bill);
// });
// });


router.route('/job/:id')  
 .post(function(req, res) {        
      Job.findById(req.params.id, function(err, job) {       
      if (err)                
        res.send(err);            
      
      job.Name = req.body.Name;
      job.Amount = req.body.Amount;
      job.DueDate= req.body.DueDate;
      job.jobNo= req.body.jobNo; 
      job.AcctNo= req.body.AcctNo;    
      job.Frequency= req.body.Frequency;     
      job.Priority= req.body.Priority;      
      job.IsPaid= req.body.IsPaid;         

      job.save(function(err) {                
        if (err)                    
          res.send(err);                
        res.json({ message: 'Job updated!' 
        });            
      });        
    });    
  })



router.route('/job/:id') 
  .delete(function(req, res) {
      Job.remove({
      _id: req.params.id
      }, function(err, bill) {
        if (err)
          res.send(err);
          res.json({ message: 'Successfully deleted' });
      });
    });