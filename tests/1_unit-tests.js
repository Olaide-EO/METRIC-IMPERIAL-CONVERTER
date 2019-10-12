/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '3.1KM';
      assert.equal(convertHandler.getNum(input),3.1)
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '3/2L';
      assert.equal(convertHandler.getNum(input),1.5)
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '3.3/3mi';
      assert.equal(convertHandler.getNum(input),1.0999999999999999)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '3//3mi';
      assert.equal(convertHandler.getNum(input),'Invalid Number')
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'mi';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele),ele.toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
    var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    input.forEach(function(ele){
    assert.notEqual(convertHandler.getUnit(ele),'Invalid Unit')
    })
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expected = ['gallons', 'liters', 'miles', 'kilometers','pounds','kilograms'];
      input.forEach(function(ele,i){
      assert.equal(convertHandler.spellOutUnit(ele),expected[i])
      })
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [5, 'l'];
      let expected = 1.32086;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [5, 'mi'];
      let expected = 8.0467;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
      //done();
    });
    
    test('Km to Mi', function(done) {
      let input = [5, 'km'];
      let expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [1, 'lbs'];
      let expected = 0.45359;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [1, 'kg'];
      let expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1);
      done();
    });
  });
});