<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="navigator">
        Navigator:
        <router-link to="/">Home</router-link>,
        <router-link to="/about">About</router-link>,
        <router-link to="/dictionary">Dictionary</router-link>,
    </div>
</template>
