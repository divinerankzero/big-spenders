import businesses from './businesses.js'

const isBigSpender = (business) => {
    return business.orders.some(order => order > 9000)
};

const bigSpenders = businesses.filter(isBigSpender);

console.log(bigSpenders)