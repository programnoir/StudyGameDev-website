var input_search = document.getElementById( "line-input-search" );
var node_saved_section = null;
var string_search = "";
var timer = null;


function beginNewSearch()
{
 fEraseEventListeners(); // Erases event listeners and resource nodes.
 fRemoveResourceNodes();
 fRemoveTopicNodes();
 fClearDResourceStack();
 /// The idea here is to preserve the active section and then gradually
 //   add topics and search results to a
 node_saved_section = document.getElementsByClassName( "topic" );
 if( node_saved_section.length == 0 )
 {
  node_saved_section = null;
 }
 else
 {
  node_saved_section = document.getElementsByClassName( "topic" )[0].id;
 }
 /// To-do: Populate search results.
 /// The tricky part is that I must first get results from the resources
 ///  and then acquire the matching sections before putting everything
 ///  in its place.
 fPopulateStackBySearch( string_search );

 var array_of_sections = dResourceStack().distinct( "sSection" ); // This gets an array of refs sections.

  // Now I just need topics.
 var array_of_topics = [];
 var topic_index = 0;

 total_tasks = array_of_sections.length;
 var k = 0;
 fStartAsyncTask(
 { // And supply a bunch of arguments in the form of an object.
  nMillisecondsAllotted: 25,
  nTasksAllotted: total_tasks,
  nTasksPerTick: 1,
  fTask: function() // In here we attach a function.
  {
   var o_kt = fPopulateTopicsViaSearch( k, topic_index, array_of_sections, array_of_topics );
   k = o_kt.nSectionIndexValue;
   topic_index = o_kt.nTopicsIndexValue;
   o_kt = null;
  },
  fUponAsyncTaskCompletion: function()
  {
   total_tasks = dResourceStack().count();
   fStartAsyncTask(
   { // And supply a bunch of arguments in the form of an object.
    nMillisecondsAllotted: 25,
    nTasksAllotted: total_tasks,
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
function revertState()
{
 // First, we eliminate all resource nodes.
 fEraseEventListeners(); // Erases event listeners and resource nodes.
 fRemoveResourceNodes();
 fRemoveTopicNodes();
 fClearDResourceStack();
 // Next, we check if we have saved a section.
 // If there is one, we load that node.
 if( node_saved_section == null )
 {
  return;
 }
 setTimeout( function()
 {
  fPopulateTopicsViaSection( node_saved_section );
  node_saved_section = null;
 }, 26 );
}

/// handleSearchInput is the main processor of the search functions.
function handleSearchInput()
{
 /// First, we need a timer before we process all of these for loops.

 // Compare the strings.
 var value_input_search = input_search.value.toLowerCase();

 if( value_input_search == string_search || ( value_input_search.length > 0 && value_input_search.length < 4 ) )
 {
  return;
 }
 string_search = value_input_search;
 if( value_input_search == "" )
 {
  // If we have completely cleared the input, we need to revert to normal.
  clearTimeout(timer);
  revertState();
  return;
 }

 // Otherwise, we need to check the timer. If it is null, we start one.
 if( timer != null )
 {
  clearTimeout(timer); // Only counts down until we have a search result.
 }

 timer = setTimeout( beginNewSearch, 2000 );

}

input_search.addEventListener( "keyup", handleSearchInput );
