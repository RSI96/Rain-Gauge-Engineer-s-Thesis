<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Deszczomierz</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/actual" class="nav-link"><a>Aktualne</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/history" class="nav-link"><a>Historia</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/historyDetailed" class="nav-link"><a>Historia szczegółowo</a></router-link>
                    </li>
                </ul>
                <strong class="navbar-text navbar-right"> </strong>
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
