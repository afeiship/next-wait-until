# curd
- api 的 curd 本质需求是从异步的 observerble 里拿值

## rxjs 之 map
- map
- mapTo
- switchMap
- exhaustMap
- mergeMap(flatMap)
- concatMap

1. 本质上他们都是 map 方法
2. 不改变类型的 map，即 number in, number out，使用 map
3. 将值映射成固定值用 mapTo
4. 需要将值映射成 observerble 的，请使用 switchMap/exhaustMap/mergeMap/concatMap


## switchMap
```js
import { defer, of, fromEvent, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const btn1 = document.getElementById('btn1');
const $click = fromEvent(btn1, 'click');
const data$ = switchMap(() => fetch('https://api.github.com/users/afeiship'));

$click
  .pipe(
    data$,
    switchMap((v) => v.json())
  )
  .subscribe((e) => {
    console.log('e::::', e);
  });
```


## react-spa 项目
```js
import { defer, of, fromEvent, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const btn1 = document.getElementById('btn1');
const click$ = fromEvent(btn1, 'click');
const data$ = switchMap(() => nx.$api.resourse_list({ courseType: 'abc-english'}));

click$
  .pipe( data$ )
  .subscribe((e) => {
    console.log('e::::', e);
  });
```
