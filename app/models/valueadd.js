	 
	// grab the mongoose module
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema,
	db = require('../../config/db'),
	autoIncrement = require('mongoose-auto-increment');

	 
	
	var connection = mongoose.createConnection(db.url);
 	autoIncrement.initialize(connection);
	

	// create a schema
	var  valueAddSchema = new Schema({
		 accName: String, 
		 valGoals: String,
		 initiative: String, 
		 _description: String,
		 custBenefit: String,	
		 operBenefit: String,
		 targetDate: String,
		 currentStatus: String,
		 custCommStatus: String,
		 hardCashSavings: String,
		 potentialImpact: String,
		 sourceOfOpportunity: String,
		 processScope: String,
		 projectType: String,
		 methodology: String,
		 _location: String,
		 empName: String,
		 empId: String,
		 supervisorName: String,
		 supervisorEmpId: String,
		 plEmpId: String,
		 mentorEmpId: String,
		 iouName: String,
		 clientName: String,
		 improvementProjectName: String,
		 problemStatement: String,
		 businessCase: String,
		 intOrExtProject: String,
		 swon: String,
		 spmName: String 
	});
 
	// the schema is useless so far
	// we need to create a model using it
	//valueAddSchema.plugin(autoIncrement.plugin, 'ValueAddSchema');
	valueAddSchema.plugin(autoIncrement.plugin, {
    model: 'ValueAddSchema',
    field: 'ValueAdd_Id',
    startAt: 100,
    incrementBy: 1
});
	var ValueAddSchema = mongoose.model('ValueAddSchema', valueAddSchema);

	// make this available to our users in our Node applications
	module.exports = ValueAddSchema;  
  