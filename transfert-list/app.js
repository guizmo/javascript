const btnAll = document.querySelector('#list-btn');
const showNbitem = document.querySelector('#compteurItems');
const showNbSelect = document.querySelector('#compteurSelected');

let numItemCheck = 0;
let numItemSelect = 0;
// area to display different items
let listItems = document.querySelector('#list-items');
let listItemsSelect = document.querySelector('#list-selected');
let selectedNames = document.getElementById('selectNames');

var checkbox = document.querySelectorAll('input[type=checkbox]');

// tab to stock checked items
let tabItemsCheck = [];

showNbitem.innerText = listItems.children.length + ' items';
showNbSelect.innerText = listItemsSelect.children.length + ' Selected';

for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('change', function () {
    if (this.checked) {
      tabItemsCheck.push(this.parentElement);
    } else {
      // find index for unchecked target to remove specific item
      const itemDelCheck = tabItemsCheck.indexOf(this.parentElement);
      tabItemsCheck.splice(itemDelCheck, 1);
    }
  });
}

btnAll.addEventListener('click', function (event) {
  console.log(event.target);
  if (event.target.className === 'transfert') {
    const list = event.target.id === 'push-right' ? listItemsSelect : listItems;
    writeData(list);
  }
});

function writeData(list) {
  const nameList = [];
  for (let i = 0; i < tabItemsCheck.length; i++) {
    tabItemsCheck[i].firstElementChild.checked = false;
    list.appendChild(tabItemsCheck[i]);
  }

  for (let i = 0; i < listItemsSelect.children.length; i++) {
    const elem = listItemsSelect.children[i].querySelector('label');
    nameList.push(elem.innerText);
  }

  tabItemsCheck = [];
  showNbSelect.innerText = listItemsSelect.children.length + ' Selected';
  showNbitem.innerText = listItems.children.length + ' items';
  selectedNames.innerText = nameList.join(', ');
}
