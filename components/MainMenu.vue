<template>
  <ul class="main-nav">
    <li v-for="(item ,i) in mainMenu" :key="i" class="menu-item">
        <nuxt-link :to="item.link" class="nav-link">
            <i class="material-icons">{{item.icon}}</i>
            {{item.name}}
        </nuxt-link>
    </li>
    <!-- <li>
        <a href="quote.html" class="nav-link">
            <i class="material-icons">monetization_on</i>
            Quotes
        </a>
    </li>
    <li>
        <a href="contracts.html" class="nav-link">
            <i class="material-icons">assignment</i>
            Contracts
        </a>
    </li>
    <li>
        <a href="mission.html" class="nav-link">
            <i class="material-icons">alarm</i>
            Missions
        </a>
    </li>
    <li>
        <a href="quizz-surveys-list.html" class="nav-link">
          <i class="material-icons">assignment_turned_in</i>
            Quiz &amp; Survey
        </a>
    </li>
    <li>
        <a href="contributors.html" class="nav-link">
            <i class="material-icons">face</i>
            Contributors
        </a>
    </li>
    <li>
        <a href="admin-list.html" class="nav-link">
            <i class="material-icons">settings</i>
            Admin
        </a>
    </li> -->
  </ul>

</template>

<script>
  export default {
    // name: MainMenu
    data() {
      return {
        mainMenu: [
          {
            name: "clients", icon: "business", link: "clients"
          },
          {
            name: "quotes", icon: "monetization_on", link: "quotes"
          },
          {
            name: "contracts", icon: "assignment", link: "contracts"
          },
          {
            name: "missions", icon: "alarm", link: "missions"
          },
          {
            name: "quiz & survey", icon: "assignment_turned_in", link: "quiz & survey"
          },
          {
            name: "contributors", icon: "face", link: "contributors"
          },
          {
            name: "admin", icon: "settings", link: "admin"
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .menu-item {
    text-transform: capitalize;
  }
</style>
