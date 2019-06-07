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

oAwesomeMenu.App2 = ( function()
{
 dialogGenCode = document.getElementById("wrapper-code-generator");

 /// Is child a descendent of parent?

 function isDescendent( parent, child )
 {
  var node = child.parentNode;
  while( node != null )
  {
   if( node == parent )
   {
    return true;
   }
   node = node.parentNode;
  }
  return false;
 }

 /// Access enablement and disablement.

 function enableAccess( this_tag )
 {
  this_tag.removeAttribute("tabindex");
  this_tag.removeAttribute("aria-hidden");
 }
 function disableAccess( this_tag )
 {
  this_tag.setAttribute( "tabindex", "-1" );
  this_tag.setAttribute( "aria-hidden", "true" );
 }

 /// Populate one of the inputs with options.

 function populateSections()
 {
  var secSel = document.getElementById("parameter-select-section");
  var contents = document.getElementsByClassName("button-chapter-name");
  for( var i = 0; i < contents.length; i++ )
  {
   var opt = document.createElement('option');
   opt.innerHTML = contents[i].innerHTML || contents[i].textContent;
   opt.value = contents[i].nextElementSibling.id;
   secSel.appendChild(opt);
  }
 }

 /// Creates a generated string of code to use in db.js.

 function convertIO()
 {
  var str="{\n section: \"";
  str += document.getElementById("parameter-select-section").value;
  str += "\",\n tagName: \"";
  var tag = document.getElementById("parameter-select-tag").value.split(",");
  str += tag[1];
  str += "\",\n tagColor: \"";
  str += tag[0];
  str += "\",\n url: \"";
  str += document.getElementById("parameter-resource-url").value;
  str += "\",\n summary: \"";
  str += document.getElementById("parameter-resource-summary").value;
  str += "\",\n details: \"";
  str += document.getElementById("parameter-resource-details").value;
  str += "\"\n},";
  return str;
 }

 /// Utilize the convertIO function to update it.

 function updateOutput()
 {
  document.getElementById("text-output-code-generator").value = convertIO();
 }

 /// Close the code generation dialog.

 function exitGenCode()
 {
  if( document.getElementById("background-black-alpha").classList.contains("state-code-generator") )
  {
   document.getElementById("background-black-alpha").classList.remove("state-open");
   document.getElementById("background-black-alpha").classList.remove("state-code-generator");
   document.getElementById("wrapper-code-generator").classList.remove("state-active");
   disableAccess(dialogGenCode);
   var AllButtons = dialogGenCode.getElementsByClassName("group-focusable-code-generator");
   for( var i = 0; i < AllButtons.length; i++ )
   {
    disableAccess(AllButtons[i]);
   }
   document.getElementById("button-code-generator").focus();
  }
 }

 function evtBlurCodeGenExit(event)
 {
  setTimeout( function()
  {
   if( isDescendent( dialogGenCode, document.activeElement ) == false )
   {
    if( document.activeElement == document.body )
    { // The mouse was probably clicked.
     return;
    }
    exitGenCode();
   }
  }, 100 );
 }

 /// Assign multiple event listeners at once.

 function assignEventListeners()
 {
  document.getElementById("button-code-generator").addEventListener( "click", function(){
   document.getElementById("background-black-alpha").classList.add("state-open");
   document.getElementById("background-black-alpha").classList.add("state-code-generator");
   document.getElementById("wrapper-code-generator").classList.add("state-active");
   enableAccess(dialogGenCode);
   var AllButtons = dialogGenCode.getElementsByClassName("group-focusable-code-generator");
   for( var i = 0; i < AllButtons.length; i++ )
   {
    enableAccess(AllButtons[i]);
   }
   document.getElementById("text-code-generator-title").setAttribute("tabIndex","0");
   document.getElementById("text-code-generator-title").focus();
  }, false );

  var inp = document.getElementsByClassName("form-line-input-code-generator");
  for( var i = 0; i < inp.length; i++ )
  {
   inp[i].addEventListener( "keyup", updateOutput, false );
  }
  inp = document.getElementsByClassName("form-select-code-generator");
  for( var i = 0; i < inp.length; i++ )
  {
   inp[i].addEventListener( "change", updateOutput, false );
  }

  var cB = document.getElementById('button-code-generator-copy-output');
  cB.addEventListener('click', function(event)
  { // Copy button
   document.getElementById('text-output-code-generator').select();
   document.execCommand('copy');
  });

  document.getElementById("text-code-generator-title").addEventListener( "blur", evtBlurCodeGenExit, false );
  document.getElementById("button-code-generator-close").addEventListener( "blur", evtBlurCodeGenExit, false );
  document.getElementById('button-code-generator-close').addEventListener('click', exitGenCode, false );
  document.getElementById('background-black-alpha').addEventListener('click', exitGenCode, false );
 }

 function initApp()
 {
  populateSections();
  assignEventListeners();
  disableAccess(dialogGenCode);
  var AllButtons = dialogGenCode.getElementsByClassName("group-focusable-code-generator");
  for( var i = 0; i < AllButtons.length; i++ )
  {
   disableAccess(AllButtons[i]);
  }
 }

 return{ init: function(){initApp();} }
})();

window.addEventListener('load', function()
{
 new oAwesomeMenu.App2.init();
});
