let obj = {
    obj1: {
         sum: 5500,
         category: 'regular',
     },
     obj2: {
         sum: 3920,
         category: 'increased',
     },
     obj3: {
         sum: 1980,
         category: 'special',
     }
 };
 const regular = 0.01;
 const increased = 0.05;
 const special = 0.3;
 
 if(obj.obj1.category === 'regular'){
  ans = obj.obj1.sum * regular;
 }
 
 if(obj.obj2.category === 'increased'){
     ans2 = obj.obj2.sum * increased; 
    }
 
 if(obj.obj3.category === 'special'){
     ans3 = obj.obj3.sum * special;
    }

 console.log(obj);
 console.log(ans + ans2 + ans3 + ' рублей');