<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <app-chart
                        :lastDayHours="lastDayHours"
                        :lastDayValues="lastDayValues"
                ></app-chart>
            </div>
            <div class="col-sm">
                <app-measurement
                        :lastHour="lastHour"
                ></app-measurement>
            </div>
        </div>
        <h1> {{ lastDayHours }}</h1>
        <h1> {{ lastDayValues }}</h1>
        <button @click="getLastDayHours">temp</button>
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
        methods: {
            getLastDayHours() {
                for(let key in this.lastDay) {
                    if (this.lastDay.hasOwnProperty(key)) {
                        this.lastDayHours[key] = this.lastDay[key].hour
                        this.lastDayValues.push(this.lastDay[key].suma)
                    }
                }
            },
        },
        created() {
            axios.get("http://192.168.1.3:8080/lastHour")
                .then(res => (this.lastHour = res.data[0]));
            axios.get("http://192.168.1.3:8080/lastDay")
                .then(res => (this.lastDay = res.data));
        },
        mounted() {
            this.getLastDayHours()
        }
    }
</script>

<style scoped>

</style>
