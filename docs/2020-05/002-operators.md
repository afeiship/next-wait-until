# operators

## Flow
```js
var button = document.querySelector('button');
    var res = rxjs.fromEvent(button, 'click')
      .pipe(
        rxjs.operators.throttleTime(1000),
        rxjs.operators.scan(count => count + 1, 0),
      )
      .subscribe((count) => console.log('Clicked!' + count));
```
