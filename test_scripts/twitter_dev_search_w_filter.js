'use strict';

// this code snippet can be found on https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/quick-start.html
// and here is the link to install the javascript client for elastic search: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/about.html
// https://search-es-twitter-stream-dev-rzmtjuphpnhuukihhzbhwqtapm.us-west-2.es.amazonaws.com/_plugin/kibana/

// load code
var fs = require('fs');  // node js file system library

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'http://search-es-twitter-stream-dev-rzmtjuphpnhuukihhzbhwqtapm.us-west-2.es.amazonaws.com/',
  log: 'trace'
});

// see https://www.elastic.co/guide/en/elasticsearch/reference/current/query-filter-context.html
// results: returned one tweet (-id = "888121759500705792" )
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 3,
  body: {
    query: {
    	bool: {
    	must: [
    	{ match: { 'user.id_str':'2317452498'} },
    	{ match: { 'user.location':'Andorra'} }
      	]
       	,
       	
       	filter: { range:  { "timestamp_ms": { "gte" : "2017-07-20" }}}
      	
  		}    	
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});
