import cssifyDeclaration from '../cssifyDeclaration';
describe('Cssifying declarations', function () {
  it('should return a valid css declaration', function () {
    expect(cssifyDeclaration('width', '300px')).toEqual('width:300px');
    expect(cssifyDeclaration('WebkitFlex', '1')).toEqual('-webkit-flex:1');
    expect(cssifyDeclaration('msTransitionDuration', '3s')).toEqual('-ms-transition-duration:3s');
  });
});