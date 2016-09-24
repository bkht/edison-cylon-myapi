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
