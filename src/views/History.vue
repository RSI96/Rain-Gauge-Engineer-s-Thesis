<template>
    <div>
    <div class="row">
        <app-chart
                v-for="day in lastWeek"
                :key="day.date"
                :day="day"
        ></app-chart>
        <div v-for="day in lastWeek"
             :key="day.date"
             > {{ day.values }} {{ day.hours }}</div>
        </div>
    </div>
</template>

<script>
    import EChart from "../components/HistoryChart";
    import axios from 'axios';

    export default {
        name: "History",
        components: {
            appChart: EChart,
        },
        data() {
            return {
                lastWeek: null,
            }
        },
        created() {
            axios.get("http://10.129.11.171:8080/lastWeekArrays")
                .then(res => (this.lastWeek = res.data))
        }
    }
</script>

<style scoped>

</style>
