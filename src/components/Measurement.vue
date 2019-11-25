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
                Jest to równoznaczne z //np. lekkim opadem, swicha do porównywania wsadzić
            </h4>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: "Measurement",
        props: {
            lastHour: Object
        }
    }
</script>

<style scoped>
    .panel {
        background-color: #dddddd;
        borde: 10px solid transparent;
    }

    .panel-body {
        border: 10px solid transparent;

    }

    .panel-title {
        text-indent: 10px;
    }
</style>
