function hitungTurunan() {
  const input = document.getElementById('persamaan');
  const output = document.getElementById('hasil');

  const persamaan = input.value;

  try{
    let turunan = math.derivative(persamaan, 'x');
    output.textContent = turunan.toString().replace(/\*/g, '');
  } 
  catch(error){
    resultOutput.textContent = 'Terjadi kesalahan dalam perhitungan.';
  }
}

function reset() {
   document.getElementById('persamaan').value = '';
   document.getElementById('hasil').textContent = '';
}