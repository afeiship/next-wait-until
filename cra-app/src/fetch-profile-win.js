import { of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export default () => {
  return (
    <button
      className="button mt-2 is-primary is-fullwidth"
      onClick={(e) => {
        from(fetch('https://api.github.com/users/afeiship'))
          .pipe(
            switchMap((response) => {
              if (response.ok) {
                // OK return data
                return response.json();
              } else {
                // Server is returning a status requiring the client to try something else.
                return of({ error: true, message: `Error ${response.status}` });
              }
            })
          )
          .subscribe((res) => {
            console.log('win data:', res);
          });
      }}>
      Fetch(win) data
    </button>
  );
};
