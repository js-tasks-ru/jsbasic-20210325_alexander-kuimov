function showSalary(users, age) {
  let res = users.map(user => (age >= user.age) ? user.name + ", " + user.balance : false);

  res = res.filter(user => user);
  res = res.join("\n");
  
  return res; 
}
