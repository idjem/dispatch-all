"use strict";

const dispatch = require('../');

var dispatchInstance = new dispatch();
var sleep = require('co-sleep');

describe("Bsimple register and dispatch", function(){
  var server = null;

  it("must start the server", function(done){
    dispatchInstance.register(function* (payload){
      console.log(payload);
      yield sleep(500);
      if(payload == "Hellow Word")
        done();
    })
    
    setTimeout(function(){
      dispatchInstance.dispatch("Hellow Word");
    } , 500)
  });

});


