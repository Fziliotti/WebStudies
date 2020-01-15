Proxy pattern
A proxy is an object that controls access to another object, called subject. Both have identical interface and this allows us to transparently swap one for the other. A proxy intercepts all or some of the operations that are meant to be executed on the subject, modifying their behavior.

A proxy is useful to several circumstances like data validation,security, caching, lazy loading, logging or making remote object appear like local.


There are some techniques for implementing proxies like object augmentation, object composition or just use the Proxy object introduced in ES6. Composition can be considered the safest way of creating a proxy as it doesn’t modify the subject so we are going to use it in the code example.

