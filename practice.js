const carts = [];

const prices = [];

/**
 * Hàm thêm giá vào giỏ hàng
 * @param {*} price Giá lấy từ người dùng
 * @returns Giỏ hàng sau khi thêm
 * Auth: NVQUY (11/03/2025)
 */
const addPrice = (array, price) => {
  // Thêm giá vào cuối mảng
  array.push(price);

  // Trả về giỏ hàng sau khi thêm
  return array;
};

/**
 *
 * @param {*} index
 * @param {*} newPrice
 * @returns
 */
const updatePrice = (array, index, newPrice) => {
  // Cập nhật giá trị cho phần tử trong mảng
  array[index] = newPrice;

  // Trả về giỏ hàng sau khi cập nhật
  return array;
};

/**
 *
 * @param {*} index
 * @returns
 */
const removePrice = (array, index) => {
  if (index < 0 || index > array.length) {
    return "Vị trí không hợp lệ";
  }

  // Xóa vị trí của phần tử trong mảng
  array.splice(index, 1);

  return array;
};

/**
 *
 * @param {*} price
 * @returns
 */
const formatMoney = (price) => {
  return price.toLocaleString("it-IT", { style: "currency", currency: "VND" });
};

/**
 *
 * @returns
 */
const totalAmount = (array) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return formatMoney(total);
};

const resultAdd1 = addPrice(prices, 10000);
const resultAdd2 = addPrice(prices, 20000);
const resultAdd3 = addPrice(prices, 30000);

console.log("resultAdd3: ", resultAdd3);

const resultUpdate1 = updatePrice(prices, 0, 40000);
console.log("resultUpdate1: ", resultUpdate1);

const resultRemove1 = removePrice(prices, 10);
console.log("resultRemove1: ", resultRemove1);

const resultTotalAmount = totalAmount(prices);
console.log("resultTotalAmount: ", resultTotalAmount);