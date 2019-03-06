var isTrue = function(value, callback) {
    if (value === true) {
      callback(null, "Value was true.")
    } else {
      callback(new Error("Value is not true!"))
    }
  }
  
  var callback = function(error, retval) {
    if (error) {
      console.log(error)
      return
    }
    console.log(retval)
  }
  
  isTrue(false, callback)
  isTrue(true, callback)
  
  /*
    { stack: [Getter/Setter],
      arguments: undefined,
      type: undefined,
      message: 'Value is not true!' }
    Value was true.
  */