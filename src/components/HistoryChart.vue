<template>
    <div>
        <chart :options="chartOptionsBar"></chart>
    </div>
</template>

<script>
    export default {
        name: "HistoryChart",
        props: {
            lastDayHours: Array,
            lastDayValues: Array
        },
        data() {
            return {
                chartOptionsBar: {
                    xAxis: {
                        data: this.lastDayHours
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            type: 'bar',
                            data: this.lastDayValues
                        }
                    ],
                    title: {
                        text: 'Rain fell in mm/m^2',
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
