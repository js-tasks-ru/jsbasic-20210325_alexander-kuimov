function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  
  let html = friends.map(function(friend) {
    return `<li>${friend.firstName} ${friend.lastName}</li>`;
  });
  
  ul.innerHTML = `<l1>${html}</li>`;

  return ul;
}
