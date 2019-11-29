<template>
    <div class="echarts">
        <chart :options="chartOptionsBar"></chart >
    </div>
</template>

<script>
    export default {
        name: "IntervalChart",
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
                            data: this.day.values,
                            label: {
                                // You can choose from 'normal' (always visible )
                                // and 'emphasis' (only visible on stack hover)
                                emphasis: {
                                    // Enable the label
                                    show: true,
                                    // Position it on top of the stack
                                    position: 'top',
                                    formatter: (data) => {
                                        let alpha = data.value/Math.sqrt(15);
                                        if (alpha === 0)
                                            return alpha + 'Brak opadów';
                                        else if (alpha < 1)
                                            return alpha + 'Zwykły deszcz';
                                        else if (alpha < 1.4)
                                            return alpha + 'Silny deszcz';
                                        else if (alpha < 2)
                                            return alpha + 'Deszcz ulewny I st';
                                        else if (alpha < 2.82)
                                            return alpha + 'Deszcz ulewny II st';
                                        else if (alpha < 4)
                                            return alpha + 'Deszcz ulewny III st';
                                        else if (alpha < 5.65)
                                            return alpha + 'Deszcz ulewny IV st';
                                    }
                                }
                            }
                        }
                    ],
                    title: {
                        text: 'co 15 min',
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
    .echarts {
        width: 100%;
    }
</style>
