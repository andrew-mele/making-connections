console.log('page loaded...');

function editProfile() {
  var e = document.getElementById('name');
  if (e.innerHTML === 'Jane Doe') {
    e.innerHTML = 'Bob Barker';
  } else {
    e.innerHTML = 'Jane Doe';
  }
}

function hideRequestor() {
  document.getElementsByClassName('connection-request-1')[0].style.visibility =
    'hidden';
}

function hideButton() {
  document.getElementsByClassName('connection-request-2')[0].style.visibility =
    'hidden';
}

function connectionRequestCount(num) {
  if (document.querySelector('#num').innerText != 0) {
    document.querySelector('#num').innerText--;
  }
}
