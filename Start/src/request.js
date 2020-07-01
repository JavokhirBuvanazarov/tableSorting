import products from './products'
/** True = 65%, False = 35% */
const rejectByChance = () => {
  return Math.random() <= 0.35;
};

/** Emulate get request */
export const getProducts = () => new Promise((resolve, reject) => {
  const delay = parseInt(Math.random() * 1000);
  setTimeout(() => {
    // console.log(products)
    // return for resolve qolip ketipti
    return resolve(products);
  }, delay);
  if (rejectByChance()) {
    return reject({
      error: 'Server error'
    });
  }
});

/** Emulate delete request */
export const deleteProducts = () => new Promise((resolve, reject) => {
  if (rejectByChance()) {
    return reject({
      error: 'Server error'
    });
  }
  const delay = parseInt(Math.random() * 1000);
  setTimeout(() => {
    resolve({ message: 'deleted' });
  }, delay);
});
