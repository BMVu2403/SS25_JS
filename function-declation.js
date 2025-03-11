// 1. Sử dụng tiếng anh để đặt tên hàm
// 2. Bắt đầu với một động từ
// 3. Truyền vào các tham số cụ thể
// 4. Comment hàm đầy đủ

// Khai báo một hàm tính tổng 2 số nguyên, có 2 tham số a và b

/**
 * Hàm tính tổng hai số nguyên
 * @param {*} firstNumber Số nguyên thứ nhất
 * @param {*} secondNumber Số nguyên thứ hai
 * @returns Tổng 2 số nguyên
 * Auth: (11/03/2025)
 * UpdateAt:...
 */
function sum(firstNumber,secondNumber) {
    const total = firstNumber + secondNumber;
    return total;
    console.log(`Tổng 2 số ${firstNumber} và ${secondNumber} = ${total}`);
}

// Việc khai báo lại hàm

function sum(firstNumber){
    return firstNUmber;
}

// Gọi hàm
const result = sum (5,6);
console.log ("Result: ", result);

let resultDiv = div(10);
console.log("resultDiv:",result);

function div(firstNUmber){
    return firstNUmber / 2;
}

(function sayHello() {
    console.log("Hello world");
})();

