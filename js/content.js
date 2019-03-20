/*
 * content.js
 * Copyright (C) 2019 sboynton
 *
 * Distributed under terms of the MIT license.
 */

function addToggleTags() {
    // New Reddit
    var subreddit = $('a[data-click-id="subreddit"]');
    var dot = $('span[role="presentation"]');
    subreddit.each(function() {
        var orig = this.innerHTML;
        this.innerHTML = this.innerHTML.replace(/(.*)/,"<span class='stealthToggle'>"+orig+"</span>");
    });
    dot.each(function() {
        var orig = this.innerHTML;
        this.innerHTML = this.innerHTML.replace(/(.*)/,"<span class='stealthToggle'>"+orig+"</span>");
    })

    // Old Reddit
    var tagline = $('p.tagline');
    tagline.each(function() {
            var orig = this.outerHTML.match(/(\bto.*)/g);
            this.innerHTML = this.innerHTML.replace(/(\bto.*)/g,"<span class='stealthToggle'>"+orig+"</span>"); 
    });
}

function addToggleButton() {
    // New Reddit
    var menuitem = $('button#StateSort--StateSortPicker');
    menuitem.parent().parent().parent().after('<span id="toggleStealthButton" style="margin-left: 10px; font-family: IBMPlexSans, Arial, sans-serif; font-weight: bold; font-size: 12px; cursor: pointer; color: rgb(0, 121, 211)"><b>STEALTHMODE</b><\/span>')
    // Old Reddit
    var tabmenu = $('ul.tabmenu > li:last');
    tabmenu.after("<li id='toggleStealthButton' style='cursor: pointer;'><a id='toggleStealthButton' class='choice'>stealthmode</a></li>");
}

 $(document).ready(function() {
    document.addEventListener('DOMNodeInserted', addToggleButton());
    document.addEventListener('DOMNodeInserted', addToggleTags());
    $("#toggleStealthButton").click(function() {
        $(".stealthToggle").toggle();
    });
 });