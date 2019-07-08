var Counter = (function(){
    var count = 0;
  
    return {
        count: function() {
          return count;
        }
  
      , increment: function() {
          return count += 1;
        }
    };
  })();


Counter.increment():
Counter.count();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
Counter.count();