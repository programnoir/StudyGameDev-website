/* db-populate.js
 This script provides controls for populating the content in the site.
 Other parts only need to refer to the functions provided here.
*/

// This global variable is dual-purposed for removing nodes and adding them.
var refs = TAFFY([]);
var total_tasks = 0;
var bar_width = 0;
var current = 0;
var interrupt_flag = false;

/// Remove node
function removeElement( node )
{
 var range = document.createRange();
 range.selectNodeContents(node);
 range.deleteContents();
 range = null;
 var pN = node.parentNode;
 pN.removeChild(node);
 pN = null;
}

function clearRefs()
{
 refs().remove();
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
 // Remove references?
 d = null;
 first_result = null;
 dp = null;
 aa = null;
 tg = null;

 refs().limit(1).remove();
 increaseLoadingBar();
}


function addNewXC( buttonText, import_id )
{
 var xc = document.createElement('div');
 var b = document.createElement('button');
 var s = document.createElement('section');
 xc.className = "xc";
 b.className = "bc";
 b.setAttribute( "type", "button" );
 b.setAttribute( "aria-label", "Expand description" );
 b.appendChild( document.createTextNode( buttonText ) );
 s.id = import_id;
 xc.appendChild( b );
 xc.appendChild( s );
 s = null;
 b = null;

 return xc;
}

function addNewXCFromMenuClick( import_d, import_i, import_terms )
{
 var bText = import_terms[ import_i ][ 1 ];
 var idT = import_terms[ import_i ][ 0 ];

 var xcNode = addNewXC( bText, idT );

 import_d.appendChild(xcNode);
 return import_i + 1;
}


function addNewTopic( node_id, node_text )
{
 var d = document.createElement('div');
 d.className = "topic";
 d.id = node_id;
 var dh2 = document.createElement('h2');
 dh2.appendChild( document.createTextNode( node_text ) );
 d.appendChild(dh2);
 document.getElementById( "main-content" ).appendChild( d );
 dh2 = null;
 return d;
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
 var totalTicks = Math.ceil( totalTasks / tasksPerTick );
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

  if( tasksCompleted >= totalTasks || interrupt_flag )
  {
   if( interrupt_flag == false )
   {
    params.taskUponCompletion();
   }
   clearInterval(interval);
  }
 };
 // Tick once immediately, and then as many times as needed using setInterval
 doTick();
 if( totalTicks > 1 )
 {
  interval = setInterval( doTick, totalMillisAllotted / totalTicks );
 }
}

/// Iterate through actively opened elements and destroy all nodes.
function removeTopicNodes()
{
 var openedElements = Array.prototype.slice.call(
                       document.getElementsByClassName( "topic" ) );
 for( let i_r = openedElements.length - 1; i_r >= 0; i_r--  )
 {
  removeElement( openedElements[i_r] );
 }
 openedElements = null;
}

/// Iterate through actively opened elements and destroy all nodes.
function removeResourceNodes()
{
 var openedElements = Array.prototype.slice.call(
                       document.getElementsByClassName( "lc" ) );
 for( let i_r = openedElements.length - 1; i_r >= 0; i_r--  )
 {
  removeElement( openedElements[i_r] );
 }
 openedElements = null;
}


function addModuleToRef( i_record )
{
  refs.insert( {
   "tagName" : i_record[ "tagName" ], "tagColor" : i_record[ "tagColor" ],
   "section" : i_record[ "section" ], "summary" : i_record[ "summary" ],
   "url" : i_record[ "url" ], "details" : i_record[ "details" ] }
  );
}


/// Populate the refs object according to section (handled by menu clicks)
function populateRefsWithResourcesBySection( terms )
{
 for( let i = 0; i < terms.length; i++ )
 {
  db( { "section" : terms[ i ] } ).each( function( record, recordnumber )
  {
   addModuleToRef(record);
  } );
 }
}




/// Populate refs with results from search input string "s"
function populateRefsWithResourcesBySearch( s )
{
 db( function(){
   if( this.section.includes( s ) || this.summary.includes( s ) ||
        this.details.includes( s ) || this.url.includes( s ) ||
        this.tagName.includes( s ) )
   {
    return true;
   }
   return false;
  }).each(
  function( record, recordnumber )
  {
   addModuleToRef(record);
  }
 );


}

