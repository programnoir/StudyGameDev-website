/* db-populate.js
 This script provides controls for populating the content in the site.
 Other parts only need to refer to the functions provided here.
*/

// This global variable is dual-purposed for removing nodes and adding them.
var refs = [];

/// Remove node
function removeElement( node )
{
 node.parentNode.removeChild(node);
}


/// Iterate through refs and destroy all nodes.
function removeRefElements()
{
 for( var i = 0; i < refs.length; i++ )
 {
  removeElement( refs[ i ] );
 }
}



/// TODO: Each button click in awesome menu needs a function to gather the sections under an ID
function getListOfSections()
{

}



function addNewModule()
{
 //var dt = document.createTextNode( refs[i].details );
 //var st = document.createTextNode( refs[i].summary );
 var d = document.createElement('div');
 var tg = document.createElement('span');
 var aa = document.createElement('a');
 var dp = document.createElement('span');

 // Containing div that acts similar to details.
 d.setAttribute( "aria-label", "Expand description" );
 d.setAttribute( "tabIndex", "0" );
 d.className = "lc";
 d.addEventListener( "keyup", handleKeyUpLC, false );
 d.addEventListener( "click", handleClickLC, false );
 // The tag in each summary.
 tg.classList.add("tag");
 tg.classList.add( refs[iii].tagColor );
 tg.appendChild( document.createTextNode( refs[iii].tagName ) );
 // The link in the summary.
 aa.href = refs[iii].url;
 aa.setAttribute( "target", "_BLANK" );
 aa.className = "icon-external-link";
 aa.appendChild( document.createTextNode( refs[iii].summary ) );
 // The description.
 dp.className = "desc";
 dp.appendChild( document.createTextNode( refs[iii].details ) );
 // Assemble it.
 d.appendChild( tg );
 d.appendChild( aa );
 d.appendChild( dp );
 document.getElementById( refs[iii].section ).appendChild(d);
 increaseLoadingBar();
 iii++;
}

/* Someone very kind has provided a basic way to do this.
https://stackoverflow.com/questions/41366438/how-to-output-to-console-in-real-time-in-javascript
*/

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

function doHeavyTask(params)
{

 var iii = 0;
 var bar_width = 0;
 var current = 0;
 var total_tasks = refs.length;

 var totalMillisAllotted = params.totalMillisAllotted;
 var totalTasks = params.totalTasks;
 var tasksPerTick = params.tasksPerTick;
 var tasksCompleted = 0;
 var totalTicks = Math.ceil(totalTasks / tasksPerTick);
 var interval = null;

 if( totalTicks === 0 )
 {
  return;
 }

 var doTick = function()
 {
  var totalByEndOfTick = Math.min(tasksCompleted + tasksPerTick, totalTasks);
  do
  {
   params.task(tasksCompleted++);
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
