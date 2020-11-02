import { from, of, zip, combineLatest, interval } from 'rxjs';
import { startWith, map, concatAll, scan, take } from 'rxjs/operators';


const obs$ = interval(1000);

export default () => {
  console.log(obs$);
  return (
    <button
      className="button mt-2 is-primary is-fullwidth"
      onClick={(e) => {
        obs$
          .pipe(
            startWith(10),
            // scan((next, res)=> next - 1),
            take(10)
          )
          .subscribe((res) => {
            console.log(res);
          });
      }}>
      StartWith/Countdown
    </button>
  );
};
