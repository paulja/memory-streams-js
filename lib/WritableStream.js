
//------------------------------------------------------------------
// Dependencies

var Stream = require('stream')
  , util   = require('util');


//------------------------------------------------------------------
// Exports

module.exports = WritableStream;
  
  
//------------------------------------------------------------------
// WritableStream class

util.inherits(WritableStream, Stream.Writable);

function WritableStream () {
  Stream.Writable.call(this);
}

WritableStream.prototype._write = function(chunk, encoding) {
  this.write(chunk, encoding);
};

WritableStream.prototype.toString = function() {  
  return this.toBuffer().toString();
};

WritableStream.prototype.toBuffer = function() {
  var buffers = [];
  this._writableState.buffer.forEach(function(data) {
    buffers.push(data.chunk);
  });
  
  return Buffer.concat(buffers);
};