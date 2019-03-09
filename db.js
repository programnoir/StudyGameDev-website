/*******************************************************************************
                                                                           db.js
Playlist       Red
Video           Brief video or video series about a topic.
Graphic         Image demonstrating techniques or explaining topics.

Podcast        Scarlet (podcasters are considered channels)
                Singular episode covering a topic.

Article        Orange
List            Brief text resource about a topic.

Channel        Yellow
Website         Sites that explore a topic or cover several at once.
Wiki

Book           Green
Online Manual   Thorough text resource fully covering a subject.
PDF

Course         Blue
Udemy           Fully covers a subject and offers exercises, homework, and tests.

Software       Purple
Download        Tools and non-educational files for practicing your crafts.
Supplies
*******************************************************************************/

var refs = [
// ### prog-what-is ############################################################
{
 section: "prog-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=DrNWRlelOEg",
 summary: "Introduction to Programming",
 details: "StudyGameDev presents: A brief overview of programming for game developers."
},
{
 section: "prog-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=WCuUWGmatpU",
 summary: "So You Want to Be a Developer (part 1)",
 details: "Extra Credits asks what skills do you need to be a great developer?"
},
{
 section: "prog-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=kqFcF_jRrx0",
 summary: "So You Want to Be a Developer (part 2)",
 details: "Teamwork and communication are absolutely essential to helping you make great code."
},
{
 section: "prog-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=RU1u-js7db8",
 summary: "The First Programming Languages",
 details: "PBS's Crash Course dives into examples of machine language to give you an idea of what language the CPU speaks in, and what the first programming languages were like."
},
{
 section: "prog-what-is",
 tagName: "Wiki",
 tagColor: "yellow",
 url: "https://en.wikipedia.org/wiki/Game_programming#Programming_languages",
 summary: "Comparison of Programming Languages",
 details: "Wikipedia's subsection in its Game Programming article that breaks down the pros and cons of each programming language."
},
{
 section: "prog-what-is",
 tagName: "Wiki",
 tagColor: "yellow",
 url: "https://en.wikipedia.org/wiki/List_of_game_engines",
 summary: "Comparison of Game Engines",
 details: "A rather overwhelming list of game engines that have been/are used for video game development."
},

// ### prog-IDES ###############################################################
{
  section: "prog-IDEs",
  tagName: "Software",
  tagColor: "purple",
  url: "http://www.codeblocks.org/",
  summary: "Code::Blocks (C, C++)",
  details: "Solid, GPL-friendly beginner's IDE."
},
{
  section: "prog-IDEs",
  tagName: "Software",
  tagColor: "purple",
  url: "https://www.eclipse.org/downloads/",
  summary: "Eclipse (C, C++, Java, PHP)",
  details: "Professional and helpful beginner's IDE."
},
{
 section: "prog-IDEs",
 tagName: "Software",
 tagColor: "purple",
 url: "https://atom.io/#ide",
 summary: "Atom",
 details: "Powerful, versatile text editor with lots features and can even serve as an IDE."
},
{
 section: "prog-IDEs",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.visualstudio.com/",
 summary: "Microsoft Visual Studio ($)",
 details: "On Windows, this is an industry-leading IDE. Free for individuals."
},
{
 section: "prog-what-is",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/playlist?list=PLhyKYa0YJ_5C6QC36h5eApOyXtx98ehGi",
 summary: "How To Start Your Game Development",
 details: "Most people on this section are thinking about doing their first video game. This playlist of videos is about making your first game."
},
// ### prog-safety #############################################################
{
 section: "prog-safety",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/gcmulk/status/862478705616093184",
 summary: "Injury Risk Reduction Exercises",
 details: "These exercises, illustrated by Twitter user gcmulk, are sourced from Summit Medical, McHesson health (2001), HEP2Go. Journals: Bandy and Irion (1997), Page (IJSPT, 2012)"
},
{
 section: "prog-safety",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/nitro_nova/status/1028365305540694016",
 summary: "Professionally Suggested Preventative Stretch Procedures",
 details: "I compiled a list of videos from established physical therapists on exercises and stretches that can help prevent the physical damage that game development can cause. \
            These can combat carpal tunnel, cubital tunnel, back aches, neck aches, and more."
},
// ### prog-utilities ##########################################################
{
 section: "prog-utilties",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.yworks.com/products/yed",
 summary: "yEd Graph Editing Software",
 details: "Excellent tool for creating flow charts, UML diagrams, and more."
},
{
 section: "prog-utilties",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=UI6lqHOVHic",
 summary: "UML Class Diagram Tutorial",
 details: "Check this out after you learn a bit about programming. Learn the top-down design tool that is UML and how a diagram software can help you plan your project."
},
// ### prog-c-books-references #################################################
{
 section: "prog-c-books-references",
 tagName: "Book",
 tagColor: "green",
 url: "http://www-personal.acfr.usyd.edu.au/tbailey/ctext/ctext.pdf",
 summary: "Intro to C & Software Design",
 details: "Tim Bailey's intro to C and software design. Types, operators, expressions, branching, iteration, functions, scope, extent, pointers, arrays, preprocessor directives, structures, unions, bitwise, input/output, data structures, etc."
},
{
 section: "prog-c-books-references",
 tagName: "Online Manual",
 tagColor: "green",
 url: "https://c-language.com/",
 summary: "Learn C for Beginners, by Surendren",
 details: "Surendren provides an online manual that can help you get started with learning C."
},
{
 section: "prog-c-books-references",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.tutorialspoint.com/c_standard_library/index.htm",
 summary: "The C Standard Library",
 details: "For each function you encounter from the standard library, you should look it up here to understand it better. For example, did you know printf returns an integer? This is stuff you should learn."
},
// ### prog-lua-books-references ###############################################
{
 section: "prog-lua-books-references",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.lua.org/docs.html",
 summary: "Official Lua Docs Portal",
 details: "The official Lua documentation portal contains links to Lua's reference manual as well as links to books you can learn the language from. Note: Do not try to learn Lua from the reference manual; \
            it is not designed to teach beginners how to code with it."
},
{
 section: "prog-lua-books-references",
 tagName: "Book",
 tagColor: "green",
 url: "http://crypto.cs.mcgill.ca/~simonpie/webdav/ipad/EBook/Programmation/Beginning%20Lua%20Programming.pdf",
 summary: "Beginning Lua Programming",
 details: "Kurt Jung and Aaron Brown's (now outdated) beginner's manual to programming in Lua. Should still work fine for covering the basics."
},
// ### prog-love2d-engine-software #############################################
{
 section: "prog-love2d-engine-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://love2d.org/",
 summary: "LÖVE2D Game Engine",
 details: "Here you can download the Love2D game engine. Additionally, the site links to forums and a wiki for documentation."
},
// ### prog-love2d-engine-basics ###############################################
{
 section: "prog-love2d-engine-basics",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://youtu.be/FUiz1kL0QtI?list=PLz-rYTT-2nItPbZaj8pt10h49HofbWVQT",
 summary: "Love2D Tutorial Videos (Beginner)",
 details: "Four-part tutorial series done by Spunky Kangaroo."
},
{
 section: "prog-love2d-engine-basics",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=Jte9o4S6rlo&feature=youtu.be&list=PLZVNxI_lsRW2kXnJh2BMb6D82HCAoSTUB&t=15",
 summary: "Love2D Tutorial Videos (Advanced)",
 details: "YouTuber recursor offers a more thorough course on developing games using Love2D."
},



// ### writ-intro-articles #####################################################
{
 section: "writ-intro-articles",
 tagName: "Wiki",
 tagColor: "yellow",
 url: "https://tvtropes.org/pmwiki/pmwiki.php/SoYouWantTo/WriteAVideoGame",
 summary: "TVTropes: So You Want to Write a Video Game?",
 details: "A good introductory article on writing stories for videogames."
},
// ### writ-software ###########################################################
{
 section: "writ-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.libreoffice.org/",
 summary: "LibreOffice",
 details: "Powerful, user-friendly document editing suite. Good for rich text documents, spreadsheets, presentations, databases, and more."
},
// ### writ-story-fundamentals #################################################
{
 section: "writ-story-fundamentals",
 tagName: "Article",
 tagColor: "orange",
 url: "https://msu.edu/course/tc/842/SevenElements%20Story.htm",
 summary: "7 Elements of Good Storytelling",
 details: "A quick and simple breakdown of the vital elements of a video game's story."
},



// ### sd-intro-articles #######################################################
{
 section: "sd-intro-articles",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.soundonsound.com/techniques/music-sound-design-video-games",
 summary: "Sound Design (and Music) for Video Games",
 details: "SoundOnSound's writeup on sound design gives us a window into the goals and workflow of a sound designer."
},
// ### sd-software #############################################################
{
 section: "sd-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.audacityteam.org/",
 summary: "Audacity",
 details: "Simplistic waveform-focused digital audio workstation with tools for directly editing sounds."
},
// ### sd-pros #################################################################
{
 section: "sd-pros",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/MarshallsGuitarFun/videos",
 summary: "Marshall McGee",
 details: "Marshall works as a professional sound designer for video game companies, and is one of the leading sources of expertise on YouTube."
},
// ### sd-fundamentals-full ####################################################
{
 section: "sd-fundamentals-full",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/playlist?list=PLOMuI-j1vRxR9IDRAYPKEdHqq5sdOITJu",
 summary: "Sound and Synth Basics",
 details: "Composing Gloves on Some of the basics of waveforms. Also, check out the Synth Design Wiki in Music Production for an even more accessible primer on audio fundamentals."
},
// ### sd-recording-vocals #####################################################
{
 section: "sd-recording-vocals",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=-mVK5gTdH_U",
 summary: "7 Vocal Recording Tips",
 details: "In the Mix describes important tips when recording vocals."
},
// ### sd-processing-vocals ####################################################
{
 section: "sd-processing-vocals",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/playlist?list=PLOMuI-j1vRxR0GWyKDWFqONkX9RfUG5sG",
 summary: "Musician's Guide to Vocal Processing",
 details: "Composing Gloves intended this playlist for musicians, but a lot of sound design concepts apply to the synthesis and recording of vocals. Check out the music production section for DAW knowledge."
},


// ### mp-daws #################################################################
{
 section: "mp-daws",
 tagName: "Software",
 tagColor: "purple",
 url: "https://lmms.io",
 summary: "LMMS",
 details: "Linux MultiMedia Studio; free digital audio workstation providing instruments, multiple tracks, channels, a piano roll, automation wave editors, and other essentials."
},
// ### mp-music-theory-courses #################################################
{
 section: "mp-music-theory-courses",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.youtube.com/playlist?list=PLB585CE43B02669C3",
 summary: "Andrew Furmanczyk: Music Theory",
 details: "YouTube user Lypur's full, free music theory course. Clefs, notes (pitch, length, dotted, triplet, etc), measures, notation, tempo, scales, key signatures, circle of fifths, intervals, etc."
},
{
 section: "mp-music-theory-courses",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/playlist?list=PLOMuI-j1vRxSVE6HUVLyjSyL6qxa_TU2e",
 summary: "MIDI Music Theory in the DAW",
 details: "Composing Gloves offers a way of teaching music theory directly in the DAW."
},
// ### mp-musician-safety ######################################################
{
 section: "mp-musician-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=7Yv2HmE-eG8",
 summary: "How to Protect Your Ears",
 details: "Producers put their ears at risk when they work too loud and/or for too long. Ear damage is deceptively painless and irreversible."
},
// ### mp-synthesis ############################################################
{
  section: "mp-synthesis",
  tagName: "Wiki",
  tagColor: "yellow",
  url: "http://synthesizer-design.wikia.com",
  summary: "Synthesizer Design Wiki",
  details: "Learn how synthesis is done, as well as a few examples of recreating synthesizer sounds."
},
// ### mp-vsts #################################################################
{
 section: "mp-vsts",
 tagName: "Website",
 tagColor: "yellow",
 url: "http://vst4free.com/",
 summary: "VST4Free",
 details: "This website offers numerous freely downloadable VST plugins, including synths, samplers, drums, and more."
},
// ### mp-tracking #############################################################
{
 section: "mp-tracking-advice",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=-mVK5gTdH_U",
 summary: "7 Vocal Recording Tips",
 details: "In the Mix describes important tips when recording vocals."
},
{
 section: "mp-tracking-advice",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=Mf6rjGY8os8",
 summary: "Reducing the Noise of a Recording",
 details: "In the Mix gives advice on how to reduce the background noise of a recording."
},
{
 section: "mp-tracking-advice",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=7_9RzwW2lPE",
 summary: "Lining Up Vocals & Removing Silent Parts",
 details: "Making vocals fit in a mix can have overlap between the composition and mixing stages, but positioning vocals mostly lands this tutorial here."
},
// ### mp-mixing ###############################################################
{
 section: "mp-mixing",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/playlist?list=PLOMuI-j1vRxSkIbh_ya0gPrXtp9L2IBbg",
 summary: "Principles of Mixing",
 details: "Composing Gloves outlines a course on mixing your music and advice to consider."
},
{
 section: "mp-mixing",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=bmFQ6nuywKQ",
 summary: "General Vocal Mixing",
 details: "Composing Gloves on mixing vocals into music."
},
{
 section: "mp-mixing",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=aT9vcjXlSTo",
 summary: "De-Essing Vocals",
 details: "Vocals can sometimes produce sharp, sudden sounds, particularly with the S consonant. Composing Gloves explains how he gets that under control."
},
{
 section: "mp-mixing",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=VcQybzAlcbo",
 summary: "Achieving Thicker Vocals",
 details: "If vocals sound thin in a mix, there are techniques for making them fuller."
},
// ### mp-mastering ############################################################
{
 section: "mp-mastering",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=uQ57_VLPDAA",
 summary: "[FL Studio] How to Master Your Music",
 details: "In the Mix walks you through the mastering stage of music production."
},
// ### mp-music-application ####################################################
{
 section: "mp-music-application",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=b0gvM4q2hdI",
 summary: "Adaptive Soundtracks",
 details: "Games can often change its tone instantly, leaving you, a composer, in a unique position to compose for the medium. Game Maker's Toolkit describes how adaptive soundtracks work."
},


// ### art-raster-software #####################################################
{
 section: "art-raster-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.gimp.org/",
 summary: "GIMP",
 details: "GNU Image Manipulation Program. Basic brushes, selection tools, filters, effects, and more for image editing."
},
{
  section: "art-raster-software",
  tagName: "Software",
  tagColor: "purple",
  url: "https://krita.org",
  summary: "Krita",
  details: "Another free open source alternative to PhotoShop that specializes in illustrative artistry such as concept art and comic book art. It has some vector art support and animation features more robust than GIMP's."
},
{
 section: "art-raster-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://wonderunit.com/storyboarder/",
 summary: "Wonderunit's Storyboarder",
 details: "A simple tool for making storyboards."
},
{
 section: "art-raster-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.aseprite.org/",
 summary: "Aseprite ($)",
 details: "Great for pixel art and pixel animations."
},
{
 section: "art-raster-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://pyxeledit.com",
 summary: "PyxelEdit ($)",
 details: "Another pixel art tool specialized for tilesets."
},
{
  section: "art-raster-software",
  tagName: "Software",
  tagColor: "purple",
  url: "https://www.adobe.com/products/photoshop.html",
  summary: "Photoshop CC ($, SaaS)",
  details: "Photoshop is an industry standard software developed by Adobe as part of a service suite. You can also call Adobe directly to purchase an unsupported, outdated single-purchase version called Photoshop CS6."
},
// ### art-vector-software
{
 section: "art-vector-software",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=pywbPQD9vYU",
 summary: "Grease Pencil for Blender",
 details: "Blender's official Grease Pencil tool and how to create in its 3D-to-2D workflow."
},
{
 section: "art-vector-software",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://vimeo.com/channels/greasepencil",
 summary: "Grease Pencil Channel",
 details: "A complete toolset to make 2D animation inside Blender."
},

// ### art-what-is #############################################################

// ### art-safety ##############################################################
{
  section: "art-safety",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/gcmulk/status/862478705616093184",
  summary: "Injury Risk Reduction Exercises",
  details: "These exercises, illustrated by Twitter user gcmulk, are sourced from Summit Medical, McHesson health (2001), HEP2Go. Journals: Bandy and Irion (1997), Page (IJSPT, 2012)"
},
{
 section: "art-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=Ia9aUxTRaZA",
 summary: "7 Stretches for Those Who Work at a PC",
 details: "Anyone who works for long periods of time at a computer should try to have a routine of exercises."
},
{
 section: "art-safety",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/physicaltherapyvideo/videos",
 summary: "Bob & Brad the Physical Therapists",
 details: "These professional gentlemen produce numerous videos on a regular basis about exercises you can perform to prevent injuries."
},
{
 section: "art-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=tU2X8tBnlJw",
 summary: "Test if You Have Carpal Tunnel Syndrome",
 details: "A very common issue to have for artists who draw a lot."
},
{
 section: "art-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=JRqFY-epdNc",
 summary: "Ulnar Nerve Stretches",
 details: "Your pinky finger or middle finger can hurt if this nerve is pinched. This video discusses treating it."
},
{
 section: "art-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=B-5c5yyySnU",
 summary: "Carpal Tunnel Self-Treatment Program",
 details: "These exercises might be able to help treat mild carpal tunnel before it needs surgery."
},
{
 section: "art-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=sD1ypXcaKDY",
 summary: "Stop Carpal Tunnel Syndrome at the Computer",
 details: "If you can't take a break from work (first of all, excuse me?!) these exercises can help alleviate your symptoms a bit."
},
{
 section: "art-safety",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=z7mGU7877SE",
 summary: "Post-Surgery Carpal Tunnel Exercises",
 details: "Some unfortunate folks have to get surgery. These exercises are for after the fact."
},
// ### art-software-assets #####################################################
{
 section: "art-software-assets",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=0w845vAQoDY",
 summary: "[PhotoShop] Building a Custom Brush",
 details: "How to make a custom brush in PhotoShop."
},
{
 section: "art-software-assets",
 tagName: "Download",
 tagColor: "purple",
 url: "http://www.davidrevoy.com/article319/krita-brushkit-v8",
 summary: "David Revoy's Brushkits",
 details: "David maintains and shares custom brush kits for Krita."
},
// ### art-databases ###########################################################
{
 section: "art-databases",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://ccsearch.creativecommons.org/",
 summary: "CC Search",
 details: "A database of images licensed under creative commons. You should actually use this database first when looking for a reference."
},
// ### art-fundamentals ########################################################
{
 section: "art-fundamentals",
 tagName: "Course",
 tagColor: "blue",
 url: "https://hubpages.com/art/how-to-draw-learn",
 summary: "How to Draw: An /ic/ Guide",
 details: "A sort of overview course that goes through several art subjects."
},
{
 section: "art-fundamentals",
 tagName: "Course",
 tagColor: "blue",
 url: "https://docs.google.com/document/d/1uwaXKU7ev6Tw_or__o8ARpUb6r2rCZYJGqwSFV9AD98",
 summary: "/ic/'s Guide: Document Form",
 details: "Another massive course compiled by artists. (Heads up: the community itself is reportedly toxic)."
},
{
  section: "art-fundamentals",
  tagName: "Article",
  tagColor: "orange",
  url: "http://www.handprint.com/LS/CVS/color.html",
  summary: "handprint: color vision (expert)",
  details: "An incredibly detailed and scientific overview of the physical properties of light, color, and the ways we perceive it."
},
{
  section: "art-fundamentals",
  tagName: "Article",
  tagColor: "orange",
  url: "http://www.handprint.com/HP/WCL/tech10.html",
  summary: "handprint: perspective (expert)",
  details: "handprint's lengthy and detailed article on perspective."
},
{
  section: "art-fundamentals",
  tagName: "Article",
  tagColor: "orange",
  url: "http://www.handprint.com/HP/WCL/tech11.html",
  summary: "handprint: format proportions (expert)",
  details: "handprint's detailed article on framing art."
},
{
 section: "art-fundamentals",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=v8jScQhDcNw",
 summary: "How to Pick Colors",
 details: "Arucelli advises on color theory."
},
{
 section: "art-fundamentals",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://incantata.deviantart.com/journal/Use-of-the-colour-wheel-for-lighting-and-shading-601923810",
 summary: "Adjusting Hues During Shading",
 details: "How to select more dynamic color schemes that aren't monochrome."
},
{
 section: "art-fundamentals",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.youtube.com/playlist?list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs",
 summary: "Understanding Perspective",
 details: "Modern Day James explains details about understanding perspective."
},
{
 section: "art-fundamentals",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=DaG-cBidCBw",
 summary: "Emulating Poses in Camera Positions",
 details: "A slightly advanced video involving perspective grids and character poses."
},
{
 section: "art-fundamentals",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=D0g2MMsvqEM",
 summary: "Posing in Perspective",
 details: "Modern Day James's video on posing in perspective."
},
{
 section: "art-fundamentals",
 tagName: "Playlist",
 tagColor: "red",
 url: "https://www.youtube.com/playlist?list=PLV2X3tgajVlHkH3FHxm3rLZWqScFTRhtv",
 summary: "Foundations of Light and Shdaow",
 details: "Sycra's series that covers basic lighting knowledge."
},
// ### art-human-anatomy #######################################################
{
 section: "art-human-anatomy",
 tagName: "Online Manual",
 tagColor: "green",
 url: "https://archive.org/stream/pdfy-72f-FzW7wYN_r0ny/Bridgman%20-%20Complete%20Guide%20to%20Drawing%20from%20Life#page/n1",
 summary: "Complete Guide: Drawing from Life",
 details: "Bridgman's full (I think) book on drawing human anatomy and clothing, focusing on deriving from details about human anatomy."
},
{
  section: "art-human-anatomy",
  tagName: "Website",
  tagColor: "yellow",
  url: "http://justsketch.me/",
  summary: "JustSketchMe Posing Tool",
  details: "Interactive 3D model you can pose for figure drawing practice."
},
{
  section: "art-human-anatomy",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/dreamfactory00/status/792347853427384321",
  summary: "dreamfactory00's Prototyping Example",
  details: "Starting with a pose prototype, then a skeletal figure, then muscle, then skin/finished outline."
},
{
  section: "art-human-anatomy",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/ttguweiz/status/772102133252444160",
  summary: "@ttguweiz's Poses",
  details: "A demonstration of poses that also includes a prototyping technique."
},
{
 section: "art-human-anatomy",
 tagName: "Website",
 tagColor: "yellow",
 url: "http://www.posemaniacs.com/",
 summary: "Posemaniacs (Flash)",
 details: "3D Models you can rotate for references."
},
{
 section: "art-human-anatomy",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://pbs.twimg.com/media/C8LXujTU0AYOLZ_.jpg:large",
 summary: "Various Athletic Body Builds",
 details: "Athletes develop muscles depending on their specialization."
},
{
 section: "art-human-anatomy",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://imgur.com/a/zla9O",
 summary: "Artist's Poses",
 details: "An artist's sketches of human poses. Source undisclosed."
},
{
 section: "art-human-anatomy",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/arucelli/status/814154579650744320",
 summary: "Arucelli on human proportions",
 details: "A few notes from Arucelli on proportions for humans."
},
{
 section: "art-human-anatomy",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/PaintingColleg/status/947049918522302464",
 summary: "Collection of Hand Poses",
 details: "@PaintingColleg provides a photo containing tons of hand poses from various angles."
},
// Coloring and Misc
{
  section: "art-human-anatomy",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/kawanocy/status/756849945865367552",
  summary: "@kawanocy on Coloring Skin and Hair/Fur",
  details: "How kawanocy colors, shades, and highlights skin, step by step."
},
// ### art-human-skeleton ######################################################
{
 section: "art-human-skeleton",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=ERc2xnQpCR4",
 summary: "The human skull",
 details: "Modern Day James covers the skull of the head"
},
// ### art-human-head ##########################################################
{
  section: "art-human-head",
  tagName: "Video",
  tagColor: "red",
  url: "https://www.youtube.com/watch?v=2T7cDY7YDsg",
  summary: "Steve Hudson: Heads, Faces, and Portraits",
  details: "Steve Hudson spends three hours tutoring fundamental techniques for drawing heads and portraits from multiple angles."
},
{
 section: "art-human-head",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/Chuwenjie/status/844429611652071425",
 summary: "Chuwenjie on East Asian facial features (1/2)",
 details: ""
},
{
 section: "art-human-head",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/Chuwenjie/status/844429762344968195",
 summary: "Chuwenjie on East Asian facial features (2/2)",
 details: ""
},
{
 section: "art-human-head",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=nWZZ3SFmDS8",
 summary: "How to Draw a Nose",
 details: "Proko details the many kinds of noses we can draw."
},
// ### art-human-hairstyles ####################################################
{
 section: "art-human-hairstyles",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.naturallycurly.com/hair-types",
 summary: "Terminology: Types of Curly Hair",
 details: "Type 1 being straight hair, this website shows a few examples of curly hair."
},
{
 section: "art-human-hairstyles",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://therighthairstyles.com/category/hair-type/black-hairstyles/",
 summary: "Terminology: African-American/Black Hairstyles",
 details: "A massive list of various hairstyles and fashions predominantly used by black women."
},
{
 section: "art-human-hairstyles",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://kawacy.deviantart.com/art/Hair-sketch-to-coloring-578871326",
 summary: "Kawacy's Hair Tutorial",
 details: "How to plan, sketch, outline, and color hair."
},
{
  section: "art-human-hairstyles",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/EndlessRz/status/1039157915381313536",
  summary: "EndlessRz's Curly Hair Process",
  details: "How to draw curly hair and color it."
},
// ### art-human-eyes ##########################################################
{
 section: "art-human-eyes",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=LIykey9umVk",
 summary: "Eyes - Structure and Tips",
 details: "SinixDesign details the eyes and how to draw them from imagination."
},
{
  section: "art-human-eyes",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/kawanocy/status/803637516951658496",
  summary: "@kawanocy on Tears",
  details: "A guide on drawing tears."
},
{
 section: "art-human-eyes",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/EndlessRz/status/1014246752663240704",
 summary: "How to refine eyes",
 details: "Twitter user EndlessRz demonstrates a few tricks to making visually appealing eyes."
},
// ### art-human-ears ##########################################################
{
 section: "art-human-ears",
 tagName: "Graphic",
 tagColor: "red",
 url: "http://cgcookie.deviantart.com/art/Facial-Reference-The-Ears-355788582",
 summary: "CGCookie's Ear Reference",
 details: "Ears of numerous shapes and sizes."
},
// ### art-human-torso #########################################################
{
 section: "art-human-torso",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=RBSXYdfrZ2c",
 summary: "Anatomy Quick Tips: Backs",
 details: "Sinix details how to draw the back of a torso, including the spine and lower back."
},
{
 section: "art-human-torso",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/annim1011/status/825702132380737537",
 summary: "annim1011 on Spine Prototyping",
 details: "Some visuals and notes (in Korean) on prototyping torsos, specifically the spine."
},
{
 section: "art-human-torso",
 tagName: "Graphic",
 tagColor: "red",
 url: "http://mamoon26.tumblr.com/post/157937256217/songbirde108-hamaonoverdrive",
 summary: "Kitajima's Muscular Anatomy Gifs",
 details: "These moving graphics show how the muscles perform as the body moves in various poses."
},
{
  section: "art-human-torso",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/CGdrawing/status/781382722027556869",
  summary: "@CGDrawing's torso muscles",
  details: "This unlabelled diagram depicts how various torso muscles respond to certain poses."
},
{
 section: "art-human-torso",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/zhuanghongru/status/882171033720979456",
 summary: "@zhuanghongru's Simple Breast Guide",
 details: "A general set of rules for accurately drawing breasts in figure drawing."
},
{
 section: "art-human-torso",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://rika-dono.deviantart.com/art/How-I-paint-Torso-Female-and-Male-531456466",
 summary: "Rika-Dono's Torso Painting",
 details: "Sequential on painting male and female torsos."
},
// ### art-human-arms ##########################################################
{
 section: "art-human-arms",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://68.media.tumblr.com/17b8dd95d81e9ceb57b86d44e63613dc/tumblr_o556e0WGso1u5cavvo1_540.png",
 summary: "Cross-section of Arms",
 details: "Tutorial's site's depiction of the cross sections of arms as they rotate."
},
// ### art-human-hands #########################################################
{
 section: "art-human-hands",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/MangaMaterials/status/1094421988641103872",
 summary: "Assembling a Hand with the Palm as a Base",
 details: "Using simple and complex polygons to assemble a hand from a rectangular base."
},
{
 section: "art-human-hands",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/MangaMaterials/status/1100211072827514882",
 summary: "Structure of the Wrist",
 details: "A very important part of human anatomy is the wrist, as it is easy to make it look bad."
},
{
  section: "art-human-hands",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/mirshroom/status/777673253062004736",
  summary: "@mirshroom's Hands",
  details: "Here's how mirshroom draws hands."
},
{
  section: "art-human-hands",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/alien1452/status/780613625866096640",
  summary: "@alien1452 On Hands and Feet",
  details: "Numerous perspective examples and a step-by-step for the hands and feet."
},
// ### art-human-waist #########################################################
// ### art-human-legs ##########################################################
{
  section: "art-human-legs",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/alien1452/status/780282907462029312",
  summary: "@alien1452 On Petite Legs",
  details: "Examples of legs (petite with thigh gap only)."
},
{
  section: "art-human-legs",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://salacia-of-vanadiel.deviantart.com/art/Knees-180122323",
  summary: "Salacia's Knee Examples",
  details: "A guide that shows various angles, poses, and even types of knees."
},
// ### art-human-feet ##########################################################
{
 section: "art-human-feet",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://qinni.deviantart.com/art/111-Feet-sketches-references-356004973",
 summary: "111 Sketches of Feet",
 details: "Art by Qinni. Good reference for feet."
},
// ### art-draw-structures #####################################################
{
 section: "art-draw-structures",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/mocha708/status/1092032547335266304",
 summary: "Making a Simple Building in Layers",
 details: "Twitter user @mocha708 quickly shows how perspective transforming layers can quickly make a building."
},
// ### art-animals #############################################################
{
 section: "art-animals",
 tagName: "Software",
 tagColor: "purple",
 url: "https://x6ud.github.io",
 summary: "Animal Skull and Head Reference Tool",
 details: "Github user x6ud designed a tool for fetching images of animal heads from a manually updated database, filtered by head type and angle."
},
{
  section: "art-animals",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://tamberella.deviantart.com/art/Feline-Face-Profile-Tutorial-1-244450740",
  summary: "TamberElla's Feline Faces",
  details: "How to draw lions, tigers, cheetahs, and mountain lions."
},
{
  section: "art-animals",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://crystal-eye.deviantart.com/art/Animal-Eye-tutorial-97158396",
  summary: "Crystal-Eye's Animal Eye Tutorial",
  details: "Mainly for predator animals such as wolves, big cats, etc."
},
{
  section: "art-animals",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://sammytorres.deviantart.com/art/TUTORIAL-Wings-for-Dragons-434883206",
  summary: "SammyTorres's Wings for Dragons",
  details: "Detailed wing tutorial outlines what not to do when drawing wings and how they anatomically function before teaching you how to draw them right."
},
{
  section: "art-animals",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://cakeindafridge.deviantart.com/art/tutorial-how-i-use-to-draw-my-canine-paws-588622323",
  summary: "Cakeindafridge's Paws and Claws",
  details: "Somewhat old but good tutorial on how to improve on drawing paws and claws."
},
// ### art-draw-materials ######################################################
{
 section: "art-draw-materials",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/LolitaWardrobe/status/989706698628653061",
 summary: "Terminology: Skirts, Dress Shapes, Collars, and Pockets",
 details: "Company twitter @LolitaWardrobe, an online clothing store, describes various terms for certain fashion pieces."
},
{
  section: "art-draw-materials",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/miyuliart/status/954832193192374272",
  summary: "@miyuliart on Shirts, Jackets",
  details: "Three poses that focuses on the folds of shirts and jackets."
},
{
 section: "art-draw-materials",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=S1eR1rcPlHc",
 summary: "Cloth, Folds, Junctions, and Armor",
 details: "Modern Day James breaks down how a number of materials are drawn."
},
{
  section: "art-draw-materials",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://twitter.com/kaisenn0127/status/831621239965757440",
  summary: "@kaisenn0127 on Shirts and Skirts",
  details: "Specifically stress lines and folds."
},
{
 section: "art-draw-materials",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/taco1704/status/1002570928113385473?s=19",
 summary: "@taco1704 on skirt folds",
 details: "More on skirt folds, by taco1704."
},
{
 section: "art-draw-materials",
 tagName: "Online Manual",
 tagColor: "green",
 url: "https://archive.org/details/materialsdocumen01unse",
 summary: "Materials of Architecture & Sculpture",
 details: "Hundreds of pages, mostly of architecture designs, to show all the various kinds of designs for architecture out there."
},
{
  section: "art-draw-materials",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://68.media.tumblr.com/80373af6d3406ce735abcf95c48b5a49/tumblr_njvn6fW7gP1qdiz3oo2_540.jpg",
  summary: "Tiled Floor Tutorial",
  details: "How to create a tile floor, like in kitchens and bathrooms."
},
{
 section: "art-draw-materials",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/beccahallstedt/status/1024489473856425985",
 summary: "How to Draw Wood",
 details: "A quick step-by-step to drawing wooden surfaces by Twitter user Becca Hallstedt."
},
{
 section: "art-draw-materials",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/taco1704/status/1094238176116260866",
 summary: "Drawing Pants Over Shoes",
 details: "Twitter user @taco1704 gives a good case study for how pants can fold over shoes."
},
// ### art-nature ##############################################################
{
  section: "art-nature",
  tagName: "Article",
  tagColor: "orange",
  url: "https://youtu.be/uaiJNV4hz6s",
  summary: "How to Draw A Tree",
  details: ""
},
{
  section: "art-nature",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://68.media.tumblr.com/7f5e631823e957907c681750ce17ca01/tumblr_ol0kn8U9TJ1vbvu5po1_540.png",
  summary: "How to draw Honey",
  details: "cheapcookiez describes how to layer hues and effects to achieve a polished effect."
},
{
 section: "art-nature",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://s3.amazonaws.com/cgcookie-rails/wp-uploads/2015/06/E39_SlicedFruitResults.jpg",
 summary: "Sliced fruit drawings",
 details: "More examples of a multi-step process for drawing art, sliced fruit in this case."
},
// ### art-weapons #############################################################
{
 section: "art-weapons",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/kamitokatachi/status/992371278190329857",
 summary: "Poses of sword wielders.",
 details: "Poses and angles of people with swords."
},
// ### art-effects #############################################################
{
 section: "art-effects",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/EtheringtonBros/status/1041209216390889472",
 summary: "Fire Tutorial",
 details: "@EtheringtonBrothers on Fire."
},

// ### art-concept-artist ######################################################
{
 section: "art-concept-artist",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=FqX-UMVTLHI",
 summary: "Introduction to the Role of a Concept Artist",
 details: "How a Concept Artist works as a team member."
},
{
  section: "art-concept-artist",
  tagName: "Channel",
  tagColor: "yellow",
  url: "https://www.youtube.com/user/FZDSCHOOL/videos",
  summary: "FZD School of Design",
  details: "Free videos published by this Singapore-based online school. The channel has a specific focus on concept art and storyboarding."
},
{
 section: "art-concept-artist",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/Thomasintokyo/status/845207196002533376",
 summary: "@Thomasintokyo's design tip - basic shapes.",
 details: "A demonstration of how Thomas uses basic shapes as a motif in his concept art."
},
// ### art-comic-artist ########################################################
{
 section: "art-comic-artist",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=uwzVKdYcpyQ",
 summary: "How to Draw Comics the Marvel Way",
 details: "Classic video detailing the art style of comic book characters."
},
{
  section: "art-comic-artist",
  tagName: "Video",
  tagColor: "red",
  url: "https://www.youtube.com/watch?v=A7olKdIEtNQ",
  summary: "David Revoy's Comic Page Tutorial in Krita",
  details: "David specializes in Krita's software and explains his workflow."
},
// ### art-sprite-artist #######################################################
{
 section: "art-sprite-artist",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/channel/UCsn9MzwyPKeCE6MEGtMU4gg",
 summary: "MortMort's Channel",
 details: "MortMort makes videos that help convey the basics of pixel art."
},
{
 section: "art-sprite-artist",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/instant_onion/status/929555346158260225",
 summary: "Pixel Art in PhotoShop (Slideshow)",
 details: "@instant_onion explains how they configure PhotoShop to create pixel art. Click the image and use the arrow keys to navigate between slides."
},
{
 section: "art-sprite-artist",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.patreon.com/saint11",
 summary: "Saint11's Pixel Art Tutorials",
 details: "Each of these pixel art guides discuss how to achieve some aspect of typical art using pixels only."
},
{
 section: "art-sprite-artist",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://www.patreon.com/brullov_art",
 summary: "Brullov's Pixel Art Tutorials",
 details: "Another sprite artist who regularly produces pixel art tutorials."
},
{
 section: "art-sprite-artist",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/OniMille/status/736223709766275072/photo/1",
 summary: "How to Sprite Foliage",
 details: "Includes a thread about a newbie's struggles and advice on how to improve it."
},
// ### art-storyboard-artist ###################################################
{
 section: "art-storyboard-artist",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/thefantastician/status/954430786832248832",
 summary: "What is a Storyboard Revisionist?",
 details: "Ian Mutchler explains the difference between a storyboard artist and a storyboard revisionist."
},
// ### art-2d-aniation #########################################################
{
 section: "art-2d-animation",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.khanacademy.org/partner-content/pixar/animate",
 summary: "KhanAcademy: Pixar Animation",
 details: "Pixar partners with Khan Academy to provide an introductory course to animation."
},
{
 section: "art-2d-animation",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://sotamedialab.files.wordpress.com/2017/03/principle-of-animation-edited-2.jpg",
 summary: "12 Principles of Animation",
 details: "A small animation graphic covering 12 principles in overview."
},
{
 section: "art-2d-animation",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=RWtt3Tmnij4",
 summary: "Who Framed Roger Rabbit: 3 Rules of Living Animation",
 details: "Captainkristian takes a look at the fundamentals of hybridizing animation with live action film. "
},
{
 section: "art-2d-animation",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=i6Z9m_0-DVo",
 summary: "Norio Matsumodo's Fight Scenes",
 details: "Several breakdowns of fighting maneuvers and how rapid, violent actions are conveyed in traditional animation."
},
// ### art-software-techniques #################################################
{
  section: "art-software-techniques",
  tagName: "Video",
  tagColor: "red",
  url: "https://www.youtube.com/watch?v=_WFMz6bmr7I",
  summary: "Basics: How to Blend Colors",
  details: "YouTuber AruCelli demonstrates three techniques in how to blend colors using Photoshop. These techniques can be transferred to other art softwares with similar tools."
},
{
  section: "art-software-techniques",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://aquasixio.deviantart.com/art/Tutorial-15-Adjustment-layers-brought-to-light-312947946",
  summary: "AquaSixio's Adjustment Layers",
  details: "An overview of the workflow concept of adjustment layers, which allow you to quickly tinker your original picture's palette by using blend mode layers."
},
{
 section: "art-software-techniques",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://pbs.twimg.com/media/C5jLpCyWcAAauxt.jpg:large",
 summary: "Johannes Helgeson's Painting Method",
 details: "These steps, which break down various lighting techniques and what order to do them in, add polish and dimension to your work."
},
// ### art-artist-advice #######################################################
{
 section: "art-artist-advice",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/Shattered_Earth/status/901590763578019840",
 summary: "Perception of Skill vs Actual Skill",
 details: "This chart, produced by Twitter user Shattered-Earth, breaks down the polar extremes an artist feels about their progression."
},
{
 section: "art-artist-advice",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=-itooEWyQ9E",
 summary: "Improvement = ( Effort + Time ) x Logic",
 details: "A simple video with simple advice. Think about your path to improvement in anything, and you will find yourself rewarded."
},
{
 section: "art-artist-advice",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/GavinGoulden/status/953852434194972672",
 summary: "Advice on Portfolios",
 details: "Gavin Goulden on improvements you can make as a candidate for a position in the industry."
},
{
  section: "art-artist-advice",
  tagName: "Graphic",
  tagColor: "red",
  url: "https://cakeindafridge.deviantart.com/art/tutorial-Cake-s-tips-for-drawing-531547710",
  summary: "Cakeindafridge's Dos and Don'ts",
  details: "A mixed grab-bag of certain beginner mistakes to avoid and how to improve on them."
},
{
  section: "art-artist-advice",
  tagName: "Video",
  tagColor: "red",
  url: "https://www.youtube.com/watch?v=5kK71t-I-2w",
  summary: "Tips for Setup in Drawing",
  details: "YouTuber Sycra provides advice for warming up for drawing, framing the area in which the pose is drawn, and prioritizing the order in which you focus on sketching your poses."
},
{
 section: "art-artist-advice",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.blenderguru.com/articles/9-artistic-lessons",
 summary: "9 Artistic Lessons I Learned the Hard Way",
 details: "BlenderGuru details what he had to learn the hard way regarding growth in skill."
},
{
 section: "art-artist-advice",
 tagName: "Graphic",
 tagColor: "red",
 url: "http://shouldiworkforfree.com/clean.html",
 summary: "Should I Work For Free?",
 details: "You know the answer, but here is a chart, anyway."
},
{
 section: "art-artist-advice",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/arucelli/status/813557970386747392",
 summary: "Reduce Chicken Scratching",
 details: "Arucelli describes the subtle health risks of chicken scratching."
},
{
 section: "art-artist-advice",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://twitter.com/tagyoungworkers/status/911333178035527680",
 summary: "What Artists Wish They Were Told Earlier",
 details: "Tweet thread of various professionals listing advice they wish they got young."
},
{
 section: "art-artist-advice",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/SamKallis/status/930147313766432769",
 summary: "What Constructive Reviews Should Be Like",
 details: "@SamKallis explains how she processes portfolio reviews, helpful or otherwise."
},
{
 section: "art-artist-advice",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/yoshisquared/status/935222445870538752",
 summary: "How to Reduce Artist Burnout",
 details: "@yoshisquares offers advice on how to tailor your workflow to be rewarding and enjoyable. Strategize your practice, improve faster, and avoid burnout."
},
{
 section: "art-artist-advice",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/soteikat/status/1023618376113909760",
 summary: "Your Failures Are Not a Waste",
 details: "A quick explanation on why your failed art isn't a (total) loss."
},

// ### 3d-what-is ##############################################################
{
 section: "3d-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=DeHasEMCzcc",
 summary: "20 Paradigms for 3D Modelling",
 details: "Use this to get an introductory look at the various approaches to 3D modelling."
},
// ### 3d-asset-software #######################################################
{
  section: "3d-asset-software",
  tagName: "Software",
  tagColor: "purple",
  url: "https://www.blender.org/",
  summary: "Blender",
  details: "A free and GPL-friendly 3D asset creation software with lots of features, such as modelling, UV unwrapping, texturing, rigging, simulations, animation, etc."
},
// ### 3d-blender ##############################################################
{
 section: "3d-blender",
 tagName: "Online Manual",
 tagColor: "green",
 url: "https://docs.blender.org/manual/en/dev/index.html",
 summary: "Blender Manual (2.6+)",
 details: "Blender's official user manual for version 2.6 and above. The manual is also downloadable."
},
{
 section: "3d-blender",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.youtube.com/playlist?list=PLa1F2ddGya_8V90Kd5eC5PeBjySbXWGK1",
 summary: "Blender's Video Tutorials",
 details: "How to use Blender's UI, transformations, layers, meshes, surfaces, and more are covered here."
},
{
 section: "3d-blender",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/blendercookie",
 summary: "CG Cookie",
 details: "This YouTube user uploads plenty of helpful videos that cover Blender techniques and news."
},
{
 section: "3d-blender",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/DarrinLile/playlists",
 summary: "Darrin Lile",
 details: "Darrin has made multiple playlists that help you become familiar with the software after following several exercises."
},
{
 section: "3d-blender",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/AndrewPPrice/playlists",
 summary: "Andrew Price (Blender Guru)",
 details: "Andrew has made several playlists that quickly cover various basics of using Blender."
},
{
 section: "3d-blender",
 tagName: "Download",
 tagColor: "purple",
 url: "http://3dnchu.com/archives/sprytile-for-blender/",
 summary: "Sprytile for Blender",
 details: "Allows 3D modelling based on tilesets."
},
{
 section: "3d-blender",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=hJ0GpTQaShs",
 summary: "Blender to Unreal Engine 4",
 details: "Numerous software developers guide a Blender user on how to use their creations in the Unreal game engine."
},
{
 section: "3d-blender",
 tagName: "Video",
 tagColor: "red",
 url: "https://cgcookie.com/tutorial/maintaining-visual-consistency-between-blender-cycles-unreal-engine",
 summary: "Visual Consistency from Blender to UE4",
 details: "When creating game assets with Blender for use in Unreal it's ideal to maintain visual fidelity between both applications. "
},
{
 section: "3d-blender",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://www.giudansky.com/images/downloads/blender/blender3d-shortcuts-infographic.png",
 summary: "Infographic on Shortcuts",
 details: "The larger something, the more important/frequently used it is."
},
{
 section: "3d-blender",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.udemy.com/3dmotive-intro-to-3d-modeling-using-blender/",
 summary: "3DMotive's Blender Course ($)",
 details: "Covers the UI, modelling, UV unwrapping, texturing, rigging, and more."
},
{
 section: "3d-blender",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=xNlGsmZ6osk",
 summary: "Hair Shader for Blender",
 details: "This shader is an implementation of the paper by Chiang et al., used by major production companies."
},
// ### 3d-3dsmax ###############################################################
{
 section: "3d-3dsmax",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.udemy.com/learn-3ds-max/",
 summary: "Adam Zollinger's 3DS Max Course ($)",
 details: "Adam covers the UI, splines, transforms, and many more topics."
},
// ### 3d-maya #################################################################
{
 section: "3d-maya",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/MikeHermes65/playlists",
 summary: "Mike Hermes",
 details: "Mike specializes in Maya, although he has dabbled in zbrush and other topics."
},
// ### 3d-software-assets ######################################################
{
 section: "3d-software-assets",
 tagName: "Download",
 tagColor: "purple",
 url: "https://gumroad.com/l/nOkHw",
 summary: "Michael Vicente's Orb-Brushes (zbrush)",
 details: "Michael uses a practical brush pack for making stone and metallic surfaces."
},
{
 section: "3d-software-assets",
 tagName: "Download",
 tagColor: "purple",
 url: "https://www.blendswap.com/blends/view/86419",
 summary: "Michael Vicente's Orb-Brushes (Blender)",
 details: "An unofficial (and possibly not permitted) port of Michael's orb brush pack."
},
{
 section: "3d-software-assets",
 tagName: "Download",
 tagColor: "purple",
 url: "http://www.animationstudios.com.au/character-rigs",
 summary: "AnimationStudios's Character Rigs",
 details: "A few free rigs one can experiment with as they learn."
},
{
 section: "3d-software-assets",
 tagName: "Download",
 tagColor: "purple",
 url: "http://www.nelsonhurst.com/844/top-character-rigs-for-may-free-and-premium/",
 summary: "Character Rigs for Maya ($, Terms)",
 details: "Some items are for purchase, and some items have clauses in their terms & conditions."
},
{
 section: "3d-software-assets",
 tagName: "Website",
 tagColor: "yellow",
 url: "http://animationbuffet.blogspot.com/search/label/Creature",
 summary: "Animation Buffet (Terms)",
 details: "A blog dedicated to providing new animation rigs to play with."
},
// ### 3d-free-textures ########################################################
{
 section: "3d-free-textures",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://docs.google.com/spreadsheets/d/1Z8lYDYRvj-OkJkMrxPP6HwqOnzi-44fYWDxuvAGBa2I",
 summary: "Comparison Between 3D Texture Sites",
 details: "A simple table comparing multiple collections of texture assets for 3D."
},
{
 section: "3d-free-textures",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.cc0textures.com/",
 summary: "CC0 Textures",
 details: "Freely-licensed, high-quality textures supported by Patreon."
},
{
 section: "3d-free-textures",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://texturehaven.com/",
 summary: "Texture Haven",
 details: "Freely-licensed, high-quality textures supported by Patreon."
},
// ### 3d-animation ############################################################
{
 section: "3d-animation",
 tagName: "Video",
 tagColor: "red",
 url: "http://gdcvault.com/play/1023473/Animation-Bootcamp-Intro-and-Overwatch",
 summary: "GDC Vault: How a Hero is Mei'd",
 details: "Speakers from various companies talk on how animators find the soul of a character and channel it into the animations."
},
{
 section: "3d-animation",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=BGk__tU3VfI",
 summary: "Editing/Animating Videos in Blender (1/2)",
 details: "An hour-long guide on using the video editing features of Blender."
},
{
 section: "3d-animation",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=GTpAju_NU70",
 summary: "Editing/Animating Videos in Blender (2/2)",
 details: "Part two of the tutorial."
},
// ### 3d-advice ###############################################################
{
 section: "3d-advice",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=h_zcux6Eneo",
 summary: "How to Improve Your Art",
 details: "Brushboost provides some general tips on incrementally improving your art as a modeller."
},
{
 section: "3d-advice",
 tagName: "Software",
 tagColor: "purple",
 url: "http://jugaadanimation.com/blender-freelance-career/",
 summary: "Freelancing with Blender",
 details: "Blender's not quite an industry standard software, compared to Maya. This article discusses how to survive as a freelancer."
},
{
 section: "3d-advice",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=Y7LLPgpyiec",
 summary: "Interview with a Professional Character Designer",
 details: "An hour-long interview with an esteemed professional covering various topics, such as setting goals, identifying scam schools, and more."
},

// ### gd-what-is ##############################################################
{
 section: "gd-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=zQvWMdWhFCc",
 summary: "So You Want to Be A Game Designer?",
 details: "Extra Credits on what game design is and what you need to know to be a game designer."
},
// ### gd-utilities ############################################################
{
 section: "gd-utilities",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.yworks.com/products/yed",
 summary: "yEd Graph Editing Software",
 details: "Excellent tool for creating flow charts, UML diagrams, and more."
},
{
 section: "gd-utilities",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=UI6lqHOVHic",
 summary: "UML Class Diagram Tutorial",
 details: "Check this out after you learn a bit about programming. Learn the top-down design tool that is UML and how a diagram software can help you plan your project."
},
// ### gd-topic-channels ###########################################################
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/channel/UCCODtTcd5M1JavPCOr_Uydg",
 summary: "Extra Credits",
 details: "EC talks very generally about the industry, but the majority of their videos discuss game design concepts."
},
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/McBacon1337",
 summary: "Mark Brown's Game Maker's Toolkit",
 details: "Mark is one of the best channels on discussing game design from the perspective of Nintendo design philosophies."
},
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/user/snomangaming",
 summary: "SnomanGaming",
 details: "Snoman is similar to Mark Brown but has overlap with speedrunning communities."
},
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/channel/UCJfJWct8jN1RpCuVWk3zHTA",
 summary: "Daryl Talks Games",
 details: "Daryl is another topic video producer, but comes from a more psychology-enriched background."
},
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/channel/UCNOVwMpD-5A1xzcQGbIHNeA",
 summary: "Design Doc",
 details: "Another topic video producer."
},
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/channel/UCutGiN7c5-CEFwm_ccixR3g",
 summary: "HeavyEyed",
 details: "Another topic video producer."
},
{
 section: "gd-topic-channels",
 tagName: "Channel",
 tagColor: "yellow",
 url: "https://www.youtube.com/channel/UC88I_nv3aeJg-P46mUOPTgg",
 summary: "StealthDocs",
 details: "This producer stands out in that he focused exclusively on games that feature stealth elements."
},


