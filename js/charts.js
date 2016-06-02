jQuery.noConflict();
var mapcharts;
(function($) {



    function test(data) {
        alert(data);
    }




    $(function() {



        charts.globel_1();
        charts.globel_2();
        charts.globel_3();
        charts.globel_4();



    });

    var charts = {
        nation_1: function() {
            $('#nation_1').highcharts({
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'area'
                },
                title: {
                    text: '2015全国进出口情况'
                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: 'Billions'
                    },
                    labels: {
                        formatter: function() {
                            return this.value;
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                series: [{
                    name: 'Imports',
                    data: [1260, 840, 1260, 1270, 1170, 1280, 1290]
                }, {
                    name: 'Exports',
                    data: [2100, 1690, 1350, 1650, 2210, 1450, 1800]
                }]
            });
        },

        nation_2: function() {
            $('#nation_2').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Top 5 中国港口进口额排名'
                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: ['舟山', '上海', '天津', '苏州', '广州'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '亿美元',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' Billions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -5,
                    y: 120,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Imports',
                    data: [13732, 12723, 9801, 8387, 6250]
                }]
            });
        },

        nation_3: function() {
            $('#nation_3').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Top 5 中国港口出口额排名'
                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: ['舟山', '上海', '天津', '苏州', '广州'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '亿美元',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' Billions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -5,
                    y: 120,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Exports',
                    data: [20123, 17534, 11354, 8987, 6750]
                }]
            });
        },

        nation_4: function(data) {
            $('#nation_4').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: data.nation + ' exporters and importers 2014'
                },
                xAxis: {
                    categories: data.cates,
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Billions'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Exportes',
                    data: data.exports,
                    dataLabels: {
                        enabled: true,
                        rotation: 0,
                        color: '#000',
                        align: 'center',
                        x: 0,
                        y: 0,
                        style: {
                            fontSize: '10px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }, {
                    name: 'Imports',
                    data: data.imports,
                    dataLabels: {
                        enabled: true,
                        rotation: 0,
                        color: '#000',
                        align: 'center',
                        x: 0,
                        y: 0,
                        style: {
                            fontSize: '10px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });
        },

        chart_3: function() {
            $('#chart3').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Leading merchandise exporters and importers 2014'
                },
                xAxis: {
                    categories: ['China', 'US', 'Germany', 'Japan', 'UK']
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Billions'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Exportes',
                    data: [2343, 1623, 1511, 684, 507]
                }, {
                    name: 'Imports',
                    data: [1960, 2409, 1217, 822, 683]
                }]
            });
        }

        ,
        globel_1: function() {
            $('#globel1').highcharts({
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                title: {
                    text: 'market shares , 2014'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        depth: 35,
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Market Sshare',
                    data: [
                        {
                            name: 'China',
                            y: 45.0,
                            sliced: true,
                            selected: true
                        },
                        ['US', 26.8],  
                        ['UK', 12.8],
                        ['Germany', 8.5],
                        ['Japan', 6.2],
                        ['Others', 0.7]
                    ]
                }]
            });
        },



        globel_2: function() {
            $('#globel2').highcharts({
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'area'
                },
                title: {
                    text: '世界货物进出口总额'
                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: 'Billions'
                    },
                    labels: {
                        formatter: function() {
                            return this.value;
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    valueSuffix: ' billions'
                },
                plotOptions: {
                    area: {
                        stacking: 'normal',
                        lineColor: '#666666',
                        lineWidth: 1,
                        marker: {
                            lineWidth: 1,
                            lineColor: '#666666'
                        }
                    }
                },
                series: [{
                    name: 'Imports & Exportes',
                    data: [108550, 124370, 143000, 165200, 127180, 153760, 167030, 154380, 177180, 173450]
                }]
            });
        },

        globel_3: function() {
            $('#globel3').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '全球球港口当月进口排名'

                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: ['舟山', '上海', '新加坡', '天津', '深圳'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '吞吐量',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' 万TEU'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'bottom',
                    x: -5,
                    y: 165,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Imports',
                    data: [158.56, 127.25, 117.89, 110.32, 98.34]
                }]
            });
        },

        globel_4: function() {
            $('#globel4').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: '全球球港口当月出口排名'

                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: ['舟山', '上海', '新加坡', '天津', '深圳'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '吞吐量',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' 万TEU'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'bottom',
                    x: -5,
                    y: 165,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Imports',
                    data: [158.56, 127.25, 117.89, 110.32, 98.34]
                }]
            });
        },
        chart_5: function() {
            $('#chart5').highcharts({
                credits: {
                    enabled: false
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'TOP5 贸易国'
                },
                subtitle: {
                    text: '来源：丝路亿商'
                },
                xAxis: {
                    categories: [
                        'China', 'US', 'Germany', 'UK', 'Japan'
                    ]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '亿元'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: '总额',
                    data: [500, 450, 380, 260, 180],
                    dataLabels: {
                        enabled: true,
                        rotation: 0,
                        color: '#000',
                        align: 'center',
                        x: 0,
                        y: 0,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }

                }, {
                    name: '出口额',
                    data: [300, 200, 100, 160, 80],
                    dataLabels: {
                        enabled: true,
                        rotation: 0,
                        color: '#000',
                        align: 'center',
                        x: 0,
                        y: 0,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }

                }, {
                    name: '进口额',
                    data: [200, 250, 280, 100, 100],
                    dataLabels: {
                        enabled: true,
                        rotation: 0,
                        color: '#000',
                        align: 'center',
                        x: 0,
                        y: 0,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }

                }]
            });
        },

        chart_6: function(data) {
            console.log(data);
            $('#chart6').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: data.title
                },
                xAxis: {
                    categories: [data.date]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Billions'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Exportes',
                    data: [data.exportThroughput]
                }, {
                    name: 'Imports',
                    data: [data.importThroughput]
                }]
            });
        },
        chart_7: function(data) {
            console.log(data);
            $('#chart7').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: data.title
                },
                xAxis: {
                    categories: [data.date]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Billions'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'TEU Exportes',
                    data: [data.teuExportThroughput]
                }, {
                    name: 'TEU Imports',
                    data: [data.teuImportThroughput]
                }]
            });
        },
        chart_8: function(data) {
            console.log(data);
            $('#chart8').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: data.title + " | " + data.date
                },
                xAxis: {
                    categories: ["Africa", "Asia", "EU", "US", "AU"]
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Billions($)'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Exportes',
                    data: [data.toAfricaExport, data.toAsiaExport, data.toEuExport, data.toUsExport, data.toAuExport]
                }, {
                    name: 'Imports',
                    data: [data.toAfricaImport, data.toAsiaImport, data.toEuImport, data.toUsImport, data.toAuImport]
                }]
            });
        }

    }

    this.mapcharts = charts;


})(jQuery)
