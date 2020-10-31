import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { useEffect } from 'react';

export default () => {
  const handleClick$ = new Subject();

  useEffect(() => {
    handleClick$.pipe(throttleTime(1000)).subscribe((e) => {
      console.log(e);
    });

    return () => {
      handleClick$.unsubscribe();
    };
  });

  return (
    <button
      className="button is-primary is-fullwidth"
      onClick={(e) => {
        handleClick$.next(e);
      }}>
      BindEvent with rxjs
    </button>
  );
};
