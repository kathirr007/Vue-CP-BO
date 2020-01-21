<template>
  <div class="sidebar">
      <div class="logo">
          <a href="/">
              <img src="~assets/lbd/img/cp-logo.svg" alt="ContentPlace" />
          </a>
      </div>
      <div class="sidebar-wrapper">
          <ul class="nav">
              <li>
                  <a aria-expanded="false" class="nav-link" @click="toggleMenu" id="mainMenuDropdown" href="javascript:;">
                      <span class="d-flex" data-toggle="tooltip" data-container="body" data-placement="right" title="Menu">
                          <i class="material-icons">menu</i>
                      </span>
                  </a>
              </li>
              <li>
                  <a href="javascript:;" class="nav-link" data-toggle="modal" data-target="#dashboardNotificationsModal">
                      <span class="d-flex" data-toggle="tooltip" data-container="body" data-placement="right" title="Notifications">
                          <i class="material-icons">notifications_none</i>
                          <span class="notification">3</span>
                      </span>
                  </a>
              </li>
          </ul>
          <div class="sidebar-footer">
              <a class="switch-workplace clearfix" href="javascript:;">
                  <i class="material-icons">crop_rotate</i>
                  <p>Switch to Workplace</p>
              </a>
              <a class="profile clearfix" href="javascript:;" data-toggle="modal" data-target="#myprofileEditLogoutModal">
                  <div class="profile_pic">
                      <img src="~assets/lbd/img/default-avatar.png" alt="..." class="img-circle profile_img" />
                  </div>
                  <div class="profile_info">
                      <p>Clarrise</p>
                  </div>
              </a>
          </div>
      </div>
  </div>
</template>

<script>
  // import $ from 'jquery'
  /* $('#mainMenuDropdown').click(function (e) {
      console.log('Clicked main manu toggle...')
      e.stopPropagation();
      $('#mainMenuDropdown .tooltip').hide();
      $('ul.main-nav').fadeIn('400', function () {
          $('ul.main-nav').show();
      });
  }); */
  $(document).click(function (e) {
      if (e.target.id == 'ul.main-nav')
          return;
      //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
      if ($(e.target).closest('ul.main-nav').length)
          return;

      $('ul.main-nav').fadeOut('400', function () {
          $('ul.main-nav').hide();
      });
  });
  export default {
    methods: {
      toggleMenu(e) {
        console.log('Clicked main manu toggle...')
        e.stopPropagation();
        $('#mainMenuDropdown .tooltip').hide();
        $('ul.main-nav').fadeIn('400', function () {
            $('ul.main-nav').show();
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar-wrapper {
    ul.nav {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  }
</style>
