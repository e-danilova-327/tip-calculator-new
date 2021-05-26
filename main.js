//(totalbillamount*servicelevel)/numberof people
const billAmount_input = document.querySelector('.bill');
const serviceLevel_input = document.querySelector('.servLevel');
const numOfPeople_input = document.querySelector('.people');

const tip = () => {
    let billAmount = Number(billAmount_input.value);
    let serviceLevel = Number(serviceLevel_input.value);
    let numOfPeople = Number(numOfPeople_input.value);
    const res = (billAmount * serviceLevel) / numOfPeople;
    document.getElementById(
        'result'
    ).innerHTML = `Each person ows ${res.toFixed(2)} $`;
};
