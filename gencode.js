/*
 Init:
  gather all .xc IDs and h2s underneath
  add each as an option to #section select.

 Button: Make Code
  .draw-dark -- .open .gen
  #gen-code -- .active, remove tabIndex="-1"
  focus on h1.
 Inputs -> Textarea
  keyup or value change updates textarea.
 Copy -> Copy
  copies to clipboard.
 Exit: Exit Make Code
  self remove .active, set tabIndex = -1
  .draw-dark clear of classes.
  focus the button again
*/

MS.App2 = ( function()
{
 dialogGenCode = document.getElementById("gen-code");

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
  var secSel = document.getElementById("section");
  var contents = document.getElementsByClassName("bc");
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
  str += document.getElementById("section").value;
  str += "\",\n tagName: \"";
  var tag = document.getElementById("tagSelect").value.split(",");
  str += tag[1];
  str += "\",\n tagColor: \"";
  str += tag[0];
  str += "\",\n url: \"";
  str += document.getElementById("url").value;
  str += "\",\n summary: \"";
  str += document.getElementById("summary").value;
  str += "\",\n details: \"";
  str += document.getElementById("details").value;
  str += "\"\n},";
  return str;
 }

 /// Utilize the convertIO function to update it.

 function updateOutput()
 {
  document.getElementById("out").value = convertIO();
 }

 /// Close the code generation dialog.

 function exitGenCode()
 {
  if( document.getElementById("draw-dark").classList.contains("gen") )
  {
   document.getElementById("draw-dark").classList.remove("open");
   document.getElementById("draw-dark").classList.remove("gen");
   document.getElementById("gen-code").classList.remove("active");
   disableAccess(dialogGenCode);
   var AllButtons = dialogGenCode.getElementsByClassName("gen-group");
   for( var i = 0; i < AllButtons.length; i++ )
   {
    disableAccess(AllButtons[i]);
   }
   document.getElementById("button-generate-code").focus();
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
  document.getElementById("button-generate-code").addEventListener( "click", function(){
   document.getElementById("draw-dark").classList.add("open");
   document.getElementById("draw-dark").classList.add("gen");
   document.getElementById("gen-code").classList.add("active");
   enableAccess(dialogGenCode);
   var AllButtons = dialogGenCode.getElementsByClassName("gen-group");
   for( var i = 0; i < AllButtons.length; i++ )
   {
    enableAccess(AllButtons[i]);
   }
   document.getElementById("gen-title").setAttribute("tabIndex","0");
   document.getElementById("gen-title").focus();
  }, false );

  var inp = document.getElementsByClassName("in");
  for( var i = 0; i < inp.length; i++ )
  {
   inp[i].addEventListener( "keyup", updateOutput, false );
  }
  inp = document.getElementsByClassName("select");
  for( var i = 0; i < inp.length; i++ )
  {
   inp[i].addEventListener( "change", updateOutput, false );
  }

  var cB = document.getElementById('copy');
  cB.addEventListener('click', function(event)
  { // Copy button
   document.getElementById('out').select();
   document.execCommand('copy');
  });

  document.getElementById("gen-title").addEventListener( "blur", evtBlurCodeGenExit, false );
  document.getElementById("close-gen-code").addEventListener( "blur", evtBlurCodeGenExit, false );
  document.getElementById('close-gen-code').addEventListener('click', exitGenCode, false );
  document.getElementById('draw-dark').addEventListener('click', exitGenCode, false );
 }

 function initApp()
 {
  populateSections();
  assignEventListeners();
  disableAccess(dialogGenCode);
  var AllButtons = dialogGenCode.getElementsByClassName("gen-group");
  for( var i = 0; i < AllButtons.length; i++ )
  {
   disableAccess(AllButtons[i]);
  }
 }

 return{ init: function(){initApp();} }
})();

window.addEventListener('load', function()
{
 new MS.App2.init();
});
