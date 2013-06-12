
// if not doing with, can shortcut with separate vars - write on wiki!
/*

with(Naga.exporting('gatheringArgs', 'calledWith')) {

   function length(array) {
      return array.length
   }

   given( gatheringArgs(length) )
      .when(calledWith(1,2,3,4))
         .then(4);

   given( gatheringArgs(length) )
      .when(calledWith([1,2,3,4]))
         .then(1);

}
*/