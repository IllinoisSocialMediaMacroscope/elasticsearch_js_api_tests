'use strict';

// this code snippet can be found on https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/quick-start.html
// and here is the link to install the javascript client for elastic search: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/about.html
// https://search-es-twitter-stream-dev-rzmtjuphpnhuukihhzbhwqtapm.us-west-2.es.amazonaws.com/_plugin/kibana/

// check the es server health
var fs = require('fs');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'http://search-es-twitter-stream-dev-rzmtjuphpnhuukihhzbhwqtapm.us-west-2.es.amazonaws.com/',
  log: 'trace'
});


client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
