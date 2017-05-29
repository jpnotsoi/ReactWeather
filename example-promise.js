// async callback
function getTempCallback (location, callback) {
  callback(undefined, 78); //success
  callback('City not found'); //error
}

getTempCallback('London', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    // set delay -- to test the delay  and async
    setTimeout(function() {
      resolve(79);
      reject('City not found2');
    }, 1000);
  });
}

getTempPromise('London').then(function (temp) {
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});

// how to check whether the var is a number
// if (typeof 7 === 'number') {
//
// }

// Challenge Area
function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('it is not number');
    }
  });
}

addPromise(0,10).then(function(temp) {
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});

addPromise('SSS',10).then(function(temp) {
  console.log('promise success', temp);
}, function(err){
  console.log('promise error', err);
});
