<template>
    <div>
        <h1>Meine Autoren (Anzahl: {{movies.length}} )</h1>
        <table class="table">
            <tr>
                <th>ID</th>
                <th>Author_ID</th>
                <th>Title</th>
                <th>Price</th>
            </tr>

            <!-- hier authors per v-for mittels Author Kompmonente mit props: "author" ausgeben -->
            <Movie :key="item.id" v-for="item in movies" :movie="item"/>
        </table>
    </div>
</template>

<script>
import myMovies from "@/data/movies.json"
import Movie from "@/components/Movie";
export default
{
    name: "Movies",
    components: {Movie},
    data() {
        return {
            movies: myMovies.data
        }
    }
}

</script>

<style scoped>

</style>