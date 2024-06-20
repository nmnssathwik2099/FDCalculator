function FDcalculator(){

    const principle = parseFloat(document.getElementById('Principle').value);
    const interest = parseFloat(document.getElementById('InterestRate').value);
    const tenure = parseFloat(document.getElementById('Tenure').value);



    const maturityAmount= principle + (principle * interest * tenure)/100;

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('calculate').addEventListener('click',FDcalculator);