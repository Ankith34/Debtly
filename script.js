document.getElementById('billForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const amount = document.getElementById('amount').value;
  const date = document.getElementById('date').value;

  document.getElementById('b_name').innerText = name;
  document.getElementById('b_amount').innerText = amount;
  document.getElementById('b_date').innerText = date;

  document.getElementById('bill').classList.remove('hidden');
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  const element = document.getElementById('bill');
  const downloadBtn = document.getElementById('downloadBtn');
  
  downloadBtn.style.display = 'none';
  
  html2canvas(element).then(canvas => {
    const link = document.createElement('a');
    link.download = 'bill.png';
    link.href = canvas.toDataURL();
    link.click();
    
    downloadBtn.style.display = 'block';
  });
});
