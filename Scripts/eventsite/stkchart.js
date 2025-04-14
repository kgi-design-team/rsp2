var options = {
    chart: {
        type: 'line'
    },
    colors: ['#dedd2a'],
    series: [{
        name: 'sss',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
}

var chart = new ApexCharts(document.querySelector("#stkChart"), options);

chart.render();