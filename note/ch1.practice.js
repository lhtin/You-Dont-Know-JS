var TAX_RATE = .3;
var PHONE_PRICE = 4000;
var ACCESSORY_PRICE = 10;
var THRESHOLD = 100;
var BALANCE = 10000;

function getTax(amount) {
    return amount * TAX_RATE;
}

function format(price) {
    return '$' + Number(price).toFixed(2);
}

var phone_amount = 0;
var accessory_amount = 0;
while (true) {
    if (phone_amount + PHONE_PRICE
        + accessory_amount + ACCESSORY_PRICE
        <= BALANCE) {
        phone_amount += PHONE_PRICE;
        if (accessory_amount + ACCESSORY_PRICE <= THRESHOLD) {
            accessory_amount += ACCESSORY_PRICE;
        }
    } else if (phone_amount + PHONE_PRICE + accessory_amount <= BALANCE) {
        phone_amount += PHONE_PRICE;
    } else if (phone_amount + accessory_amount + ACCESSORY_PRICE <= BALANCE) {
        if (accessory_amount + ACCESSORY_PRICE <= THRESHOLD) {
            accessory_amount += ACCESSORY_PRICE;
        } else {
            break;
        }
    } else {
        break;
    }
}

var total_amount = phone_amount + accessory_amount;
total_amount = total_amount + getTax(total_amount);

console.log('total_amount: ' + format(total_amount));

if (total_amount <= BALANCE) {
    console.log('I can');
} else {
    console.log('I can\'t');
}

