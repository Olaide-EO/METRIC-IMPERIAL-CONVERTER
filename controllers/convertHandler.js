/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
    this.getNum = function(input) {
      let regex = /[a-z]/i;
      let fractionRegex = /[/]/g;
      let result;
      
      let index=input.indexOf(input.match(regex));
      
      if(index==0){result=1}
      else{
        result = input.split("",index).join('');
        
        let fractionChecker = fractionRegex.test(result);
        if(fractionChecker===true){
          let doubleFractionMatch = result.match(fractionRegex);
          if(doubleFractionMatch.length!==1){
          result = 'Invalid Number';
          }
          else{
            result=eval(result);        
           }
      }else{
          result=eval(result);
           }
      }
      return result;
    };
    
    this.getUnit = function(input) {
      let regex = /[a-z]/i;
      let checker=false;
      let index=input.indexOf(input.match(regex));
      let result = input.slice(index,input.length);
      result= result.toLowerCase();
      let unitBank = ['gal','l','mi','km','lbs','kg'];
      for(let i=0; i<unitBank.length;i++){
      if(result==unitBank[i]){
      checker=true;
      }
      }
      if(checker){
      result=result;
      }else{
      result='Invalid Unit';
      }
  return result;
    };
    
    this.getReturnUnit = function(initUnit) {
      var result;
       let initialUnit = initUnit.toLowerCase();
      switch(initialUnit){
        case 'mi' : return result='km';
        case 'km' : return result='mi';
        case 'gal': return result='l';
        case 'l'  : return result='gal';
        case 'lbs': return result='kg';
        case 'kg' : return result='lbs';
        default   : return result = 'Invalid Unit';
                     }
    };
  
    this.spellOutUnit = function(unit) {
      var result;
      let initialUnit = unit.toLowerCase();
      switch(initialUnit){
        case 'mi' : return result='miles';
        case 'km' : return result='kilometers';
        case 'gal': return result='gallons';
        case 'l'  : return result='liters';
        case 'lbs': return result='pounds';
        case 'kg' : return result='kilograms';
        default   : return result = 'Invalid Unit';
                     }
    };
    
    this.convert = function(initNum, initUnit) {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      var result;
      let initialUnit = initUnit.toLowerCase();
      switch(initUnit){
        case 'mi' : return result=initNum*miToKm;
        case 'km' : return result=initNum/miToKm;
        case 'gal': return result=initNum*galToL;
        case 'l'  : return result=initNum/galToL;
        case 'lbs': return result=initNum*lbsToKg;
        case 'kg' : return result=initNum/lbsToKg;
        default   : return result = 'ERROR';
                      }
    };
    
    this.getString = function(initNum, initUnit, returnNum, returnUnit) {
      var result;
      result=initNum+' '+this.spellOutUnit(initUnit)+" converts to "+returnNum.toFixed(5)+" "+this.spellOutUnit(returnUnit);
      return result;
    };
    
  }
  
  module.exports = ConvertHandler;