var assert = require('assert');

describe('Basic Mocha Test', function(){
    it('should throw errors', function(){
       try{
        assert.equal(3,3);
       }catch(e){

       }
    })
});