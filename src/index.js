import nx from '@jswork/next';

const defaults = {
  interval: 200,
  timeout: 10 * 1000,
  onChange: nx.noop
};

nx.waitUntil = function(inConditionFn, inOptions) {
  const options = nx.mix(null, defaults, inOptions);

  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    function check() {
      options.onChange();
      const now = Date.now();
      if (now - startTime > options.timeout) return reject(new Error('Timeout'));
      if (inConditionFn()) {
        resolve();
      } else {
        setTimeout(check, options.interval);
      }
    }

    check();
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.waitUntil;
}

export default nx.waitUntil;
