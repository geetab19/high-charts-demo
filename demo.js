  
  
  
  
  // Your data
   var data = [
    { country: 'Albania', value: 42.86, lat: 41.1533, lon: 20.1683 },
    { country: 'Austria', value: 55.63, lat: 47.5162, lon: 14.5501 },
    // Add more data entries as needed
];

// Create the Geo Highcharts map
Highcharts.mapChart('container', {
    chart: {
        map: 'Europe',
        borderWidth: 1
    },
    title: {
        text: 'Average Mobile Download Speed by Country (2022)'
    },
    mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },
    colorAxis: {
        min: 0,
        stops: [
            [0, '#FFFFFF'],
            [0.2, '#FFE6E6'],
            [0.4, '#FFCCCC'],
            [0.6, '#FF9999'],
            [0.8, '#FF6666'],
            [1, '#FF3333']
        ],
        maxColor: '#FF0000',
        type: 'linear',
        minColor: '#FFFFFF',
        maxColor: '#FF0000',
        tickInterval: 10,
        title: {
            text: 'Download Speed (Mbps)'
        }
    },
    series: [{
        name: 'Country Download Speed',
        data: data.map(function (item) {
            return {
                name: item.country,
                lat: item.lat,
                lon: item.lon,
                value: item.value
            };
        }),
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});