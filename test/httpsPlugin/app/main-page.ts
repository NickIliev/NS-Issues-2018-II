
import { EventData } from 'tns-core-modules/data/observable';

import * as Https from 'nativescript-https';


export function navigatingTo(args: EventData) {

}

export function makeRequest() {
    Https.request({
        url: 'https://httpbin.org/get',
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(function(response) {
        console.log('Https.request response', response)
    }).catch(function(error) {
        console.error('Https.request error', error)
    })
}