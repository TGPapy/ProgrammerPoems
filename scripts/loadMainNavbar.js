//Module imports
//=======================================================================================
import { LoadHTMLSnippet } from "./utils.js";


//Events
//=======================================================================================
//On DOMContentLoaded
addEventListener("DOMContentLoaded", () => {
    //Load the main navigation bar for the site.
    LoadHTMLSnippet("mainNavbarLoadTarget", "/snippets/mainNavbar.html");
});
