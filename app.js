/**
 * @file Google Map テスト
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCGDCL9Cf2wYuTh0Er_KiqYlgasj-BRFds'
});

// Geocode an address.
const address = '東京駅'
googleMapsClient.geocode({
    address: address
}, function (error, response) {
    if (error) {
        console.log('error:', error);
    } else {
        const json = JSON.stringify(response.json.results, undefined, 2);
        console.log(`[${address}] --> geocode -->${json}`);
    }
});