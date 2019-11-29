<template>
    <div>
        <div class="container">
            <app-chart
                    :day="interval15min[0]"
                    :chart_title="'interval_title'"
            ></app-chart>
        </div>
    </div>
</template>

<script>
    import EChart from "../components/IntervalChart";
    import axios from 'axios';

    export default {
        name: "DataAnalysis",
        components: {
            appChart: EChart
        },
        data() {
            return {
                interval15min: null
            }
        },
        created() {
            axios.get("http://192.168.1.3:8080/interval15min")
                .then(res => (this.interval15min = res.data));
        }
    }

</script>

<style scoped>
    .container {
        background-color: #dddddd;

    }

</style>
