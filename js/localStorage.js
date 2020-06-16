/* ------------------------------- */

/* Define local storage variables */

let timeZone = document.getElementById('timezone');
let saveButton = document.querySelector('.save');
let emailNoti = document.querySelector('.switch1 label input');
let publicNoti = document.querySelector('.switch2 label input');
let cancelButton = document.querySelector('.cancel');

window.onload = function () {
  savedEmail();
  savedPublic();
  savedTimeZone();
};

function savedEmail() {
  let emailPref = JSON.parse(localStorage.getItem('email'));
  if (emailPref !== 'null') {
    if (emailPref == false) {
      emailNoti.checked = false;
    }
    if (emailPref == true) {
      emailNoti.checked = true;
    }
  }
}

function savedPublic() {
  let publicPref = JSON.parse(localStorage.getItem('public'));
  if (publicPref !== null) {
    if (publicPref == false) {
      publicNoti.checked = false;
    }
    if (publicPref == true) {
      publicNoti.checked = true;
    }
  }
}

function savedTimeZone() {
  let prefTime = localStorage.getItem('time');

  if (prefTime !== 'null') {
    timeZone.value = prefTime;
  }
}

/* Create the save button and save any items to local storage */

saveButton.addEventListener('click', (e) => {
  localStorage.setItem('time', timeZone.value);
  if (emailNoti.checked !== 'null') {
    localStorage.setItem('email', emailNoti.checked);
  }
  if (publicNoti.checked !== 'null') {
    localStorage.setItem('public', publicNoti.checked);
  }
  localStorage.setItem('time', timeZone.value);
});

/* Cancel button setting all storage items to null */

cancelButton.addEventListener('click', (e) => {
  localStorage.setItem('time', (timeZone.value = null));
  localStorage.setItem('email', (emailNoti.checked = null));
  localStorage.setItem('public', (publicNoti.checked = null));
});
