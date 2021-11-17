# operaters
- https://rxjs.dev/guide/operators

## ellis 问题分析
1. 上传资源会用到数据库/搜索/队列几个服务
2. 刚才的问题就是服务器挂了，导致队列服务(sidekiq)没有把数据更新到搜索服务中去
3. 前端问题表现是：上传资源成功了，但无法在搜索中搜索到，再次上传同样的内容又会提示资源已经存在
4. 解决方式: 恢复服务器，启动 sidekiq 服务(目前这个服务是随服务器一起启动的)

## create
- ajax: 通过 XMLHTTPRequet 对象产生 observerble
- bindCallback: 含有 callback 的函数，产生 observerble
- bindNodeCallback: 同上，只不过是用在 nodejs 中的< It's just like bindCallback, but the callback is expected to be of type callback(error, result).>
- defer: 看不懂
- emtpy: 初始化一个空的 observerble 流
- from: 从数组/arrayLike/promise/an iterable object, or an Observable-like object 创建流
- fromEvent: 从整件创建流
- fromEventPattern: 不太懂，从一个 add/remove 这种成对的创建
- generate: 根据条件生成数据，再产生流
- interval: 产生类似于 setInteval 方式的流
- of: of(1,2,3) 这种数据中产生流
- range(1,10, -1) 这种数据中产生流
- throwError: 从 error 中产生流
- timer: 类似于 setTimeout 方式?
- iif: true 会后面的流， false 为再后面的流（类似于 if...else)

## join
- combineLatest: 不理解： 当有多个长时间存活的 Observable，且依赖彼此，共同完成某些计算逻辑时，适合使用 CombineLatest.
- concat: 按顺序执行
- forkJoin： 不理解 
- merge: 与 concat 类似，这个是无序的
- partition：按一定规则，分割成不同的部分
- race：哪个先完成用哪个流
- zip：不理解：打包流
- zip与 combineLatest: https://blog.csdn.net/u010176097/article/details/102579886



## transformation
- buffer/buffer*: 不理解
- concatMap: 组合的，先不这
- concatMapTo: 组合的，先不学
- exhaust: -> exhaustAll 在 v8 中会废弃掉; 似懂非懂: 当前流正在操作的时候，直接丢弃其它的流
- exhaustMap: 组合的，先不学
- expand: 不理解


```js
import * as fs from 'fs';
import { bindNodeCallback } from 'rxjs';

const readFileAsObservable = bindNodeCallback(fs.readFile);
const result = readFileAsObservable('./README.md', 'utf8');


result.subscribe(
  (x) => console.log(x),
  (e) => console.error(e)
);
```


```js
import { defer, fromEvent, interval } from 'rxjs';

const clicksOrInterval = defer(function () {
  return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
});

clicksOrInterval.subscribe((x) => console.log(x));
```


## 几大打平操作符
1. 当 actions 既不应该被中止，也不应该被忽略，并且其次序也必须保持不变，请使用 concatMap。它也是个保守的选择，因此其行为总是可以被预测的。
2. 当 actions 既不应该被中止，也不应该被忽略，并且其次序并不重要，请使用 mergeMap。
3. 和读取相关的 actions，并且当有同类型的 action 发出时这些原有 actions 应该被中止，请使用 switchMap (example: autocomplete)
4. 当有同类型的 action 发出时，原有的 actions 应该被忽略，请使用 exhaustMap。 (example: 一次重要的提交操作)

