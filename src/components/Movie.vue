<template>
    <tr>
        <td>{{movie.id}}</td>
        <td>{{movie.author_id}}</td>
        <td>{{movie.title}}</td>
        <td>{{movie.price}}</td>
    </tr>
</template>

<script>
export default {
    name: "Movie",
    props: ['movie']
}
</script>

<style scoped>

</style>