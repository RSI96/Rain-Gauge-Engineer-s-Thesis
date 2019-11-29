<template>
<div>
    <div class="panel">
        <div class="panel-heading">
            <h2 class="panel-title">
                    Aktualny pomiar
            </h2>
        </div>
        <div class="panel-body">
            <h4>
                W ciągu ostatniej godziny opad wyniósł {{ lastHour.suma }} mm/m^2
            </h4>
            <h4>
               W ciągu ostatnich 10 minut spadło {{ last10Minutes.suma }} mm/m^2 co daje wspłóczynnik równy {{ alpha }}
            </h4>
            <div v-if="alpha <= 1" >Zwykły deszcz</div>
            <div v-else-if="alpha > 1" >Silny deszcz</div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Measurement",
        props: {
            lastHour: Object,
            last10Minutes: Object
        },
        computed: {
            alpha() {
                return this.last10Minutes.suma / Math.sqrt(10);
            }
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #428bca;
        border: 10px solid transparent;
        border-radius: 5px;
    }

    .panel-body {
        text-align: justify;
    }

    .panel-title {
        text-align: center;
    }
</style>
