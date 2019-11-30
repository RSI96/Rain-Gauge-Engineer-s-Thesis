<template>
    <div>
        <div class="container">
            <app-chart
                    v-for="day in lastWeek.reverse()"
                    :key="day.date"
                    :day="day"
                    :chart_title="'Opady deszczu w mm/m^2 w dniu '"
                    :interval="5"
            />
        </div>
    </div>
</template>

<script>
    import EChart from "../components/HistoryIntervalChart";
    import axios from 'axios';

    export default {
        name: "HistoryDetailed",
        components: {
            appChart: EChart
        },
        data() {
            return {
                lastWeek: null
            }
        },
        created() {
            axios.get("http://192.168.1.3:8080/lastWeekArrays5min")
                .then(res => (this.lastWeek = res.data));
        }
    }

</script>

<style scoped>

</style>
