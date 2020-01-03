<template>
  <div>
    <h1>
      Missions list
    </h1>
    <!-- <h2>Prod Missions</h2>
    <ul>
      <li v-for="(item, index) in prodMissions" :key="index">
        {{item.mission_id}}
      </li>
    </ul>
    <h2>Tech Missions</h2>
    <ul>
      <li v-for="(item, index) in techMissions" :key="index">
        {{item.mission_id}}
      </li>
    </ul> -->
    <h2>Prod Missions</h2>
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
    </RecycleScroller>
  </div>
</template>

<script>
  // import {$} from '~/assets/jquery.js'
  import axios from 'axios'
  import Vue from 'vue'
  import missionsList from '~/assets/missions-list.json'
  import { DynamicScroller, RecycleScroller } from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

  $.ajax({
    url: "http://contentplace.x1.fr/missions?mission_status=draft&client_secret=$2y$10$r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi",
    type: 'get',
    data: {},
    beforeSend: function () {
      console.log('processing');
    },
    success: function (data) {
      console.log(data);
    }

  });

  export default {
    data(){
      return {
        // prodMissions: [],
        prerender: 25,
        techMissions: [],
        prodMissions: []
      }
    },
    components: {
      DynamicScroller, RecycleScroller
    },
    created(){
      console.log("Created...")
      // this.prodMissions = missionsList.data.prodMission
      // this.techMissions = missionsList.data.techMission
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
      let webApiUrl = 'http://contentplace.x1.fr/missions?mission_status=draft&client_secret=$2y$10$r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi';
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
        );
    },

  }
</script>

<style lang="scss" scoped>
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
