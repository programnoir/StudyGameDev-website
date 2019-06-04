/*
 on button click, it toggles its own css class.
 css class toggle means .desc is no longer hidden.
 but wait, some screen reader users have vision.
*/
var keysConfirm = {13:1,32:1};
var group_class_chapter = document.getElementsByClassName("chapter");

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
  if( lc.classList.contains( "button-chapter-name" ) )
  {
   lc.parentNode.classList.remove("open");
  }
  else if( lc.classList.contains( "chapter" ) )
  {
   lc = lc.getElementsByClassName( "button-chapter-name" )[ 0 ];
   lc.classList.remove("open");
  }
  txt = "Expand";
 }
 else
 {
  lc.classList.add("open");
  if( lc.classList.contains( "button-chapter-name" ) )
  {
   lc.parentNode.classList.add("open");
  }
  else if( lc.classList.contains( "chapter" ) )
  {
   lc = lc.getElementsByClassName( "button-chapter-name" )[ 0 ];
   lc.classList.add("open");
  }
  txt = "Collapse";
 }
 if( lc.classList.contains( "button-chapter-name" ) )
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
function isTriggerchapter( me )
{
 var group_sliced_chapters = Array.prototype.slice.call( group_class_chapter );
 for( var i = 0; i < group_sliced_chapters.length; i++ )
 {
  if( me == group_sliced_chapters[ i ] )
  {
   toggleLC( group_sliced_chapters[ i ] );
   i = group_sliced_chapters.length;
  }
 }
 if( me.classList.contains( "open" ) && me.classList.contains( "resource" ) == false )
 {
  if( me.classList.contains( "button-chapter-name" ) )
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
function handleClickchapter( event )
{
 isTriggerchapter(event.target);
}
function handleKeyUpchapter( event )
{
 if( keysConfirm[ event.keyCode ] )
 {
  isTriggerchapter(document.activeElement);
 }
}
function handleClickBC( event )
{
 toggleLC(this);
}
/*
for( var i = 0; i < group_class_chapter.length; i++ )
{
 group_class_chapter[ i ].addEventListener( "click", handleClickchapter, false );
 group_class_chapter[ i ].addEventListener( "keyup", handleKeyUpchapter, false );
}
var group_class_bc = document.getElementsByClassName("button-chapter-name");
for( var i = 0; i < group_class_bc.length; i++ )
{
 setText( group_class_bc[i], "Expand" );
 group_class_bc[ i ].addEventListener( "click", handleClickBC, false );
}
*/
