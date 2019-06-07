var hSearch = document.getElementById( "line-input-search" );
var sSavedChapter = null;
var sSearchQuery = "";
var iSearchTimer = null;


function fNewSearch()
{
 fEraseEventListeners(); // Erases event listeners and resource nodes.
 fRemoveResourceNodes();
 fRemoveTopicNodes();
 fClearDResourceStack();
 /// The idea here is to preserve the active section and then gradually
 //   add topics and search results to a
 sSavedChapter = document.getElementsByClassName( "topic" );
 if( sSavedChapter.length == 0 )
 {
  sSavedChapter = null;
 }
 else
 {
  sSavedChapter = document.getElementsByClassName( "topic" )[0].id;
 }
 /// To-do: Populate search results.
 /// The tricky part is that I must first get results from the resources
 ///  and then acquire the matching sections before putting everything
 ///  in its place.
 fPopulateStackBySearch( sSearchQuery );

 let aDistinctQueriedChapters = dResourceStack().distinct( "sSection" ); // This gets an array of refs sections.

  // Now I just need topics.
 let aQuerysTopics = [];
 let nQuerysTopicsIndex = 0;
 nTotalTasks = aDistinctQueriedChapters.length;
 let nSectionIndexValue = 0;

 fStartAsyncTask(
  { // And supply a bunch of arguments in the form of an object.
   nMillisecondsAllotted: 25,
   nTasksAllotted: nTotalTasks,
   nTasksPerTick: 1,
   fTask: function() // In here we attach a function.
   {
    let oSectionsTopicsIndices = fPopulateTopicsViaSearch( nSectionIndexValue, nQuerysTopicsIndex, aDistinctQueriedChapters, aQuerysTopics );
    nSectionIndexValue = oSectionsTopicsIndices.nSectionIndexValue;
    nQuerysTopicsIndex = oSectionsTopicsIndices.nTopicsIndexValue;
    oSectionsTopicsIndices = null;
   },
   fUponAsyncTaskCompletion: function()
   {
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
 }
 );
}


/// Called when the search box is empty.
function fHandleSearchEmpty()
{
 // First, we eliminate all resource nodes.
 fEraseEventListeners(); // Erases event listeners and resource nodes.
 fRemoveResourceNodes();
 fRemoveTopicNodes();
 fClearDResourceStack();
 // Next, we check if we have saved a section.
 // If there is one, we load that node.
 if( sSavedChapter == null )
 {
  return;
 }
 setTimeout( function()
 {
  fPopulateTopicsViaSection( sSavedChapter );
  sSavedChapter = null;
 }, 26 );
}

/// fHandleSearchInput is the main processor of the search functions.
function fHandleSearchInput()
{
 /// First, we need a iSearchTimer before we process all of these for loops.

 // Compare the strings.
 let sSearchValue = hSearch.value.toLowerCase();

 if( sSearchValue == sSearchQuery || ( sSearchValue.length > 0 && sSearchValue.length < 4 ) )
 {
  return;
 }
 sSearchQuery = sSearchValue;
 if( sSearchValue == "" )
 {
  // If we have completely cleared the input, we need to revert to normal.
  clearTimeout(iSearchTimer);
  fHandleSearchEmpty();
  return;
 }

 // Otherwise, we need to check the iSearchTimer. If it is null, we start one.
 if( iSearchTimer != null )
 {
  clearTimeout( iSearchTimer ); // Only counts down until we have a search result.
 }

 iSearchTimer = setTimeout( fNewSearch, 2000 );

}

hSearch.addEventListener( "keyup", fHandleSearchInput );
