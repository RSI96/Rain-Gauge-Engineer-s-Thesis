<template>
    <div class="col-sm-12 col-md-6 col-lg-6">
        <div class="echarts">
            <chart :options="chartOptionsBar"></chart>
            <div class="save_button">
            <b-button block variant="outline-primary" v-on:click="saveFile()">Zapisz dane</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IntervalChart",
        props: {
            day: Object,
            chart_title: String
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
                        text: this.chart_title,
                        x: 'center',
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    toolbox: {
                        feature: {
                            magicType : {
                                type: ['line', 'bar'],
                                title: ['Liniowy', 'Słupkowy']
                                },
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
                                        let alpha = data.value/Math.sqrt(60);
                                        if (alpha === 0)
                                            return 'Brak opadów';
                                        else if (alpha < 1)
                                            return 'Zwykły deszcz';
                                        else if (alpha < 1.4)
                                            return 'Silny deszcz';
                                        else if (alpha < 2)
                                            return 'Deszcz ulewny - I st';
                                        else if (alpha < 2.82)
                                            return 'Deszcz ulewny - II st';
                                        else if (alpha < 4)
                                            return 'Deszcz ulewny - III st';
                                        else if (alpha < 5.65)
                                            return 'Deszcz ulewny - IV st';
                                        else if (alpha < 8)
                                            return 'Deszcz nawalny - V st';
                                        else if (alpha < 11.3)
                                            return 'Deszcz nawalny - VI st';
                                        else if (alpha < 16)
                                            return 'Deszcz nawalny - VII st';
                                        else if (alpha < 22.61)
                                            return 'Deszcz nawalny - VIII st';
                                        else if (alpha < 32)
                                            return 'Deszcz nawalny - IX st';
                                        else if (alpha < 45.23)
                                            return 'Deszcz nawalny - XI st';
                                        else if (alpha < 64)
                                            return 'Deszcz nawalny - XI st';
                                        else if (alpha >= 64)
                                            return 'Poza skalą Chomicza';
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
        border-right: 40px solid transparent
    }
    .save_button {
        border-left: 5px solid transparent;
    }
</style>
