import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { useEffect, useRef } from 'react';

// https://stackblitz.com/edit/rxjs-merge-map-and-swith-map
// 多次点击，并不会有重复触发 interval 的问题

export default () => {
  const btn = useRef(null);

  useEffect(() => {
    if (!btn.current) return;
    const click$ = fromEvent(btn.current, 'click');
    const interval$ = interval(1000);
    const observable$ = click$.pipe(
      switchMap((event) => {
        return interval$;
      })
    );
    const res = observable$.subscribe((num) => console.log(num));

    return () => {
      return res.unsubscribe();
    };
  });

  return (
    <button ref={btn} className="button mt-2 is-primary is-fullwidth">
      SwitchMap for rxjs
    </button>
  );
};
