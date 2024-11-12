  // Data for performance chart
  const performanceData = {
    labels: ['Correct', 'Incorrect'],
    datasets: [{
      label: 'Performance',
      data: [28, 22], // Correct Answers and Incorrect Answers
      backgroundColor: ['#6a00f4', '#ff4747'],
      borderColor: '#fff',
      borderWidth: 1
    }]
  };

  // Configuration for the chart
  const performanceConfig = {
    type: 'pie',
    data: performanceData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw;
            }
          }
        }
      }
    }
  };

  // Create the chart
  const ctx = document.getElementById('performanceChart').getContext('2d');
  new Chart(ctx, performanceConfig);

  // If you want to dynamically update stats
  document.getElementById("questionsAttempted").textContent = "50";  // Can be updated dynamically
  document.getElementById("correctAnswers").textContent = "28";      // Can be updated dynamically
  document.getElementById("incorrectAnswers").textContent = "22";    // Can be updated dynamically
  document.getElementById("papersSolved").textContent = "5";         // Can be updated dynamically
