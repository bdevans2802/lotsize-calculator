function calculate() {
  // Get user input
  const riskAmountInput = document.getElementById('risk-amount');
  const stopLossInput = document.getElementById('stop-loss');
  const entryPriceInput = document.getElementById('entry-price');

  const riskAmount = parseFloat(riskAmountInput.value) || 0;
  const stopLoss = parseFloat(stopLossInput.value) || 0;
  const entryPrice = parseFloat(entryPriceInput.value.replace(/,/g, '')) || 0;

  // Validate inputs
  if (isNaN(riskAmount) || isNaN(stopLoss) || isNaN(entryPrice)) {
    alert('Please enter valid numeric values.');
    return;
  }

  // Check for division by zero
  if (entryPrice === stopLoss) {
    alert('Entry Price and Stop Loss cannot be the same.');
    return;
  } else {
    // Actual calculations
    const lotSize = riskAmount / (entryPrice - stopLoss);

    // Display the result
    document.getElementById('lot-size').value = lotSize.toFixed(2);
  }
}
