/*
 I hereby release this code into the public domain.
 Let it be freely used and improved by all.
 I highly recommend that forks of this project,
 should they be licensed, be licensed with a
 libre license for free software.

 Important point to make: If you use this, and something breaks, yeah that sucks.
 But I will legally have to say: This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 Please seek the consultation of a professional developer before using foreign code.

 I based a lot of my code from these two projects:
 https://codepen.io/marcysutton/pen/JoQqVw
 https://codepen.io/rjmccollam/pen/ZYNEXd
*/
var MS = MS || {};
MS.App = ( function()
{
 var isFirefox = typeof InstallTrigger !== "undefined",
 lastFocused = document.getElementById( "global-title" ).children[ 0 ],
 flagDialogAccess = false,
 keysMenu = { 90: 1,  191: 1 }, // Z and slash
 keysConfirm = { 13: 1,  32: 1 }, // ENTER, SPACE
 keysScroll = { 32: 1,  37: 1,  38: 1,  39: 1,  40: 1 }, // ARROWS
 keysMouse = { 0: 1,  1: 1,  2: 1 },
 // temp vars: openedElements, submenuButtons,
 buttonNavMain = document.getElementById( "button-nav-main" ),
 navMain = document.getElementById( "nav-main" ),
 buttonsSubmenu = navMain.getElementsByClassName( "button-submenu" ),
 mainWrap = document.getElementById( "main-wrapper" ),
 drawDark = document.getElementById( "draw-dark" ),
 buttonAccess = document.getElementById( "button-settings-accessibility" ),
 dialogAccess = document.getElementById( "access-controls" );


 /// Set Cookie Settings: 1. dark/bright, 2. default/larger/largest
 function set_cookie( theme_value, font_value, show_content_value, lifespan_in_days, valid_domain )
 {
  // https://www.thesitewizard.com/javascripts/cookies.shtml (Thank youuu)
  var domain_string = valid_domain ? ( "; domain=" + valid_domain) : '';
  document.cookie = "theme" + "=" + encodeURIComponent( theme_value ) +
   "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
   "; path=/" + domain_string ;
  document.cookie = "fontsize" + "=" + encodeURIComponent( font_value ) +
   "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
   "; path=/" + domain_string ;
  document.cookie = "showcontent" + "=" + encodeURIComponent( show_content_value ) +
   "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
   "; path=/" + domain_string ;
 }


 /// Get Cookie once you reload.
 function get_cookie( cookie_name )
 {
  // https://www.thesitewizard.com/javascripts/cookies.shtml
  var cookie_string = document.cookie;
  if( cookie_string.length != 0 )
  {
   var cookie_array = cookie_string.split( '; ' );
   for( i = 0; i < cookie_array.length; i++ )
   {
    cookie_value = cookie_array[ i ].match( cookie_name + '=(.*)' );
    if (cookie_value != null)
    {
     return decodeURIComponent( cookie_value[ 1 ] );
    }
   }
  }
  return '';
 }


 /// Site settings, set by cookies and forms.
 function setSiteSettings( theme, fontsize, showcontent )
 {
  document.body.className = theme;
  document.getElementsByTagName("html")[0].className = fontsize;
  document.getElementById("marker").className = showcontent;
 }


 /// Focus after a small timer.
 function focusDelay( me )
 {
  setTimeout( function(){ me.focus(); }, 100 );  // For readability.
 }


 /// Scroll Disabling (mouse)
 function preventDefault( e )
 {
  e = e || window.event;
  if( e.preventDefault )
  {
   e.preventDefault();
  }
  e.returnValue = false;
 }
 function preventDefaultForScrollKeys( e )
 { /// Keyboard
  if( keysScroll[ e.keyCode ] )
  {
   preventDefault(e);
   return false;
  }
 }
 function enableScroll()
 { /// Re-enabling scroll
  document.onkeydown = null;
 }
 function disableScroll()
 { /// Re-enabling keys
  document.onkeydown = preventDefaultForScrollKeys;
 }


 /// Tabindex and ARIA-Hidden
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
 function enableSubmenuAccess(this_tag)
 {
  for( var i = 0; i < this_tag.children.length; i++ )
  {
   enableAccess( this_tag.children[ i ].children[ 0 ] );
  }
 }
 function disableSubmenuAccess(this_tag)
 {
  for( var i = 0; i < this_tag.children.length; i++ )
  {
   disableAccess( this_tag.children[ i ].children[ 0 ] );
  }
 }
 function enableAllAccess()
 { // Links lose their tabIndex="-1" thing.
  enableAccess(navMain);
  var listChildren = navMain.children[ 1 ].children;
  for( var i = 0; i < listChildren.length; i++ )
  {
   var childButton = listChildren[ i ].children[ 0 ];
   enableAccess(childButton);
   if( listChildren[ i ].classList.contains( "submenu-li" ) )
   {
    let sibUL = childButton.nextElementSibling;
    enableSubmenuAccess( sibUL );
   }
  }
 }
 function disableAllAccess()
 { // Links lose their tabIndex="-1" thing.
  disableAccess(navMain);
  var listChildren = navMain.children[ 1 ].children;
  for( var i = 0; i < listChildren.length; i++ )
  {
   var childButton = listChildren[ i ].children[ 0 ];
   disableAccess(childButton);
   if( listChildren[ i ].classList.contains( "submenu-li" ) )
   {
    let sibUL = childButton.nextElementSibling;
    disableSubmenuAccess(sibUL);
   }
  }
 }


 /// Opening/Closing Navigation
 function moveButtonIn()
 {
  document.getElementById("nav-button").removeChild(buttonNavMain);
  document.getElementById("nav-button-open").appendChild(buttonNavMain);
 }
 function moveButtonOut()
 {
  document.getElementById("nav-button-open").removeChild(buttonNavMain);
  document.getElementById("nav-button").appendChild(buttonNavMain);
 }
 function openNavMain()
 {
  drawDark.className = "open";
  buttonNavMain.className = "open";
  navMain.className = "open";
  buttonNavMain.setAttribute( 'aria-label', 'Close the menu ' );
  disableScroll();
  enableAllAccess();
  focusDelay( navMain.children[ 1 ].children[ 0 ].children[ 0 ] );
  moveButtonIn();
  navMain.children[ 1 ].children[ 0 ].children[ 0 ].focus();
 }
 function closeNavMain()
 {
  if( flagDialogAccess )
  {
   return;
  }
  let openedElements = Array.prototype.slice.call(
                        navMain.getElementsByClassName( "open" ) );
  for( let i of openedElements )
  {
   i.classList.remove("open");
  }
  navMain.classList.remove("open");
  drawDark.classList.remove("open");
  buttonNavMain.classList.remove("open");
  buttonNavMain.setAttribute( 'aria-label', 'Open the menu ' );
  enableScroll();
  disableAllAccess();
  moveButtonOut();
 }


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


 /// Are we focused on something in the menu?
 function isNavFocused()
 {
  return isDescendent( navMain, document.activeElement );
 }


 /// Wait, you mean INNERTEXT ISN'T CROSS-BROWSER, YET?!
 function retrieveText( elem )
 {
  if( typeof elem.textContent != null )
  {
   return elem.textContent;
  }
  return elem.innerText;
 }


 /// Toggle Opening/Closing of Submenus
 function openSubmenu( submenu )
 {
  submenu.classList.add("open");
  enableSubmenuAccess(submenu.nextElementSibling);
  var toFocus = submenu.nextElementSibling.children[ 0 ].children[ 0 ];
  toFocus.focus();
 }
 function closeSubmenu( submenu )
 {
  submenu.classList.remove("open");
  disableSubmenuAccess(submenu.nextElementSibling);
 }
 function closeAllSubmenus()
 {
  let submenuButtons = Array.prototype.slice.call(buttonsSubmenu);
  for( let i of submenuButtons )
  {
   if( isDescendent( i.parentNode, document.activeElement ) == false )
   {
    closeSubmenu(i);
   }
  }
 }
 function toggleSubmenu( submenu )
 {
  if( submenu.classList.contains( "open" ) )
  {
   closeSubmenu(submenu);
   submenu.setAttribute( 'aria-label', 'Open the ' + retrieveText(submenu) + ' sub-menu' );
  }
  else
  {
   openSubmenu(submenu);
   submenu.setAttribute( 'aria-label', 'Close the ' + retrieveText(submenu) + ' sub-menu' );
  }
 }


 /// Events
 function evtClickButtonSubmenu()
 {
  closeAllSubmenus();
  toggleSubmenu(this);
 }
 function evtClickButtonNavMain( event )
 {
  if( this.className == "open" )
  {
   closeNavMain();
   lastFocused.focus();
  }
  else
  {
   openNavMain();
  }
 }


 function closeDialogAccess()
 {
  drawDark.classList.remove("config");
  dialogAccess.classList.remove("open");
  disableAccess(dialogAccess);
  // Do the same for all selects and buttons in dialogAccess
  var buttonsDialogAccess = dialogAccess.getElementsByTagName( "button" );
  buttonsDialogAccess = Array.prototype.slice.call( buttonsDialogAccess );
  var selectsDialogAccess = dialogAccess.getElementsByTagName( "select" );
  selectsDialogAccess = Array.prototype.slice.call( selectsDialogAccess );
  for( var i = 0; i < buttonsDialogAccess.length; i++ )
  {
   disableAccess( buttonsDialogAccess[ i ] );
  }
  for( var i = 0; i < selectsDialogAccess.length; i++  )
  {
   disableAccess( selectsDialogAccess[ i ] );
  }
  dialogAccess.children[ 0 ].setAttribute( "tabindex", "-1" );
  flagDialogAccess = false;
  buttonAccess.focus();
 }


 function evtKeyUpGlobal( event )
 {
  if( flagDialogAccess )
  {
   if( isDescendent( dialogAccess, document.activeElement ) == false )
   {
    closeDialogAccess();
   }
  }
  else if( isNavFocused() )
  {
   closeAllSubmenus();
  }
  else if( document.activeElement != buttonNavMain )
  {
   if( navMain.className == "open" )
   {
    closeNavMain();
    lastFocused.focus();
   }
   else
   {
    lastFocused = document.activeElement;
    if( keysMenu[event.keyCode] )
    {
     var ae = document.activeElement.nodeName;
     if( ae != "INPUT" && ae != "TEXTAREA" )
     {
      buttonNavMain.focus();
     }
    }
   }
  }
 }
 function evtBlurLastNav()
 {
  var lastNav = this;
  setTimeout( function()
  {
   if( isNavFocused() == false )
   {
    if( lastNav.classList.contains( "open" ) == false )
    {
     closeNavMain();
     lastFocused.focus();
    }
   }
  }, 100 );
 }

 function evtBlurAccessExit( event )
 {
  setTimeout( function()
  {
   if( isDescendent( dialogAccess, document.activeElement ) == false )
   {
    if( document.activeElement == document.body )
    { // The mouse was probably clicked.
     return;
    }
    closeDialogAccess();
   }
  }, 100 );
 }
 function evtClickDarkDraw()
 {
  if( this.classList.contains( "config" ) )
  {
   closeDialogAccess();
  }
  else if( navMain.className == "open" )
  {
   closeNavMain();
  }
 }
 function evtClickButtonAccess()
 {
  dialogAccess.classList.add("open");
  drawDark.classList.add("config");
  enableAccess(dialogAccess);
  var buttonsDialogAccess = dialogAccess.getElementsByTagName( "button" );
  buttonsDialogAccess = Array.prototype.slice.call( buttonsDialogAccess );
  var selectsDialogAccess = dialogAccess.getElementsByTagName( "select" );
  selectsDialogAccess = Array.prototype.slice.call( selectsDialogAccess );
  for( var i = 0; i < buttonsDialogAccess.length; i++ )
  {
   enableAccess( buttonsDialogAccess[ i ] );
  }
  for( var i = 0; i < selectsDialogAccess.length; i++  )
  {
   enableAccess( selectsDialogAccess[ i ] );
  }
  dialogAccess.children[ 0 ].setAttribute( "tabindex", "0" );
  // Do the same for all selects and buttons in dialogAccess
  flagDialogAccess = true;
  dialogAccess.children[ 0 ].focus();
 }

 function evtClickButtonSave()
 {
  var z = document.querySelector('#show-content:checked');
  if( z == null )
  {
   z = "null";
  }
  else
  {
   z = z.value;
  }
  var options = [
   document.getElementById("theme-choice").value,
   document.getElementById("font-size").value,
   z
  ];
  setSiteSettings( options[ 0 ], options[ 1 ], options[ 2 ] );
  set_cookie( options[ 0 ], options[ 1 ], options[ 2 ], 30, "studygamedev.com" );
 }

 function evtKeyButton( event )
 {
  if( event.keyCode == 32 )
  {
   this.click();
  }
 }

 /// Custom function for when the menu items are clicked in studygamedev.
 function handleMenuClick( event )
 {
  ///
  var topics = document.getElementsByClassName("topic");
  var to = event.target.getAttribute( "to" );
  var targ = document.getElementById( to );

  // In this part, we set all of the attributes appropriately.
  for( var i = 0; i < topics.length; i++ )
  {
   topics[ i ].classList.remove("show");
  }

  //////////////////////////////////////////////////////////////////////////////-------------------------------------------
  removeResourceNodes(); // Clear out nodes we are no longer using (reduce RAM usage)
  populateByMenuClick(to);

  targ.classList.add("show");
  if( navMain.className == "open" )
  {
   closeNavMain();
  }
  document.getElementById( "welcome" ).className = "hidden";
  targ = targ.getElementsByTagName( "button" )[ 0 ];
  targ.focus();
 }

 function initApp()
 { // Bind actions to functions.
  document.body.focus();
  buttonNavMain.addEventListener( "click", evtClickButtonNavMain, false );
  buttonNavMain.setAttribute( 'aria-label', 'Open the menu' );
  let submenuButtons = Array.prototype.slice.call(buttonsSubmenu);
  for( var i = 0; i < submenuButtons.length; i++ )
  {
   submenuButtons[i].addEventListener( "click", evtClickButtonSubmenu, false );
   submenuButtons[i].setAttribute( 'aria-label', 'Open the ' +
                                  retrieveText(submenuButtons[i]) + ' sub-menu' );
  }
  var navLast = navMain.children[1].children;
  navLast = navLast[ navLast.length - 1 ].children[0];
  navLast.addEventListener( "blur", evtBlurLastNav, false ); // button or a
  if( navLast.parentNode.classList.contains("submenu-li") )
  {
   navLast = navLast.nextElementSibling.children;
   navLast = navLast[ navLast.length - 1 ].children[0]; // ul ul a
   navLast.addEventListener( "blur", evtBlurLastNav, false );
  }
  drawDark.addEventListener( "click", evtClickDarkDraw, false );
  document.body.addEventListener( "keyup", evtKeyUpGlobal, false );
  disableAllAccess();
  buttonAccess.addEventListener( "click", evtClickButtonAccess, false );
  document.getElementById("buttonAccessExit").addEventListener( "click", closeDialogAccess, false );
  document.getElementById("buttonAccessExit").addEventListener( "blur", evtBlurAccessExit, false );
  dialogAccess.children[0].addEventListener( "blur", evtBlurAccessExit, false );
  document.getElementById("buttonAccessSave").addEventListener( "click", evtClickButtonSave, false );
  if( isFirefox == false )
  {
   var elems = [ "button" ];
   for( var i = 0; i < elems.length; i++ )
   {
    var allElems = document.getElementsByTagName(elems[i]);
    for( var j = 0; j < allElems.length; j++ )
    {
     allElems[j].addEventListener( "keyup", evtKeyButton, false );
    }
   }
  }
  var menuItems = document.querySelectorAll(".submenu-li a");
  for( var i = 0; i < menuItems.length; i++ )
  {
   menuItems[i].addEventListener( "click", handleMenuClick, false );
   menuItems[i].addEventListener( "keyup", evtKeyButton, false );
  }
  menuItems = document.querySelectorAll("#recommended a");
  for( var i = 0; i < menuItems.length; i++ )
  {
   menuItems[i].addEventListener( "click", handleMenuClick, false );
   menuItems[i].addEventListener( "keyup", evtKeyButton, false );
  }
  closeDialogAccess();
  setSiteSettings( get_cookie("theme"), get_cookie("fontsize"), get_cookie("showcontent") );
 }


 return{ init: function(){initApp();} }
})();

window.addEventListener('load', function()
{
 new MS.App.init();
});