// ### ux-what-is ##############################################################
{
 section: "ux-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=mPD5dUBFsps",
 summary: "Intro to UX Design",
 details: "Extra Credits describes User Experience and how it relates to the company, the product, and most importantly, the client."
},
// ### ux-websites #############################################################
{
 section: "ux-websites",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.usability.gov/",
 summary: "Usability.Gov",
 details: "The United States government apparently has a website dedicated to UX design?!"
},
// ### ux-menu-cases ###########################################################
{
 section: "ux-menu-cases",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.patreon.com/posts/17598921",
 summary: "Two-Column Shop System",
 details: "Rebecca Cordingley's two column shop system."
},

// ### qa-what-is ##############################################################
{
 section: "qa-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=ntpZt8eAvy0",
 summary: "So You Want To Be in QA",
 details: "Extra Credits describes quality assurance, repro steps, and how to acquire a job in the quality assurance."
},


// ### ppm-what-is ##############################################################
{
 section: "ppm-what-is",
 tagName: "Video",
 tagColor: "red",
 url: "https://youtu.be/wRe-81QyzU8",
 summary: "(GDC) Becoming a Producer the Hard Way",
 details: "Producer Nick Laing discusses the difference between a manager and a producer and what a producer does."
},
{
 section: "ppm-what-is",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.quora.com/What-is-the-difference-between-a-producer-a-product-manager-and-a-project-manager-in-a-social-game-company",
 summary: "Producer vs Project Manager vs Product Manager",
 details: "A couple of answers highlight that the roles can seem interchangeable and there are loose distinctions between these roles. StudyGameDev aims to distinguish the overlap."
},
// ### ppm-software ############################################################
{
 section: "ppm-software",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.perforce.com/indie-studio-pack",
 summary: "Perforce Indie Pack: Hansoft and HelixCore",
 details: "Game dev teams sometimes have a Producer who uses this software. For free, individuals get HelixCore (maintains multiple versions of your game) and HanSoft, an industry standard project management tool."
},
// ### ppm-design-docs #########################################################
{
 section: "ppm-design-docs",
 tagName: "Article",
 tagColor: "orange",
 url: "http://www.gamasutra.com/view/feature/131632/creating_a_great_design_document.php",
 summary: "Creating a Great Design Document",
 details: "Tzvi Freeman of GamaSutra describes the process for drafting a design document."
},


