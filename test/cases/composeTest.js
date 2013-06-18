
DependentTestCase(
   'naga-compose'
,  ['naga/compose', 'naga/add', 'naga/multiply']

,  {  
      'test compose works with two functions': function(compose, add, multiply) {
      
         var add1 = add(1),
             add2 = add(2);
             
         var add3 = compose( add1, add2);
         
         assertEquals(5, add3(2));
      }
,
      'test compose works with one functions': function(compose, add, multiply) {
      
         var add1 = add(1);
             
         var anotherAdd1 = compose( add1 );
         
         assertEquals(3, anotherAdd1(2));
      }
,
      'test compose works with zero functions is an identity': function(compose, add, multiply) {
                 
         var identity = compose();
         
         assertEquals(2, identity(2));
      }
      

   }
);