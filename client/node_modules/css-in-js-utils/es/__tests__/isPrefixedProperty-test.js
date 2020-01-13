import isPrefixedProperty from '../isPrefixedProperty';
describe('Checking for prefixed properties', function () {
  it('should return true', function () {
    expect(isPrefixedProperty('WebkitTransition')).toEqual(true);
    expect(isPrefixedProperty('msTransitionDelay')).toEqual(true);
  });
  it('should return false', function () {
    expect(isPrefixedProperty('transition')).toEqual(false);
    expect(isPrefixedProperty('transitionDelay')).toEqual(false);
  });
});