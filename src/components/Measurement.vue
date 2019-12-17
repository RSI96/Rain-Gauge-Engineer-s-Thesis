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
               W ciągu ostatnich 10 minut spadło {{ last10Minutes.suma }} mm/m^2 co przekłada się na:
            </h4>
            <h4 v-if="alpha = 0" >Brak opadów</h4>
            <h4 v-if="alpha <= 1" >Zwykły deszcz</h4>
            <h4 v-else-if="alpha < 1.4" >Silny deszcz</h4>
            <h4 v-else-if="alpha < 2" >Deszcz ulewny - I st.</h4>
            <h4 v-else-if="alpha < 2.82" >Deszcz ulewny - II st.</h4>
            <h4 v-else-if="alpha < 4" >Deszcz ulewny III - st.</h4>
            <h4 v-else-if="alpha < 5.65" >Deszcz ulewny - IV st.</h4>
            <h4 v-else-if="alpha < 8" >Deszcz nawalny - V st.</h4>
            <h4 v-else-if="alpha < 11.3" >Deszcz nawalny - VI st.</h4>
            <h4 v-else-if="alpha < 16" >Deszcz nawalny - VII st.</h4>
            <h4 v-else-if="alpha < 22.61" >Deszcz nawalny - VIII st.</h4>
            <h4 v-else-if="alpha < 32" >Deszcz nawalny - IX st.</h4>
            <h4 v-else-if="alpha < 45.23" >Deszcz nawalny - X st.</h4>
            <h4 v-else-if="alpha < 64" >Deszcz nawalny - XI st.</h4>
            <h4 v-else>Poza skalą</h4>
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
