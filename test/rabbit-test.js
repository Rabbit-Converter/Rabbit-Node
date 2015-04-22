var fs = require('fs');
var sample = JSON.parse(fs.readFileSync('test/sample.json', 'utf8'));
var Rabbit = require("../index");
var len = sample.zg.length;

exports['test zawgyi to unicode'] = function(assert) {
  
  for (var i = 0; i < len; i++) {
    assert.equal(Rabbit.zg2uni(sample.zg[i]), sample.uni[i], 'Pass Zg to Uni - case ' + (i+1));
  };
}

exports['test unicode to zawgyi'] = function(assert) {
  for (var i = 0; i < len; i++) {
    assert.equal(Rabbit.uni2zg(sample.uni[i]), sample.zg[i], 'Pass Uni to Zg - case ' + (i+1));
  };
}

if (module == require.main) require('test').run(exports)