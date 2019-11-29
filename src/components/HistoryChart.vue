<template>
    <div class="col-sm-12 col-md-6 col-lg-6">
        <b-button variant="success" v-on:click="saveFile()">saveData</b-button>
        <chart :options="chartOptionsBar"></chart>
    </div>
</template>

<script>
    export default {
        name: "HistoryChart",
        props: {
            day: Object
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
                            label: {
                                emphasis: {
                                    show: true,
                                    position: 'top'
                                }
                            }
                        }
                    ],
                    title: {
                        text: this.day.date + ' - Rain fell in mm/m^2',
                        x: 'center',
                        textStyle: {
                            fontSize: 18
                        }
                    },
                    color: '#428bca'
                }
            }
        }
    }
</script>

<style scoped>

</style>
