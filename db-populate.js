/* dLinks-populate.js
 This script provides controls for populating the content in the site.
 Other parts only need to refer to the functions provided here.
*/

/// This global variable is dual-purposed for removing nodes and adding them.
var dResourceStack = TAFFY([]); // Stacks made from queries of other databases.
var bInterrupt = false; // Interruption flag for canceling async operations.
var nCurrentTask = 0;
var nTotalTasks = 0;
var nBarWidthPercentage = 0; // For drawing the loading bar.

/* Remove node and its children. */
function fRemoveElement( hElement )
{
 let hRange = document.createRange();
 hRange.selectNodeContents( hElement );
 hRange.deleteContents();
 hRange = null;
 let hParentElement = hElement.parentNode;
 hParentElement.removeChild( hElement );
 hParentElement = null;
}

/* Erase contents of stack database. */
function fClearDResourceStack()
{
 dResourceStack().remove();
}

/* Appends a resource link from the stack to the website. */
function fAddNewResource()
{
 let hDiv = document.createElement( "div" );
 let hTag = document.createElement( "span" );
 let hLink = document.createElement( "a" );
 let hDetails = document.createElement( "span" );
 let oResource = dResourceStack().first();

 // Containing div that acts similar to details.
 hDiv.setAttribute( "aria-label", "Expand description" );
 hDiv.setAttribute( "tabindex", "0" );
 hDiv.className = "resource";
 hDiv.addEventListener( "keyup", fHandleKeyUpResource, false );
 hDiv.addEventListener( "click", fHandleClickResource, false );
 // The tag in each summary.
 hTag.classList.add( "tag" );
 hTag.classList.add( oResource.sTagColor );
 hTag.appendChild( document.createTextNode( oResource.sTag ) );
 // The link in the summary.
 hLink.href = oResource.sURL;
 hLink.setAttribute( "target", "_BLANK" );
 hLink.className = "icon-external-link";
 hLink.appendChild( document.createTextNode( oResource.sSummary ) );
 // The description.
 hDetails.className = "resource-details";
 hDetails.appendChild( document.createTextNode( oResource.sDetails ) );
 // Assemble it.
 hDiv.appendChild( hTag );
 hDiv.appendChild( hLink );
 hDiv.appendChild( hDetails );

 document.getElementById( oResource.sSection ).appendChild( hDiv );

 dResourceStack().limit( 1 ).remove();
 fUpdateLoadingBar();
}

/* Creates and returns a new empty chapter */
function fCreateNewChapter( sChapterID, sChapterName )
{
 let hDiv = document.createElement( "div" );
 let hButton = document.createElement( "button" );
 let hSection = document.createElement( "section" );

 hDiv.className = "chapter";

 hButton.className = "button-chapter-name";
 hButton.setAttribute( "type", "button" );
 hButton.setAttribute( "aria-label", "Expand description" );
 hButton.appendChild( document.createTextNode( sChapterName ) );

 hSection.id = sChapterID;
 // Assemble it.
 hDiv.appendChild( hButton );
 hDiv.appendChild( hSection );

 return hDiv;
}

/* Adds a child to a topic in response to a menu click. */
function fAddChapterFromMenu( hTopic, nChapterArrayIndex, aChapters )
{
 let sChapterID = aChapters[ nChapterArrayIndex ][ 0 ];
 let sChapterName = aChapters[ nChapterArrayIndex ][ 1 ];
 let hChapter = fCreateNewChapter( sChapterID, sChapterName );

 hTopic.appendChild( hChapter );
 return nChapterArrayIndex + 1;
}

/* Creates, appends to site, and returns a topic element. */
function fCreateAndAddNewTopic( sTopicID, sTopicName )
{
 let hDiv = document.createElement( "div" );
 let hH2 = document.createElement( "h2" );

 hDiv.className = "topic";
 hDiv.id = sTopicID;

 hH2.appendChild( document.createTextNode( sTopicName ) );

 /// Assemble.
 hDiv.appendChild( hH2 );

 document.getElementById( "wrapper-resource-content" ).appendChild( hDiv );
 return hDiv;
}

/* Someone very kind has provided a basic way to do this.
https://stackoverflow.com/questions/41366438/how-to-output-to-console-in-real-time-in-javascript
*/

/* Updates loading bar with increased amount. */
function fUpdateLoadingBar()
{
 // And to do that, we want one action, like this, repeated
 nBarWidthPercentage = ++nCurrentTask / nTotalTasks * 100;
 // And for the browser to update like so,
 var hLoadingBar = document.getElementById( "dynamic-loading-bar" );
 hLoadingBar.style.width = nBarWidthPercentage + '%';
 // but without processing the increase all at once.
 hLoadingBar.setAttribute('loading', nCurrentTask + ' / ' + nTotalTasks );
 if( nBarWidthPercentage == 100 )
 {
  hLoadingBar.className = 'loading-complete';
 }
}

