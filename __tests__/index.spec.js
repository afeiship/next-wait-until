require('../src');

jest.setTimeout(60 * 1000);

describe('api.basic test', (inConditionFn, inOptions) => {
  test('wait when resolved', function(done) {
    let flag = false;
    let count = 0;
    setTimeout(() => {
      flag = true;
    }, 3 * 1000);
    nx.waitUntil(() => flag, {
      onChange() {
        count++;
      }
    }).then(() => {
      expect(count > 0).toBe(true);
      done();
    });
  });

  test('wait when timeout error', function(done) {
    let flag = false;
    let count = 0;
    const timer = setTimeout(() => {
      flag = true;
    }, 5 * 1000);

    nx.waitUntil(() => flag, {
      timeout: 3000,
      onChange() {
        count++;
      }
    }).catch((err) => {
      expect(err.message).toBe('Timeout');
      clearTimeout(timer);
      done();
    });
  });
});
