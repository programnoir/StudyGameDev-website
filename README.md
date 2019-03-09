# StudyGameDev.com
This is a simple online resource database, categorized according to branch of study and then further organized by topics/skill sets under the field that one can learn. The fields are programming, writing, sound design, music production, art, 3D modelling, game design, user experience, quality assurance, production & management, marketing, finanace, and business & legal. The resources are primarily intended for United States game developers, although those who can read and speak english will find numerous resources that are of value to them. You can view the site at https://studygamedev.com/.

## Basic Usage of the Site
This website is primarily a portal to other websites with information. To navigate the portal, either use the menu or the featured content links at the welcoming section of the page. The entire website is keyboard accessible with the use of tab, shift+tab, and spacebar. The keyboard shortcuts `Ctrl+Z` or `Ctrl+/` will bookmark your current navigation spot and select the menu again. Accessibility controls can help increase the font size, change the theme from dark to bright, and disable content folding for users who can use the mouse for navigation and want to navigate the website faster. Additionally, there is a search bar at the top of the website for looking for entries according to your exact string of input.

## Guide to the Files on StudyGameDev.
StudyGameDev is a relatively simple website project, facilitating the use of HTML, CSS, and JavaScript. Here is a list of the file names and the general functions for each:

* index.php - This is the project's "starting point." It is the page where all of the components come together. Mostly HTML.
* style.css - Used to detail the website with a responsive, high contrast theme.
* awesome-menu.js - Modular script for the A.W.E.S.O.M.E. menu, a keyboard-accessible, screen reader-tested, slide-in menu system.
* section-toggle.js - Script for accessing different website sections and turning them off and on.
* db.js - The database of game development resources and all their entries.
* gencode.js - A quick tool for generating database entries for existing sections and topics.
* jquery.js - A library I am temporarily using for the search feature of the website.
* search.js - The code for reading and responding to user input in the search bar.

## Licenses
* This version of jQuery is under the [MIT license](https://tldrlegal.com/license/mit-license). For more information, visit https://jquery.org/license/
* The font licenses (Open Font License) for ABeeZee and Oswald are contained within the font directory.

# How a Beginner Can Contribute to StudyGameDev.com
## Step One: Set Up Your Git Repository Software.
I recommend that beginners download https://desktop.github.com/. Simply install it.
## Step Two: Launch the Github Desktop Software
The installer should do this step for you, once it is done installing. But if it doesn't go ahead and launch it, yourself.
## Step Three: Clone the StudyGameDev.com repository to your Github Desktop software.
This action is performed in a few simple steps, but depends on your familiarity with the software.
1. This step depends on whether you have used Github Desktop to work with a repository, before, or not.
* If this is your first time using the software, click the button that is labelled with "Clone a repository from the Internet."
* If you have used this software before and do not see this button, then open the File menu at the top of the window of the Github Desktop software and select "Clone repository." The shortcut key combination for this action is `Ctrl+Shift+O`.
2. The software will prompt you for the location of the repository. Type in `nitronova/StudyGameDev.com` and define the installation path on your hard drive where you'd like the StudyGameDev.com project files to be placed.
## Step Four: Look for a Potential Issue to Fix
On this page, you can find StudyGameDev.com's current Issues under the Issues tab near the top of this website. See if there is an issue that you believe you can fix using code.

If there are not any issues that you can fix with code, that's okay! You can still make a contribution to the project!
1. Think of a website where you learned information that could be included on StudyGameDev.com.
2. Copy the URL to that resource and fill out the form on StudyGameDev.com's Code Generator. This tool will generate a small piece of code that you can add to the db.js file. Remember to specify the category topic of this resource as well as the media type that it is in. Write a title and a brief summary of the content. Press the copy button to copy the resulting code.
## Step Five: Create a New Branch for Your Own Modifications
This will group your changes so that you can later request they be made to the original version. Let's assume the above example of using the code generator to edit the db.js file.

In your Github Desktop software, navigate to the Branch menu at the top of the screen, and select "New Branch." The keyboard shortcut for this is `Ctrl+Shift+N`. Alternatively, you can use the "Current Branch" submenu to create a new branch. You can give this branch whatever name you wish to use. You could name it something like "db New Resources," if you want a suggestion.
## Step Six: Publish the Branch to Github
This will make your branch visible on the Github page for the StudyGameDev.com project.
1. Ensure that your newly created branch is selected by looking at the Current Branch dropdown menu. If your branch's name is visible, you can proceed to step two. Otherwise, use the dropdown menu to select your branch.
2. To publish the branch, click the button just to the right of the Current Branch dropdown menu that says "Publish Branch to Github".
## Step Seven: Begin Making Modifications
1. Ensure that your newly created branch is selected by looking at the Current Branch dropdown menu. If your branch's name is visible, you can proceed to step two. Otherwise, use the dropdown menu to select your branch.
2. Simply open the db.js file in any plaintext editor (such as Notepad or Atom, but not Microsoft Word or OpenOffice Writer, those are rich text editors!) and paste the code in a reasonable location (usually amongst similarly categorized information.
3. Github Desktop will detect your changes and show them in its user interface.
4. Remember to test your changes to ensure that your resource appears in the right place and that your changes haven't caused a glitch somewhere!
You can repeat this process and end up with 2 or even more new blocks of code to be added to db.js.
## Step Eight: Commit and Push the Changes to Your Branch
1. Commit: To update your branch with your changes, navigate to the bottom-left corner of the window where you can see the form to commit your edits. Name your edit in the title (example: "DB Add: `Name of resource goes here`"). Add a brief description or summary of what changes you made to which files. Then click "Commit to `Name of branch`" to commit the changes.
2. Push: Next to the Current Branch dropdown menu, the button has changed to be labelled with "Push Origin." Press this button. Your branch is now a newer version of the project than the original.
## Step Nine: Perform a Pull Request
Performing a pull request means that you wish to add your changes to the original project. This has to be requested of me, nitronova, the project maintainer.
1. Navigate to the Branch menu at the top of the window of your Github Desktop software and select "Create Pull Request." The keyboard shortcut to this is `Ctrl+R`. This will open a new tab in your web browser where you can go into detail with the issues or additions you wish to fix.
2. If you are following the db.js example, select the label that says "New Resource for db.js".
3. When everything looks good, click the green button that says "Create Pull Request." You can make edits if you realize you forgot anything in particular.

I will at that point review your submission. If the request is approved, we will work on merging it. For simple database additions, this is as simple as merging the pull request with the master. Once this is done, you can at that point delete the branch you have created by going back to Github Desktop, navigating to the Branch menu, and select "Delete," checking "Yes" for deleting the remote. If you forget to check it then see this [guide to deleting a branch on Github](https://help.github.com/en/articles/creating-and-deleting-branches-within-your-repository). Begin again at Step Four for new updates.
