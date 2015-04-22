var should = require('chai').should();
var utils = require('../../lib/utils');

describe('utils', function() {
  describe('getSailsDBConnections', function() {
    var sailsConnections = {
      oracle_EODS: {
        config: {
          tns: '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.1.1)(PORT = 1522))(CONNECT_DATA =(SID = ORCL)))',
          user: 'user',
          password: 'pass',
          migrate: 'safe',
          adapter: 'sails-oracledb',
          identity: 'oracle_EODS' }
      },
      mysql: {
        config: {
          tns: '(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.1.2)(PORT = 1522))(CONNECT_DATA =(SID = ORCL)))',
          user: 'user',
          password: 'pass',
          migrate: 'safe',
          adapter: 'sails-mysql',
          identity: 'oracle_EODS'
        }
      }
    };

    it('should return all sails-db connection keys', function() {
      Object.keys(utils.getSailsDBConnections(sailsConnections)).length.should.eql(1);
      Object.keys(utils.getSailsDBConnections(sailsConnections))[0].should.eql('oracle_EODS');
    });
  });
});