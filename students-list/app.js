const list = document.querySelector('.list');
let myStudents = [];
function showData(students) {
  list.innerHTML = '';

  students.forEach((student, index) => {
    const listItem = createMyLi(student, index);
    list.appendChild(listItem);
  });
}

function createMyLi(student) {
  const listItem = document.createElement('li');

  const btnEdit = createBtns('edit btn btn-primary', 'Modifier');
  const btnDelete = createBtns('delete btn btn-danger', 'Supprimer');
  const nameNode = createColumn('span', 'name', student.name);
  const date = new Date(student.createdAt).toLocaleDateString('fr-FR');
  const dateNode = createColumn('span', 'date', date);
  const avatarNode = createColumn('img', 'avatar', null);

  listItem.setAttribute('id', student.id);
  avatarNode.setAttribute('src', 'avatar.png');

  listItem.appendChild(avatarNode);
  listItem.appendChild(nameNode);
  listItem.appendChild(dateNode);
  listItem.appendChild(btnEdit);
  listItem.appendChild(btnDelete);
  btnEdit.addEventListener('click', editStudent);
  btnDelete.addEventListener('click', function (event) {
    if (confirm(`Souhaitez vous retirer l'élève "${student.name}"`)) {
      // list.removeChild(listItem);
      listItem.remove();
    }
  });

  return listItem;
}

function createBtns(className, text) {
  const btnElement = document.createElement('button');
  btnElement.innerHTML = text;
  btnElement.setAttribute('class', className);
  return btnElement;
}

function createColumn(type, className, data) {
  const node = document.createElement(type);
  node.setAttribute('class', className);
  if (data) {
    node.innerText = data;
  }
  return node;
}

function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    console.log('readyState', this.readyState);
    if (this.readyState === 4 && this.status === 200) {
      const students = (myStudents = JSON.parse(this.responseText));
      console.log('myStudents', myStudents);

      showData(students);
    }
  };
  //xhttp.open('GET', 'https://606ba946f8678400172e673d.mockapi.io/api/v1/students', true);
  xhttp.open('GET', 'students.json', true);
  xhttp.send();
}

loadData();
/**
 * zeczezec
 * ecuzehue
 */

function editStudent(event) {
  const li = event.target.parentNode;
  const nameSpan = li.querySelector('.name');
  const name = nameSpan.innerText;
  const id = li.id;
  var studentName = prompt('Modifier le nom', name);

  if (studentName !== '') {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      console.log('readyState', this.readyState);
      if (this.readyState === 4 && this.status === 200) {
        const student = JSON.parse(this.responseText);
        const listItem = createMyLi(student, null);
        console.log(listItem);
        li.replaceWith(listItem);

        // myStudents.map((s) => {
        //   if (s.id === id) {
        //     s.name = student.name;
        //   }
        //   return s;
        // });
        // nameSpan.innerText = student.name;
        console.log('myStudents', myStudents);
        // showData(myStudents);
      }
    };
    xhttp.open('PUT', `https://606ba946f8678400172e673d.mockapi.io/api/v1/students/${id}`, true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //xhttp.open('GET', 'students.json', true);
    const newData = {
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladyn/128.jpg',
      createdAt: '2021-04-06T14:26:30.758Z',
      id,
      name: studentName
    };
    xhttp.send(JSON.stringify(newData));
  }
}
