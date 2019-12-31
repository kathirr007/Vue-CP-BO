<template>
  <div>
    <h1>
      Missions list
    </h1>
    <!-- <h2>Prod Missions</h2>
    <ul>
      <li v-for="(item, index) in prodMission" :key="index">
        {{item.mission_id}}
      </li>
    </ul>
    <h2>Tech Missions</h2>
    <ul>
      <li v-for="(item, index) in techMission" :key="index">
        {{item.mission_id}}
      </li>
    </ul> -->
    <h2>Prod Missions</h2>
    <RecycleScroller
    class="scroller"
    :items="prodMissions"
    key-field="mission_id"
    prerender="10"
    v-slot="{ item }"
    >
      <div class="user">
        {{ item.mission_name }}
      </div>
    </RecycleScroller>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { DynamicScroller, RecycleScroller } from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  export default {
    data(){
      return {
        prodMissions: null,
        techMissions: null
      }
    },
    components: {
      DynamicScroller, RecycleScroller
    },
    created(){
      console.log("Created...")
    },
    mounted() {
      let webApiUrl = '/missions';
      console.log("Mounted...")
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
            var status = error.response.status
          }
        );
    },

  }
</script>

<style lang="scss" scoped>
  .scroller {
    height: 100%;
  }

  .user {
    height: 32%;
    padding: 0 12px;
    display: flex;
    align-items: center;
  }
</style>
