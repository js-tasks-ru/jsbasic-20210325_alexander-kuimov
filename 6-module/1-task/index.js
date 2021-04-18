/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = rows;
  }

  removeListener(table) {
    table.addEventListener('click', function(event) {
      let target = event.target;
      if (target.tagName == 'BUTTON') {
        let td = target.parentElement;  
        td.parentNode.remove();
      }
    });
  }

  set elem(rows) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let head = document.createElement('tr');
    let name = document.createElement('td');
    let age = document.createElement('td');
    let salary = document.createElement('td');
    let city = document.createElement('td');
    let action = document.createElement('th');

    name.innerText = 'Имя';
    age.innerText = 'Возраст';
    salary.innerText = 'Зарплата';
    city.innerText = 'Город';

    head.appendChild(name);
    head.appendChild(age);
    head.appendChild(salary);
    head.appendChild(city);
    head.appendChild(action);

    thead.appendChild(head);
   
    for (let item in rows) {
      let tr = document.createElement('tr');
      let btn = document.createElement('button'); 
      let act = document.createElement('td');

      let obj = rows[item];
      
      for (let key in obj) {
        let td = document.createElement('td');
        td.innerText = obj[key];
        tr.appendChild(td);
      }
      
      btn.innerText = 'X';
      act.appendChild(btn);
      tr.appendChild(act);

      tbody.appendChild(tr);
    }
  
    table.appendChild(thead);
    table.appendChild(tbody);

    this._elem = table;
    this.removeListener(table);
  }

  get elem() {
    return this._elem;
  }

}