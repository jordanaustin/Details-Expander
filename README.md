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
No dependancies like jQuery however I do recommend using Modernizr for the feature detect of elem-details. Because I didn't want to include the entire Modornizr library I'm only including the feature detect code as a sperate file. Include this about the actual polyfill js file (build/details-expander.min.js).

    <script src="build/has-details.min.js"></script>

All credit for this feature detect goes to @mathiasbynens who created it. Find it here along with his own jQuery polyfill for the details element: http://mathiasbynens.be/notes/html5-details-jquery

<h2>License</h2>

MIT License (MIT) 
Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
