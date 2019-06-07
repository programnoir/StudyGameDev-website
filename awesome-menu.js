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
var oAwesomeMenu = {};
oAwesomeMenu.fApplication = ( function()
{
 var bIsFirefox = typeof InstallTrigger !== "undefined",
 hLastFocusedID = document.getElementById( "text-site-title" ).children[ 0 ],
 bAccessibilityDialogOpen = false,
 kMenuShortcut = { 90: 1,  191: 1 }, // Z and slash
 kScroll = { 32: 1,  37: 1,  38: 1,  39: 1,  40: 1 }, // ARROWS
 kMouse = { 0: 1,  1: 1,  2: 1 },
 hMainMenuButton = document.getElementById( "button-main-menu" ),
 hMainMenuWrapper = document.getElementById( "wrapper-main-menu" ),
 aByClassButtonToggleSubmenu = hMainMenuWrapper.getElementsByClassName( "button-toggle-submenu" ),
 hBlackBackground = document.getElementById( "background-black-alpha" ),
 hAccessibilityDialogButton = document.getElementById( "button-settings-accessibility" ),
 hAccessibilityDialog = document.getElementById( "wrapper-settings-accessibility" );


 /* Set Cookie Settings: 1. dark/bright, 2. default/larger/largest 3. yes/no to unfolding */
 function fSetCookie( sTheme, sFontSize, sUnfoldContent, nLifespanDays, sValidDomain )
 {
  // https://www.thesitewizard.com/javascripts/cookies.shtml (Thank youuu)
  var sDomain = sValidDomain ? ( "; domain=" + sValidDomain ) : '';
  document.cookie = "theme" + "=" + encodeURIComponent( sTheme ) +
   "; max-age=" + 60 * 60 * 24 * nLifespanDays +
   "; path=/" + sDomain ;
  document.cookie = "fontsize" + "=" + encodeURIComponent( sFontSize ) +
   "; max-age=" + 60 * 60 * 24 * nLifespanDays +
   "; path=/" + sDomain ;
  document.cookie = "showcontent" + "=" + encodeURIComponent( sUnfoldContent ) +
   "; max-age=" + 60 * 60 * 24 * nLifespanDays +
   "; path=/" + sDomain ;
 }


 /* Get Cookie once it has been set. */
 function fGetCookie( sCookieName )
 {
  // https://www.thesitewizard.com/javascripts/cookies.shtml
  var sCookie = document.cookie;
  if( sCookie.length != 0 )
  {
   var aCookie = sCookie.split( '; ' );
   for( let nCookieIndex = 0; nCookieIndex < aCookie.length; nCookieIndex++ )
   {
    let aCookieValue = aCookie[ nCookieIndex ].match( sCookieName + '=(.*)' );
    if( aCookieValue != null )
    {
     return decodeURIComponent( aCookieValue[ 1 ] ); // The value in () above.
    }
   }
  }
  return '';
 }


 /// Site settings, set by cookies and forms.
 function fApplySettings( sSettingTheme, sSettingFontSize, sSettingShowContent )
 {
  document.body.className = sSettingTheme;
  document.getElementsByTagName( "html" )[ 0 ].className = sSettingFontSize;
  document.getElementById( "setting-unfolding-marker" ).className = sSettingShowContent;
 }


 /// Focus after a small timer.
 function fDelayFocusOnElement( hElement )
 {
  setTimeout( function(){ hElement.focus(); }, 100 );  // For readability.
 }


 /// Scroll Disabling (mouse)
 function preventDefault( hEvent )
 {
  hEvent = hEvent || window.event;
  if( hEvent.preventDefault )
  {
   hEvent.preventDefault();
  }
  hEvent.returnValue = false;
 }
 function fPreventScrollKeys( hEvent )
 { /// Keyboard
  if( kScroll[ hEvent.keyCode ] )
  {
   preventDefault( hEvent );
   return false;
  }
 }
 function fEnableScroll()
 { /// Re-enabling scroll
  document.onkeydown = null;
 }
 function fDisableScroll()
 { /// Re-enabling keys
  document.onkeydown = fPreventScrollKeys;
 }


 /// Tabindex and ARIA-Hidden
 function fTabScreenReaderOn( hElement )
 {
  hElement.removeAttribute( "tabindex" );
  hElement.removeAttribute( "aria-hidden" );
 }
 function fTabScreenReaderOff( hElement )
 {
  hElement.setAttribute( "tabindex", "-1" );
  hElement.setAttribute( "aria-hidden", "true" );
 }
 function fSubmenuTabScreenOn( hElement )
 {
  for( let nSubmenuChildrenIndex = 0; nSubmenuChildrenIndex < hElement.children.length; nSubmenuChildrenIndex++ )
  {
   fTabScreenReaderOn( hElement.children[ nSubmenuChildrenIndex ].children[ 0 ] );
  }
 }
 function fSubmenuTabScreenOff( hElement )
 {
  for( let nSubmenuChildrenIndex = 0; nSubmenuChildrenIndex < hElement.children.length; nSubmenuChildrenIndex++ )
  {
   fTabScreenReaderOff( hElement.children[ nSubmenuChildrenIndex ].children[ 0 ] );
  }
 }
 function fAllTabScreenOn()
 { // Links lose their tabIndex="-1" thing.
  fTabScreenReaderOn( hMainMenuWrapper );
  let aMainMenuChildren = hMainMenuWrapper.children[ 1 ].children;
  for( let nMenuChildrenIndex = 0; nMenuChildrenIndex < aMainMenuChildren.length; nMenuChildrenIndex++ )
  {
   let hButton = aMainMenuChildren[ nMenuChildrenIndex ].children[ 0 ];
   fTabScreenReaderOn( hButton );
   if( aMainMenuChildren[ nMenuChildrenIndex ].classList.contains( "wrapper-submenu-parent" ) )
   {
    let hSiblingList = hButton.nextElementSibling;
    fSubmenuTabScreenOn( hSiblingList );
   }
  }
 }
 function fAllTabScreenOff()
 { // Links lose their tabIndex="-1" thing.
  fTabScreenReaderOff( hMainMenuWrapper );
  var aMainMenuChildren = hMainMenuWrapper.children[ 1 ].children;
  for( let nMenuChildrenIndex = 0; nMenuChildrenIndex < aMainMenuChildren.length; nMenuChildrenIndex++ )
  {
   var hButton = aMainMenuChildren[ nMenuChildrenIndex ].children[ 0 ];
   fTabScreenReaderOff( hButton );
   if( aMainMenuChildren[ nMenuChildrenIndex ].classList.contains( "wrapper-submenu-parent" ) )
   {
    let hSiblingList = hButton.nextElementSibling;
    fSubmenuTabScreenOff( hSiblingList );
   }
  }
 }

 /// Opening/Closing Navigation
 function fMoveMenuButtonToOpen()
 {
  document.getElementById( "wrapper-button-menu-closed" ).removeChild( hMainMenuButton );
  document.getElementById( "wrapper-button-menu-open" ).appendChild( hMainMenuButton );
 }
 function fMoveMenuButtonToClosed()
 {
  document.getElementById( "wrapper-button-menu-open" ).removeChild( hMainMenuButton );
  document.getElementById( "wrapper-button-menu-closed" ).appendChild( hMainMenuButton );
 }
 function fOpenMainMenu()
 {
  hBlackBackground.className = "state-open";
  hMainMenuButton.className = "state-open";
  hMainMenuWrapper.className = "state-open";
  hMainMenuButton.setAttribute( "aria-label", "Close the menu " );
  fDisableScroll();
  fAllTabScreenOn();
  fDelayFocusOnElement( hMainMenuWrapper.children[ 1 ].children[ 0 ].children[ 0 ] );
  fMoveMenuButtonToOpen();
  hMainMenuWrapper.children[ 1 ].children[ 0 ].children[ 0 ].focus();
 }
 function fCloseMainMenu()
 {
  if( bAccessibilityDialogOpen )
  {
   return;
  }
  let aSlicedMenuOpenChildren = Array.prototype.slice.call( hMainMenuWrapper.getElementsByClassName( "state-open" ) );
  for( let hMenuOpenChild of aSlicedMenuOpenChildren )
  {
   hMenuOpenChild.classList.remove( "state-open" );
  }
  hMainMenuWrapper.classList.remove( "state-open" );
  hBlackBackground.classList.remove( "state-open" );
  hMainMenuButton.classList.remove( "state-open" );
  hMainMenuButton.setAttribute( "aria-label", "Open the menu " );
  fEnableScroll();
  fAllTabScreenOff();
  fMoveMenuButtonToClosed();
 }


 /// Is child a descendent of parent?
 function fIsDescendent( hParent, hChild )
 {
  let hNode = hChild.parentNode;
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


 /// Are we focused on something in the menu?
 function fIsNavFocused()
 {
  return fIsDescendent( hMainMenuWrapper, document.activeElement );
 }


 /// Wait, you mean INNERTEXT ISN'T CROSS-BROWSER, YET?!
 function fRetrieveText( hElement )
 {
  if( typeof hElement.textContent != null )
  {
   return hElement.textContent;
  }
  return hElement.innerText;
 }


 /// Toggle Opening/Closing of Submenus
 function fOpenSubmenu( hSubmenu )
 {
  hSubmenu.classList.add( "state-open" );
  fSubmenuTabScreenOn( hSubmenu.nextElementSibling );
  let hFirstSubmenuItem = hSubmenu.nextElementSibling.children[ 0 ].children[ 0 ];
  hFirstSubmenuItem.focus();
 }
 function fCloseSubmenu( hSubmenu )
 {
  hSubmenu.classList.remove( "state-open" );
  fSubmenuTabScreenOff( hSubmenu.nextElementSibling );
 }
 function fCloseAllSubmenus()
 {
  let aSlicedSubmenuButtons = Array.prototype.slice.call( aByClassButtonToggleSubmenu );
  for( let hSubmenuButton of aSlicedSubmenuButtons )
  {
   if( fIsDescendent( hSubmenuButton.parentNode, document.activeElement ) == false )
   {
    fCloseSubmenu( hSubmenuButton );
   }
  }
 }
 function fToggleSubmenu( hSubmenu )
 {
  if( hSubmenu.classList.contains( "state-open" ) )
  {
   fCloseSubmenu( hSubmenu );
   hSubmenu.setAttribute( "aria-label", "Open the " + fRetrieveText( hSubmenu ) + " sub-menu" );
  }
  else
  {
   fOpenSubmenu( hSubmenu );
   hSubmenu.setAttribute( "aria-label", "Close the " + fRetrieveText( hSubmenu ) + " sub-menu" );
  }
 }


 /// Events
 function fEventClickSubmenu()
 {
  fCloseAllSubmenus();
  fToggleSubmenu( this );
 }
 function fEventClickMainMenuButton( hEvent )
 {
  if( this.className == "state-open" )
  {
   fCloseMainMenu();
   hLastFocusedID.focus();
  }
  else
  {
   fOpenMainMenu();
  }
 }


 function fCloseAccessibilityDialog()
 {
  hBlackBackground.classList.remove( "state-accessibility-settings" );
  hAccessibilityDialog.classList.remove( "state-open" );
  fTabScreenReaderOff( hAccessibilityDialog );
  // Do the same for all selects and buttons in hAccessibilityDialog
  let aByTagNameButton = hAccessibilityDialog.getElementsByTagName( "button" );
  let aByTagNameSelect = hAccessibilityDialog.getElementsByTagName( "select" );
  aByTagNameButton = Array.prototype.slice.call( aByTagNameButton );
  aByTagNameSelect = Array.prototype.slice.call( aByTagNameSelect );

  for( let hButtonArrayIndex = 0; hButtonArrayIndex < aByTagNameButton.length; hButtonArrayIndex++ )
  {
   fTabScreenReaderOff( aByTagNameButton[ hButtonArrayIndex ] );
  }
  for( let hSelectArrayIndex = 0; hSelectArrayIndex < aByTagNameSelect.length; hSelectArrayIndex++  )
  {
   fTabScreenReaderOff( aByTagNameSelect[ hSelectArrayIndex ] );
  }
  hAccessibilityDialog.children[ 0 ].setAttribute( "tabindex", "-1" );
  bAccessibilityDialogOpen = false;
  hAccessibilityDialogButton.focus();
 }


 function fEventKeyUpGlobal( hEvent )
 {
  if( bAccessibilityDialogOpen )
  {
   if( fIsDescendent( hAccessibilityDialog, document.activeElement ) == false )
   {
    fCloseAccessibilityDialog();
   }
  }
  else if( fIsNavFocused() )
  {
   fCloseAllSubmenus();
  }
  else if( document.activeElement != hMainMenuButton )
  {
   if( hMainMenuWrapper.className == "state-open" )
   {
    fCloseMainMenu();
    hLastFocusedID.focus();
   }
   else
   {
    hLastFocusedID = document.activeElement;
    if( kMenuShortcut[ event.keyCode ] )
    {
     let sActiveNodeName = document.activeElement.nodeName;
     if( sActiveNodeName != "INPUT" && sActiveNodeName != "TEXTAREA" )
     {
      hMainMenuButton.focus();
     }
    }
   }
  }
 }
 function fEventBlurLastMenuItem()
 {
  var hLastMenuItem = this;
  setTimeout( function()
  {
   if( fIsNavFocused() == false )
   {
    if( hLastMenuItem.classList.contains( "state-open" ) == false )
    {
     fCloseMainMenu();
     hLastFocusedID.focus();
    }
   }
  }, 1 );
 }

 function fEventBlurAccessibility( hEvent )
 {
  setTimeout( function()
  {
   if( fIsDescendent( hAccessibilityDialog, document.activeElement ) == false )
   {
    if( document.activeElement == document.body )
    { // The mouse was probably clicked.
     return;
    }
    fCloseAccessibilityDialog();
   }
  }, 100 );
 }
 function fEventClickBlackBackground()
 {
  if( this.classList.contains( "state-accessibility-settings" ) )
  {
   fCloseAccessibilityDialog();
  }
  else if( hMainMenuWrapper.className == "state-open" )
  {
   fCloseMainMenu();
  }
 }
 function fEventClickAccessibilityDialogButton()
 {
  hAccessibilityDialog.classList.add( "state-open" );
  hBlackBackground.classList.add( "state-accessibility-settings" );
  fTabScreenReaderOn(hAccessibilityDialog);
  let aByTagNameButton = hAccessibilityDialog.getElementsByTagName( "button" );
  aByTagNameButton = Array.prototype.slice.call( aByTagNameButton );
  let aByTagNameSelect = hAccessibilityDialog.getElementsByTagName( "select" );
  aByTagNameSelect = Array.prototype.slice.call( aByTagNameSelect );
  for( let hButtonArrayIndex = 0; hButtonArrayIndex < aByTagNameButton.length; hButtonArrayIndex++ )
  {
   fTabScreenReaderOn( aByTagNameButton[ hButtonArrayIndex ] );
  }
  for( let hSelectArrayIndex = 0; hSelectArrayIndex < aByTagNameSelect.length; hSelectArrayIndex++  )
  {
   fTabScreenReaderOn( aByTagNameSelect[ hSelectArrayIndex ] );
  }
  hAccessibilityDialog.children[ 0 ].setAttribute( "tabindex", "0" );
  // Do the same for all selects and buttons in hAccessibilityDialog
  bAccessibilityDialogOpen = true;
  hAccessibilityDialog.children[ 0 ].focus();
 }

 function fEventClickAccessibilitySaveButton()
 {
  let hUnfoldCheckbox = document.querySelector( "#setting-content-unfold:checked" );
  let sUnfoldSetting = "null";
  if( hUnfoldCheckbox != null )
  {
   sUnfoldSetting = hUnfoldCheckbox.value;
  }
  var aOptions = [
   document.getElementById( "setting-theme" ).value,
   document.getElementById( "setting-font-size" ).value,
   sUnfoldSetting
  ];
  fApplySettings( aOptions[ 0 ], aOptions[ 1 ], aOptions[ 2 ] );
  fSetCookie( aOptions[ 0 ], aOptions[ 1 ], aOptions[ 2 ], 30, "studygamedev.com" );
 }

 function fEventKeyDownOnButton( hEvent )
 {
  if( hEvent.keyCode == 32 )
  {
   this.click();
  }
 }

 /// Custom function for when the menu items are clicked in studygamedev.
 function fHandleMenuClick( hEvent )
 {
  ///
  let aByClassTopic = document.getElementsByClassName( "topic" );
  let sToAttribute = hEvent.target.getAttribute( "to" );
  // In this part, we set all of the attributes appropriately.
  fRemoveResourceNodes(); // Clear out nodes we are no longer using (reduce RAM usage)
  fPopulateViaMenu( sToAttribute );

  var iTimer = setTimeout( function()
  {
   var hTopic = document.getElementById( sToAttribute );
   if( hMainMenuWrapper.className == "state-open" )
   {
    fCloseMainMenu();
   }
   document.getElementById( "wrapper-home-page-content" ).className = "state-hidden";
   let hTopicChapterButton = hTopic.getElementsByTagName( "button" )[ 0 ];
   hTopicChapterButton.focus();

  }, 26 ); // 5 to give enough of a buffer
 }

 function fInitApplication()
 { // Bind actions to functions.
  document.body.focus();
  hMainMenuButton.addEventListener( "click", fEventClickMainMenuButton, false );
  hMainMenuButton.setAttribute( "aria-label", "Open the menu" );
  let aSlicedSubmenuButtons = Array.prototype.slice.call( aByClassButtonToggleSubmenu );

  for( let hSubmenuButton = 0; hSubmenuButton < aSlicedSubmenuButtons.length; hSubmenuButton++ )
  {
   aSlicedSubmenuButtons[ hSubmenuButton ].addEventListener( "click", fEventClickSubmenu, false );
   aSlicedSubmenuButtons[ hSubmenuButton ].setAttribute( "aria-label", "Open the " +
                                  fRetrieveText( aSlicedSubmenuButtons[ hSubmenuButton ] ) + " sub-menu" );
  }

  let hLastMenuItem = hMainMenuWrapper.children[ 1 ].children;
  hLastMenuItem = hLastMenuItem[ hLastMenuItem.length - 1 ].children[ 0 ];
  hLastMenuItem.addEventListener( "blur", fEventBlurLastMenuItem, false ); // button or a
  if( hLastMenuItem.parentNode.classList.contains("wrapper-submenu-parent") )
  {
   hLastMenuItem = hLastMenuItem.nextElementSibling.children;
   hLastMenuItem = hLastMenuItem[ hLastMenuItem.length - 1 ].children[0]; // ul ul a
   hLastMenuItem.addEventListener( "blur", fEventBlurLastMenuItem, false );
  }

  hBlackBackground.addEventListener( "click", fEventClickBlackBackground, false );
  document.body.addEventListener( "keyup", fEventKeyUpGlobal, false );

  fAllTabScreenOff();

  hAccessibilityDialogButton.addEventListener( "click", fEventClickAccessibilityDialogButton, false );
  document.getElementById( "button-settings-accessibility-close" ).addEventListener( "click", fCloseAccessibilityDialog, false );
  document.getElementById( "button-settings-accessibility-close" ).addEventListener( "blur", fEventBlurAccessibility, false );
  hAccessibilityDialog.children[ 0 ].addEventListener( "blur", fEventBlurAccessibility, false );
  document.getElementById( "button-settings-accessibility-save" ).addEventListener( "click", fEventClickAccessibilitySaveButton, false );

  if( bIsFirefox == false )
  {
   let aByTagNameButton = document.getElementsByTagName( "button" );
   for( let nButtonIndex = 0; nButtonIndex < aByTagNameButton.length; nButtonIndex++ )
   {
    aByTagNameButton[ nButtonIndex ].addEventListener( "keyup", fEventKeyDownOnButton, false );
   }
  }
  let aMenuAnchors = document.querySelectorAll(".wrapper-submenu-parent a");
  for( let nMenuAnchorIndex = 0; nMenuAnchorIndex < aMenuAnchors.length; nMenuAnchorIndex++ )
  {
   aMenuAnchors[ nMenuAnchorIndex ].addEventListener( "click", fHandleMenuClick, false );
   aMenuAnchors[ nMenuAnchorIndex ].addEventListener( "keyup", fEventKeyDownOnButton, false );
  }
  let aRecommendedTopicLinks = document.querySelectorAll("#text-recommended-topics a");
  for( let nRecommendedIndex = 0; nRecommendedIndex < aRecommendedTopicLinks.length; nRecommendedIndex++ )
  {
   aRecommendedTopicLinks[ nRecommendedIndex ].addEventListener( "click", fHandleMenuClick, false );
   aRecommendedTopicLinks[ nRecommendedIndex ].addEventListener( "keyup", fEventKeyDownOnButton, false );
  }
  fCloseAccessibilityDialog();
  fApplySettings( fGetCookie("theme"), fGetCookie("fontsize"), fGetCookie("showcontent") );
 }


 return { init: function()
  {
   fInitApplication();
  }
 }
} )();

window.addEventListener( "load", function()
{
 new oAwesomeMenu.fApplication.init();
});
