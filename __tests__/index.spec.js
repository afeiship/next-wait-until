require('../src');

jest.setTimeout(60 * 1000);

/**
 * todo: Test 有问题，但还没有定位到原因
 */

describe('api.basic test', () => {
  test('wait when resolved', function() {
    let flag = false;
    let count = 0;

    setTimeout(() => {
      flag = true;
    }, 3 * 1000);

    nx.waitUntil({
      ife: () => flag,
      always() {
        console.log('count++');
        count++;
      },
      done() {
        console.log('done..............');
      }
    });
  });

  test('wait when timeout error', function(done) {
    let flag = false;
    let count = 0;
    const timer = setTimeout(() => {
      flag = true;
    }, 5 * 1000);

    nx.waitUntil({
      timeout: 3 * 1000,
      ife: () => flag,
      always() {
        count++;
      },
      fail() {
        clearTimeout(timer);
        expect(count).toBe(2);
        done();
      }
    });
  });
});
