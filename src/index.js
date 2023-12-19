import nx from '@jswork/next';

const defaults = {
  interval: 200,
  timeout: 10 * 1000,
  change: nx.noop,
  done: nx.noop,
  fail: nx.noop,
  always: nx.noop,
  complete: nx.noop
};

nx.waitUntil = function (inOptions) {
  const options = nx.mix(null, defaults, inOptions);
  const startTime = Date.now();
  let timer;

  function check() {
    options.change('always');
    options.always();
    const now = Date.now();
    if (now - startTime > options.timeout) {
      clearTimeout(timer);
      options.change('fail');
      options.fail();
      return options.complete();
    }

    if (options.condition()) {
      clearTimeout(timer);
      options.change('done');
      options.done();
      return options.complete();
    } else {
      timer = setTimeout(check, options.interval);
    }
  }

  check();
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.waitUntil;
}

export default nx.waitUntil;
