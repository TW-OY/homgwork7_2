describe('score-to-grade-spec', function() {

  it('up_border_90-100 expect s', function() {
    var result = scoreTograde(100);
    expect(result).toEqual('s');
  });

  it('between_90-100 expect s', function() {
    var result = scoreTograde(95);
    expect(result).toEqual('s');
  });
  it('down_border_90-100 expect s', function() {
    var result = scoreTograde(90);
    expect(result).toEqual('s');
  });
  it('between_80-90 expect a', function() {
    var result = scoreTograde(85);
    expect(result).toEqual('a');
  });
  it('down_border_80-90 expect a', function() {
    var result = scoreTograde(80);
    expect(result).toEqual('a');
  });
  it('between_70-80 expect b', function() {
    var result = scoreTograde(75);
    expect(result).toEqual('b');
  });
  it('down_border_70-80 expect b', function() {
    var result = scoreTograde(70);
    expect(result).toEqual('b');
  });
  it('between_60-70 expect c', function() {
    var result = scoreTograde(65);
    expect(result).toEqual('c');
  });

  it('down_border_60-70 expect c', function() {
    var result = scoreTograde(60);
    expect(result).toEqual('c');
  });
  it('below_60 expect d', function() {
    var result = scoreTograde(40);
    expect(result).toEqual('d');
  });
  it('invalid_socre<0 expect throw error param error', function() {
    var result = function(){scoreTograde(-1);};
    expect(result).toThrowError('param error');
  });
  it('invalid_socre>100 expect throw error param error', function() {
    var result = function(){scoreTograde(120);};
    expect(result).toThrowError('param error');
  });
  it('invalid input expect throw error invalid input', function() {
    var result = function(){scoreTograde('a');};
    expect(result).toThrowError('invalid input');
  });
});
