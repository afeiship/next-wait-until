import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { useEffect } from 'react';
import BindEvent from './bind-event';

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
    </div>
  );
}

export default App;
