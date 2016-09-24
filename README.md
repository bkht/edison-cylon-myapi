# edison-cylon-myapi

This is using the Intel Edison and Arduino Breakout Kit
You can turn the on-board LED on and off using:
```
$ curl http://edison01:3000/api/lighton
$ curl http://edison01:3000/api/lightoff
```
----------
Express web interface
----------

```
$ mkdir myapi
$ cd myapi
$ touch app.js
$ npm init
$ npm install gulp candyman --save-dev
$ npm install cylon cylon-intel-iot cylon-gpio cylon-i2c express --save
```

`app.js`

```
var Cylon = require('cylon');
var app = require('express')();

Cylon.robot({
    connections: {
        edison: { adaptor: 'intel-iot' }
    },

    devices: {
        led: { driver: 'led', pin: 13 }
    },

    work: function(my) {
        // every((0.5).second(), my.led.toggle);
        app.get('/api/lighton', function(){
            my.led.turnOn();
        });
        app.get('/api/lightoff', function(){
            my.led.turnOff();
        });
        app.listen(3000);
    }
}).start();
```

```
root@edison01:~/myapi# npm install --production
```

