import _ from 'lodash';

const DevHostname = [
    'localhost'
]

const stagingHostname = [
    'pixbrand.me'
]

// const ProductionHostname = [
//     'pixbrand.me'
// ]

// const regex = /(192)\.(168)(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])){2}$/gm
export const host = window.location.host;
export const hostname = window.location.hostname;
export const protocol = window.location.protocol;


const development = {
    BASE_URL: 'http://159.203.84.49/http://pixbrand.me/reach-live',
    BASE_NAME: '',
    PUBLIC_URL:''
}


const staging = {
    BASE_URL: 'http://159.203.84.49/http://pixbrand.me/reach-live',
    BASE_NAME: '/reach-live',
    PUBLIC_URL:'http://159.203.84.49/http://pixbrand.me/reach-live'
}

// console.log(hostname, 'hostname')

export const Config = _.includes(DevHostname, hostname) ? development
    : staging;

    

export const BASE_URL = Config.BASE_URL;
export const BASE_NAME = Config.BASE_NAME;
export const PUBLIC_URL = Config.PUBLIC_URL;