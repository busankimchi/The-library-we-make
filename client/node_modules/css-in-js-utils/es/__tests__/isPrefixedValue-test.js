import isPrefixedValue from '../isPrefixedValue';
describe('Checking for prefixed values', function () {
  it('should return true', function () {
    expect(isPrefixedValue('-webkit-calc(100% - 20px)')).toEqual(true);
    expect(isPrefixedValue('-ms-transition')).toEqual(true);
  });
  it('should return false', function () {
    expect(isPrefixedValue('200px')).toEqual(false);
    expect(isPrefixedValue('calc(100% - 20px)')).toEqual(false);
  });
});