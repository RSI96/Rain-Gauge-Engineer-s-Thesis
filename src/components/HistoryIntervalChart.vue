<template>
    <div>
        <div class="echarts">
            <chart :options="chartOptionsBar"></chart>
        </div>
        <b-button block variant="outline-primary" v-on:click="saveFile()">Zapisz dane</b-button>
        <br>
    </div>
</template>

<script>
    export default {
        name: "IntervalChart",
        props: {
            day: Object,
            chart_title: String,
            interval: Number
        },
        methods: {
            saveFile: function() {
                const data = JSON.stringify(this.day);
                const blob = new Blob([data], {type: 'text/plain'});
                const e = document.createEvent('MouseEvents'),
                    a = document.createElement('a');
                a.download = "test.json";
                a.href = window.URL.createObjectURL(blob);
                a.dataset.downloadurl = ['text/txt', a.download, a.href].join(':');
                e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                a.dispatchEvent(e);
            }
        },
        data() {
            return {
                chartOptionsBar: {
                    title: {
                        text: this.chart_title + this.day.date,
                        x: 'center',
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    toolbox: {
                        feature: {
                            magicType: {
                                type: ['line', 'bar'],
                                title: ['Liniowy', 'Słupkowy']
                            },
                            dataView: {},
                            saveAsImage: {
                                pixelRatio: 2,
                                title: 'Obraz'
                            }
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['mm/m^2']
                    },
                    dataZoom: [{
                        type: 'inside'
                    }, {
                        type: 'slider'
                    }],
                    xAxis: {
                        data: this.day.hours
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: 'bar',
                            data: this.day.values,
                            markLine : {
                                data : [
                                    {type : 'average', name: 'Średnia'}
                                ]
                            },
                            label: {
                                emphasis: {
                                    show: true,
                                    position: 'top',
                                    formatter: (data) => {
                                        let alpha = data.value/Math.sqrt(this.interval);
                                        if (alpha === 0)
                                            return 'Brak opadów';
                                        else if (alpha < 1)
                                            return 'Zwykły deszcz';
                                        else if (alpha < 1.4)
                                            return 'Silny deszcz';
                                        else if (alpha < 2)
                                            return 'Deszcz ulewny I st';
                                        else if (alpha < 2.82)
                                            return 'Deszcz ulewny II st';
                                        else if (alpha < 4)
                                            return 'Deszcz ulewny III st';
                                        else if (alpha < 5.65)
                                            return 'Deszcz ulewny IV st';
                                    }
                                }
                            }
                        }
                    ],
                    color: '#428bca'
                }
            }
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
    }
</style>
