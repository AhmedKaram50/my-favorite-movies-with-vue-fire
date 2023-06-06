<script setup>
import { collection, addDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import { ref } from "vue";

const db = useFirestore();

const name = ref("");
const director = ref("");
const main_actor = ref("");
const second_actor = ref("");
const year = ref();
const genera = ref();
const oscars = ref([]);
const raiting = ref();

const oscarPrizes = [
  "Picture",
  "Sound Effects",
  "Directing",
  "Adapted Screen Play",
  "Original Screen Play",
  "Actor in leading role",
  "Actor in supporting role",
  "actress in leading role",
  "actress in supporting role",
];

const submit = async () => {
  const docRef = await addDoc(collection(db, "movies"), {
    name: name.value,
    director: director.value,
    main_actor: main_actor.value,
    second_actor: second_actor.value,
    year: year.value,
    genera: genera.value,
    oscars: [oscars.value],
    raiting: raiting.value,
  });

  console.log(docRef)
};
</script>

<template>
  <div class="form-holder">
    <form @submit.prevent="submit">
      <v-text-field v-model="name" label="Name"></v-text-field>

      <v-text-field v-model="director" label="director"></v-text-field>

      <v-text-field v-model="main_actor" label="Main Actor"></v-text-field>

      <v-text-field v-model="second_actor" label="Second Actor"></v-text-field>

      <v-text-field v-model="genera" label="Genera"></v-text-field>

      <v-text-field
        v-model="raiting"
        :counter="1"
        label="Raiting"
      ></v-text-field>

      <v-text-field v-model="year" :counter="4" label="Year"></v-text-field>

      <v-select
        v-model="oscars"
        :items="oscarPrizes"
        label="Oscars Won"
      ></v-select>

      <v-btn class="me-4" type="submit"> submit </v-btn>

      <v-btn> clear </v-btn>
    </form>
  </div>
</template>

<style scoped>
.form-holder {
  width: 80%;
  margin: 0 auto;
}
</style>
