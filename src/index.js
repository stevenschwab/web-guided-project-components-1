// TASK 1- Import the data we need to "hydrate" our component
//  On the one hand, the default export from data/panelData.js
//  On the other hand, two NAMED exports (open and close) from data/constants.js


// TASK 2- Verify our imports using log statements
console.log() // log the title meant for the first panel
console.log() // log the open arrow
console.log() // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = null


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(/* what data does the panel need? */) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = null
  const panelBar = null
  const panelContent = null
  const panelTitle = null
  const panelButtons = null
  const panelOpenButton = null
  const panelCloseButton = null


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // panelOpenButton
          <button></button> // panelCloseButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */


  // TASK 7- Add proper class names to our elements (See index.html for reference)


  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file


  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)


  // don't forget to return the panel!
  return null
}


// TASK 10- Loop through the panelData in the data folder
//  creating panels for each content and title,
//  and append them to the DOM


// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.