// ### mkt-what-is #############################################################
{
 section: "mkt-what-is",
 tagName: "Wiki",
 tagColor: "yellow",
 url: "https://www.investopedia.com/terms/m/marketing.asp",
 summary: "What is Marketing?",
 details: "Investopedia explains the fundamentals of marketing, including the four pillars of its department."
},
{
 section: "mkt-what-is",
 tagName: "Article",
 tagColor: "orange",
 url: "https://work.chron.com/different-fields-marketing-2636.html",
 summary: "What Are the Different Fields in Marketing?",
 details: "Karen Johnson provides a simple breakdown of the various types of marketing."
},
{
 section: "mkt-what-is",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/beginners-guide-to-seo",
 summary: "What is Search Engine Optimization?",
 details: "Moz.com provides information about SEO, or Search Engine Optimization."
},
// ### mkt-market-research #####################################################
{
 section: "mkt-market-research",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.sba.gov/course/market-research/",
 summary: "SBA: Market Research",
 details: "The Small Business Administration's guide to conducting market research."
},
{
 section: "mkt-market-research",
 tagName: "Download",
 tagColor: "purple",
 url: "https://wordpress.org/plugins/social-polls-by-opinionstage/",
 summary: "OpinionStage for WordPress",
 details: "If you want a totally cost-free survey instrument plugin, this one can create graphs and export to spreadsheet file formats."
},
{
 section: "mkt-market-research",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.sba.gov/category/advocacy-navigation-structure/research-and-statistics",
 summary: "SBA's Advocacy Office",
 details: "The Research and Statistics section of the advocacy office of the SBA."
},
{
 section: "mkt-market-research",
 tagName: "PDF",
 tagColor: "green",
 url: "https://www.sba.gov/sites/default/files/rs416tot.pdf",
 summary: "Analysis of Internet Sales Taxation",
 details: "The SBA analyzed the government's taxation of internet sales."
},
{
 section: "mkt-market-research",
 tagName: "PDF",
 tagColor: "green",
 url: "https://www.sba.gov/advocacy/research-current-state-crowdfunding",
 summary: "Analysis on the Current State of Crowdfunding",
 details: "SBA on the effect of crowdfunding performance and outside capital"
},
// ### mkt-seo #################################################################
{
 section: "mkt-seo",
 tagName: "Online Manual",
 tagColor: "green",
 url: "https://moz.com/beginners-guide-to-seo",
 summary: "What is SEO? Beginner's Guide to SEO",
 details: "Moz is one of the leading authorities on search engine optimization."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/serp-features",
 summary: "What is a SERP Feature?",
 details: "Moz describes a typical Search Engine Results Page and its different parts."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/domain-authority",
 summary: "What is Domain Authority?",
 details: "Moz's own custom domain authority scale uses research on search engines to give your website a rating."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/page-authority",
 summary: "What is Page Authority?",
 details: "Similar to domain authority, except applied specifically to a web page."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/on-site-seo",
 summary: "Advanced: On-Site SEO Overview",
 details: "On-Site SEO simply refers to the SEO you apply to your own website. Moz goes into detail here. Consider this topic an overview."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://blog.hubspot.com/marketing/how-to-do-keyword-research-ht",
 summary: "What is Keyword Research, and How to Perform It?",
 details: "Before you begin optimizing your site, you should know what audience you're optimizing it for. HubSpot writer Rachel Leist describes keyword research."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://searchengineland.com/post-prism-google-secure-searches-172487",
 summary: "Google Moving to Encrypt Keyword Research Data",
 details: "Search Engine Land writer Danny Sullivan details more on how keyword research will eventually be a minor focus for online marketing."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/on-page-factors",
 summary: "On-Page Ranking Factors",
 details: "Moz's guide details how to optimize individual pages on your website."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/title-tag",
 summary: "Title Tags in Detail",
 details: "Website titles appear in the tab of your browser and title your content. SEO involves making the title tag just right."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/meta-description",
 summary: "Meta Description in Detail",
 details: "Google obtains a summary of your page content through metadata, such as the meta description."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/alt-text",
 summary: "Image Alt Text in Detail",
 details: "Images that you use on the site should load quickly and have a label that describes the image for those who are blind."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/url",
 summary: "Technical: URLs",
 details: "A Uniform Resource Locator is like an address for a web page. Moz describes it in the context of SEO. It is highly recommended that you learn a little about HTML before proceeding."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/domain",
 summary: "Technical: Domains",
 details: "Your website's domain is the main address or URL of your website."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/conversion-rate-optimization",
 summary: "Conversion Rate Optimization",
 details: "SEO is a waste of time if it doesn't result in sales. Moz explains CRO in more detail."
},
{
 section: "mkt-seo",
 tagName: "Online Manual",
 tagColor: "green",
 url: "https://moz.com/beginners-guide-to-link-building",
 summary: "Beginner's Guide to Link Building",
 details: "This seven-chapter manual that details link building helps increase your site's social standing on the Internet, which algorithms tend to favor."
},
{
 section: "mkt-seo",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.searchenginejournal.com/social-media-seo/196185/",
 summary: "How Social Media Can Boost SEO",
 details: "Search Engine Journal highlights that social media links do not boost your ranking, but it can still help with the promotion of your content in more fundamental marketing ways."
},
// ### mkt-seo-mistakes ########################################################
{
 section: "mkt-seo-mistakes",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/duplicate-content",
 summary: "About Duplicate Content",
 details: "Redundant content is not favored by algorithms and is annoying to readers."
},
{
 section: "mkt-seo-mistakes",
 tagName: "Article",
 tagColor: "orange",
 url: "https://en.wikipedia.org/wiki/Keyword_stuffing",
 summary: "Keyword Stuffing",
 details: "An old and spammy technique that algorithms react negatively to."
},
// ### mkt-seo-advanced ########################################################
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/robotstxt",
 summary: "Robots.TXT",
 details: "This specific file gives instructions to website crawlers before they explore your website."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/robots-meta-directives",
 summary: "Robots Meta Directives",
 details: "These directives detail how to index a specific page's content. HTML knowledge is required, here."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/http-status-codes",
 summary: "HTTP Status Codes",
 details: "All of the status codes are important to a web developer, but SEO focuses on a subset of them."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/canonicalization",
 summary: "URL Canonicalization",
 details: "A canonical tag tells search engines the \"true form\" of a web page's URL."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/redirection",
 summary: "URL Redirects",
 details: "Setting up redirects can be complicated if done manually. This page details a bit on how it's done."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/schema-structured-data",
 summary: "Schema Markup for SEO",
 details: "Schema gives search engines specific data for richer, more eye-attracting result blurbs. HTML knowledge is required."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://moz.com/learn/seo/page-speed",
 summary: "Page Speed",
 details: "Improving a website's page speed is a complex topic involving compressing resources, setting resource cache, dictating loading rules, and more. Lots of advanced technical knowledge is needed, here."
},
{
 section: "mkt-seo-advanced",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=TaOA_Zy2XUw",
 summary: "Advanced: Keyword Research Blueprint",
 details: "SEO Expert Brian Dean describes how to obtain meaningful and commercially viable keyword possibilities by valuing who visits your website."
},
{
 section: "mkt-seo-advanced",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=EceSgY9bDnc",
 summary: "Advanced: On Page SEO - 9 Actionable Techniques That Work",
 details: "Brian Dean details how long content with topic-related terms and comprehensive coverage tends to work as a SEO strategy."
},
{
 section: "mkt-seo-advanced",
 tagName: "Article",
 tagColor: "orange",
 url: "https://betterexplained.com/articles/how-to-optimize-your-site-with-http-caching/",
 summary: "Advanced: How to Optimize Your Website With Caching",
 details: "Caching is the act of giving the website files someone downloads an expiration date, meaning that it is not downloaded all over again when visiting other pages. It's powerful for site speed and this article notes several ways to achieve it."
},
// ### mkt-seo-tools ###########################################################
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "orange",
 url: "https://yoast.com/",
 summary: "Yoast SEO Tools for WordPress",
 details: "Yoast is an online search engine optimization plugin for WordPress, containing a myriad of tools for building a website's SEO."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://trends.google.com/trends/",
 summary: "Google Trend Explorer",
 details: "This is an online tool for browsing Google searches for common search terms."
},
{
 section: "mkt-seo-tools",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=EOdN0CF1N68",
 summary: "How to Use Google Trends",
 details: "A Senior Industry Analyst for Google explains how the Google Trends tool works and how you can use it to your advantage."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://ads.google.com/home/tools/keyword-planner/",
 summary: "Google Keyword Planner",
 details: "Google's official tool for suggesting powerful search terms related to the ones you think of for your website."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://moz.com/explorer",
 summary: "Moz Keyword Explorer ($)",
 details: "Moz's online keyword research tool generates keywords based on the content on your website."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://moz.com/link-explorer",
 summary: "Moz Link Explorer ($)",
 details: "Link Explorer provides a set of link analysis and competitive research tools, powered by a live link index."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.wordtracker.com/",
 summary: "WordTracker ($)",
 details: "A comprehensive online tool that claims to provide more insight than Google's tools."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://www.semrush.com/",
 summary: "SEMRush ($)",
 details: "An online search volume tool. It tells you the number of times people performed a specific search, this month."
},
{
 section: "mkt-seo-tools",
 tagName: "Software",
 tagColor: "purple",
 url: "https://kwfinder.com/",
 summary: "KW Finder",
 details: "This online tool uses a database 1.6 billion keywords strong to measure how many times people perform a specific search."
},
// ### mkt-unthical-practices ##################################################
{
 section: "mkt-unthical-practices",
 tagName: "Video",
 tagColor: "red",
 url: "https://www.youtube.com/watch?v=9hv3CcJYMmU",
 summary: "How Not to Sponsor on YouTube",
 details: "YouTuber Gus Johnson outlines complaints he has about the discomfort of having to pitch your product in specific and intrusive ways."
},
// ### mkt-asset-sales #########################################################
{
 section: "mkt-asset-sales",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://img-new.cgtrader.com/uploads/blog/04db7daa-a47d-4188-bfdc-ae17e3ce0a89.png",
 summary: "CGTrader's 3D Model Overview",
 details: "This guide outlines what the best practices are for marketing assets you are selling, as well as what competition levels and price ranges certain trends of models are at."
},


