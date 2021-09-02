// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

// -- JSON 

// Example JSON
// {
//     "browsers": {
//       "firefox": {
//         "name": "Firefox",
//         "pref_url": "about:config",
//         "releases": {
//           "1": {
//             "release_date": "2004-11-09",
//             "status": "retired",
//             "engine": "Gecko",
//             "engine_version": "1.7"
//           }
//         }
//       }
//     }
// }

// -- JSON.parse -- 
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj)
// expected output: "{result":true, "count":42}

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

// -- JSON.stringfy --
// The JSON.stringify() method converts a JavaScript object or value to a JSON string

console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""

// Syntax
// JSON.stringify(value)
// JSON.stringify(value, replacer)
// JSON.stringify(value, replacer, space)