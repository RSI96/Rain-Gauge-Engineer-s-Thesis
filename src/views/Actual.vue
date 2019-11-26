<template>
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
                ></app-measurement>
            </div>
            <div>
                {{ lastDay}}
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
                lastDay: null,
                lastWeek: null,
                lastDayHours: [],
                lastDayValues: []
            }
        },

        created() {
            axios.get("http://192.168.1.3:8080/lastHour")
                .then(res => (this.lastHour = res.data[0]));
            axios.get("http://192.168.1.3:8080/lastDayArrays")
                .then(res => (this.lastDay = res.data));
        }
    }
</script>

<style scoped>

</style>
