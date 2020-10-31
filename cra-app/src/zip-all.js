import { from, of, zip } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';

const fetchData = (id) => {
  return fetch(`https://api.github.com/users/${id}`).then((res) => res.json());
};

export default () => {
  return (
    <button
      className="button mt-2 is-primary is-fullwidth"
      onClick={(e) => {
        zip(fetchData('afeiship'), fetchData('tj')).subscribe((res) => {
          console.log(res);
        });
      }}>
      FetchData multiple
    </button>
  );
};
