import assignStyle from '../assignStyle';
describe('Assinging styles', function () {
  it('should merge properties', function () {
    expect(assignStyle({
      color: 'red'
    }, {
      fontSize: 12
    }, {
      lineHeight: 1
    })).toEqual({
      color: 'red',
      fontSize: 12,
      lineHeight: 1
    });
  });
  it('should overwrite properties from right to left', function () {
    expect(assignStyle({
      fontSize: 12
    }, {
      fontSize: 16
    }, {
      fontSize: 11
    })).toEqual({
      fontSize: 11
    });
  });
  it('should merge nested objects', function () {
    expect(assignStyle({
      fontSize: 12,
      ob2: {
        color: 'red'
      },
      ob3: {
        color: 'red'
      }
    }, {
      fontSize: 16,
      ob2: {
        fontSize: 12
      }
    }, {
      fontSize: 11,
      ob3: {
        color: 'blue'
      }
    })).toEqual({
      fontSize: 11,
      ob2: {
        color: 'red',
        fontSize: 12
      },
      ob3: {
        color: 'blue'
      }
    });
  });
  it('should not overwrite objects other than the first one', function () {
    var ob1 = {
      color: 'red'
    };
    var ob2 = {
      fontSize: 12
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      color: 'red',
      fontSize: 12
    });
    newOb.foo = 'bar';
    expect(ob1).toEqual({
      color: 'red'
    });
    expect(ob2).toEqual({
      fontSize: 12
    });
  });
  it('should use the first object as base', function () {
    var ob1 = {
      color: 'red'
    };
    var ob2 = {
      fontSize: 12
    };
    var newOb = assignStyle(ob1, ob2);
    expect(newOb).toEqual({
      color: 'red',
      fontSize: 12
    });
    expect(ob1).toEqual(newOb);
    newOb.foo = 'bar';
    expect(ob1).toEqual({
      color: 'red',
      fontSize: 12,
      foo: 'bar'
    });
  });
  it('should not recursively call assignStyle for null values', function () {
    var ob1 = {
      fontSize: 10
    };
    var ob2 = {
      margin: null
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: 10,
      margin: null
    });
  });
  it('should merge array values (array-single)', function () {
    var ob1 = {
      fontSize: ['10px', '10rem']
    };
    var ob2 = {
      fontSize: 20
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: ['10px', '10rem', 20]
    });
  });
  it('should merge array values (single-array)', function () {
    var ob1 = {
      fontSize: 10
    };
    var ob2 = {
      fontSize: ['10px', '20vw']
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: [10, '10px', '20vw']
    });
  });
  it('should merge array values (array-array)', function () {
    var ob1 = {
      fontSize: ['20pt', 10]
    };
    var ob2 = {
      fontSize: ['10px', '20vw']
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: ['20pt', 10, '10px', '20vw']
    });
  });
  it('should merge array values without duplicates (array-single)', function () {
    var ob1 = {
      fontSize: ['10px', '10rem']
    };
    var ob2 = {
      fontSize: '10px'
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: ['10rem', '10px']
    });
  });
  it('should merge array values without duplicates (array-array)', function () {
    var ob1 = {
      fontSize: ['20px', '10rem', '10px']
    };
    var ob2 = {
      fontSize: ['10px', 5, '10rem']
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: ['20px', '10px', 5, '10rem']
    });
  });
  it('should merge array values without duplicates (single-array)', function () {
    var ob1 = {
      fontSize: '10px'
    };
    var ob2 = {
      fontSize: ['10rem', '10px']
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: ['10rem', '10px']
    });
  });
  it('should not recursively call assignStyle for null values', function () {
    var ob1 = {
      fontSize: 10
    };
    var ob2 = {
      margin: null
    };
    var newOb = assignStyle({}, ob1, ob2);
    expect(newOb).toEqual({
      fontSize: 10,
      margin: null
    });
  });
});