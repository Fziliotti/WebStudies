var app = express()


// This example shows a middleware function with no mount path. The function is executed every time the app receives a request.
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})


// This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })



// Middleware can also be declared in an array for reusability.

// This example shows an array with a middleware sub-stack that handles GET requests to the /user/:id path

function logOriginalUrl (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
} 

function logMethod(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

var logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, function (req, res, next) {
  res.send('User Info')
})
