## External Markdown containing JavaScript w/ 'highlight' enabled

This sample is loaded from `src` attribute and contains sample JavaScript.

```javascript
function fxbx(max) {
  let msg = '';

  for(i=1; i<=max; i++, msg='') {
    if (i % 3 === 0) {
      msg += 'fizz';
    }
    if (i % 5 === 0) {
      msg += 'buzz';
    }
    if (msg) {
      console.log(msg);
    }
  }
}
fxbx(20);
```
