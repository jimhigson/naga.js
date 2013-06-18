
DependentTestCase(
   'naga-compose'
,  ['naga/compose', 'naga/add', 'naga/multiply']

,  {  
      'test compose works': function(compose, add, multiply) {
      
         var add3 = compose( add(2), add(1) );
         
         assertEquals(5, add3(2));
      }

   }
);