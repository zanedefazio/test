var request = require('request');
var chai = require('chai');
var assert = chai.assert;

describe('API Routes:', function() {
  it('GET: entries found', function(done) {
    request('http://localhost:8080/api', function(error, response, body) {
      assert.equal(response.statusCode, 200)
      done();
    });
  });

  it('POST: entry added', function(done) {
    request({
      method: 'POST',
      url: 'http://localhost:8080/api',
      json: { title: 'blank', author: 'blank' }
    },
    function(error, response, body) {
      assert.equal(response.statusCode, 200)
      done();
    });
  });

  it('PUT: entry updated', function(done) {
    request({
      method: 'PUT',
      url: 'http://localhost:8080/api',
      json: { title: 'untitled', author: 'blank' }
    },
    function(error, response, body) {
      assert.equal(response.statusCode, 200)
      done();
    });
  });

  it('DELETE: entry deleted', function(done) {
    request({
      method: 'DELETE',
      url: 'http://localhost:8080/api',
      json: { title: 'untitled' }
    },
    function(error, response, body) {
      assert.equal(response.statusCode, 200)
      done();
    });
  });
});
