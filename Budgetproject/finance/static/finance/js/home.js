
        // 1. Money Flow Bar Chart
        const ctxFlow = document.getElementById('moneyFlowChart').getContext('2d');
        new Chart(ctxFlow, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                    {
                        label: 'Income',
                        data: [10000, 11000, 10500, 14000, 13000, 7000, 9000],
                        backgroundColor: '#7b5af5',
                        borderRadius: 5,
                        barPercentage: 0.6,
                        categoryPercentage: 0.4
                    },
                    {
                        label: 'Expense',
                        data: [8000, 13000, 9500, 13000, 12000, 5000, 6000],
                        backgroundColor: '#bba8ff',
                        borderRadius: 5,
                        barPercentage: 0.6,
                        categoryPercentage: 0.4
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, border: {display: false} },
                    x: { grid: {display: false}, border: {display: false} }
                },
                plugins: {
                    legend: { position: 'top', align: 'end' }
                }
            }
        });

        // 2. Budget Donut Chart
        const ctxBudget = document.getElementById('budgetChart').getContext('2d');
        new Chart(ctxBudget, {
            type: 'doughnut',
            data: {
                labels: ['Cafe & Restaurants', 'Entertainment', 'Investments', 'Food & Groceries', 'Health & Beauty'],
                datasets: [{
                    data: [15, 20, 10, 40, 15],
                    backgroundColor: ['#7b5af5', '#a58ff7', '#dcd4fa', '#4f39b3', '#e8e5f2'],
                    borderWidth: 0,
                    cutout: '80%'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'left',
                        labels: { boxWidth: 10, usePointStyle: true }
                    }
                }
            }
        });
   