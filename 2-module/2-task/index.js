function isEmpty(obj) {
  for (let key in obj) {
    if (obj[key] || typeof obj[key] == 'undefined') {
      return false;
    }
  }

  return true;
}
