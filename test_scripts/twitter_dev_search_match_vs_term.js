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


//
// Note: trying to figure out why match returns data but term does not (is some cases)
//



// get 3 results (size: 3) where "ReneeEdwards23" is found in user.screen_name name.
// results: returned tweets with "Abby" or "Abby Bedard" found anywhere in user_mentions name
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 3,
  body: {
    query: {
      term: {
      	'user.screen_name':'ReneeEdwards23' 
      }
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});

// get 3 results (size: 3) where "ReneeEdwards23" is found in user.screen_name name.
// results: returned tweets with "Abby" or "Abby Bedard" found anywhere in user_mentions name
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 3,
  body: {
    query: {
      match: {
      	'user.screen_name':'ReneeEdwards23' 
      }
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});

