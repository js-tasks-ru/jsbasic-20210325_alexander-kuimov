function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let available = table.rows[i].cells[3].getAttribute('data-available');
    let gender = table.rows[i].cells[2].innerHTML;
    let age = +table.rows[i].cells[1].innerHTML;
          
    if (available === 'true') {
      table.rows[i].classList.add('available');
    } 

    if (available === 'false') {
      table.rows[i].classList.add('unavailable');
    }

    if (available === null) {
      table.rows[i].setAttribute('hidden', '');
    } 

    if (gender === 'm') {
      table.rows[i].classList.add('male');
    }

    if (gender === 'f') {
      table.rows[i].classList.add('female');
    }

    if (!isNaN(age) && age < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }
  
  }
 
  return table;
  
}
