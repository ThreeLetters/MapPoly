Map.prototype.every = function (c) {
    var a = this.entries()
    var b;
    while (b = a.next().value) {
        if (!c(b[1], b[0])) return false;
    }
  return true;
}
Map.prototype.toArray = function () {
    var array = [];
    this.forEach(function (a) {
        array.push(a)
    })
    return array
}
Map.prototype.map = function(c) {
  var f = new Map();
 var a = this.entries()
    var b;
    while (b = a.next().value) {
        f.set(b[0],c(b[1], b[0])) 
    }
  return f;
  
}
Map.prototype.filter = function(c) {
  var f = new Map();
 var a = this.entries()
    var b;
    while (b = a.next().value) {
        if (c(b[1], b[0])) f.set(b[0],b[1])
    }
  return f;
  
}
