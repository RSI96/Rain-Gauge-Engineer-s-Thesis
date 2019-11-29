<template>
    <div>
    <div class="container">
        <div class="row">
            <div class="col">
                <app-chart
                        :day="lastDay[0]"
                        :chart_title="'Opady deszczu w mm/m^2 w ciągu ostatnich 24 godzin'"
                ></app-chart>
            </div>
            <div class="col">
                <app-measurement
                        :lastHour="lastHour"
                        :last10Minutes="last10Minutes"
                ></app-measurement>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import EChart from "../components/LastDayChart";
    import Measurement from "../components/Measurement";
    import axios from 'axios';

    export default {
        name: "Actual",
        components: {
            appChart: EChart,
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
            axios.get("http://192.168.1.3:8080/lastHour")
                .then(res => (this.lastHour = res.data[0]));
            axios.get("http://192.168.1.3:8080/last10Minutes")
                .then(res => (this.last10Minutes = res.data[0]));
            axios.get("http://192.168.1.3:8080/lastDayArrays")
                .then(res => (this.lastDay = res.data));
            axios.get("http://192.168.1.3:8080/interval15min")
                .then(res => (this.interval15min = res.data));

        }
    }
    //192.168.43.177
    //192.168.1.3
    //10.129.11.171

</script>

<style scoped>

</style>
