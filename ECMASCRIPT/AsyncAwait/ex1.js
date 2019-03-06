
//  If you’re still stuck in callback hell, 2014 wants its code back.
//  Just don’t use callbacks, unless it is absolutely necessary, for
//  example required by a library or for performance reasons. 
//  Promises are fine, but they’re a bit awkward to use if your codebase
//  gets bigger. My go-to solution nowadays is async / await, which
//  makes reading and improving my code a lot cleaner. In fact, you can
//  await every Promise in JavaScript, in case a library you’re using 
//  is returning a Promise, simply await it.
//  In fact, async/await is just syntactical sugar around promises. 
//  To make your code work, you only need to add the async keyword 
//  in front of a function. Here’s a quick example:

async function getData() {
    const result = await axios.get('https://dube.io/service/ping')
    const data = result.data
    
    console.log('data', data)
    
    return data
}

getData()