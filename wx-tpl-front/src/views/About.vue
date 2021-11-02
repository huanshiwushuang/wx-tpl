<template>
    <div class="about">
        <h1>
            {{ ast.krkhqpa2_about }}
        </h1>

        <div v-html="$v('kvhv04wp_v_html').html()"></div>

        <router-link to="/"> 回到首页 </router-link>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>
