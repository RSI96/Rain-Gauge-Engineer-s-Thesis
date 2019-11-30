<template>
    <div>
    <div class="container">
        <div class="row">
            <div class="col">
                <app-chart
                        :day="lastDay[0]"
                        :chart_title="'Opady deszczu w mm/m^2 w ciągu ostatnich 24 godzin'"
                />
            </div>
            <div class="col">
                <app-measurement
                        :lastHour="lastHour"
                        :last10Minutes="last10Minutes"
                />
            </div>
        </div>
        <br> <br> <br>
        <div>
            <app-chart-int
                    :day="interval15min[0]"
                    :chart_title="'Opady w mm/m*2 w ciągu ostatnich 24 godzin'"
                    :interval="15"
            />
        </div>
        <div>
            <app-chart-int
                    :day="interval5min[0]"
                    :chart_title="'Opady w mm/m*2 w ciągu ostatnich 24 godzin'"
                    :interval="5"
            />
        </div>
    </div>
    </div>
</template>

<script>
    import EChart from "../components/LastDayChart";
    import EChart2 from "../components/IntervalChart";
    import Measurement from "../components/Measurement";
    import axios from 'axios';

    export default {
        name: "Actual",
        components: {
            appChart: EChart,
            appChartInt: EChart2,
            appMeasurement: Measurement
        },
        data() {
            return {
                lastHour: null,
                last10Minutes: null,
                lastDay: null,
                interval15min: null,
                interval5min: null
            }
        },

        created() {
            axios.get("http://192.168.1.3:8080/lastHour")
                .then(res => (this.lastHour = res.data[0]));
            axios.get("http://192.168.1.3:8080/last10Minutes")
                .then(res => (this.last10Minutes = res.data[0]));
            axios.get("http://192.168.1.3:8080/lastDayArrays")
                .then(res => (this.lastDay = res.data));
            axios.get("http://192.168.1.3:8080/interval15min")
                .then(res => (this.interval15min = res.data));
            axios.get("http://192.168.1.3:8080/interval5min")
                .then(res => (this.interval5min = res.data));
        }
    }
    //192.168.43.177
    //192.168.1.3
    //10.129.11.171

</script>

<style scoped>

</style>
