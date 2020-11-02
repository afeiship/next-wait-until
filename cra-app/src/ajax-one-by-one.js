import { from, of, zip, combineLatest } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { mergeAll, map, concatAll } from 'rxjs/operators';

/**
 * 这个实例不是合适的用法
 * @param {*} id
 */
const fetchData = (id) => {
  return fetch(`https://api.github.com/users/${id}`).then((res) => res.json());
};

const obs$ = of('afeiship', 'tj');

export default () => {
  console.log(obs$);
  return (
    <button
      className="button mt-2 is-primary is-fullwidth"
      onClick={(e) => {
        obs$.pipe(
          map(v => from(fetchData(v))),
          concatAll()
        ).subscribe(res=>{
          console.log(res);
        })
      }}>
      ajax one by one(map + concatAll = concatMap)
    </button>
  );
};
