<template>
    <div>
        <div class="row">
            <app-chart
                    v-for="day in lastWeek"
                    :key="day.date"
                    :day="day"
                    :chart_title="'Opady deszczu w mm/m² w dniu '"
            />
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
            axios.get("http://192.168.1.6:8080/lastWeekArrays")
                .then(res => (this.lastWeek = res.data))
        }
    }
</script>

<style scoped>

</style>
