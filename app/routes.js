
var userSchema = require('./models/user');

 
    module.exports = function(app, express) {

     // server routes ===========================================================

    var router = express.Router(); 

    app.use('/api', router); 

     
    /* routing code starts here */ 

    router.route('/user')

        .post(function( req, res ){

            var data = req.body;

            var userObj = new userSchema();

                userObj.name = data.name ;
                userObj.username = data.username ;
                userObj.password = data.password ;

            

            userObj.save(function(err){
                if(err) res.send(err);

                res.json({message:" userObj added successfully!!!" + userObj});
            }); 
        })

        .get(function(req, res) {
            
            userSchema.find(function(err, userList) {
                if (err) res.send(err);

                res.json(userList);
            });
        });


    
     router.route('/user/:username')   

        .get(function(req, res) { 
            
            userSchema.findOne({username: req.params.username}, function(err, userObj) {
                if (err) res.send(err);

                res.json(userObj);
            });
        }) 
       

    };