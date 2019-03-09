/*
 on button click, it toggles its own css class.
 css class toggle means .desc is no longer hidden.
 but wait, some screen reader users have vision.
*/
var keysConfirm = {13:1,32:1};

function setText( elem, mode )
{
 mode += " the ";
 mode += elem.textContent || elem.innerText;
 mode += " details";
 elem.setAttribute( "aria-label", mode );
}

function toggleLC(lc)
{
 var elem, txt;
 if( lc.classList.contains("open") )
 {
  lc.classList.remove("open");
  if( lc.classList.contains("bc") )
  {
   lc.parentNode.classList.remove("open");
  }
  else if( lc.classList.contains("xc") )
  {
   lc = lc.getElementsByClassName("bc")[0];
   lc.classList.remove("open");
  }
  txt = "Expand";
 }
 else
 {
  lc.classList.add("open");
  if( lc.classList.contains("bc") )
  {
   lc.parentNode.classList.add("open");
  }
  else if( lc.classList.contains("xc") )
  {
   lc = lc.getElementsByClassName("bc")[0];
   lc.classList.add("open");
  }
  txt = "Collapse";
 }
 if( lc.classList.contains("bc") )
 {
  setText( lc, txt );
 }
 else
 {
  lc.setAttribute( "aria-label", txt );
 }
}

function handleKeyUpLC(event)
{
 if( keysConfirm[event.keyCode] )
 {
  var curNode = document.activeElement.nodeName;
  if( curNode != "A" )
  {
   toggleLC(this);
  }
 }
}
function handleClickLC(event)
{
 var curNode = event.target.nodeName;
 if( curNode != "SPAN" && curNode != "A" )
 {
  toggleLC(this);
 }
}
function isTriggerXC(me)
{
 var allXCs = document.getElementsByClassName("xc");
 allXCs = Array.prototype.slice.call(allXCs);
 for( var i = 0; i < allXCs.length; i++ )
 {
  if( me == allXCs[i] )
  {
   toggleLC(allXCs[i]);
   i = allXCs.length;
  }
 }
 if( me.classList.contains("open") && me.classList.contains("lc") == false )
 {
  if( me.classList.contains("bc") )
  {
   me = me.parentNode;
  }
  me = me.getElementsByTagName("section")[0];
  me = me.getElementsByTagName("div")[0];
  me.focus();
 }
 else
 {
  me.focus();
 }
}
function handleClickXC(event)
{
 isTriggerXC(event.target);
}
function handleKeyUpXC(event)
{
 if( keysConfirm[event.keyCode] )
 {
  isTriggerXC(document.activeElement);
 }
}
function handleClickBC(event)
{
 toggleLC(this);
}
//var lcx = document.getElementsByClassName("lc");
//lcx.addEventListener("keyup",handleKeyUpLC,false);
//lcx.addEventListener("click",handleClickLC,false);
var x = document.getElementsByClassName("xc");
for( var i = 0; i < x.length; i++ )
{
 x[i].addEventListener("click",handleClickXC,false);
 x[i].addEventListener("keyup",handleKeyUpXC,false);
}
x = document.getElementsByClassName("bc");
for( var i = 0; i < x.length; i++ )
{
 setText( x[i], "Expand" );
 x[i].addEventListener("click",handleClickBC,false);
// x[i].addEventListener("keyup",handleKeyUpBC,false);
}
