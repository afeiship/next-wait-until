import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { useEffect } from 'react';
import BindEvent from './bind-event';
import FetchProfile from './fetch-profile';
import FetchProfileWin from './fetch-profile-win';

function App() {
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
    <div className="container p-4">
      <BindEvent />
      <FetchProfile />
      <FetchProfileWin />
    </div>
  );
}

export default App;
