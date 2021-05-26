//(totalbillamount*servicelevel)/numberof people
const billAmount_input = document.querySelector('.bill');
const serviceLevel_input = document.querySelectorAll('.servLevel');
const numOfPeople_input = document.querySelector('.people');

const tip = () => {
    let billAmount = Number(billAmount_input.value);
    for (let i = 0; i < serviceLevel_input.length; i++) {
        if (serviceLevel_input[i].checked == true) {
            serviceLevel = Number(
                document.querySelectorAll('.servLevel')[i].value
            );
        }
    }
    let numOfPeople = Number(numOfPeople_input.value);
    const res = (billAmount * serviceLevel) / numOfPeople;
    document.getElementById(
        'result'
    ).innerHTML = `Each person ows ${res.toFixed(2)} $`;
};
