/*https://codepen.io/chrismccoy/pen/ogNMXY*/

var hitCount = 0;

function addClassOnce( elem, name )
{
 if( elem.classList.contains(name) == false )
 {
  elem.classList.add(name);
 }
}

function processHidden( parentName, childName, cs, i, value )
{
  if( value == "" )
  {
   cs[i].classList.remove("hidden");
  }
  else
  {
   addClassOnce( cs[i], "hidden" );
   var show = false;
   var kids = cs[i].getElementsByClassName(childName);
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
    cs[i].classList.remove("hidden");
   }
  }
}

function doHeavyTask(params)
{
 var totalMillisAllotted = params.totalMillisAllotted;
 var totalTasks = params.totalTasks;
 var tasksPerTick = params.tasksPerTick;
 var myID = params.myID;
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
   if( myID < hitCount )
   {
    tasksCompleted = totalTasks;
   }
  } while( tasksCompleted < totalByEndOfTick );
  if( tasksCompleted >= totalTasks )
  {
   clearInterval(interval);
  }
 };
 // Tick once immediately, and then as many times as needed using setInterval
 doTick();
 if( totalTicks > 1 && tasksCompleted != totalTasks )
 {
  interval = setInterval(doTick, totalMillisAllotted / totalTicks);
 }
}

function checkHidden( parentName, childName, value, hitID )
{
 var cs = document.getElementsByClassName(parentName);
 var i = 0;
 // We do a function call
 doHeavyTask(
  { // And supply a bunch of arguments in the form of an object.
   totalMillisAllotted: 0.5 * 1000,
   totalTasks: cs.length,
   tasksPerTick: 1,
   myID: hitID,
   task: function() // In here we attach a function.
   {
    processHidden( parentName, childName, cs, i, value );
    i++;
   }
  }
 );
}

function processHiddenLC( lcs, i, value )
{
  var str ='';
  var lcsn = lcs[i].childNodes;
  for( var j = 0; j < lcsn.length; j++ )
  {
   if( lcsn[j].nodeType == 3 )
   {
    str += lcsn[j].nodeValue.toLowerCase();
   }
  }
  if( str.search(value) > -1 )
  {
   lcs[i].classList.remove("hidden");
  }
  else
  {
   addClassOnce( lcs[i], "hidden" );
  }
}

function checkHiddenLC( parentName, value, hitID )
{
 var lcs = document.getElementsByClassName(parentName);
 var i = 0;
 doHeavyTask(
  { // And supply a bunch of arguments in the form of an object.
   totalMillisAllotted: 0.5 * 1000,
   totalTasks: lcs.length,
   tasksPerTick: 1,
   myID: hitID,
   task: function() // In here we attach a function.
   {
    processHiddenLC( lcs, i, value );
    i++;
   }
  }
 );
}

function keyword_index_filter()
{
 var value = this.value.toLowerCase();
 var hitID = ++hitCount;
 checkHiddenLC( "lc", value, hitID );
 checkHidden( "xc", "lc", value, hitID );
 checkHidden( "topic", "xc", value, hitID );
}

document.getElementById('search').addEventListener('keyup', keyword_index_filter, false );
