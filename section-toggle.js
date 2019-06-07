/*
 on button click, it toggles its own css class.
 css class toggle means .desc is no longer hidden.
 but wait, some screen reader users have vision.
*/
var kConfirm = { 13: 1, 32: 1 };

/* Resets the ARIA label for the specified topic/chapter/resource. */
function fSetNewARIALabel( hRelabeledElement, sReplacementLabel )
{
 sReplacementLabel += " the ";
 sReplacementLabel += hRelabeledElement.textContent || hRelabeledElement.innerText;
 sReplacementLabel += " details";
 hRelabeledElement.setAttribute( "aria-label", sReplacementLabel );
}

/* Toggles the folding of a topic/chapter/resource. */
function fToggleFoldingTopicChapterResource( hElement )
{
 let sNewARIALabel = "";
 if( hElement.classList.contains( "state-open" ) )
 {
  hElement.classList.remove( "state-open" );
  if( hElement.classList.contains( "button-chapter-name" ) )
  {
   hElement.parentNode.classList.remove( "state-open" );
  }
  else if( hElement.classList.contains( "chapter" ) )
  {
   hElement = hElement.getElementsByClassName( "button-chapter-name" )[ 0 ];
   hElement.classList.remove( "state-open" );
  }
  sNewARIALabel = "Expand";
 }
 else
 {
  hElement.classList.add( "state-open" );
  if( hElement.classList.contains( "button-chapter-name" ) )
  {
   hElement.parentNode.classList.add( "state-open" );
  }
  else if( hElement.classList.contains( "chapter" ) )
  {
   hElement = hElement.getElementsByClassName( "button-chapter-name" )[ 0 ];
   hElement.classList.add( "state-open" );
  }
  sNewARIALabel = "Collapse";
 }
 if( hElement.classList.contains( "button-chapter-name" ) )
 {
  fSetNewARIALabel( hElement, sNewARIALabel );
 }
 else
 {
  hElement.setAttribute( "aria-label", sNewARIALabel );
 }
}

/* Handles key input for a a resource. */
function fHandleKeyUpResource( event )
{
 if( kConfirm[ event.keyCode ] )
 {
  let sNodeTagName = document.activeElement.nodeName;
  if( sNodeTagName != "A" )
  {
   fToggleFoldingTopicChapterResource( this );
  }
 }
}

/* Handles key input for a a resource. */
function fHandleClickResource( event )
{
 let sNodeTagName = event.target.nodeName;
 if( sNodeTagName != "SPAN" && sNodeTagName != "A" )
 {
  fToggleFoldingTopicChapterResource( this );
 }
}

/* A wrapper function for toggling a chapter and focusing its first child. */
function fWrapperToggleChapter( hTargetChapter )
{
 let aByClassChapter = document.getElementsByClassName( "chapter" );
 var aSlicedChapters = Array.prototype.slice.call( aByClassChapter );
 /// Note to self: Why does this for loop need to happen?
 for( let i = 0; i < aSlicedChapters.length; i++ )
 {
  if( hTargetChapter == aSlicedChapters[ i ] )
  {
   fToggleFoldingTopicChapterResource( aSlicedChapters[ i ] );
   i = aSlicedChapters.length;
  }
 }
 if( hTargetChapter.classList.contains( "state-open" ) == false && hTargetChapter.classList.contains( "resource" ) == false )
 {
  if( hTargetChapter.classList.contains( "button-chapter-name" ) )
  {
   hTargetChapter = hTargetChapter.parentNode;
  }
  hTargetChapter = hTargetChapter.getElementsByTagName( "section" )[ 0 ];
  hTargetChapter = hTargetChapter.getElementsByTagName( "div" )[ 0 ];
  setTimeout( function()
   {
    hTargetChapter.focus();
   }, 1 // Needs one tick to render.
  );
 }
}

/* Functions for key and mouse interactions with chapters. */
function fHandleClickChapter( event )
{
 if( event.type == "mousedown" || kConfirm[ event.keyCode ] )
 {
  fWrapperToggleChapter( event.target );
 }
}
function fHandleKeyUpChapter( event )
{
 if( kConfirm[ event.keyCode ] )
 {
  fWrapperToggleChapter( document.activeElement );
 }
}

/* Handles mouse input on the chapter folding toggle button. */
function fHandleClickChapterButton( event )
{
 fToggleFoldingTopicChapterResource( this );
}
