/* {{.dist}}/js/scripts.js */

/**
 * Created At: 8 Jun 2021
 */

if (window.localStorage !== undefined) {
	// supported
	if (window.localStorage.getItem("nightmode") === "true") {
		document.body.classList.add("nightmode");
	} else {
		document.body.classList.remove("nightmode");
	}
}