// ### fm-what-is ##############################################################
{
 section: "fm-what-is",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.managementstudyguide.com/financial-management.htm",
 summary: "What is Financial Management?",
 details: "The Management Study Guide provides a brief overview of the role of financial management."
},
// ### fm-business-plan-templates ##############################################
{
 section: "fm-business-plan-templates",
 tagName: "Download",
 tagColor: "purple",
 url: "https://www.score.org/resource/financial-projections-template",
 summary: "Financial Projections Template",
 details: "This template for Microsoft Excel calculates startup expenses, payroll costs, sales forecasts, cash flow, income statements, balance sheets, \
            break-even analysis, financial ratios, cost of goods sold, amoritization, and depreciation for small businesses."
},
{
 section: "fm-business-plan-templates",
 tagName: "Download",
 tagColor: "purple",
 url: "https://www.sba.gov/sites/default/files/2018-01/BalanceSheet.xlsx",
 summary: "Projected Balance Sheet template",
 details: "This file helps with Basic accounting: Assets (items of value) minus liabilities (debts) = net worth (equity)."
},
{
 section: "fm-business-plan-templates",
 tagName: "Download",
 tagColor: "purple",
 url: "https://www.sba.gov/sites/default/files/2018-01/Cash_Flow_Statement.xlsx",
 summary: "Cash Flow Projection template",
 details: "This file monitors and projects the amount of incoming/outgoing cash to gauge financial performance."
},
{
 section: "fm-business-plan-templates",
 tagName: "Download",
 tagColor: "purple",
 url: "https://www.sba.gov/sites/default/files/2018-01/Income_Statement_for_BPlan_Course.xlsx",
 summary: "Profit/Loss (Income) Projection template",
 details: "This template measures income to arrive at the amount of profit or loss generated by the business."
},
// ### fm-business-taxes #######################################################
{
 section: "fm-business-taxes",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.irs.gov/businesses/small-businesses-self-employed/business-taxes",
 summary: "Small Business Taxes",
 details: "The IRS breaks down which taxes a small business is supposed to pay."
},
{
 section: "fm-business-taxes",
 tagName: "Website",
 tagColor: "yellow",
 url: "http://www.211.org/pages/about",
 summary: "211.org (USA)",
 details: "Each county in the USA has a special phoneline, 2-1-1, to provide services for low-income people. Tax preparation is one of those services."
},
{
 section: "fm-business-taxes",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes",
 summary: "Employment Taxes",
 details: "These are taxes that a business pays when they employ at least one person that isn't the owner."
},
{
 section: "fm-business-taxes",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.sba.gov/business-guide/manage-your-business/pay-taxes#section-header-3",
 summary: "State Tax Selector",
 details: "Selecting by state, find online portals for your state's tax requirements. This page is also a good article on taxes in general."
},
{
 section: "fm-business-taxes",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/JimZub/status/985560742505140225?s=19",
 summary: "General Tips for Managing Small Business Finances",
 details: "Twitter user @JimZub gives general advice for tracking business expenses."
},

