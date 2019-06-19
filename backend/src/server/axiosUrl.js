import axios from 'axios';
import btoa from 'btoa';

let username = '8d5243ad-bd42-48dc-860b-3b58af';
let password = 'MYSPORTSFEEDS';

const url = axios.create({
  baseURL: `https://api.mysportsfeeds.com/v2.1/pull/nfl`,
  headers: {
    Authorization: 'Basic ' + btoa(username + ':' + password),
    'Cache-Control': 'no-cache, no-store, must-revalidate'
  }
});

export default url;
