
DependentTestCase(
   'naga-add'
,  ['naga/add']

,  {  
      'test adds': function(add) {
               
         assertEquals(5, add(2, 3));
      }
   ,
      'test is curryable': function(add) {
      
         var add2 = add(2);
         
         assertEquals(4, add2(2));
      }

   }
);