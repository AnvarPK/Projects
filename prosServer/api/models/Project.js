/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	schema:true,
  attributes: {
  	proId:{
  		type:'string',
  		required:true
  	},
  	proName:{
  		type:'string',
  		required:true
  	},
  	proTitle:{
  		type:'string',
  		required:true
  	},
  	proDes:'string',
  	proColor:'string'



  }
};

