document.getElementById('fraudForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const transactionAmount = parseFloat(document.getElementById('transactionAmount').value);
    const transactionLocation = document.getElementById('transactionLocation').value;
    const device = document.getElementById('device').value;
    const previousTransaction = parseInt(document.getElementById('previousTransaction').value);

    // Simple fraud detection logic (for demo purposes)
    let fraudRisk = '';

    // Example fraud detection criteria
    if (transactionAmount > 10000 && previousTransaction < 500){
        fraudRisk = 'fraudulent';
    } else if (device === 'mobile' && transactionAmount > 500) {
        fraudRisk = 'fraudulent';
    } else if (transactionLocation.toLowerCase() === 'suspicious' || previousTransaction > 20) {
        fraudRisk = 'fraudulent';
    } else {
        fraudRisk = 'legitimate';
    }

    // Show result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';  // Show the result div

    if (fraudRisk === 'fraudulent') {
        resultDiv.className = 'result fraudulent';
        resultDiv.textContent = 'Alert: This transaction is flagged as potentially fraudulent!';
    } else {
        resultDiv.className = 'result legitimate';
        resultDiv.textContent = 'This transaction seems legitimate.';
    }
});
