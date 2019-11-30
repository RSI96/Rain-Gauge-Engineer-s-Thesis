<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Rain gauge</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/actual" class="nav-link"><a>Actual</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/history" class="nav-link"><a>History</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/historyDetailed" class="nav-link"><a>History detailed</a></router-link>
                    </li>
                </ul>
                <strong class="navbar-text navbar-right">Godzine wstawić czy coś</strong>
            </div>
        </nav>
        <ul>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "Header",
    }
</script>

<style scoped>
    .navbar-right {
        margin-right: 10px;
    }
</style>
