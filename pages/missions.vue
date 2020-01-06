<template>
  <div>
    <!-- <h1>
      Missions list
    </h1> -->
    <!-- <h2>Prod Missions</h2>
    <ul>
      <li v-for="(item, index) in prodMissions" :key="index">
        {{item.client_id}}
      </li>
    </ul>
    <h2>Tech Missions</h2>
    <ul>
      <li v-for="(item, index) in techMissions" :key="index">
        {{item.client_id}}
      </li>
    </ul> -->
    <!-- <h2>Prod Missions</h2>
    <div v-if="prodMissions.length > 1">
      <RecycleScroller
      class="scroller"
      :item-size="32"
      :items="prodMissions"
      key-field="mission_id"
      v-slot="{ item }"
      :prerender="prerender"
      page-mode
      >
        <div class="user">
          {{ item.mission_id }}
        </div>
      </RecycleScroller>
    </div>
    <h2>Tech Missions</h2>
    <RecycleScroller
    class="scroller"
    :item-size="32"
    :items="techMissions"
    key-field="mission_id"
    v-slot="{ item }"
    :prerender="prerender"
    page-mode
    >
      <div class="user">
        {{ item.mission_id }}
      </div>
    </RecycleScroller> -->
    <h1>Task Cards</h1>
    <h2>Prod Cards</h2>
    <div class="container">
      <div
          class="grid"
          v-if="prodCards"
        >
        <div
          class="card"
          v-for="(card, index) in prodCards"
          :key="index"
        >
          <h2 class="card-header-title">{{ card.client_name }}</h2>
          <p class="card-content">{{ card.contractname }}</p>
        </div>
        <!-- Infinite Loading Posts -->
        <InfiniteLoading
          spinner="bubbles"
          @infinite="infiniteHandler"
          style="grid-column: 1 / 3"
        >
          <div slot="no-more">No more Prod Cards</div>
          <div slot="no-results">No results</div>
        </InfiniteLoading>
      </div>
    </div>
    <h2>Tech Cards</h2>
    <div class="container">
      <div
          class="grid"
          v-if="techCards"
        >
        <div
          class="card"
          v-for="(card, index) in techCards"
          :key="index"
        >
          <h2 class="card-header-title">{{ card.client_name }}</h2>
          <p class="card-content">{{ card.contractname }}</p>
        </div>
        <!-- Infinite Loading Posts -->
        <InfiniteLoading
          spinner="bubbles"
          @infinite="infiniteHandler"
          style="grid-column: 1 / 3"
        >
          <div slot="no-more">No more Tech Cards</div>
          <div slot="no-results">No results</div>
        </InfiniteLoading>
      </div>
    </div>
    <div class="container">
      <div
        class="grid"
        v-if="posts"
      >
        <div
          class="card"
          v-for="(post, index) in posts"
          :key="index"
        >
          <h2 class="card-header-title">{{ post.title }}</h2>
          <p class="card-content">{{ post.body }}</p>
        </div>
        <!-- Infinite Loading Posts -->
        <InfiniteLoading
          spinner="bubbles"
          @infinite="infiniteHandler2"
          style="grid-column: 1 / 3"
        >
          <div slot="no-more">No more message</div>
          <div slot="no-results">No results</div>
        </InfiniteLoading>
      </div>
    </div>
  </div>
</template>

<script>
  // import {$} from '~/assets/jquery.js'
  import axios from 'axios'
  import Vue from 'vue'
  import missionsList from 'assets/missions-list.json'
  import { DynamicScroller, RecycleScroller } from 'vue-virtual-scroller'
  import InfiniteLoading from 'vue-infinite-loading';
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

  export default {
    data(){
      return {
        prerender: 25,
        prodMissions: [],
        techMissions: [],
        prodCards: [],
        techCards: [],
        numberOfRecords: 5,
        posts: [],
        numberPosts: 6
      }
    },
    /* asyncData() {
      const apiUrl = `http://contentplace.x1.fr/cards?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&numberOfRecords=5`
      return axios.get(`${apiUrl}`)
        .then(response => {
          return {
              prodCards: response.data.prodCards,
              techCards: response.data.techCards,
            }
        })
    }, */
    methods: {
      infiniteHandler2($state) {
        axios
          .get(
            `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${this.numberPosts}`
          )
          .then(response => {
            // console.log(response.data)
            if (response.data.length > 0) {
              this.numberPosts += 6;
              this.posts.push(...response.data);
              $state.loaded();
              // console.log(this.posts)
            } else {
              $state.complete();
            }
          })
          .catch(error => {
            console.error(error);
          });
      },
      infiniteHandler($state) {
        // console.log(this.prodCards)
        this.$axios
          .$get(
            `http://contentplace.x1.fr/cards?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&numberOfRecords=${this.numberOfRecords}`
          )
          .then(response => {
            console.log(response)
            console.log(typeof((response.data)))
            console.log(response.data)
            console.log(response.data.length)
            console.log(response.data.prodCards)
            if (response.data != null) {
              this.numberOfRecords += 5;
              this.prodCards.push(...response.data.prodCards);
              this.techCards.push(...response.data.techCards);
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    components: {
      DynamicScroller, RecycleScroller, InfiniteLoading
    },
    created(){
      console.log("Created...")
      /* let webApiUrl = 'http://contentplace.x1.fr/missions?mission_status=draft&client_secret=$2y$10$r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi';
      this.$axios.$get(
          webApiUrl, {

          }
        )
        .then((response) => {
            this.prodMission = response.data.prodMission
            this.techMission = response.data.techMission
            console.log((response));
          }
        )
        .catch((error) => {
            console.log(error)
            // var status = error.response.status
          }
        ); */
    },
    mounted() {
      // let webApiUrl = '/missions';
      console.log("Mounted...")
      // this.prodMissions = missionsList.data.prodMission
      // this.techMissions = missionsList.data.techMission
      // console.log(missionsList.data)
      // console.log(this.prodMissions)
      // console.log(this.techMissions)
      /* let webApiUrl = 'http://contentplace.x1.fr/missions?mission_status=ongoing&client_secret=$2y$10$r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi';
      this.$axios.$get(
          webApiUrl, {

          }
        )
        .then((response) => {
            this.prodMissions = response.data.prodMission
            this.techMissions = response.data.techMission
            console.log((response));
          }
        )
        .catch((error) => {
            console.log(error)
            // var status = error.response.status
          }
        ); */
    },

  }
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
  .card {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;

    &:not(:last-child){
      margin-bottom: 1.5rem;
    }
  }

  .scroller {
    height: 100%;
    overflow-y: auto;
  }

  .user {
    height: 32%;
    padding: 0 12px;
    display: flex;
    align-items: center;
  }
</style>
