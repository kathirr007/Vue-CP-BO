/* eslint-disable */
import $ from 'jquery';

$(document).ready(function () {
    // Trigger floating box from message button start



    //Open Main Menu
    $('#mainMenuDropdown').click(function (e) {
        e.stopPropagation();
        $('#mainMenuDropdown .tooltip').hide();
        $('ul.main-nav').fadeIn('400', function () {
            $('ul.main-nav').show();
        });
    });
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
});
