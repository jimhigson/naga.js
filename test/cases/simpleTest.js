
/* this is a very simple test that is really just useful to confirm jstd is working
*  while debugging. It should always pass.  */

GreeterTest = TestCase("SimpleTest",{

   'testSomethingWithoutBell': function(){
      assertEquals("foo", "foo");
   }

});