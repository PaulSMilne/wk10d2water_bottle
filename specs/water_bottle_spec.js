var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water bottle', function({
     it('should be empty at start', function(){
          assert.equals(0, bottle.volume);
     })
}));