const carts = [];

/**
 * Hàm thêm giá vào giỏi hành
 * @param {*} price Giá lấy từ người dùng
 * @returns Giỏ hàng sau khi thêm
 * Auth:BMV (11/02/2025)
 */

const addPrice = (price) => {
    // Thêm giá vào cuối mảng
    carts.push(price);

    // Trả về giỏi hàng sau khi thêm
    return carts;
};

const updatePrice = (index,newPrice) => {};
// Cập nhật giá trị phần tử trong mảng
carts[index]=newPrice;

// Trả về giỏ hàng sau khi cập nhật
return carts;

const removePrice = () => {};

const totalAmount = () => {};

const resultAdd1 = addPrice(10000);
const resultAdd2 = addPrice(20000);
const resultAdd3 = addPrice(30000);

console.log("resultAdd3",resultAdd3);