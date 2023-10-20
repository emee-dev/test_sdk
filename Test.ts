// import { EventEmitter } from 'events';

// class MyLog {
//   private eventEmitter: EventEmitter;

//   constructor() {
//     this.eventEmitter = new EventEmitter();
//   }

//   log(message: string) {
//     // Log the message locally
//     console.log(message);

//     // Emit an event to notify other instances
//     this.eventEmitter.emit('log', message);
//   }

//   // Attach a callback to handle log events
//   onLog(callback: (message: string) => void) {
//     this.eventEmitter.on('log', callback);
//   }

//   // Remove a callback to stop listening to log events
//   offLog(callback: (message: string) => void) {
//     this.eventEmitter.removeListener('log', callback);
//   }
// }

// // Example usage:

// const myLogInstance1 = new MyLog(); // AppListener
// const myLogInstance2 = new MyLog(); // RouterListener

// // Attach a callback to instance 2 to log messages
// const logCallback = (message: string) => {
//   console.log(`Instance 2 received log: ${message}`);
// };
// myLogInstance2.onLog(logCallback);

// myLogInstance1.log('Log message from instance 1');
// myLogInstance1.log('Log message from instance 1');
// // This will log locally in instance 1 and trigger the event for instance 2

// // To stop listening to log events in instance 2
// myLogInstance2.offLog(logCallback);

let defaultMask = '**********';

function maskFields(payload: any, blackList: (string | number)[] = []) {
  let temp = {};

  for (let property in payload) {
    // Blacklist value
    if (blackList.includes(property)) {
      payload[property] = defaultMask;
    }

    // For array values
    if (blackList.includes(payload[property])) {
      payload[property] = defaultMask;
    }

    // For arrays base case
    if (Array.isArray(payload[property])) {
      maskFields([...payload[property]], blackList);
    }

    // For objects base case
    if (typeof payload[property] === 'object' && !Array.isArray(payload[property])) {
      maskFields(payload[property], blackList);
    }

    temp = { ...payload };
  }

  return { ...temp };
}

const userAgents = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/54.0',
];

const contentTypes = ['application/json', 'application/xml', 'text/plain', 'multipart/form-data', 'application/x-www-form-urlencoded'];

const authorizationTypes = ['Bearer', 'Basic'];

const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];

const rawHeaders = {
  'User-Agent': getRandomElement(userAgents),
  'Content-Length': Math.floor(Math.random() * 1000).toString(),
  'Content-Type': getRandomElement(contentTypes),
  Authorization: `${getRandomElement(authorizationTypes)} ${Math.random().toString(36).substring(7)}`, // Random token for authorization
  host: 'example.com',
  Accept: 'application/json',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'Cache-Control': 'no-cache',
  Connection: 'keep-alive',
  Referer: 'http://example.com',
  Origin: 'http://example.com',
  DNT: '1',
  Pragma: 'no-cache',
  'Upgrade-Insecure-Requests': '1',
  'X-Requested-With': 'XMLHttpRequest',
  'X-Forwarded-For': '127.0.0.1',
  'X-Real-IP': '127.0.0.1',
  'X-Frame-Options': 'DENY',
  // Add more headers as needed
};

let headers = {
  // 'user-agent': req.headers['user-agent']!,
  // 'content-length': req.headers['content-length']!,
  // 'content-type': req.headers['content-type']!,
  // host: 'example.comr',

  // ...maskFields(rawHeaders, ['Upgrade-Insecure-Requests']),
  ...pickFields({ host: 'example.comr' }),
};

function pickFields(favHeaders: any) {
  let headers = { ...rawHeaders, ...favHeaders };
  return { ...maskFields(headers, ['Upgrade-Insecure-Requests']) };
}

console.log(headers);
