/*
 Init:
  gather all .xc IDs and h2s underneath
  add each as an option to #section select.

 Button: Make Code
  .background-black-alpha -- .open .gen
  #wrapper-code-generator -- .active, remove tabIndex="-1"
  focus on h1.
 Inputs -> Textarea
  keyup or value change updates textarea.
 Copy -> Copy
  copies to clipboard.
 Exit: Exit Make Code
  self remove .active, set tabIndex = -1
  .background-black-alpha clear of classes.
  focus the button again
*/

oAwesomeMenu.fCodeGeneratorApplication = ( function()
{
 var hCodeGeneratorWrapper = document.getElementById( "wrapper-code-generator" );

 /// Is child a descendent of parent?

 function fIsDescendent( hParent, hChild )
 {
  var hNode = hChild.parentNode;
  while( hNode != null )
  {
   if( hNode == hParent )
   {
    return true;
   }
   hNode = hNode.parentNode;
  }
  return false;
 }

 /// Access enablement and disablement.

 function fTabScreenReaderOn( hElement )
 {
  hElement.removeAttribute("tabindex");
  hElement.removeAttribute("aria-hidden");
 }
 function fTabScreenReaderOff( hElement )
 {
  hElement.setAttribute( "tabindex", "-1" );
  hElement.setAttribute( "aria-hidden", "true" );
 }

 /// Populate one of the inputs with options.

 function fPopulateSectionParameter()
 {
  let hSelectSection = document.getElementById( "parameter-select-section" );
  dTopics().each( function( record, recordNumber )
   {
    for( let nTopicArrayIndex = 0; nTopicArrayIndex < record[ "aChapters" ].length; nTopicArrayIndex++ )
    {
     let hOption = document.createElement( "option" );
     hOption.value = record[ "aChapters" ][ nTopicArrayIndex ][ 0 ];
     hOption.innerHTML = record[ "aChapters" ][ nTopicArrayIndex ][ 1 ];
     hSelectSection.appendChild( hOption );
    }
   }
  );
 }

 /// Creates a generated string of code to use in db.js.

 function fCreateCodeString()
 {
  let sCode = "dLinks.insert( { \"sSection\" : ";
  sCode += document.getElementById( "parameter-select-section" ).value;
  sCode += "\", \"sTag\" : \"";
  var aTagValues = document.getElementById( "parameter-select-tag" ).value.split(",");
  sCode += aTagValues[ 1 ];
  sCode += "\", \"sTagColor\" : \"";
  sCode += aTagValues[ 0 ];
  sCode += "\",\n \"sURL\"     : \"";
  sCode += document.getElementById( "parameter-resource-url" ).value;
  sCode += "\",\n \"sSummary\" : \"";
  sCode += document.getElementById( "parameter-resource-summary" ).value;
  sCode += "\",\n \"sDetails\" : \"";
  sCode += document.getElementById( "parameter-resource-details" ).value;
  sCode += "\"\n} );";
  return sCode;
 }

 /// Utilize the fCreateCodeString function to update it.

 function fUpdateOutputText()
 {
  document.getElementById( "text-output-code-generator" ).value = fCreateCodeString();
 }

 /// Close the code generation dialog.

 function fCloseCodeGenerator()
 {
  if( document.getElementById( "background-black-alpha" ).classList.contains( "state-code-generator" ) )
  {
   document.getElementById( "background-black-alpha" ).classList.remove( "state-open" );
   document.getElementById( "background-black-alpha" ).classList.remove( "state-code-generator" );
   document.getElementById( "wrapper-code-generator" ).classList.remove( "state-active" );
   fTabScreenReaderOff( hCodeGeneratorWrapper );

   let aByClassFocusableFields = hCodeGeneratorWrapper.getElementsByClassName("group-focusable-code-generator");
   for( var nFocusableFieldsIndex = 0; nFocusableFieldsIndex < aByClassFocusableFields.length; nFocusableFieldsIndex++ )
   {
    fTabScreenReaderOff( aByClassFocusableFields[ nFocusableFieldsIndex ] );
   }
   document.getElementById( "button-code-generator" ).focus();
  }
 }

 function fEventBlueCodeGenerator( hEvent )
 {
  setTimeout( function()
  {
   if( fIsDescendent( hCodeGeneratorWrapper, document.activeElement ) == false )
   {
    if( document.activeElement == document.body )
    { // The mouse was probably clicked.
     return;
    }
    fCloseCodeGenerator();
   }
  }, 100 );
 }

 /// Assign multiple event listeners at once.

 function fApplyEventListeners()
 {
  document.getElementById( "button-code-generator" ).addEventListener( "click", function()
  {
   document.getElementById( "background-black-alpha" ).classList.add( "state-open" );
   document.getElementById( "background-black-alpha" ).classList.add( "state-code-generator" );
   document.getElementById( "wrapper-code-generator" ).classList.add( "state-active" );
   fTabScreenReaderOn( hCodeGeneratorWrapper );

   let aByClassFocusableFields = hCodeGeneratorWrapper.getElementsByClassName("group-focusable-code-generator");
   for( var nFocusableFieldsIndex = 0; nFocusableFieldsIndex < aByClassFocusableFields.length; nFocusableFieldsIndex++ )
   {
    fTabScreenReaderOn( aByClassFocusableFields[ nFocusableFieldsIndex ] );
   }
   document.getElementById( "text-code-generator-title" ).setAttribute( "tabIndex", "0" );
   document.getElementById( "text-code-generator-title" ).focus();
  }, false );

  let aByClassLineInput = document.getElementsByClassName("form-line-input-code-generator");
  for( var nLineInputsIndex = 0; nLineInputsIndex < aByClassLineInput.length; nLineInputsIndex++ )
  {
   aByClassLineInput[ nLineInputsIndex ].addEventListener( "keyup", fUpdateOutputText, false );
  }

  let aByClassSelect = document.getElementsByClassName("form-select-code-generator");
  for( var nSelectsIndex = 0; nSelectsIndex < aByClassSelect.length; nSelectsIndex++ )
  {
   aByClassSelect[ nSelectsIndex ].addEventListener( "change", fUpdateOutputText, false );
  }

  let hCopyButton = document.getElementById('button-code-generator-copy-output');
  hCopyButton.addEventListener( "click", function( hEvent )
   { // Copy button
    document.getElementById( "text-output-code-generator" ).select();
    document.execCommand( "copy" );
   }
  );

  document.getElementById( "text-code-generator-title" ).addEventListener( "blur", fEventBlueCodeGenerator, false );
  document.getElementById( "button-code-generator-close" ).addEventListener( "blur", fEventBlueCodeGenerator, false );
  document.getElementById( "button-code-generator-close" ).addEventListener( "click", fCloseCodeGenerator, false );
  document.getElementById( "background-black-alpha" ).addEventListener( "click", fCloseCodeGenerator, false );
 }

 function fInitApplication()
 {
  fPopulateSectionParameter();
  fApplyEventListeners();
  fTabScreenReaderOff( hCodeGeneratorWrapper );

  let aByClassFocusableFields = hCodeGeneratorWrapper.getElementsByClassName("group-focusable-code-generator");
  for( let nFocusableFieldsIndex = 0; nFocusableFieldsIndex < aByClassFocusableFields.length; nFocusableFieldsIndex++ )
  {
   fTabScreenReaderOff( aByClassFocusableFields[ nFocusableFieldsIndex ] );
  }
 }

 return {
  init: function()
  {
   fInitApplication();
  }
 };
})();

window.addEventListener( "load", function()
{
 new oAwesomeMenu.fCodeGeneratorApplication.init();
});
