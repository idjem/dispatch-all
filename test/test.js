"use strict";

const dispatch = require('../');

var dispatchInstance = new dispatch();

describe("Bsimple register and dispatch", function(){
  var server = null;

  it("must start the server", function(done){
    dispatchInstance.register(function(payload){
      console.log(payload);
      if(payload == "Hellow Word")
        done();
    })
    
    setTimeout(function(){
      dispatchInstance.dispatch("Hellow Word");
    } , 1000)
  });

});


