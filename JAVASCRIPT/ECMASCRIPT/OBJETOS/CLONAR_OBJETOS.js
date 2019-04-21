// Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

const obj = { a: 1, b: 2 }
const shallowClone = { ...obj }
// With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.

// Other alternatives include:

{
  dasda
  dasa
}

JSON.parse(JSON.stringify(obj))
// can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).

//  is another alternative.
Object.assign({}, obj)


// is another more verbose alternative that shows the concept in greater depth.

Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})


// Good to hear
// JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.

// The same method can be used to merge two objects.