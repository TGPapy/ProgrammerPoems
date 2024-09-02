//Loads an HTML snippet into a target element.
export function LoadHTMLSnippet(targetElementId, snippetPath) {

    //Get the target element we want to load the snippet into.
    const targetElement = document.getElementById(targetElementId);

    //Get the html snippet we want to load.
    fetch(snippetPath)
    .then(response => {
        if (response.ok) {
            return response.text();
        }
    })
    //Load the html snippet into the target element.
    .then(htmlSnippet => {
        targetElement.innerHTML = htmlSnippet;
    });
}
