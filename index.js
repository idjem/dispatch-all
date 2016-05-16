"use strict"
const _prefix = 'ID_';

class Dispatcher{

  constructor() {
    this._callbacks = {};
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
    for (var id in this._callbacks) {
      this._callbacks[id](payload);
    }
  }
}


module.exports = Dispatcher;
