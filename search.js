var input_search = document.getElementById( "search" );
var node_saved_section = null;
var string_search = "";
var timer = null;


function beginNewSearch()
{
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
 populateRefsWithResourcesBySearch( string_search );

 var array_of_sections = refs().distinct("section"); // This gets an array of refs sections.

  // Now I just need topics.
 var array_of_topics = [];
 var topic_index = 0;

 for( var k = 0; k < array_of_sections.length; k++ )
 {
  var text_button = "";
  var sec = array_of_sections[ k ];
  var topic_selected = db_topics( function()
   {
    for( var z = 0; z < this.topic_array.length; z++ )
    {
     if( this.topic_array[ z ][ 0 ] == sec )
     {
      text_button = this.topic_array[ z ][ 1 ];
      return true;
     }
    }
    return false;
   }
  ).first();
  var flagMadeTopicAlready = false;

  // This groups the topics into one place.
  for( var l = 0; l < array_of_topics.length; l++ )
  {
   if( array_of_topics[ l ] == topic_selected.topic )
   {
    l = array_of_sections.length;
    flagMadeTopicAlready = true;
   }
  }

  if( flagMadeTopicAlready == false )
  {
   array_of_topics[ topic_index ] = topic_selected.topic;
   topic_index++;
   populateTopicsBySearch( topic_selected.topic_id );
   /// This populates all of the topics.
   /// But I need to only populate the XCs that are needed.
   /// I do however have an array of XCs.
  }

  var node_xc = addNewXC( text_button, array_of_sections[ k ] );
  document.getElementById( topic_selected.topic_id ).appendChild( node_xc );

 }

 total_tasks = refs().count();
 doHeavyTask(
  { // And supply a bunch of arguments in the form of an object.
   totalMillisAllotted: 25,
   totalTasks: total_tasks,
   tasksPerTick: 1,
   task: function() // In here we attach a function.
   {
    addNewModule();
   },
   taskUponCompletion: function()
   {
    addAllEventListeners();
   }
  }
 );

}


/// Called when the search box is empty.
function revertState()
{
 // First, we eliminate all resource nodes.
 eraseEventListeners(); // Erases event listeners and resource nodes.
 clearRefs();
 // Next, we check if we have saved a section.
 // If there is one, we load that node.
 if( node_saved_section == null )
 {
  return;
 }
 setTimeout( function()
 {
  populateTopicsBySection( node_saved_section );
  node_saved_section = null;
  document.getElementsByClassName( "topic" )[0].classList.add("show");
 }, 26 );
}

/// handleSearchInput is the main processor of the search functions.
function handleSearchInput()
{
 /// First, we need a timer before we process all of these for loops.

 // Compare the strings.
 var value_input_search = input_search.value.toLowerCase();

 if( value_input_search == string_search )
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
