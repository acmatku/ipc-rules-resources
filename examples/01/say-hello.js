var fs = require('fs');
var BUFSIZE=256;
var buf = new Buffer(BUFSIZE);
var bytesRead;

var stdin = '';

while (true) {
    bytesRead = 0;
    try {
        bytesRead = fs.readSync(process.stdin.fd, buf, 0, BUFSIZE);
    } catch (e) {
        if (e.code === 'EAGAIN') {
            console.error('ERROR: interactive stdin input not supported.');
            process.exit(1);
        } else if (e.code === 'EOF') {
            break;          
        }
        throw e;
    }
    if (bytesRead === 0) {
        break;
    }
    stdin += buf.toString(null, 0, bytesRead);
}

// Insert code here. STDIN is captured in "stdin" variable
var sayHello = function(name) {
    console.log("Hello " + name + "!");
}

var i = 0;
stdin.split(/\n/).forEach(function(item) {
    if (i > 0 && i < stdin.split(/\n/).length - 1) {
        sayHello(item);
    }
    i += 1;
});
