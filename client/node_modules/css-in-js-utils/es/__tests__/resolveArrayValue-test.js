import resolveArrayValue from '../resolveArrayValue';
describe('Resolving array values', function () {
  it('should return a concatenated css value', function () {
    expect(resolveArrayValue('width', ['300px', '100px'])).toEqual('300px;width:100px');
  });
  it('should hyphenate property names', function () {
    expect(resolveArrayValue('WebkitFlex', [1, 2, 3])).toEqual('1;-webkit-flex:2;-webkit-flex:3');
  });
});