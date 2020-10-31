# get-started
- https://rxjs-dev.firebaseapp.com/guide/overview
- https://cn.rx.js.org/

## hello dom event
```js
  <button id="btn1">HelloButton</button>
  <script>
    var button = document.querySelector('button');
      rxjs.fromEvent(button, 'click')
        .subscribe(() => console.log('Clicked!'));
  </script>
```

## Purity

```js
var button = document.querySelector('button');
rxjs.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times`));
```