/* This function initiates an asynchronously performed task. */
function fStartAsyncTask( oParameters )
{
 let nMillisecondsAllotted = oParameters.nMillisecondsAllotted;
 let nTasksAllotted = oParameters.nTasksAllotted;
 let nTasksPerTick = oParameters.nTasksPerTick;
 let nCompletedTasks = 0;
 let nTotalTicks = Math.ceil( nTasksAllotted / nTasksPerTick );
 let iCurrentAsyncTask = null;
 let hLoadingBar = document.getElementById( "dynamic-loading-bar" );

 nCurrentTask = 0;
 hLoadingBar.classList.remove( "loading-complete" );
 hLoadingBar.setAttribute( "loading", nCurrentTask + " / " + nTotalTasks );

 if( nTotalTicks === 0 )
 {
  return;
 }

 var fTickTask = function()
 {
  let nCompletedTasksByTickEnd = Math.min( nCompletedTasks + nTasksPerTick, nTasksAllotted );
  do
  {
   oParameters.fTask( nCompletedTasks++ );
  } while( nCompletedTasks < nCompletedTasksByTickEnd );

  if( nCompletedTasks >= nTasksAllotted || bInterrupt )
  {
   if( bInterrupt == false )
   {
    oParameters.fUponAsyncTaskCompletion();
   }
   clearInterval( iCurrentAsyncTask );
  }
 };
 // Tick once immediately, and then as many times as needed using setInterval
 fTickTask();
 if( nTotalTicks > 1 )
 {
  iCurrentAsyncTask = setInterval( fTickTask, nMillisecondsAllotted / nTotalTicks );
 }
}

/* Remove all active topics. */
function fRemoveTopicNodes()
{
 let aTopics = Array.prototype.slice.call( document.getElementsByClassName( "topic" ) );

 for( let nTopicsIndex = aTopics.length - 1; nTopicsIndex >= 0; nTopicsIndex--  )
 {
  fRemoveElement( aTopics[ nTopicsIndex ] );
 }
}
/* Remove all Resources */
function fRemoveResourceNodes()
{
 let aResources = Array.prototype.slice.call( document.getElementsByClassName( "resource" ) );
 for( let nResourcesIndex = aResources.length - 1; nResourcesIndex >= 0; nResourcesIndex--  )
 {
  fRemoveElement( aResources[ nResourcesIndex ] );
 }
}

/* Copies a record entry (an array made of a dLinks entry) to the stack. */
function fCopyRecordToStack( aRecord )
{
 dResourceStack.insert(
  {
   "sTag" : aRecord[ "sTag" ], "sTagColor" : aRecord[ "sTagColor" ],
   "sSection" : aRecord[ "sSection" ], "sSummary" : aRecord[ "sSummary" ],
   "sURL" : aRecord[ "sURL" ], "sDetails" : aRecord[ "sDetails" ]
  }
 );
}

/* Populate the dResourceStack object according to section (handled by menu clicks) */
function fPopulateStackBySection( aSectionNames )
{
 for( let nSectionArrayIndex = 0; nSectionArrayIndex < aSectionNames.length; nSectionArrayIndex++ )
 {
  dLinks( { "sSection" : aSectionNames[ nSectionArrayIndex ] } ).each( function( record, recordnumber )
  {
   fCopyRecordToStack( record );
  } );
 }
}

/* Populate dResourceStack with results from search input string. */
function fPopulateStackBySearch( sSearch )
{
 dLinks( function()
 {
  if( this.sSection.includes( sSearch ) || this.sSummary.includes( sSearch ) ||
       this.sDetails.includes( sSearch ) || this.sURL.includes( sSearch ) ||
       this.sTag.includes( sSearch ) )
  {
   return true;
  }
  return false;
 } ).each( function( record, recordnumber )
 {
   fCopyRecordToStack( record );
 } );
}

/* After database entries are appended to the site, we add event listeners. */
function fAddAllEventListeners()
{
 let aByClassChapter = document.getElementsByClassName( "chapter" );
 for( let nChapterIndex = 0; nChapterIndex < aByClassChapter.length; nChapterIndex++ )
 {
  aByClassChapter[ nChapterIndex ].addEventListener( "click", fHandleClickChapter, false );
  aByClassChapter[ nChapterIndex ].addEventListener( "keyup", fHandleKeyUpChapter, false );
 }
 let aByClassChapterButtonName = document.getElementsByClassName( "button-chapter-name" );
 for( let nButtonIndex = 0; nButtonIndex < aByClassChapterButtonName.length; nButtonIndex++ )
 {
  fSetNewARIALabel( aByClassChapterButtonName[ nButtonIndex ], "Expand" );
  aByClassChapterButtonName[ nButtonIndex ].addEventListener( "click", fHandleClickChapterButton, false );
 }
}

/* Retrieves an array of chapters from the queried topic. */
function fGetChapterArray( sQueriedTopicID )
{
 return dTopics( { "sTopicID" : sQueriedTopicID } ).first().aChapters;
}

