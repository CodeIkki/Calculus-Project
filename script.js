let turunanList = []

function hitungTurunan() {
  const input = document.getElementById('persamaan');
  const hasil = document.getElementById('hasil');
  const next = document.getElementById('lanjutkan');
  const persamaan = input.value;
  const turunkan = document.getElementById('turunkan');

  try{
    let turunan = math.simplify(math.derivative(persamaan, 'x')).toString();
    turunanList.push(turunan);
    updateHasil(hasil);
    input.dataset.currentDerivative = turunan;
    next.style.display='inline-block';
    sudah.textContent = '';
    turunkan.disabled = true;
    turunkan.style.display = none;
  } 
  catch(error){
    //alert('Terjadi kesalahan dalam perhitungan.');
  }
}

function turunanLanjutan() {
  const input = document.getElementById('persamaan');
  const hasil = document.getElementById('hasil');
  const currentDerivative = input.dataset.currentDerivative;
  const sudah = document.getElementById('sudah');

  try{
    let turunan = math.simplify(math.derivative(currentDerivative, 'x')).toString();
    turunanList.push(turunan);
    updateHasil(hasil);
    input.dataset.currentDerivative = turunan;

    if (turunan === '0'){
      sudah.textContent = 'Bang udah bang, persamaannya udah 0 bang :(';
      document.getElementById('lanjutkan').style.display = 'none';
    }
  }
  catch(error){
    //alert('Terjadi kesalahan dalam perhitungan.');
  }
}

function updateHasil(hasil) {
  hasil.innerHTML = '';
    turunanList.forEach((turunan, index) => {
      turunan = turunan.replace(/\*/g, '');
      const label = index === 0 ? "f'(x)" : `f${"'".repeat(index + 1)}(x)`;
      hasil.innerHTML += `<li>${label} = ${turunan}</li>`;
    });
}

function reset() {
  turunanList = [];
  document.getElementById('persamaan').value = '';
  document.getElementById('hasil').textContent = '';
  document.getElementById('lanjutkan').style.display = 'none';
  document.getElementById('persamaan').removeAttribute('data-current-derivative');
  document.getElementById('sudah').textContent = '';
  document.getElementById('turunkan').disabled = false;
  document.getElementById('turunkan').style.display = 'inline-block';
}
