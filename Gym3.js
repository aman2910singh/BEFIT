const ctx = document.getElementById('progressChart').getContext('2d');

const progressChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Calories Burned',
      data: [500, 650, 700, 400, 600, 750, 800],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#ff4c4c',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
function calculateIdealWeight() {
  const heightInput = document.getElementById("heightInput").value;
  const result = document.getElementById("weightResult");

  if (!heightInput || heightInput <= 0) {
    result.textContent = "Please enter a valid height.";
    return;
  }

  const heightInMeters = heightInput / 100;

  // BMI Range 18.5 - 24.9
  const minWeight = (18.5 * heightInMeters ** 2).toFixed(1);
  const maxWeight = (24.9 * heightInMeters ** 2).toFixed(1);

  result.textContent = `Ideal weight range: ${minWeight} kg - ${maxWeight} kg`;
}

