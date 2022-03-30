var assert = require('assert');
var converter = require('../src/index');

describe('Converter', async function () {
  // Write your code here
  it('length converter', async () => {
    assert.equal(converter.lengthConvert(4, 5), 20);
  });

  it('weight converter', async () => {
    assert.equal(converter.weightConverter(10, 5), 2);
  });

  it('temperature converter', async () => {
    let c = 1,
      p = 2,
      f = 3;
    let result = c * p + f;
    assert.equal(converter.tempConverter(c, p, f), result);
  });

  it('speed converter', async () => {
    assert.equal(converter.speedConverter(4, 5), 20);
  });
});
