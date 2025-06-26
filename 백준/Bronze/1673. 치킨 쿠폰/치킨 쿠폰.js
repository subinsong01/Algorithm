const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let line of input) {
  const [na, ka] = line.trim().split(' ');
  let n = parseInt(na);
  const k = parseInt(ka);

  let chicken = n;
  let stamp = n;

  while (stamp >= k) {
    const coupon = Math.floor(stamp / k);
    chicken += coupon;
    stamp = stamp % k + coupon; 
  }

  console.log(chicken);
}
