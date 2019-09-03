// ==UserScript==
// @name         Step-exposure
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Expose other teams step counts
// @match        https://www.10000steps.org.au/tournament-race/*/
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==
(() => {
	"use strict";

	function run() {
		console.info("performing step exposure...");
        $('tr.memberblock').css({ display: "table-row" });
	}

	run();

})();
