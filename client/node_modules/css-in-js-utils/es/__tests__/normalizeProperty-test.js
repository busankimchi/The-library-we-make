import normalizeProperty from '../normalizeProperty';
describe('Normalizing properties', function () {
  it('should camel case hypenated properties', function () {
    expect(normalizeProperty('transition-delay')).toEqual('transitionDelay');
  });
  it('should unprefix properties', function () {
    expect(normalizeProperty('WebkitTransitionDelay')).toEqual('transitionDelay');
  });
  it('should unprefix and camel case properties', function () {
    expect(normalizeProperty('-webkit-transition-delay')).toEqual('transitionDelay');
  });
});