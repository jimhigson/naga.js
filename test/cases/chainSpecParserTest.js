
DependentTestCase(
   'naga-chainSpecParser'
,  ['naga/chainSpecParser']

,  {  
      'test can parse': function(chainSpecParser) {
         assertEquals(
            ['plant', 'withFluff', 'withSpikes', 'withTastiness'],
            chainSpecParser('plant().withFluff(a).withSpikes(b).withTastiness(c)')
         );
      }

   }
);