try {
    try {
      throw new Error("oops");
    }
    catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    }
    finally {
      console.log("finally");
      return;
    }
  }
  catch (ex) {
    console.error("outer", ex.message);
  }
  
  // Resultado:
  // "inner" "oops"
  // "finally"