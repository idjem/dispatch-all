"use strict"
const co = require('co');
const values   = require('mout/object/values');
const parallel = require('co-parallel');


const _prefix  = 'ID_';


class Dispatcher{

  constructor() {
    this._callbacks = {};
    this._lastID    = 0;
  }

  /**
   * @param callback : (payload : <payload>) => void
   * @returns {number}
   */
  register(callback){
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  }

  /**
   * @param {number}
   */
  unregister(id){
    delete this._callbacks[id];
  }


  /**
   * @param payload : <payload>
   */
  dispatch(payload){
    var cb = values(this._callbacks)
    cb = cb.map(function(yiealdble){
      return (function*(){yield yiealdble(payload)})
    })

    return co(function *(){
      var res = yield parallel(cb, 5);
      return res
    })
  }
}


module.exports = Dispatcher;




