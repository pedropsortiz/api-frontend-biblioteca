<template>
  alelaeoadlawe
  <div class = "container">

    <h1 class = "text-center"> Employees List</h1>

    <table class = "table table-striped">
      <thead>
      <tr>
        <th> Employee Id</th>
        <th> Employee First Name</th>
      </tr>

      </thead>
      <tbody>
      <tr v-for="genre in genres" v-bind:key="genre.id">
        <td> {{genre.id }}</td>
        <td> {{genre.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script>

import GenreService from '../services/GenreService';

export default {
  name: 'Genre',
  data(){
    return {
      genres: []
    }
  },
  methods: {
    getGenres(){
      GenreService.getAllGenres().then((response) => {
        this.genres = response.data;
      });
    }
  },
  created() {
    this().getEmployees();
  }
}

</script>

<style>

</style>