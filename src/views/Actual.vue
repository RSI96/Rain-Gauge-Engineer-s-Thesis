<template>
    <div>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <app-chart
                        :day="lastDay[0]"
                ></app-chart>
            </div>
            <div class="col-sm">
                <app-measurement
                        :lastHour="lastHour"
                        :last10Minutes="last10Minutes"
                ></app-measurement>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
        </div>
    </div>
        <div class="container">
            <div >
                <app-chart-two
                               :day="interval15min[0]"
                ></app-chart-two>
            </div>
        </div>
        <div>
            <b-button variant="outline-success">Success</b-button>
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
            appChartTwo: EChart2,
            appMeasurement: Measurement
        },
        data() {
            return {
                lastHour: null,
                last10Minutes: null,
                lastDay: null,
                interval15min: null
            }
        },

        created() {
            axios.get("http://10.129.11.171:8080/lastHour")
                .then(res => (this.lastHour = res.data[0]));
            axios.get("http://10.129.11.171:8080/last10Minutes")
                .then(res => (this.last10Minutes = res.data[0]));
            axios.get("http://10.129.11.171:8080/lastDayArrays")
                .then(res => (this.lastDay = res.data));
            axios.get("http://10.129.11.171:8080/interval15min")
                .then(res => (this.interval15min = res.data));

        }
    }
    //192.168.43.177
    //192.168.1.3
    //10.129.11.171

</script>

<style scoped>

</style>
