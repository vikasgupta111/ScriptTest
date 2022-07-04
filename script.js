header('Content-Type: text/javascript');

setTimeout(()=>{
    throw new Error('hello js error from test.js file');
    console.log("Hello after 10seconds");
  },10000)
