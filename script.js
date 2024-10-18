let balance = 0;
const itfRate = 0.005;

function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Ingrese un monto valido.");
        return;
    }

    const itf = amount * itfRate;
    balance += amount - itf;
    document.getElementById("result").innerText = `Deposito: ${amount} (ITF: ${itf.toFixed(2)})`;
    document.getElementById("itf").innerText = `Saldo actual: ${balance.toFixed(2)}`;
}

function withdraw() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0 || amount > balance) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    const itf = amount * itfRate;
    balance -= amount + itf;
    document.getElementById("result").innerText = `Retiro: ${amount} (ITF es: ${itf.toFixed(2)})`;
    document.getElementById("itf").innerText = `Saldo actual: ${balance.toFixed(2)}`;
}

function showBalance() {
    document.getElementById("result").innerText = `Saldo actual: ${balance.toFixed(2)}`;
}