/* Asynchronously Populates a stack and then populates a topic with the stack. */
function fPopulateTopicWithStack( sQueriedTopicID )
{
 bInterrupt = false;
 var aChaptersFromQuery = fGetChapterArray( sQueriedTopicID );
 fPopulateStackBySection( aChaptersFromQuery );
 nTotalTasks = dResourceStack().count();

 fStartAsyncTask(
  { // And supply a bunch of arguments in the form of an object.
   nMillisecondsAllotted: 25,
   nTasksAllotted: nTotalTasks,
   nTasksPerTick: 1,
   fTask: function() // In here we attach a function.
   {
    fAddNewResource();
   },
   fUponAsyncTaskCompletion: function()
   {
    fAddAllEventListeners();
   }
  }
 );
}

/* Handled via menu click, make a topic and append chapters to it. */
function fPopulateTopicsViaSection( sQueriedTopicID )
{
 var aChaptersFromQuery = fGetChapterArray( sQueriedTopicID );
 var nChaptersQueryIndex = 0;
 nTotalTasks = aChaptersFromQuery.length;
 bInterrupt = false;

 /// Create the topic element.
 let sTopicName = dTopics( { "sTopicID" : sQueriedTopicID } ).first().sTopic;
 var hTopic = fCreateAndAddNewTopic( sQueriedTopicID, sTopicName );

 fStartAsyncTask(
  {
   nMillisecondsAllotted: 25,
   nTasksAllotted: nTotalTasks,
   nTasksPerTick: 1,
   fTask: function()
   {
    nChaptersQueryIndex = fAddChapterFromMenu( hTopic, nChaptersQueryIndex, aChaptersFromQuery );
   },
   fUponAsyncTaskCompletion: function()
   {
    hTopic = null;
    fPopulateTopicWithStack( sQueriedTopicID );
   }
  }
 );
}

/* Wrapper function for the search function to create topics. */
function fPrepareTopicViaSearch( sQueriedTopicID )
{
 let aChaptersFromQuery = fGetChapterArray( sQueriedTopicID );
 nTotalTasks = aChaptersFromQuery.length;
 bInterrupt = false;
 //let i = 0;

 let sTopicName = dTopics( { "sTopicID" : sQueriedTopicID } ).first().sTopic;
 fCreateAndAddNewTopic( sQueriedTopicID, sTopicName );
}

/* Using a search term, append topics to the website. */
function fPopulateTopicsViaSearch( nSectionIndex, nTopicsIndex, aSections, aTopics )
{
 let sChapterName = "";
 let sCurrentSection = aSections[ nSectionIndex ];
 let oSelectedTopic = dTopics( function()
  {
   for( let nChaptersIndex = 0; nChaptersIndex < this.aChapters.length; nChaptersIndex++ )
   {
    if( this.aChapters[ nChaptersIndex ][ 0 ] == sCurrentSection )
    {
     sChapterName = this.aChapters[ nChaptersIndex ][ 1 ];
     return true;
    }
   }
   return false;
  }
 ).first();
 let bAlreadyMadeTopic = false;

 // This groups the topics into one place.
 for( let nAlreadyTopicsIndex = 0; nAlreadyTopicsIndex < aTopics.length; nAlreadyTopicsIndex++ )
 {
  if( aTopics[ nAlreadyTopicsIndex ] == oSelectedTopic.sTopic )
  {
   nAlreadyTopicsIndex = aSections.length;
   bAlreadyMadeTopic = true;
  }
 }

 if( bAlreadyMadeTopic == false )
 {
  aTopics[ nTopicsIndex ] = oSelectedTopic.sTopic;
  nTopicsIndex++;
  fPrepareTopicViaSearch( oSelectedTopic.sTopicID );
 }
 var node_chapter = fCreateNewChapter( aSections[ nSectionIndex ], sChapterName );
 document.getElementById( oSelectedTopic.sTopicID ).appendChild( node_chapter );

 return { nSectionIndexValue : nSectionIndex + 1, nTopicsIndexValue: nTopicsIndex };
}


/* This iterates through all of the appended db elements and removes event listeners. */
function fEraseEventListeners()
{
 let aByClassChapterButtonName = document.getElementsByClassName( "button-chapter-name" );
 for( let nButtonIndex = 0; nButtonIndex < aByClassChapterButtonName.length; nButtonIndex++ )
 {
  aByClassChapterButtonName[ nButtonIndex ].removeEventListener( "click", fHandleClickChapterButton, false );
 }
 let aByClassChapter = document.getElementsByClassName( "chapter" );
 for( let nChapterIndex = 0; nChapterIndex < aByClassChapter.length; nChapterIndex++ )
 {
  aByClassChapter[ nChapterIndex ].removeEventListener( "click", fHandleClickChapter, false );
  aByClassChapter[ nChapterIndex ].removeEventListener( "keyup", fHandleKeyUpChapter, false );
 }
 let aByClassTopic = document.getElementsByClassName( "topic" );
 for( let nTopicIndex = aByClassTopic.length - 1; nTopicIndex >= 0 ; nTopicIndex-- )
 {
  fRemoveElement( aByClassTopic[ nTopicIndex ] );
 }
}

/* Wrapper function for erasing event listeners and populating topics. */
function fPopulateViaMenu( sQueriedTopicID )
{
 bInterrupt = true; // First, cancel all existing timers.
 fEraseEventListeners();
 setTimeout( fPopulateTopicsViaSection( sQueriedTopicID ), 26 );
}