function addAllEventListeners()
{
 var group_class_xc = document.getElementsByClassName("xc");
 for( let j = 0; j < group_class_xc.length; j++ )
 {
  group_class_xc[ j ].addEventListener( "click", handleClickXC, false );
  group_class_xc[ j ].addEventListener( "keyup", handleKeyUpXC, false );
 }
 var group_class_bc = document.getElementsByClassName("bc");
 for( let j = 0; j < group_class_bc.length; j++ )
 {
  setText( group_class_bc[ j ], "Expand" );
  group_class_bc[ j ].addEventListener( "click", handleClickBC, false );
 }
 group_class_xc = null;
 group_class_bc = null;
}

/// TODO: Each button click in awesome menu needs a function to gather the sections under an ID
function getListOfSections( node_selected )
{
 return db_topics( { "topic_id" : node_selected } ).first().topic_array;
}

function populateResourcesIntoTopic( node_selected )
{
 interrupt_flag = false;
 var terms = getListOfSections( node_selected );
 populateRefsWithResourcesBySection(terms);
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

function populateTopicsBySection( node_selected )
{
 interrupt_flag = false;
 var terms = getListOfSections( node_selected );
 total_tasks = terms.length;
 var i = 0;

 /// Create the topic element.
 var h2Text = db_topics( { "topic_id" : node_selected } ).first().topic;
 var d = addNewTopic( node_selected, h2Text );

 doHeavyTask(
  {
   totalMillisAllotted: 25,
   totalTasks: total_tasks,
   tasksPerTick: 1,
   task: function()
   {
    i = addNewXCFromMenuClick( d, i, terms );
   },
   taskUponCompletion: function()
   {
    d = null;
    populateResourcesIntoTopic( node_selected );
   }
  }
 );
}

function prepareTopicBySearch( node_selected )
{
 interrupt_flag = false;
 var terms = getListOfSections( node_selected );
 total_tasks = terms.length;
 var i = 0;

 /// Create the topic element.
 var h2Text = db_topics( { "topic_id" : node_selected } ).first().topic;
 addNewTopic( node_selected, h2Text );
}

function populateTopicsBySearch( k, i_tIndex, i_a_sections, i_a_topics )
{
 var text_button = "";
 var sec = i_a_sections[ k ];
 var topic_selected = db_topics( function()
  {
   for( let z = 0; z < this.topic_array.length; z++ )
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
 for( let l = 0; l < i_a_topics.length; l++ )
 {
  if( i_a_topics[ l ] == topic_selected.topic )
  {
   l = i_a_sections.length;
   flagMadeTopicAlready = true;
  }
 }

 if( flagMadeTopicAlready == false )
 {
  i_a_topics[ i_tIndex ] = topic_selected.topic;
  i_tIndex++;
  prepareTopicBySearch( topic_selected.topic_id );
 }
 var node_xc = addNewXC( text_button, i_a_sections[ k ] );
 document.getElementById( topic_selected.topic_id ).appendChild( node_xc );

 return { _k : k + 1, _t: i_tIndex };
}

function eraseEventListeners()
{
 var group_class_bc = document.getElementsByClassName("bc");
 for( let j = 0; j < group_class_bc.length; j++ )
 {
  group_class_bc[ j ].removeEventListener( "click", handleClickBC, false );
 }
 var group_class_xc = document.getElementsByClassName("xc");
 for( let j = 0; j < group_class_xc.length; j++ )
 {
  group_class_xc[ j ].removeEventListener( "click", handleClickXC, false );
  group_class_xc[ j ].removeEventListener( "keyup", handleKeyUpXC, false );
 }
 var group_class_topic = document.getElementsByClassName("topic");
 for( let j = group_class_topic.length - 1; j >= 0 ; j-- )
 {
  removeElement( group_class_topic[ j ] );
 }
 group_class_bc = null;
 group_class_xc = null;
 group_class_topic = null;
}

function populateByMenuClick( node_selected )
{
 interrupt_flag = true; // First, cancel all existing timers.
 eraseEventListeners();
 setTimeout( populateTopicsBySection( node_selected ), 26 );
}

/*
 1. Clear out the existing nodes. Done!
 2a. (Menu) Make a collection of the nodes by ID.
 2b. (Search) Make a collection of the nodes by search term.
 3. Populate the nodes according to the collection.
*/
