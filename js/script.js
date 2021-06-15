/// function  sumstring

function sumStrings(a, b) { 
   
   if(isNaN(a)||isNaN(b)){
       return "please enter in corect number"
   }

   function cash (value, index) {                             
       if (!value) {                                          
           return;                                            
       }
       this[index] = (this[index] || 0) + value;              
       if (this[index] > 9) {                                 
           cash.bind(this)(this[index]/10 |0, index + 1); 
           this[index] %= 10;                                 
       }
   }

   var array1 = a.split('').map(Number).reverse()           
     var  array2 = b.split('').map(Number).reverse();         

   array1.forEach(cash, array2);                             
   return array2.reverse().join('');   
}                       

document.write(sumStrings('5200000', '6000000') + '<br>')

