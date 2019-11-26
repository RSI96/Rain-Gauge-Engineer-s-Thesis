<template>
    <div class="col-sm-12 col-md-6 col-lg-6">
        <chart :options="chartOptionsBar"></chart>
    </div>
</template>

<script>
    export default {
        name: "HistoryChart",
        props: {
            day: Object
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
                            data: this.day.values
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
