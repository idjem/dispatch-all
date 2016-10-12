"use strict";

const dispatch = require('../');
const expect   = require('expect.js');

var dispatchInstance = new dispatch();
var sleep = require('co-sleep');

describe("Bsimple register and dispatch", function(){
  var server = null;
  var s = 0 
  it("must start the server", function(done){
    dispatchInstance.register(function* (payload){
      yield sleep(500);
      if(payload == "Hellow Word")
        s++;
    })

  dispatchInstance.register(function* (payload){
      console.log(payload);
      yield sleep(1000);
      if(payload == "Hellow Word")
        s++
      expect(s).to.be(2);
      throw 'aaa'
      done();
    })
    
    setTimeout(function(){
      dispatchInstance.dispatch("Hellow Word")
      .catch(function(err){
        console.log(err)
        process.nextTick(function(){
          expect(false).to.be(true); //detatch to throw error
        })
      })
    } , 500)
  });

});