// ### bl-what-is ##############################################################
{
 section: "bl-what-is",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.sba.gov/course/legal-requirements-small-business/",
 summary: "Legal Requirements for Small Business",
 details: "(Requires Flash) Whether you operate your business as a sole proprietor or as a small business, this online course teaches you about the basics of the law."
},
{
 section: "bl-what-is",
 tagName: "Wiki",
 tagColor: "yellow",
 url: "https://tvtropes.org/pmwiki/pmwiki.php/UsefulNotes/VideoGameDesign",
 summary: "TVTropes: What is Video Game Development?",
 details: "If you don't know anything about game development, this article isn't too bad to start off with."
},
{
 section: "bl-what-is",
 tagName: "Wiki",
 tagColor: "yellow",
 url: "https://en.wikipedia.org/wiki/Video_game_publisher",
 summary: "What is a Video Game Publisher?",
 details: "The type of company you probably want to run is a publisher."
},
// ### bl-plans ################################################################
{
 section: "bl-plans",
 tagName: "Course",
 tagColor: "blue",
 url: "https://www.sba.gov/course/how-write-business-plan",
 summary: "What is a Business Plan?",
 details: "SBA teaches you what a business plan is and how to write one. See the financial section for template files."
},
{
 section: "bl-plans",
 tagName: "Article",
 tagColor: "orange",
 url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan",
 summary: "Write Your Business Plan",
 details: "The SBA's guide (and tool) for making a business plan."
},
// ### bl-permits ##############################################################
{
 section: "bl-permits",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
 summary: "Apply for a Federal EIN",
 details: "You need an EIN if you are employing anyone or want to open a business bank account."
},
// ### bl-labor-law ############################################################
{
 section: "bl-labor-law",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.dol.gov/whd/contacts/state_of.htm",
 summary: "US DoL State Directory",
 details: "You need an EIN if you are employing anyone or want to open a business bank account."
},
// ### bl-labor-hiring #########################################################
{
 section: "bl-labor-hiring",
 tagName: "Book",
 tagColor: "green",
 url: "https://steamcdn-a.akamaihd.net/apps/valve/Valve_NewEmployeeHandbook.pdf",
 summary: "Valve's New Employee Handbook",
 details: "A look into what it's like to work at Valve and what a company like Valve expects of you."
},
{
 section: "bl-labor-hiring",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://www.gameworkersunite.org/faq",
 summary: "Game Workers Unite Organization",
 details: "A game developer union."
},
{
 section: "bl-labor-hiring",
 tagName: "Website",
 tagColor: "yellow",
 url: "https://gamecompanies.com/",
 summary: "GameCompanies",
 details: "A useful website for learning about game companies who may be hiring in your area."
},
{
 section: "bl-labor-hiring",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/itskindred/status/984927782659657729",
 summary: "Simple rules for a good cover letter.",
 details: "Explain what you care about, why are passionate, why it helps you, how you'll contribute, use hyperlinks, and send a PDF."
},
{
 section: "bl-labor-hiring",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/nitro_nova/status/1038580458387374080",
 summary: "Tips on Cover Letters",
 details: "StudyGameDev original on the importance of cover letters and how to form great ones."
},
// ### bl-labor-safety #########################################################
{
 section: "bl-labor-safety",
 tagName: "Book",
 tagColor: "green",
 url: "https://www.osha.gov/Publications/smallbusiness/small-business.pdf",
 summary: "OSHA Handbook",
 details: "A set of guidelines for ensuring your small business is an approved, safe work environment."
},
{
 section: "bl-labor-safety",
 tagName: "Article",
 tagColor: "orange",
 url: "https://waypoint.vice.com/en_us/article/yvwnqk/the-curious-appeal-of-crunch",
 summary: "Crunch is Employee Abuse",
 details: "Some studios don't crunch. This article dives into the topic of crunch time and what we can learn from it."
},
{
 section: "bl-labor-safety",
 tagName: "Graphic",
 tagColor: "red",
 url: "https://twitter.com/gcmulk/status/862478705616093184",
 summary: "Injury Risk Reduction Exercises",
 details: "These exercises, illustrated by Twitter user gcmulk, are sourced from Summit Medical, McHesson health (2001), HEP2Go. Journals: Bandy and Irion (1997), Page (IJSPT, 2012)"
},
{
 section: "bl-labor-safety",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/nitro_nova/status/1028365305540694016",
 summary: "Professionally Suggested Preventative Stretch Procedures",
 details: "I compiled a list of videos from established physical therapists on exercises and stretches that can help prevent the physical damage that game development can cause. \
            These can combat carpal tunnel, cubital tunnel, back aches, neck aches, and more."
},
// ### bl-labor-environments ###################################################
{
 section: "bl-labor-environments",
 tagName: "Article",
 tagColor: "orange",
 url: "https://twitter.com/djamilaknopf/status/1101067791678038016",
 summary: "Tips for Working From Home",
 details: "Twitter user @djamilaknopf explains how they handle the work-from-home lifestyle."
},

];

