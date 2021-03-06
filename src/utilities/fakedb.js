// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  }
  else {
    // shopping_cart = JSON.parse(exists);
    shopping_cart = exists;
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    }
    else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
}

const getDb = () => {
  let exists = localStorage.getItem('shopping_cart');
  if (exists) {
    exists = JSON.parse(exists)
  }
  return exists;
}

const updateDb = cart => {
  localStorage.setItem('shopping_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const shopping_cart = exists;
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  // return exists ? JSON.parse(exists) : {};
  return exists ? exists : {}
}

const clearTheCart = () => {
  localStorage.removeItem('shopping_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart, getDb }
