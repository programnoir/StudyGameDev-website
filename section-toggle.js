/*
 on button click, it toggles its own css class.
 css class toggle means .desc is no longer hidden.
 but wait, some screen reader users have vision.
*/
var keysConfirm = {13:1,32:1};
var group_class_xc = document.getElementsByClassName("xc");

function setText( elem, mode )
{
 mode += " the ";
 mode += elem.textContent || elem.innerText;
 mode += " details";
 elem.setAttribute( "aria-label", mode );
}

function toggleLC( lc )
{
 var elem, txt;
 if( lc.classList.contains( "open" ) )
 {
  lc.classList.remove("open");
  if( lc.classList.contains( "bc" ) )
  {
   lc.parentNode.classList.remove("open");
  }
  else if( lc.classList.contains( "xc" ) )
  {
   lc = lc.getElementsByClassName( "bc" )[ 0 ];
   lc.classList.remove("open");
  }
  txt = "Expand";
 }
 else
 {
  lc.classList.add("open");
  if( lc.classList.contains( "bc" ) )
  {
   lc.parentNode.classList.add("open");
  }
  else if( lc.classList.contains( "xc" ) )
  {
   lc = lc.getElementsByClassName( "bc" )[ 0 ];
   lc.classList.add("open");
  }
  txt = "Collapse";
 }
 if( lc.classList.contains( "bc" ) )
 {
  setText( lc, txt );
 }
 else
 {
  lc.setAttribute( "aria-label", txt );
 }
}

function handleKeyUpLC( event )
{
 if( keysConfirm[ event.keyCode ] )
 {
  var node_current = document.activeElement.nodeName;
  if( node_current != "A" )
  {
   toggleLC(this);
  }
 }
}
function handleClickLC( event )
{
 var node_current = event.target.nodeName;
 if( node_current != "SPAN" && node_current != "A" )
 {
  toggleLC(this);
 }
}
function isTriggerXC( me )
{
 var group_sliced_xcs = Array.prototype.slice.call( group_class_xc );
 for( var i = 0; i < group_sliced_xcs.length; i++ )
 {
  if( me == group_sliced_xcs[ i ] )
  {
   toggleLC( group_sliced_xcs[ i ] );
   i = group_sliced_xcs.length;
  }
 }
 if( me.classList.contains( "open" ) && me.classList.contains( "lc" ) == false )
 {
  if( me.classList.contains( "bc" ) )
  {
   me = me.parentNode;
  }
  me = me.getElementsByTagName( "section" )[ 0 ];
  me = me.getElementsByTagName( "div" )[ 0 ];
  me.focus();
 }
 else
 {
  me.focus();
 }
}
function handleClickXC( event )
{
 isTriggerXC(event.target);
}
function handleKeyUpXC( event )
{
 if( keysConfirm[ event.keyCode ] )
 {
  isTriggerXC(document.activeElement);
 }
}
function handleClickBC( event )
{
 toggleLC(this);
}
/*
for( var i = 0; i < group_class_xc.length; i++ )
{
 group_class_xc[ i ].addEventListener( "click", handleClickXC, false );
 group_class_xc[ i ].addEventListener( "keyup", handleKeyUpXC, false );
}
var group_class_bc = document.getElementsByClassName("bc");
for( var i = 0; i < group_class_bc.length; i++ )
{
 setText( group_class_bc[i], "Expand" );
 group_class_bc[ i ].addEventListener( "click", handleClickBC, false );
}
*/
