function resolveIn(milliseconds) {
  return new Promise(resolve => setTimeout(() => resolve(milliseconds), milliseconds));
}

resolveIn(1000).then(() => {
  console.log('A:1000 msec have passed');

  resolveIn(1000).then(() => {
    console.log('A:child timer have passed');
  });
});

resolveIn(2000).then(() => {
  console.log('B:2000 msec have passed');
});
