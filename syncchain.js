var bitcore = require('bitcore-multicoin');
var Node = require('./lib/Node');
var MongoStore = require('./lib/MongoStore');
var helper = require('./lib/helper');
var config = require('./lib/config');

var p2pNodes = {};

MongoStore.initialize(['dogecoin'], function(err, netname) {
  var node = new Node(netname);
  p2pNodes[netname] = node;
  node.updateMempool = true;
  node.synchronize = true;
  node.run();
});

