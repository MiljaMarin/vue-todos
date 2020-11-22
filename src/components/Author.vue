<template>
    <tr>
        <td>{{author.id}}</td>
        <td>{{author.firstname}}</td>
        <td>{{author.lastname}}</td>
    </tr>
</template>

<script>
export default {
    name: "Author",
    props: ['author']
}
</script>

<style scoped>

</style>