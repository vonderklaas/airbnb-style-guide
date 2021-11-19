const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');

  // process.exit();
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

const obj = {
  hello: function () {
    console.log('Hello!');
  },
};

obj.hello();

class A {
  foo() {
    console.log('Hello World!');
  }
}

A.foo();