var iii = 0;
var bar_width = 0;
var current = 0;
var total_tasks = refs.length;

function addNewModule()
{
 //var dt = document.createTextNode( refs[i].details );
 //var st = document.createTextNode( refs[i].summary );
 var d = document.createElement('div');
 var tg = document.createElement('span');
 var aa = document.createElement('a');
 var dp = document.createElement('span');

 // Containing div that acts similar to details.
 d.setAttribute( "aria-label", "Expand description" );
 d.setAttribute( "tabIndex", "0" );
 d.className = "lc";
 d.addEventListener( "keyup", handleKeyUpLC, false );
 d.addEventListener( "click", handleClickLC, false );
 // The tag in each summary.
 tg.classList.add("tag");
 tg.classList.add( refs[iii].tagColor );
 tg.appendChild( document.createTextNode( refs[iii].tagName ) );
 // The link in the summary.
 aa.href = refs[iii].url;
 aa.setAttribute( "target", "_BLANK" );
 aa.className = "icon-external-link";
 aa.appendChild( document.createTextNode( refs[iii].summary ) );
 // The description.
 dp.className = "desc";
 dp.appendChild( document.createTextNode( refs[iii].details ) );
 // Assemble it.
 d.appendChild( tg );
 d.appendChild( aa );
 d.appendChild( dp );
 document.getElementById( refs[iii].section ).appendChild(d);
 increaseLoadingBar();
 iii++;
}

