// ==UserScript==
// @name         Backpack.tf Keyboard Navigator
// @version      1.03
// @description  Allows for the use of the left and right keyboard keys to navigate backpack.tf classifieds and premium search pages.
// @author       Matt-RJ
// @match        *backpack.tf/*
// @namespace https://greasyfork.org/users/313414
// ==/UserScript==

var openingNewPage = false;
var isFirstPage;
var isLastPage;

window.onkeydown = function(e) {

    var prevButton = document.getElementsByClassName('fa fa-angle-left')[0];
    var nextButton = document.getElementsByClassName('fa fa-angle-right')[0];

    try {
        isFirstPage = prevButton.parentElement.parentElement.className == "disabled";
        isLastPage = nextButton.parentElement.parentElement.className == "disabled";
    }
    catch(error) {
        // No navigation present.
    }

    if (!openingNewPage) {
        if (e.keyCode == 37) { // Left arrow press
            if (prevButton !== undefined && !isFirstPage) {
                console.log("Opening previous page...");
                prevButton.click();
                openingNewPage = true;
            }
        }

        else if (e.keyCode == 39) { // Right arrow press
            if (nextButton !== undefined && !isLastPage) {
                console.log("Opening next page...");
                nextButton.click();
                openingNewPage = true;
            }
        }
    }
};
