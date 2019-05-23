/* db-populate.js
 This script provides controls for populating the content in the site.
 Other parts only need to refer to the functions provided here.
*/

// This global variable is dual-purposed for removing nodes and adding them.
var refs = TAFFY([]);
var total_tasks = 0;
var bar_width = 0;
var current = 0;

/// Remove node
function removeElement( node )
{
 node.parentNode.removeChild(node);
}


/// Function for adding a new module using the refs entry.
function addNewModule()
{
 var d = document.createElement('div');
 var tg = document.createElement('span');
 var aa = document.createElement('a');
 var dp = document.createElement('span');
 var first_result = refs().first();

 // Containing div that acts similar to details.
 d.setAttribute( "aria-label", "Expand description" );
 d.setAttribute( "tabIndex", "0" );
 d.className = "lc";
 d.addEventListener( "keyup", handleKeyUpLC, false );
 d.addEventListener( "click", handleClickLC, false );
 // The tag in each summary.
 tg.classList.add("tag");
 tg.classList.add( first_result.tagColor );
 tg.appendChild( document.createTextNode( first_result.tagName ) );
 // The link in the summary.
 aa.href = first_result.url;
 aa.setAttribute( "target", "_BLANK" );
 aa.className = "icon-external-link";
 aa.appendChild( document.createTextNode( first_result.summary ) );
 // The description.
 dp.className = "desc";
 dp.appendChild( document.createTextNode( first_result.details ) );
 // Assemble it.
 d.appendChild( tg );
 d.appendChild( aa );
 d.appendChild( dp );
 document.getElementById( first_result.section ).appendChild( d );

 refs().limit(1).remove();
 increaseLoadingBar();
}

/* Someone very kind has provided a basic way to do this.
https://stackoverflow.com/questions/41366438/how-to-output-to-console-in-real-time-in-javascript
*/

/// This part handles the loading bar.
function increaseLoadingBar()
{
 // And to do that, we want one action, like this, repeated
 bar_width = ++current / total_tasks * 100;
 // And for the browser to update like so,
 var loading_bar = document.getElementById("loading-bar");
 loading_bar.style.width = bar_width + '%';
 // but without processing the increase all at once.
 loading_bar.setAttribute('loading', current + ' / ' + total_tasks );
 if( bar_width == 100 )
 {
  loading_bar.className = 'done';
 }
}

/// This function is called to populate the site.
function doHeavyTask( params )
{
 var totalMillisAllotted = params.totalMillisAllotted;
 var totalTasks = params.totalTasks;
 var tasksPerTick = params.tasksPerTick;
 var tasksCompleted = 0;
 var totalTicks = Math.ceil(totalTasks / tasksPerTick);
 var interval = null;

 current = 0;
 var loading_bar = document.getElementById("loading-bar");
 loading_bar.classList.remove("done");
 loading_bar.setAttribute('loading', current + ' / ' + total_tasks );

 if( totalTicks === 0 )
 {
  return;
 }

 var doTick = function()
 {
  var totalByEndOfTick = Math.min( tasksCompleted + tasksPerTick, totalTasks );
  do
  {
   params.task( tasksCompleted++ );
  } while( tasksCompleted < totalByEndOfTick );

  if( tasksCompleted >= totalTasks )
  {
   clearInterval(interval);
  }
 };
 // Tick once immediately, and then as many times as needed using setInterval
 doTick();
 if( totalTicks > 1 )
 {
  interval = setInterval(doTick, totalMillisAllotted / totalTicks);
 }
}

// We do a function call
/*doHeavyTask(
 { // And supply a bunch of arguments in the form of an object.
  totalMillisAllotted: 0.5 * 1000,
  totalTasks: total_tasks,
  tasksPerTick: 1,
  task: function() // In here we attach a function.
  {
   addNewModule();
  }
 }
);
*/

/// Iterate through actively opened elements and destroy all nodes.
function removeResourceNodes()
{
 var main_content = document.getElementById( "main-content" );
 let openedElements = Array.prototype.slice.call(
                       main_content.getElementsByClassName( "lc" ) );
 for( let i of openedElements )
 {
  removeElement(i);
 }
}


/// Populate the refs object according to section (handled by menu clicks)
function populate_refs_by_section( terms )
{
 for( var i = 0; i < terms.length; i++ )
 {
  db( { "section" : terms[ i ] } ).each( function( record, recordnumber )
  {
   refs.insert( {
    "tagName" : record[ "tagName" ], "tagColor" : record[ "tagColor" ],
    "section" : record[ "section" ], "summary" : record[ "summary" ],
    "url" : record[ "url" ], "details" : record[ "details" ] }
   );
  } );
 }
}

/// TODO: Each button click in awesome menu needs a function to gather the sections under an ID
function getListOfSections( node_selected )
{
 var queryString = "#" + node_selected + " section";
 var group_tag_section = document.querySelectorAll( queryString );
 var search_terms = [];
 for( var i = 0; i < group_tag_section.length; i++ )
 {
  search_terms[ i ] = group_tag_section[ i ].id;
 }
 return search_terms;
}


function populateByMenuClick( node_selected )
{
 var terms = getListOfSections( node_selected );
 populate_refs_by_section(terms);
 total_tasks = refs().count();
 doHeavyTask(
  { // And supply a bunch of arguments in the form of an object.
   totalMillisAllotted: 0.5 * 1000,
   totalTasks: total_tasks,
   tasksPerTick: 1,
   task: function() // In here we attach a function.
   {
    addNewModule();
   }
  }
 );
}

/*
 1. Clear out the existing nodes. Done!
 2a. (Menu) Make a collection of the nodes by ID.
 2b. (Search) Make a collection of the nodes by search term.
 3. Populate the nodes according to the collection.
*/
