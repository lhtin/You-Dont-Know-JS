function a() {
    "use strict";
    console.log(this)
    console.log(this.b);
}

var b = 1;
a();