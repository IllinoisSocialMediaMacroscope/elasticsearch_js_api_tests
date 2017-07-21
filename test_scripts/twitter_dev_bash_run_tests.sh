#!/bin/bash

# run different node js client tests on twitter_dev

node twitter_dev_check_es_health.js > twitter_dev_check_es_health.results.txt 2> searcherrs.txt

node twitter_dev_search_user_mentions_name.js > twitter_dev_search_user_mentions_name.results.txt 2> searcherrs.txt

node twitter_dev_search_w_space_btwn_words.js > twitter_dev_search_w_space_btwn_words.results.txt 2> searcherrs.txt

## for the search below the query with 'match' returns data, but the query with 'term' does not  (see notes below)
node twitter_dev_search_match_vs_term.js > twitter_dev_search_match_vs_term.results.txt 2> searcherrs.txt

## exact search for user_mentions.name using 'term' and 'keyword' to find exact hit.
node twitter_dev_search_exact.js > twitter_dev_search_exact.results.txt 2> searcherrs.txt

node twitter_dev_search_w_filter.js > twitter_dev_search_w_filter.results.txt 2> searcherrs.txt
# NOTES

# difference between term and match from https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-term-query.html

# Why doesn’t the term query match my document?
# String fields can be of type text (treated as full text, like the body of an email), 
# or keyword (treated as exact values, like an email address or a zip code). 
# Exact values (like numbers, dates, and keywords) have the exact value specified in the 
# field added to the inverted index in order to make them searchable.
# 
# However, text fields are analyzed. This means that their values are first passed t
# hrough an analyzer to produce a list of terms, which are then added to the inverted index.
# 
# There are many ways to analyze text: the default standard analyzer drops most 
# punctuation, breaks up text into individual words, and lower cases them. 
# For instance, the standard analyzer would turn the string “Quick Brown Fox!” into 
# the terms [quick, brown, fox].
# 
# This analysis process makes it possible to search for individual words 
# within a big block of full text.
# 
# The term query looks for the exact term in the field’s inverted index — it doesn’t 
# know anything about the field’s analyzer. This makes it useful for looking up values in 
# keyword fields, or in numeric or date fields. When querying full text fields, use 
# the match query instead, which understands how the field has been analyzed.