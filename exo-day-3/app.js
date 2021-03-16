window.onload = () => {
  const form1 = document.querySelector('#addForm1');
  const form2 = document.querySelector('#addForm2');

  let items = document.getElementById('items');
  let submit = document.getElementById('submit');

  let editItem = null;

  form1.addEventListener('submit', addItem);
  items.addEventListener('click', removeItem);
};

function addItem(e) {
  e.preventDefault();
}

function removeItem(e) {
  e.preventDefault();
}

function toggleButton(ref, btnID) {}
