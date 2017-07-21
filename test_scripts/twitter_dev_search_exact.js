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

// get 3 results (size: 3) where "Abby Bedard" is found in user_mentions name.
// results: returned "Abby Bedard" found in user_mentions name  ## see that is uses keyword
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 3,
  body: {
    query: {
    	term: {
      		
      			'user_mentions.name.keyword':'Abby Bedard' 
      		
      	}
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});


// results: returned "Abby Bedard" found in user_mentions name  ## see that is uses keyword
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 3,
  body: {
    query: {
    	term: {
      		
      			'user_mentions.name':'Abby Bedard' 
      		
      	}
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});
