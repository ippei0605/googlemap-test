/**
 * @file Google Map テスト
 * @author Ippei SUZUKI
 */

'use strict';

// モジュールを読込む。
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCGDCL9Cf2wYuTh0Er_KiqYlgasj-BRFds',
    Promise: Promise
});

// 2地点のキーワード (住所、ランドマークなど)
const fromTo = ['東京駅', '新宿駅'];

Promise.all(fromTo.map((item) => {
    return googleMapsClient.geocode({address: item}).asPromise();
}))
    .then((value) => {
        const locations = value.map((item) => {
            return item.json.results[0].geometry.location;
        });
        return googleMapsClient.distanceMatrix({
            origins: locations[0],
            destinations: locations[1],
            language: 'ja',
            mode: 'walking' // 直線距離に近いか？
        }).asPromise();
    })
    .then((distanceMatrix) => {
        console.log(JSON.stringify(distanceMatrix.json, undefined, 2));
    })
    .catch((error) => {
        console.log('error:', error);
    });
