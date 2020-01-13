import unprefixProperty from '../unprefixProperty';
describe('Unprefixing properties', function () {
  it('should unprefix the property', function () {
    expect(unprefixProperty('msFlex')).toEqual('flex');
    expect(unprefixProperty('WebkitFlex')).toEqual('flex');
  });
  it('should keep an unprefixed property', function () {
    expect(unprefixProperty('flex')).toEqual('flex');
    expect(unprefixProperty('padding')).toEqual('padding');
  });
});