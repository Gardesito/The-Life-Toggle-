let listaDeCheckbox = document.querySelectorAll("input");

function dinero() {
  listaDeCheckbox[1].addEventListener("change", function () {
    if (listaDeCheckbox[1].checked == true) {
      listaDeCheckbox[0].checked = false;
    } else {
      listaDeCheckbox[0].checked = true;
      listaDeCheckbox[2].checked = true;
    }
  });
}
dinero();

function tiempo() {
  listaDeCheckbox[0].addEventListener("change", function () {
    if (listaDeCheckbox[0].checked == true) {
      listaDeCheckbox[1].checked = false;
    } else {
      listaDeCheckbox[1].checked = true;
      listaDeCheckbox[2].checked = true;
    }
  });
}
tiempo();

function energia() {
  listaDeCheckbox[2].addEventListener("change", function () {
    if (listaDeCheckbox[2].checked == true) {
      listaDeCheckbox[1].checked = false;
    } else {
      listaDeCheckbox[1].checked = true;
      listaDeCheckbox[0].checked = true;
    }
  });
}
energia();
/* 
for (let i = 0; i < listaDeCheckbox.length; i++) {
  listaDeCheckbox[i].addEventListener("change", function () {

    if(listaDeCheckbox[0] ==){

    }
  });
}
listaDeCheckbox[2].checked = true; */

/* for (var i = 0; i < listaDeCheckbox.length; i++) {
  listaDeCheckbox[i].addEventListener("change", function () {
    updateBugs(this);
  });
}

function updateBugs(changedElement) {
  var listaDeCheckboxMarcados = document.querySelectorAll("input:checked").length;
  if (listaDeCheckboxMarcados === 0) {
    turnOnRandomBug(changedElement);
    if (Math.random() > 0.85) {
      turnOnRandomBug(changedElement);
    }
  }
}

function turnOnRandomBug(excluding) {
  turnOn = Math.floor(Math.random() * listaDeCheckbox.length);

  if (listaDeCheckbox[turnOn] === excluding) {
    turnOn = turnOn + 1;
    if (turnOn > listaDeCheckbox.length - 1) {
      turnOn = 0;
    }
  }

  listaDeCheckbox[turnOn].checked = true;
} */

/* setTimeout(function () {
  turnOnRandomBug(null);
}, 400); */
