var input_search = document.getElementById( "search" );
var node_saved_section = null;
var string_search = "";
var timer = null;


function beginNewSearch()
{
 /// The idea here is to preserve the active section and then gradually
 //   add topics and search results to a
 node_saved_section = document.getElementsByClassName( "topic" )[0].id;

 /// To-do: Populate search results.
}


/// Called when the search box is empty.
function revertState()
{
 // First, we eliminate all resource nodes.
 eraseEventListeners(); // Erases event listeners and resource nodes.

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

 if( value_input_search == "" )
 {
  // If we have completely cleared the input, we need to revert to normal.
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




/*https://codepen.io/chrismccoy/pen/ogNMXY*/
$( document ).ready( function()
{
 function keyword_index_filter( elem )
 {

  /// So, it needs to be able to go from database access mode to not.

  var value = $(elem).val().toLowerCase();
  $(".lc").each(function()
  {
   if( $(this).text().toLowerCase().search(value) > -1 )
   {
    $(this).removeClass('hidden');
   }
   else
   {
    $(this).addClass('hidden');
   }
  });


  $(".xc").each(function()
  {
   if( $("#search").val() == "" )
   {
    $(this).removeClass('hidden');
   }
   else
   {
    $(this).addClass('hidden');
    var show = false;
    var kids = this.getElementsByClassName("lc");
    for( var i = 0; i < kids.length; i++ )
    {
     if( kids[i].classList.contains('hidden') == false )
     {
      show = true;
      i = kids.length;
     }
    }
    if( kids.length > 0 && show )
    {
     $(this).removeClass('hidden');
    }
   }
  });


  $(".topic").each(function()
  {
   if( $("#search").val() == "" )
   {
    $(this).removeClass('hidden');
   }
   else
   {
    $(this).addClass('hidden');
    var show = false;
    var kids = this.getElementsByClassName("xc");
    for( var i = 0; i < kids.length; i++ )
    {
     if( kids[i].classList.contains('hidden') == false )
     {
      show = true;
      i = kids.length;
     }
    }
    if( kids.length > 0 && show )
    {
     $(this).removeClass('hidden');
    }
   }
  });

 }

 $('#search').on('keyup', function()
 {
  keyword_index_filter(this);
 });

});
