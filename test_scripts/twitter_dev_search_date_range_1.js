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

// https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-range-query.html
// results: size is one tweet between now and one day ago.
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 1,
  body: {
    query: {   	
       	range:  { 
       		"timestamp_ms": { 
       			"gte" : "now-1d/d",
       			"lt" : "now/d" 
       			}
       		}	  	
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});

// results: size is one tweet from 7/19/2017
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 1,
  body: {
    query: {   	
       	range:  { 
       		"timestamp_ms": { 
       			"gte" : "2017-07-19",
       			"lt" : "2017-07-20" 
       			}
       		}	  	
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});
