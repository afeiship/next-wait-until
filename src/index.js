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
    options.always();
    options.change('always');
    const now = Date.now();
    if (now - startTime > options.timeout) {
      clearTimeout(timer);
      options.complete();
      options.change('fail');
      return options.fail();
    }

    if (options.condition()) {
      clearTimeout(timer);
      options.complete();
      options.change('done');
      return options.done();
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
