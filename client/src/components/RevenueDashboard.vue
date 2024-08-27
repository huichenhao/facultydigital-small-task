<template>
    <h2>Company Revenue</h2>
    <div class="chart-container" style="position: relative; height:50vh; width:90vw">
        <canvas id="revenueChart"></canvas>
    </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js/auto';

export default {
    data() {
        return {
            revenues: []
        };
    },
    async mounted() {
        document.title = 'Revenue';
        const response = await axios.get('http://localhost:3000/api/data/revenue')
        this.revenues = response.data;

        this.renderChart();
    },
    methods: {
        renderChart() {
            const labels = this.revenues.map(r => r.month);
            const data = this.revenues.map(r => r.revenue);

            new Chart(document.getElementById('revenueChart'), {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Revenue",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 2,
                        hoverBackgroundColor: "rgba(75, 192, 192, 0.4)",
                        hoverBorderColor: "rgba(75, 192, 192, 1)",
                        data: data
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    scales: {
                        x: { title: { display: true, text: 'Month' } },
                        y: { title: { display: true, text: 'Revenue' } }
                    }
                }
            });
        }
    }
};
</script>