<script setup>
import { ref } from "vue";
import { collection, doc, updateDoc } from "firebase/firestore";
import { useFirestore, useCollection, useDocument, useFirebaseAuth } from "vuefire";
import { createUserWithEmailAndPassword } from "firebase/auth";

const db = useFirestore();
const movies = useCollection(collection(db, "movies"));

const getDocById = (id) => {
  const docData = useDocument(doc(db, "movies", id));
};

const docRef = doc(db, "movies", "nk6M2NVuR9ZFiaAMiX1h");
const updateData = async () => {
  await updateDoc(docRef, {
    main_actor: "Ahmed Karam",
  });
};

const auth = useFirebaseAuth()

async function createNewUser () {
  const user = await createUserWithEmailAndPassword(
    auth,
    "ahmed@gmail.com",
    "test123456"
  )
  console.log(user)
}
</script>

<template>
  <button @click="createNewUser">User</button>
  <div class="holder">
    <div class="inner-holder">
      <a @click="updateData()">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <h1>My top {{ movies.length }} Movies of all times</h1>
      <a @click="getDocById('nk6M2NVuR9ZFiaAMiX1h')">
        <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <v-card
      :loading="loading"
      class="mx-auto my-12 text-left"
      max-width="520"
      v-for="movie in movies"
      :key="movie.id"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        cover
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-item>
        <v-card-title>
          <router-link :to="`movie/${movie.id}`">
            {{ movie.name }}
          </router-link>
        </v-card-title>

        <v-card-subtitle>
          <span class="me-1">{{ movie.director }}</span>
          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="movie.raiting / 2"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>

          <div class="text-grey ms-2">{{ movie.raiting / 2 }}</div>
        </v-row>

        <div class="my-4 text-subtitle-1">{{ movie.year }}</div>

        <div>
          <p class="text-uppercase">Oscars: {{ movie.oscars.join(" - ") }}</p>
        </div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title>Crew</v-card-title>

      <div class="px-4">
        <v-chip-group v-model="selection">
          <v-chip>{{ movie.main_actor }}</v-chip>

          <v-chip>{{ movie.second_actor }}</v-chip>

          <v-chip>{{ movie.director }}</v-chip>
        </v-chip-group>
      </div>

      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
          Edit
        </v-btn>
        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.holder {
  padding-bottom: 20px;
}
.inner-holder {
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