/* Someone very kind has provided a basic way to do this.
https://stackoverflow.com/questions/41366438/how-to-output-to-console-in-real-time-in-javascript
*/

function increaseLoadingBar()
{
 // And to do that, we want one action, like this, repeated
 bar_width = ++current / total_tasks * 100;
 // And for the browser to update like so,
 var loading_bar = document.getElementById("loading-bar");
 loading_bar.style.width = bar_width + '%';
 // but without processing the increase all at once.
 loading_bar.setAttribute('loading', current + ' / ' + total_tasks );
 if( bar_width == 100 )
 {
  loading_bar.className = 'done';
 }
}

function doHeavyTask(params)
{
 var totalMillisAllotted = params.totalMillisAllotted;
 var totalTasks = params.totalTasks;
 var tasksPerTick = params.tasksPerTick;
 var tasksCompleted = 0;
 var totalTicks = Math.ceil(totalTasks / tasksPerTick);
 var interval = null;

 if( totalTicks === 0 )
 {
  return;
 }

 var doTick = function()
 {
  var totalByEndOfTick = Math.min(tasksCompleted + tasksPerTick, totalTasks);
  do
  {
   params.task(tasksCompleted++);
  } while( tasksCompleted < totalByEndOfTick );
  if( tasksCompleted >= totalTasks )
  {
   clearInterval(interval);
  }
 };
 // Tick once immediately, and then as many times as needed using setInterval
 doTick();
 if( totalTicks > 1 )
 {
  interval = setInterval(doTick, totalMillisAllotted / totalTicks);
 }
}

// We do a function call
doHeavyTask(
 { // And supply a bunch of arguments in the form of an object.
  totalMillisAllotted: 0.5 * 1000,
  totalTasks: total_tasks,
  tasksPerTick: 1,
  task: function() // In here we attach a function.
  {
   addNewModule();
  }
 }
);
