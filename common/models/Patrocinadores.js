'use strict';

module.exports = function (Patrocinadores) {

  Patrocinadores.silver = function (cb) {

    cb(null, true)

  }


  Patrocinadores.remoteMethod('silver', {
    description: 'Mostrar patrocinadores Silver',
    http: {
      path: '/silver',
      verb: 'get'
    },
    returns: {
      arg: 'patrocinadores',
      type: 'object'
    }
  })

};
