Details Expander: < details > everywhere
================

A details element polyfill with minimal CSS and JavaScript.
This is based on the purposed spec for a details element.
<br/>
WhatWG: http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html
<br/>
W3C Markup: http://dev.w3.org/html5/markup/details.html
<br/>
Wiki: http://www.w3.org/wiki/HTML/Elements/details

If you'd like to use the details element and don't know where to start, take a look at html5doctor's little tutorial: http://html5doctor.com/the-details-and-summary-elements/ 

<h2>How to Use</h2>

The polyfill is a small CSS file and this simple javascript file. Include these where you see fit:

    <link rel="stylesheet" href="build/details-expander.css">
    <script src="build/details-expander.min.js"></script>


<h2>Dependancies</h2>
Currently dependant on Modernizr for detecting if the details element is supported. 

I recommend building your own modernizr from http://modernizr.com and make sure to include the elem-details feature detect. 

If you want to use the one included here include include the following above the details-expander.min.js script:

    <script src="vendor/modernizr/modernizr.js"></script>
    <script src="vendor/modernizr/feature-detects/elem-details.js"></script>				

