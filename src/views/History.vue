<template>
    <div class="row">
        <app-chart
                v-for="stock in stocks"
                :key="stock.id"
                :stock="stock"
        ></app-chart>
    </div>
</template>

<script>
    import EChart from "../components/LastDayChart";
    import axios from 'axios';

    export default {
        name: "History",
        components: {
            appChart: EChart,
        },
        data() {
            return {
                lastWeek: null,
                lastDayHours: [],
                lastDayValues: []
            }
        },
        methods: {
            getLastDayHours() {
                for(let key in this.lastDay) {
                    if (this.lastDay.hasOwnProperty(key)) {
                        this.lastDayHours.push(this.lastDay[key].hour)
                        this.lastDayValues.push(this.lastDay[key].suma)
                    }
                }
            },
        },
        created() {
            axios.get("http://192.168.1.3:8080/lastWeek")
                .then(res => (this.lastWeek = res.data))
        },
        mounted() {
            this.getLastDayHours()
        }
    }
</script>

<style scoped>

</style>
