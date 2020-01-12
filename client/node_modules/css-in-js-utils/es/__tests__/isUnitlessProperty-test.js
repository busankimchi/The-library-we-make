import isUnitlessProperty from '../isUnitlessProperty';
describe('Checking for unitless CSS properties', function () {
  it('should return true for unitless properties', function () {
    expect(isUnitlessProperty('fontWeight')).toEqual(true);
    expect(isUnitlessProperty('flex')).toEqual(true);
    expect(isUnitlessProperty('gridColumn')).toEqual(true);
  });
  it('should return true for hypenated unitless properties', function () {
    expect(isUnitlessProperty('font-weight')).toEqual(true);
    expect(isUnitlessProperty('grid-column')).toEqual(true);
  });
  it('should return true for prefixed unitless properties', function () {
    expect(isUnitlessProperty('WebkitFlex')).toEqual(true);
    expect(isUnitlessProperty('msFlex')).toEqual(true);
    expect(isUnitlessProperty('WebkitColumnCount')).toEqual(true);
    expect(isUnitlessProperty('msColumnCount')).toEqual(true);
  });
  it('should return true for hypenated prefixed unitless properties', function () {
    expect(isUnitlessProperty('-webkit-flex')).toEqual(true);
    expect(isUnitlessProperty('-ms-flex')).toEqual(true);
    expect(isUnitlessProperty('-webkit-column-count')).toEqual(true);
    expect(isUnitlessProperty('-ms-column-count')).toEqual(true);
  });
  it('should equal false for other properties', function () {
    expect(isUnitlessProperty('fontSize')).toEqual(false);
    expect(isUnitlessProperty('font-size')).toEqual(false);
    expect(isUnitlessProperty('-webkit-border-radius')).toEqual(false);
    expect(isUnitlessProperty('-ms-border-radius')).toEqual(false);
    expect(isUnitlessProperty('WebkitBorderRadius')).toEqual(false);
    expect(isUnitlessProperty('msBorderRadius')).toEqual(false);
  });
});