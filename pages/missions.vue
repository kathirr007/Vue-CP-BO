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
          v-if="cards"
        >
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
        >
          <h2 class="card-header-title">{{ card.client_name }}</h2>
          <p class="card-content">{{ card.contractname }}</p>
          <h3>
            Card Important Dates
          </h3>
          <!-- <p class="card-launch-date">
            Card Launch Date : {{ card.contract_launch_date }}
          </p>
          <p class="card-launch-date">
            Card End Date : {{ card.contract_end_date }}
          </p>
          <p class="card-launch-date">
            Mission Start Date : {{ card.mission_start_date }}
          </p>
          <p class="card-launch-date">
            Mission End Date : {{ card.mission_end_date }}
          </p> -->
          <p class="card-launch-date">
            Card creation Date : {{ card.card_created_at }}
          </p>
          <p class="card-launch-date">
            Card Due Date : {{ card.card_due_date }}
          </p>
        </div>
        <!-- Infinite Loading Posts -->
        <!-- <InfiniteLoading
          spinner="bubbles"
          @infinite="infiniteHandler"
          style="grid-column: 1 / 3"
        >
          <div slot="no-more">No more Prod Cards</div>
          <div slot="no-results">No results</div>
        </InfiniteLoading> -->
      </div>
    </div>
    <!-- <h2>Tech Cards</h2>
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
        <InfiniteLoading
          spinner="bubbles"
          @infinite="infiniteHandler"
          style="grid-column: 1 / 3"
        >
          <div slot="no-more">No more Tech Cards</div>
          <div slot="no-results">No results</div>
        </InfiniteLoading>
      </div>
    </div> -->
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
        startFrom:0,
        numberOfRecords: 10,
        posts: [],
        numberPosts: 6,
        // cards:[]
      }
    },
    asyncData({$axios}) {
      const apiUrl = `http://contentplace.x1.fr/cards?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&startFrom=0&numberOfRecords=10`
      return $axios.$get(`${apiUrl}`)
        .then(response => {
          // let fetchedCards = {...response.data.prodCards, ...response.data.techCards}
          return {
            cards: [...response.data.prodCards, ...response.data.techCards].sort((a,b) => {
              return new Date(b.card_created_at) - new Date(a.card_created_at)
            })
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      /* async infiniteHandler($state) {
        // console.log(this.prodCards)
        await this.$axios
          .$get(
            `http://contentplace.x1.fr/cards?client_secret=%242y%2410%24r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi&startFrom=${this.startFrom}&numberOfRecords=10`
          )
          .then(response => {
            // console.log(response)
            // console.log(typeof((response.data)))
            // console.log(response.data)
            // console.log(response.data.length)
            // console.log(response.data.prodCards)
            // console.log(response.data.prodCards.length > 0)
            if (response.data.prodCards.length > 0) {
              let prodCards = response.data.prodCards
              let techCards = response.data.techCards
              let mergedArray = []
              this.startFrom = this.numberOfRecords;
              this.numberOfRecords += 10;
              mergedArray.push(...response.data.prodCards, ...response.data.techCards);
              // console.log(mergedArray)
              // let sortByLaunchDate = mergedArray.sort((a,b) => {
              //   return new Date(b.contract_launch_date) - new Date(a.contract_launch_date)
              // })
              this.cards.push(...prodCards, ...techCards);
              // this.techCards.push(...response.data.techCards);
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch(error => {
            console.error(error);
          });
      } */
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
    margin-bottom: 1.5rem;

    /* &:not(:last-child){
      margin-bottom: 1.5rem;
    } */
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
