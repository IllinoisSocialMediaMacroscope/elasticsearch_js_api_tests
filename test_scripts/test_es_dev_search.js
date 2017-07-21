'use strict';

// this code snippet can be found on https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/quick-start.html

// and here is the link to install the javascript client for elastic search: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/about.html

// https://search-es-twitter-stream-dev-rzmtjuphpnhuukihhzbhwqtapm.us-west-2.es.amazonaws.com/_plugin/kibana/


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

// this search does not return any hits - joeT 7/6/2017 - now it does, change tweets to tweet
// client.search({
//   index: 'twitter_dev',
//   type: 'tweet',
//   size: 1,
//   body: {
//     query: {
//       match: {
//         hashtags: 'python'
//       }
//     }
//   }
// }).then(function (resp) {
//     var hits = resp.hits.hits;
// }, function (err) {
//     console.trace(err.message);
// });


// this search does not return any hits - joeT 7/6/2017 - now it does, change tweets to tweet
client.search({
  index: 'twitter_dev',
  type: 'tweet',
  size: 20,
  body: {
    query: {
      match: {
      	'user_mentions.name':'Abby' 
      }
    }
  }
}).then(function (resp) {
    var hits = resp.hits.hits;
}, function (err) {
    console.trace(err.message);
});










//  now it does, change tweets to tweet
// client.search({
//   index: 'twitter',
//   type: 'tweet',
//   size: 1,
//   body: {
//     query: {
//       match: {
//         _all: 'SQL'
//       }
//     }
//   }
// }).then(function (resp) {
//     var hits = resp.hits.hits;
// }, function (err) {
//     console.trace(err.message);
// });
// 
// //  now it does, change tweets to tweet
// client.search({
//   index: 'twitter',
//   type: 'tweet',
//   size: 1,
//   body: {
//     query: {
//       match: {
//         hashtags: 'livemusic'
//       }
//     }
//   }
// }).then(function (resp) {
//     var hits = resp.hits.hits;
// }, function (err) {
//     console.trace(err.message);
// });
// 

