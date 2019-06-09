/* db-init.js -- This initializes the database where all resources belong.

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
*/

// Initialize a global variable for the database itself.
var dLinks = TAFFY([]);
var dTopics = TAFFY([]);

/// Programming
dTopics.insert( { "sTopicID" : "prog-intro", "sTopic" : "An Introduction to Programming",
"aChapters" : [
   [ "prog-what-is", "What is Programming?" ],
   [ "prog-IDEs", "Integrated Development Environments" ],
   [ "prog-safety", "Programmer Safety" ],
   [ "prog-utilties", "Programmer Utilities" ]
  ]
 } );
dTopics.insert( { "sTopicID" : "prog-c", "sTopic" : "The C Programming Language",
 "aChapters" : [
    [ "prog-c-books-references", "Books and References on C" ],
   ]
 } );
dTopics.insert( { "sTopicID" : "prog-c-sharp", "sTopic" : "The C# Programming Language",
 "aChapters" : [
    [ "prog-c-sharp-books", "Books and References on C#" ],
    [ "prog-c-sharp-intro", "The Basics of C#" ],
    [ "prog-c-sharp-data", "C# Data Types and Constants" ],
    [ "prog-c-ops-conds", "C# Operators and Conditionals" ],
   ]
 } );
dTopics.insert( { "sTopicID" : "prog-lua", "sTopic" : "The Lua Programming Language",
  "aChapters" : [
     [ "prog-lua-books-references", "Books and References on Lua" ]
    ]
 } );
dTopics.insert( { "sTopicID" : "prog-eng-love2d", "sTopic" : "The Love2D Engine",
 "aChapters" : [
    [ "prog-love2d-engine-software", "Love2D Engine and Softwares" ],
    [ "prog-love2d-engine-basics", "Basics of the Love2D Engine" ]
   ]
 } );


/// Writing
dTopics.insert( { "sTopicID" : "writ-intro", "sTopic" : "Introduction and Fundamentals of Writing",
  "aChapters" : [
     [ "writ-intro-articles", "Introduction to Writing for Video Games" ],
     [ "writ-software", "Software for Writing" ],
     [ "writ-story-fundamentals", "Fundamentals of Storytelling" ]
    ]
 } );
dTopics.insert( { "sTopicID" : "writ-worldbuilding", "sTopic" : "Worldbuilding",
  "aChapters" : [
     [ "writ-worldbuilding-intro", "The Basics of Worldbuilding" ],
    ]
 } );


/// Sound Design
dTopics.insert( { "sTopicID" : "sd-intro", "sTopic" : "Introduction to Sound Design",
   "aChapters" : [
      [ "sd-intro-articles", "What is Sound Design?" ],
      [ "sd-software", "Sound Design Software" ],
      [ "sd-pros", "Sound Design Professionals" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "sd-fundamentals", "sTopic" : "Fundamentals of Audio",
   "aChapters" : [
      [ "sd-fundamentals-full", "Full Courses on Audio Fundamentals" ]
     ]
 } );
dTopics.insert( { "sTopicID" : "sd-recording", "sTopic" : "Recording Techniques in Sound Design",
   "aChapters" : [
      [ "sd-recording-vocals", "Recording Vocals" ]
     ]
 } );
dTopics.insert( { "sTopicID" : "sd-processing", "sTopic" : "Processing Techniques in Sound Design",
   "aChapters" : [
      [ "sd-processing-vocals", "Processing Vocals" ]
     ]
 } );
/// Music Production
dTopics.insert( { "sTopicID" : "mp-intro", "sTopic" : "Introduction to Music Production",
   "aChapters" : [
      [ "mp-what-is", "What is Music Production?" ],
      [ "mp-musician-safety", "Musician Safety" ],
      [ "mp-daws", "Digital Audio Workstations" ],
      [ "mp-vsts", "VST Instruments for DAWs" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "mp-music-theory", "sTopic" : "Music Theory",
   "aChapters" : [
      [ "mp-music-theory-courses", "Full Courses in Music Theory" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "mp-tracking-stage", "sTopic" : "Tracking",
   "aChapters" : [
      [ "mp-tracking-what-is", "What is Tracking?" ],
      [ "mp-tracking-advice", "Tracking Advice" ],
      [ "mp-synthesis", "Synthesis" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "mp-mixing-stage", "sTopic" : "Mixing and Mastering",
   "aChapters" : [
      [ "mp-mixing", "Mixing Advice" ],
      [ "mp-mastering", "Mastering Advice" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "mp-applications", "sTopic" : "Applications of Video Game Music",
   "aChapters" : [
      [ "mp-music-application", "Examples of Music Application" ],
     ]
 } );


/// Art
dTopics.insert( { "sTopicID" : "art-intro", "sTopic" : "Introduction to Art",
   "aChapters" : [
      [ "art-what-is", "What is Art?" ],
      [ "art-safety", "Artist Safety" ],
      [ "art-artist-advice", "Artist Advice" ],
      [ "art-raster-software", "Raster Art Software" ],
      [ "art-vector-software", "Vector Art Software" ],
      [ "art-software-assets", "Art Software Assets" ],
      [ "art-software-techniques", "Art Software Techniques" ],
      [ "art-databases", "Art Databases" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "art-fundamentals-topic", "sTopic" : "Fundamentals of Art",
   "aChapters" : [
      [ "art-fundamentals", "Fundamentals of Art" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "art-human-anatomy-topic", "sTopic" : "Human Anatomy",
   "aChapters" : [
      [ "art-human-anatomy", "Human Anatomy" ],
      [ "art-human-skeleton", "Human Skeleton" ],
      [ "art-human-head", "Human Head & Face" ],
      [ "art-human-hairstyles", "Human Hairstyles" ],
      [ "art-human-eyes", "Human Eyes" ],
      [ "art-human-ears", "Human Ears" ],
      [ "art-human-torso", "Human Torso" ],
      [ "art-human-arms", "Human Arms" ],
      [ "art-human-hands", "Human Hands" ],
      [ "art-human-waist", "Human Waist & Lower" ],
      [ "art-human-legs", "Human Legs" ],
      [ "art-human-feet", "Human Feet" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "art-drawing", "sTopic" : "References for Drawing Other Things",
   "aChapters" : [
      [ "art-draw-structures", "Drawing Structures" ],
      [ "art-animals", "Drawing Animals" ],
      [ "art-draw-materials", "Drawing Materials" ],
      [ "art-nature", "Drawing Nature" ],
      [ "art-weapons", "Drawing Weapons" ],
      [ "art-effects", "Drawing Magic & Effects" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "art-specializations", "sTopic" : "Specializations of Artists",
   "aChapters" : [
      [ "art-concept-artist", "Concept Artists" ],
      [ "art-comic-artist", "Comic Book Artists" ],
      [ "art-sprite-artist", "Pixel and Sprite Artists" ],
      [ "art-storyboard-artist", "Storyboard Artists" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "art-animation", "sTopic" : "2D Animation",
   "aChapters" : [
      [ "art-2d-animation", "2D Animation Collection" ],
     ]
 } );


/// 3D Modelling
dTopics.insert( { "sTopicID" : "3d-intro", "sTopic" : "Introduction to 3D Modelling",
   "aChapters" : [
      [ "3d-what-is", "What is 3D Modelling?" ],
      [ "3d-safety", "Artist Safety" ],
      [ "3d-advice", "Artist Advice" ],
      [ "3d-asset-software", "3D Asset Software" ],
      [ "3d-software-assets", "Art Software Assets" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "3d-softwares", "sTopic" : "Manuals, Advice, and Resources for 3D Software",
   "aChapters" : [
      [ "3d-blender-group", "Blender" ],
      [ "3d-3dsmax", "3DS Max" ],
      [ "3d-maya", "Maya" ],
      [ "3d-free-textures", "Free Texture Sites" ],
     ]
 } );
//
dTopics.insert( { "sTopicID" : "3d-blender", "sTopic" : "Manuals, Advice, and Resources for 3D Software",
   "aChapters" : [
      [ "3d-blender-books", "Blender Manuals and Courses" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "3d-animation-topic", "sTopic" : "3D Animation",
   "aChapters" : [
      [ "3d-animation", "3D Animation Collection" ],
     ]
 } );


/// Game Design
dTopics.insert( { "sTopicID" : "gd-intro", "sTopic" : "Introduction to Game Design",
   "aChapters" : [
      [ "gd-what-is", "What is Game Design?" ],
      [ "gd-utilities", "Game Design Tools" ],
      [ "gd-topic-channels", "Game Design Topic Channels" ],
     ]
 } );


/// User Experience
dTopics.insert( { "sTopicID" : "ux-intro", "sTopic" : "Introduction to User Experience",
   "aChapters" : [
      [ "ux-what-is", "What is User Experience?" ],
      [ "ux-websites", "Websites on UX Design" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "ux-menus", "sTopic" : "User-Friendly Menus",
   "aChapters" : [
      [ "ux-menu-cases", "Case Studies: Menus" ],
     ]
 } );


/// Quality Assurance
dTopics.insert( { "sTopicID" : "qa-intro", "sTopic" : "Introduction to Quality Assurance",
   "aChapters" : [
      [ "qa-what-is", "What is Quality Assurance?" ],
      [ "qa-basics", "Basics of Quality Assurance" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "qa-techniques", "sTopic" : "Techniques in Software Testing",
   "aChapters" : [
      [ "qa-testing-overview", "What Are the Software Testing Techniques?" ],
     ]
 } );


/// Production & Project Management
dTopics.insert( { "sTopicID" : "ppm-intro", "sTopic" : "Introduction to Production and Project Management",
   "aChapters" : [
      [ "ppm-what-is", "What is a Producer and What is Project Management?" ],
      [ "ppm-software", "Project Management Software" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "ppm-documentation", "sTopic" : "Project Documentation",
   "aChapters" : [
      [ "ppm-design-docs", "Design Documents" ],
     ]
 } );


/// Marketing
dTopics.insert( { "sTopicID" : "mkt-intro", "sTopic" : "Introduction to Marketing",
   "aChapters" : [
      [ "mkt-what-is", "What is Marketing?" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "mkt-inbound", "sTopic" : "Inbound Marketing",
   "aChapters" : [
      [ "mkt-market-research", "Market Research" ],
      [ "mkt-seo", "Search Engine Optimizaton (SEO) Basics" ],
      [ "mkt-seo-mistakes", "Avoiding SEO Mistakes" ],
      [ "mkt-seo-advanced", "Advanced Technical SEO Knowledge" ],
      [ "mkt-seo-tools", "Tools for Search Engine Optimization" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "mkt-outbound", "sTopic" : "Outbound Marketing",
   "aChapters" : [
      [ "mkt-unthical-practices", "Unethical Practices and Bad Marketing" ],
      [ "mkt-asset-sales", "Asset Sales" ],
     ]
 } );


/// Financial Management
dTopics.insert( { "sTopicID" : "fm-intro", "sTopic" : "Introduction to Financial Management",
   "aChapters" : [
      [ "fm-what-is", "What are Finances and What is Financial Management?" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "fm-logistics-projections", "sTopic" : "Logistics and Projections",
   "aChapters" : [
      [ "fm-business-plan-templates", "Template Files for Business Plans" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "fm-taxes", "sTopic" : "Business Taxes",
   "aChapters" : [
      [ "fm-business-taxes", "Small Business Taxes" ],
     ]
 } );


/// Business Management & Law
dTopics.insert( { "sTopicID" : "bl-intro", "sTopic" : "Introduction to Business Management and Law",
   "aChapters" : [
      [ "bl-what-is", "What is Business Management and What Are My Legal Responsibilities?" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "bl-start", "sTopic" : "Starting a Business",
   "aChapters" : [
      [ "bl-plans", "Business Plans" ],
      [ "bl-permits", "Business IDs, Forms, and Permits" ],
     ]
 } );
dTopics.insert( { "sTopicID" : "bl-labor", "sTopic" : "Labor Laws and Employee Safety",
   "aChapters" : [
      [ "bl-labor-law", "Labor Laws" ],
      [ "bl-labor-hiring", "Hiring and Getting Hired" ],
      [ "bl-labor-safety", "Employee Safety" ],
      [ "bl-labor-environments", "Employee Environments" ],
     ]
 } );

/*
dTopics.insert( { "sTopicID" : "", "sTopic" : "",
 "aChapters" : [
    [ "", "" ]
   ]
 } );
*/
 //console.log( dTopics().first().topic_array[0][1] );

/* This template is used when making a database entry.
dLinks.insert( { "sSection" : "", "sTag" : "", "sTagColor": "",
 "sURL"     : "",
 "sSummary" : "",
 "sDetails" : ""
} );
*/

// ### prog-what-is ############################################################
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=DrNWRlelOEg",
 "sSummary" : "Introduction to Programming",
 "sDetails" : "StudyGameDev presents: A brief overview of programming for game developers."
} );
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=WCuUWGmatpU",
 "sSummary" : "So You Want to Be a Developer (part 1)",
 "sDetails" : "Extra Credits asks what skills do you need to be a great developer?"
} );
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=kqFcF_jRrx0",
 "sSummary" : "So You Want to Be a Developer (part 2)",
 "sDetails" : "Teamwork and communication are absolutely essential to helping you make great code."
} );
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=RU1u-js7dLinks8",
 "sSummary" : "The First Programming Languages",
 "sDetails" : "PBS's Crash Course dives into examples of machine language to give you an idea of what language the CPU speaks in, and what the first programming languages were like."
} );
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "https://en.wikipedia.org/wiki/Game_programming#Programming_languages",
 "sSummary" : "Comparison of Programming Languages",
 "sDetails" : "Wikipedia's subsection in its Game Programming article that breaks down the pros and cons of each programming language."
} );
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "https://en.wikipedia.org/wiki/List_of_game_engines",
 "sSummary" : "Comparison of Game Engines",
 "sDetails" : "A rather overwhelming list of game engines that have been/are used for video game development."
} );

// ### prog-IDES ###############################################################
dLinks.insert( { "sSection" : "prog-IDEs", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "http://www.codeblocks.org/",
 "sSummary" : "Code::Blocks (C, C++)",
 "sDetails" : "Solid, GPL-friendly beginner's IDE."
} );
dLinks.insert( { "sSection" : "prog-IDEs", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.eclipse.org/downloads/",
 "sSummary" : "Eclipse (C, C++, Java, PHP)",
 "sDetails" : "Professional and helpful beginner's IDE."
} );
dLinks.insert( { "sSection" : "prog-IDEs", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://atom.io/#ide",
 "sSummary" : "Atom",
 "sDetails" : "Powerful, versatile text editor with lots features and can even serve as an IDE."
} );
dLinks.insert( { "sSection" : "prog-IDEs", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.visualstudio.com/",
 "sSummary" : "Microsoft Visual Studio ($)",
 "sDetails" : "On Windows, this is an industry-leading IDE. Free for individuals."
} );
dLinks.insert( { "sSection" : "prog-what-is", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/playlist?list=PLhyKYa0YJ_5C6QC36h5eApOyXtx98ehGi",
 "sSummary" : "How To Start Your Game Development",
 "sDetails" : "Most people on this section are thinking about doing their first video game. This playlist of videos is about making your first game."
} );
// ### prog-safety #############################################################
dLinks.insert( { "sSection" : "prog-safety", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/gcmulk/status/862478705616093184",
 "sSummary" : "Injury Risk Reduction Exercises",
 "sDetails" : "These exercises, illustrated by Twitter user gcmulk, are sourced from Summit Medical, McHesson health (2001), HEP2Go. Journals: Bandy and Irion (1997), Page (IJSPT, 2012)"
} );
dLinks.insert( { "sSection" : "prog-safety", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/nitro_nova/status/1028365305540694016",
 "sSummary" : "Professionally Suggested Preventative Stretch Procedures",
 "sDetails" : "I compiled a list of videos from established physical therapists on exercises and stretches that can help prevent the physical damage that game development can cause. \
              These can combat carpal tunnel, cubital tunnel, back aches, neck aches, and more."
} );
// ### prog-utilities ##########################################################
dLinks.insert( { "sSection" : "prog-utilties", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.yworks.com/products/yed",
 "sSummary" : "yEd Graph Editing Software",
 "sDetails" : "Excellent tool for creating flow charts, UML diagrams, and more."
} );
dLinks.insert( { "sSection" : "prog-utilties", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=UI6lqHOVHic",
 "sSummary" : "UML Class Diagram Tutorial",
 "sDetails" : "Check this out after you learn a bit about programming. Learn the top-down design tool that is UML and how a diagram software can help you plan your project."
} );
// ### prog-c-books-references #################################################
dLinks.insert( { "sSection" : "prog-c-books-references", "sTag" : "Book", "sTagColor" : "green",
 "sURL"     : "http://www-personal.acfr.usyd.edu.au/tbailey/ctext/ctext.pdf",
 "sSummary" : "Intro to C & Software Design",
 "sDetails" : "Tim Bailey's intro to C and software design. Types, operators, expressions, branching, iteration, functions, scope, extent, pointers, arrays, preprocessor directives, structures, unions, bitwise, input/output, data structures, etc."
} );
dLinks.insert( { "sSection" : "prog-c-books-references", "sTag" : "Online Manual", "sTagColor" : "green",
 "sURL"     : "https://c-language.com/",
 "sSummary" : "Learn C for Beginners, by Surendren",
 "sDetails" : "Surendren provides an online manual that can help you get started with learning C."
} );
dLinks.insert( { "sSection" : "prog-c-books-references", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.tutorialspoint.com/c_standard_library/index.htm",
 "sSummary" : "The C Standard Library",
 "sDetails" : "For each function you encounter from the standard library, you should look it up here to understand it better. For example, did you know printf returns an integer? This is stuff you should learn."
} );
// ### prog-c-sharp-books ######################################################
dLinks.insert( { "sSection" : "prog-c-sharp-books", "sTag" : "Book", "sTagColor" : "green",
 "sURL"     : "https://static1.squarespace.com/static/5019271be4b0807297e8f404/t/5824ad58f7e0ab31fc216843/1478798685347/CSharp+Book+2016+Rob+Miles+8.2.pdf",
 "sSummary" : "The Yellow Book (Cheese Edition)",
 "sDetails" : "Rob Miles's Beginner-Level C# Book"
} );
// ### prog-c-sharp-intro ######################################################
dLinks.insert( { "sSection" : "prog-c-sharp-intro", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.developer.com/net/asp/article.php/922211/What-is-C.htm",
 "sSummary" : "What is C#?",
 "sDetails" : "Developer.com writer Bradley Jones describes C# and what its benefits are, compared to other languages."
} );
dLinks.insert( { "sSection" : "prog-c-sharp-intro", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_program_structure.htm",
 "sSummary" : "Basic Program Structure of a C# Program (Pt. 1)",
 "sDetails" : "TutorialsPoint provides simple entry-level explanations for the basic components of a C# program."
} );
dLinks.insert( { "sSection" : "prog-c-sharp-intro", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_basic_syntax.htm",
 "sSummary" : "Basic Program Structure of a C# Program (Pt. 2)",
 "sDetails" : "TutorialsPoint goes into detail involving the basic syntax of C#."
} );
// ### prog-c-sharp-data #######################################################
dLinks.insert( { "sSection" : "prog-c-sharp-data", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_variables.htm",
 "sSummary" : "C# Variables",
 "sDetails" : "Variables in C# are just like variables in other languages."
} );
dLinks.insert( { "sSection" : "prog-c-sharp-data", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_data_types.htm",
 "sSummary" : "C# Data Types",
 "sDetails" : "TutorialsPoint details on the data types of variables in C#."
} );
dLinks.insert( { "sSection" : "prog-c-sharp-data", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_type_conversion.htm",
 "sSummary" : "C# Data Types, Part 2: Type Conversion",
 "sDetails" : "Sometimes you'll need to convert your data types. Here's how to do it in C#."
} );
dLinks.insert( { "sSection" : "prog-c-sharp-data", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_constants.htm",
 "sSummary" : "C# Constants",
 "sDetails" : "Where variables hold data, constants *are* the data."
} );
// ### prog-c-ops-conds ########################################################
dLinks.insert( { "sSection" : "prog-c-ops-conds", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_operators.htm",
 "sSummary" : "C# Operators",
 "sDetails" : "An explanation of the various operators in C#"
} );
dLinks.insert( { "sSection" : "prog-c-ops-conds", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_decision_making.htm",
 "sSummary" : "C# Conditionals, Part 1: Branch Conditionals",
 "sDetails" : "An overview of if, if-else, and switch statements, as well as the nesting of each."
} );
dLinks.insert( { "sSection" : "prog-c-ops-conds", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.tutorialspoint.com/csharp/csharp_loops.htm",
 "sSummary" : "C# Conditionals, Part 2: Loop Conditionals",
 "sDetails" : "Covers for, do-while, and while loops. Also covers loop control keywords such as break and continue."
} );
// ### prog-lua-books-references ###############################################
dLinks.insert( { "sSection" : "prog-lua-books-references", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.lua.org/docs.html",
 "sSummary" : "Official Lua Docs Portal",
 "sDetails" : "The official Lua documentation portal contains links to Lua's reference manual as well as links to books you can learn the language from. Note: Do not try to learn Lua from the reference manual; \
            it is not designed to teach beginners how to code with it."
} );
dLinks.insert( { "sSection" : "prog-lua-books-references", "sTag" : "Book", "sTagColor" : "green",
 "sURL"     : "http://crypto.cs.mcgill.ca/~simonpie/webdav/ipad/EBook/Programmation/Beginning%20Lua%20Programming.pdf",
 "sSummary" : "Beginning Lua Programming",
 "sDetails" : "Kurt Jung and Aaron Brown's (now outdated) beginner's manual to programming in Lua. Should still work fine for covering the basics."
} );
// ### prog-love2d-engine-software #############################################
dLinks.insert( { "sSection" : "prog-love2d-engine-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://love2d.org/",
 "sSummary" : "LÖVE2D Game Engine",
 "sDetails" : "Here you can download the Love2D game engine. Additionally, the site links to forums and a wiki for documentation."
} );
// ### prog-love2d-engine-basics ###############################################
dLinks.insert( { "sSection" : "prog-love2d-engine-basics", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://youtu.be/FUiz1kL0QtI?list=PLz-rYTT-2nItPbZaj8pt10h49HofbWVQT",
 "sSummary" : "Love2D Tutorial Videos (Beginner)",
 "sDetails" : "Four-part tutorial series done by Spunky Kangaroo."
} );
dLinks.insert( { "sSection" : "prog-love2d-engine-basics", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=Jte9o4S6rlo&feature=youtu.be&list=PLZVNxI_lsRW2kXnJh2BMb6D82HCAoSTUB&t=15",
 "sSummary" : "Love2D Tutorial Videos (Advanced)",
 "sDetails" : "YouTuber recursor offers a more thorough course on developing games using Love2D."
} );



// ### writ-intro-articles #####################################################
dLinks.insert( { "sSection" : "writ-intro-articles", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "https://tvtropes.org/pmwiki/pmwiki.php/SoYouWantTo/WriteAVideoGame",
 "sSummary" : "TVTropes: So You Want to Write a Video Game?",
 "sDetails" : "A good introductory article on writing stories for videogames."
} );
// ### writ-software ###########################################################
dLinks.insert( { "sSection" : "writ-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.libreoffice.org/",
 "sSummary" : "LibreOffice",
 "sDetails" : "Powerful, user-friendly document editing suite. Good for rich text documents, spreadsheets, presentations, databases, and more."
} );
// ### writ-story-fundamentals #################################################
dLinks.insert( { "sSection" : "writ-story-fundamentals", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://msu.edu/course/tc/842/SevenElements%20Story.htm",
 "sSummary" : "7 Elements of Good Storytelling",
 "sDetails" : "A quick and simple breakdown of the vital elements of a video game's story."
} );
// ### writ-worldbuilding-intro ################################################
dLinks.insert( { "sSection" : "writ-worldbuilding-intro", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://en.wikipedia.org/wiki/Worldbuilding",
 "sSummary" : "Wikipedia: Worldbuilding",
 "sDetails" : "A comprehensive overview; its definition, its history, and even some methods."
} );



// ### sd-intro-articles #######################################################
dLinks.insert( { "sSection" : "sd-intro-articles", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.soundonsound.com/techniques/music-sound-design-video-games",
 "sSummary" : "Sound Design (and Music) for Video Games",
 "sDetails" : "SoundOnSound's writeup on sound design gives us a window into the goals and workflow of a sound designer."
} );
// ### sd-software #############################################################
dLinks.insert( { "sSection" : "sd-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.audacityteam.org/",
 "sSummary" : "Audacity",
 "sDetails" : "Simplistic waveform-focused digital audio workstation with tools for directly editing sounds."
} );
// ### sd-pros #################################################################
dLinks.insert( { "sSection" : "sd-pros", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/MarshallsGuitarFun/videos",
 "sSummary" : "Marshall McGee",
 "sDetails" : "Marshall works as a professional sound designer for video game companies, and is one of the leading sources of expertise on YouTube."
} );
// ### sd-fundamentals-full ####################################################
dLinks.insert( { "sSection" : "sd-fundamentals-full", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/playlist?list=PLOMuI-j1vRxR9IDRAYPKEdHqq5sdOITJu",
 "sSummary" : "Sound and Synth Basics",
 "sDetails" : "Composing Gloves on Some of the basics of waveforms. Also, check out the Synth Design Wiki in Music Production for an even more accessible primer on audio fundamentals."
} );
// ### sd-recording-vocals #####################################################
dLinks.insert( { "sSection" : "sd-recording-vocals", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=-mVK5gTdH_U",
 "sSummary" : "7 Vocal Recording Tips",
 "sDetails" : "In the Mix describes important tips when recording vocals."
} );
// ### sd-processing-vocals ####################################################
dLinks.insert( { "sSection" : "sd-processing-vocals", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/playlist?list=PLOMuI-j1vRxR0GWyKDWFqONkX9RfUG5sG",
 "sSummary" : "Musician's Guide to Vocal Processing",
 "sDetails" : "Composing Gloves intended this playlist for musicians, but a lot of sound design concepts apply to the synthesis and recording of vocals.\
              Check out the music production section for DAW knowledge."
} );


// ### mp-daws #################################################################
dLinks.insert( { "sSection" : "mp-daws", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://lmms.io",
 "sSummary" : "LMMS",
 "sDetails" : "Linux MultiMedia Studio; free digital audio workstation providing instruments, multiple tracks, channels, a piano roll, automation wave editors, and other essentials."
} );
// ### mp-music-theory-courses #################################################
dLinks.insert( { "sSection" : "mp-music-theory-courses", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.youtube.com/playlist?list=PLB585CE43B02669C3",
 "sSummary" : "Andrew Furmanczyk: Music Theory",
 "sDetails" : "YouTube user Lypur's full, free music theory course. Clefs, notes (pitch, length, dotted, triplet, etc), measures, notation, tempo, scales, key signatures, circle of fifths, intervals, etc."
} );
dLinks.insert( { "sSection" : "mp-music-theory-courses", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/playlist?list=PLOMuI-j1vRxSVE6HUVLyjSyL6qxa_TU2e",
 "sSummary" : "MIDI Music Theory in the DAW",
 "sDetails" : "Composing Gloves offers a way of teaching music theory directly in the DAW."
} );
// ### mp-musician-safety ######################################################
dLinks.insert( { "sSection" : "mp-musician-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=7Yv2HmE-eG8",
 "sSummary" : "How to Protect Your Ears",
 "sDetails" : "Producers put their ears at risk when they work too loud and/or for too long. Ear damage is deceptively painless and irreversible."
} );
// ### mp-synthesis ############################################################
dLinks.insert( { "sSection" : "mp-synthesis", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "http://synthesizer-design.wikia.com",
 "sSummary" : "Synthesizer Design Wiki",
 "sDetails" : "Learn how synthesis is done, as well as a few examples of recreating synthesizer sounds."
} );
// ### mp-vsts #################################################################
dLinks.insert( { "sSection" : "mp-vsts", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "http://vst4free.com/",
 "sSummary" : "VST4Free",
 "sDetails" : "This website offers numerous freely downloadable VST plugins, including synths, samplers, drums, and more."
} );
// ### mp-tracking #############################################################
dLinks.insert( { "sSection" : "mp-tracking-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=-mVK5gTdH_U",
 "sSummary" : "7 Vocal Recording Tips",
 "sDetails" : "In the Mix describes important tips when recording vocals."
} );
dLinks.insert( { "sSection" : "mp-tracking-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=Mf6rjGY8os8",
 "sSummary" : "Reducing the Noise of a Recording",
 "sDetails" : "In the Mix gives advice on how to reduce the background noise of a recording."
} );
dLinks.insert( { "sSection" : "mp-tracking-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=7_9RzwW2lPE",
 "sSummary" : "Lining Up Vocals & Removing Silent Parts",
 "sDetails" : "Making vocals fit in a mix can have overlap between the composition and mixing stages, but positioning vocals mostly lands this tutorial here."
} );
// ### mp-mixing ###############################################################
dLinks.insert( { "sSection" : "mp-mixing", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/playlist?list=PLOMuI-j1vRxSkIbh_ya0gPrXtp9L2IBbg",
 "sSummary" : "Principles of Mixing",
 "sDetails" : "Composing Gloves outlines a course on mixing your music and advice to consider."
} );
dLinks.insert( { "sSection" : "mp-mixing", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=bmFQ6nuywKQ",
 "sSummary" : "General Vocal Mixing",
 "sDetails" : "Composing Gloves on mixing vocals into music."
} );
dLinks.insert( { "sSection" : "mp-mixing", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=aT9vcjXlSTo",
 "sSummary" : "De-Essing Vocals",
 "sDetails" : "Vocals can sometimes produce sharp, sudden sounds, particularly with the S consonant. Composing Gloves explains how he gets that under control."
} );
dLinks.insert( { "sSection" : "mp-mixing", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=VcQybzAlcbo",
 "sSummary" : "Achieving Thicker Vocals",
 "sDetails" : "If vocals sound thin in a mix, there are techniques for making them fuller."
} );
// ### mp-mastering ############################################################
dLinks.insert( { "sSection" : "mp-mastering", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=uQ57_VLPDAA",
 "sSummary" : "[FL Studio] How to Master Your Music",
 "sDetails" : "In the Mix walks you through the mastering stage of music production."
} );
// ### mp-music-application ####################################################
dLinks.insert( { "sSection" : "mp-music-application", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=b0gvM4q2hdI",
 "sSummary" : "Adaptive Soundtracks",
 "sDetails" : "Games can often change its tone instantly, leaving you, a composer, in a unique position to compose for the medium. Game Maker's Toolkit describes how adaptive soundtracks work."
} );


// ### art-raster-software #####################################################
dLinks.insert( { "sSection" : "art-raster-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.gimp.org/",
 "sSummary" : "GIMP",
 "sDetails" : "GNU Image Manipulation Program. Basic brushes, selection tools, filters, effects, and more for image editing."
} );
dLinks.insert( { "sSection" : "art-raster-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://krita.org",
 "sSummary" : "Krita",
 "sDetails" : "Another free open source alternative to PhotoShop that specializes in illustrative artistry such as concept art and comic book art. It has some vector art support and animation features more robust than GIMP's."
} );
dLinks.insert( { "sSection" : "art-raster-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://wonderunit.com/storyboarder/",
 "sSummary" : "Wonderunit's Storyboarder",
 "sDetails" : "A simple tool for making storyboards."
} );
dLinks.insert( { "sSection" : "art-raster-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.aseprite.org/",
 "sSummary" : "Aseprite ($)",
 "sDetails" : "Great for pixel art and pixel animations."
} );
dLinks.insert( { "sSection" : "art-raster-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://pyxeledit.com",
 "sSummary" : "PyxelEdit ($)",
 "sDetails" : "Another pixel art tool specialized for tilesets."
} );
dLinks.insert( { "sSection" : "art-raster-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.adobe.com/products/photoshop.html",
 "sSummary" : "Photoshop CC ($, SaaS)",
 "sDetails" : "Photoshop is an industry standard software developed by Adobe as part of a service suite. You can also call Adobe directly to purchase an unsupported, outdated single-purchase version called Photoshop CS6."
} );
// ### art-vector-software
dLinks.insert( { "sSection" : "art-vector-software", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=pywbPQD9vYU",
 "sSummary" : "Grease Pencil for Blender",
 "sDetails" : "Blender's official Grease Pencil tool and how to create in its 3D-to-2D workflow."
} );
dLinks.insert( { "sSection" : "art-vector-software", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://vimeo.com/channels/greasepencil",
 "sSummary" : "Grease Pencil Channel",
 "sDetails" : "A complete toolset to make 2D animation inside Blender."
} );

// ### art-what-is #############################################################

// ### art-safety ##############################################################
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/gcmulk/status/862478705616093184",
 "sSummary" : "Injury Risk Reduction Exercises",
 "sDetails" : "These exercises, illustrated by Twitter user gcmulk, are sourced from Summit Medical, McHesson health (2001), HEP2Go. Journals: Bandy and Irion (1997), Page (IJSPT, 2012)"
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=Ia9aUxTRaZA",
 "sSummary" : "7 Stretches for Those Who Work at a PC",
 "sDetails" : "Anyone who works for long periods of time at a computer should try to have a routine of exercises."
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/physicaltherapyvideo/videos",
 "sSummary" : "Bob & Brad the Physical Therapists",
 "sDetails" : "These professional gentlemen produce numerous videos on a regular basis about exercises you can perform to prevent injuries."
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=tU2X8tBnlJw",
 "sSummary" : "Test if You Have Carpal Tunnel Syndrome",
 "sDetails" : "A very common issue to have for artists who draw a lot."
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=JRqFY-epdNc",
 "sSummary" : "Ulnar Nerve Stretches",
 "sDetails" : "Your pinky finger or middle finger can hurt if this nerve is pinched. This video discusses treating it."
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=B-5c5yyySnU",
 "sSummary" : "Carpal Tunnel Self-Treatment Program",
 "sDetails" : "These exercises might be able to help treat mild carpal tunnel before it needs surgery."
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=sD1ypXcaKDY",
 "sSummary" : "Stop Carpal Tunnel Syndrome at the Computer",
 "sDetails" : "If you can't take a break from work (first of all, excuse me?!) these exercises can help alleviate your symptoms a bit."
} );
dLinks.insert( { "sSection" : "art-safety", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=z7mGU7877SE",
 "sSummary" : "Post-Surgery Carpal Tunnel Exercises",
 "sDetails" : "Some unfortunate folks have to get surgery. These exercises are for after the fact."
} );
// ### art-software-assets #####################################################
dLinks.insert( { "sSection" : "art-software-assets", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=0w845vAQoDY",
 "sSummary" : "[PhotoShop] Building a Custom Brush",
 "sDetails" : "How to make a custom brush in PhotoShop."
} );
dLinks.insert( { "sSection" : "art-software-assets", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "http://www.davidrevoy.com/article319/krita-brushkit-v8",
 "sSummary" : "David Revoy's Brushkits",
 "sDetails" : "David maintains and shares custom brush kits for Krita."
} );
// ### art-databases ###########################################################
dLinks.insert( { "sSection" : "art-databases", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://ccsearch.creativecommons.org/",
 "sSummary" : "CC Search",
 "sDetails" : "A database of images licensed under creative commons. You should actually use this database first when looking for a reference."
} );
// ### art-fundamentals ########################################################
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://hubpages.com/art/how-to-draw-learn",
 "sSummary" : "How to Draw: An /ic/ Guide",
 "sDetails" : "A sort of overview course that goes through several art subjects."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://docs.google.com/document/d/1uwaXKU7ev6Tw_or__o8ARpUb6r2rCZYJGqwSFV9AD98",
 "sSummary" : "/ic/'s Guide: Document Form",
 "sDetails" : "Another massive course compiled by artists. (Heads up: the community itself is reportedly toxic)."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "http://www.handprint.com/LS/CVS/color.html",
 "sSummary" : "handprint: color vision (expert)",
 "sDetails" : "An incredibly detailed and scientific overview of the physical properties of light, color, and the ways we perceive it."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "http://www.handprint.com/HP/WCL/tech10.html",
 "sSummary" : "handprint: perspective (expert)",
 "sDetails" : "handprint's lengthy and detailed article on perspective."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "http://www.handprint.com/HP/WCL/tech11.html",
 "sSummary" : "handprint: format proportions (expert)",
 "sDetails" : "handprint's detailed article on framing art."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=v8jScQhDcNw",
 "sSummary" : "How to Pick Colors",
 "sDetails" : "Arucelli advises on color theory."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://incantata.deviantart.com/journal/Use-of-the-colour-wheel-for-lighting-and-shading-601923810",
 "sSummary" : "Adjusting Hues During Shading",
 "sDetails" : "How to select more dynamic color schemes that aren't monochrome."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.youtube.com/playlist?list=PLgKJMTFp_25iQVZ6ItpZKTSN9Yo44YSTs",
 "sSummary" : "Understanding Perspective",
 "sDetails" : "Modern Day James explains details about understanding perspective."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=DaG-cBidCBw",
 "sSummary" : "Emulating Poses in Camera Positions",
 "sDetails" : "A slightly advanced video involving perspective grids and character poses."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=D0g2MMsvqEM",
 "sSummary" : "Posing in Perspective",
 "sDetails" : "Modern Day James's video on posing in perspective."
} );
dLinks.insert( { "sSection" : "art-fundamentals", "sTag" : "Playlist", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/playlist?list=PLV2X3tgajVlHkH3FHxm3rLZWqScFTRhtv",
 "sSummary" : "Foundations of Light and Shdaow",
 "sDetails" : "Sycra's series that covers basic lighting knowledge."
} );
// ### art-human-anatomy #######################################################
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Online Manual", "sTagColor" : "green",
 "sURL"     : "https://archive.org/stream/pdfy-72f-FzW7wYN_r0ny/Bridgman%20-%20Complete%20Guide%20to%20Drawing%20from%20Life#page/n1",
 "sSummary" : "Complete Guide: Drawing from Life",
 "sDetails" : "Bridgman's full (I think) book on drawing human anatomy and clothing, focusing on deriving from details about human anatomy."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "http://justsketch.me/",
 "sSummary" : "JustSketchMe Posing Tool",
 "sDetails" : "Interactive 3D model you can pose for figure drawing practice."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/dreamfactory00/status/792347853427384321",
 "sSummary" : "dreamfactory00's Prototyping Example",
 "sDetails" : "Starting with a pose prototype, then a skeletal figure, then muscle, then skin/finished outline."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/ttguweiz/status/772102133252444160",
 "sSummary" : "@ttguweiz's Poses",
 "sDetails" : "A demonstration of poses that also includes a prototyping technique."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "http://www.posemaniacs.com/",
 "sSummary" : "Posemaniacs (Flash)",
 "sDetails" : "3D Models you can rotate for references."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://pbs.twimg.com/media/C8LXujTU0AYOLZ_.jpg:large",
 "sSummary" : "Various Athletic Body Builds",
 "sDetails" : "Athletes develop muscles depending on their specialization."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://imgur.com/a/zla9O",
 "sSummary" : "Artist's Poses",
 "sDetails" : "An artist's sketches of human poses. Source undisclosed."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/arucelli/status/814154579650744320",
 "sSummary" : "Arucelli on human proportions",
 "sDetails" : "A few notes from Arucelli on proportions for humans."
} );
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/PaintingColleg/status/947049918522302464",
 "sSummary" : "Collection of Hand Poses",
 "sDetails" : "@PaintingColleg provides a photo containing tons of hand poses from various angles."
} );
// Coloring and Misc
dLinks.insert( { "sSection" : "art-human-anatomy", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/kawanocy/status/756849945865367552",
 "sSummary" : "@kawanocy on Coloring Skin and Hair/Fur",
 "sDetails" : "How kawanocy colors, shades, and highlights skin, step by step."
} );
// ### art-human-skeleton ######################################################
dLinks.insert( { "sSection" : "art-human-skeleton", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=ERc2xnQpCR4",
 "sSummary" : "The human skull",
 "sDetails" : "Modern Day James covers the skull of the head"
} );
// ### art-human-head ##########################################################
dLinks.insert( { "sSection" : "art-human-head", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=2T7cDY7YDsg",
 "sSummary" : "Steve Hudson: Heads, Faces, and Portraits",
 "sDetails" : "Steve Hudson spends three hours tutoring fundamental techniques for drawing heads and portraits from multiple angles."
} );
dLinks.insert( { "sSection" : "art-human-head", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/Chuwenjie/status/844429611652071425",
 "sSummary" : "Chuwenjie on East Asian facial features (1/2)",
 "sDetails" : ""
} );
dLinks.insert( { "sSection" : "art-human-head", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/Chuwenjie/status/844429762344968195",
 "sSummary" : "Chuwenjie on East Asian facial features (2/2)",
 "sDetails" : ""
} );
dLinks.insert( { "sSection" : "art-human-head", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=nWZZ3SFmDS8",
 "sSummary" : "How to Draw a Nose",
 "sDetails" : "Proko details the many kinds of noses we can draw."
} );
// ### art-human-hairstyles ####################################################
dLinks.insert( { "sSection" : "art-human-hairstyles", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.naturallycurly.com/hair-types",
 "sSummary" : "Terminology: Types of Curly Hair",
 "sDetails" : "Type 1 being straight hair, this website shows a few examples of curly hair."
} );
dLinks.insert( { "sSection" : "art-human-hairstyles", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://therighthairstyles.com/category/hair-type/black-hairstyles/",
 "sSummary" : "Terminology: African-American/Black Hairstyles",
 "sDetails" : "A massive list of various hairstyles and fashions predominantly used by black women."
} );
dLinks.insert( { "sSection" : "art-human-hairstyles", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://kawacy.deviantart.com/art/Hair-sketch-to-coloring-578871326",
 "sSummary" : "Kawacy's Hair Tutorial",
 "sDetails" : "How to plan, sketch, outline, and color hair."
} );
dLinks.insert( { "sSection" : "art-human-hairstyles", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/EndlessRz/status/1039157915381313536",
 "sSummary" : "EndlessRz's Curly Hair Process",
 "sDetails" : "How to draw curly hair and color it."
} );
// ### art-human-eyes ##########################################################
dLinks.insert( { "sSection" : "art-human-eyes", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=LIykey9umVk",
 "sSummary" : "Eyes - Structure and Tips",
 "sDetails" : "SinixDesign details the eyes and how to draw them from imagination."
} );
dLinks.insert( { "sSection" : "art-human-eyes", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/kawanocy/status/803637516951658496",
 "sSummary" : "@kawanocy on Tears",
 "sDetails" : "A guide on drawing tears."
} );
dLinks.insert( { "sSection" : "art-human-eyes", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/EndlessRz/status/1014246752663240704",
 "sSummary" : "How to refine eyes",
 "sDetails" : "Twitter user EndlessRz demonstrates a few tricks to making visually appealing eyes."
} );
// ### art-human-ears ##########################################################
dLinks.insert( { "sSection" : "art-human-ears", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "http://cgcookie.deviantart.com/art/Facial-Reference-The-Ears-355788582",
 "sSummary" : "CGCookie's Ear Reference",
 "sDetails" : "Ears of numerous shapes and sizes."
} );
// ### art-human-torso #########################################################
dLinks.insert( { "sSection" : "art-human-torso", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=RBSXYdfrZ2c",
 "sSummary" : "Anatomy Quick Tips: Backs",
 "sDetails" : "Sinix details how to draw the back of a torso, including the spine and lower back."
} );
dLinks.insert( { "sSection" : "art-human-torso", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/annim1011/status/825702132380737537",
 "sSummary" : "annim1011 on Spine Prototyping",
 "sDetails" : "Some visuals and notes (in Korean) on prototyping torsos, specifically the spine."
} );
dLinks.insert( { "sSection" : "art-human-torso", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "http://mamoon26.tumblr.com/post/157937256217/songbirde108-hamaonoverdrive",
 "sSummary" : "Kitajima's Muscular Anatomy Gifs",
 "sDetails" : "These moving graphics show how the muscles perform as the body moves in various poses."
} );
dLinks.insert( { "sSection" : "art-human-torso", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/CGdrawing/status/781382722027556869",
 "sSummary" : "@CGDrawing's torso muscles",
 "sDetails" : "This unlabelled diagram depicts how various torso muscles respond to certain poses."
} );
dLinks.insert( { "sSection" : "art-human-torso", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/zhuanghongru/status/882171033720979456",
 "sSummary" : "@zhuanghongru's Simple Breast Guide",
 "sDetails" : "A general set of rules for accurately drawing breasts in figure drawing."
} );
dLinks.insert( { "sSection" : "art-human-torso", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://rika-dono.deviantart.com/art/How-I-paint-Torso-Female-and-Male-531456466",
 "sSummary" : "Rika-Dono's Torso Painting",
 "sDetails" : "Sequential on painting male and female torsos."
} );
// ### art-human-arms ##########################################################
dLinks.insert( { "sSection" : "art-human-arms", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://68.media.tumblr.com/17b8dd95d81e9ceb57b86d44e63613dc/tumblr_o556e0WGso1u5cavvo1_540.png",
 "sSummary" : "Cross-section of Arms",
 "sDetails" : "Tutorial's site's depiction of the cross sections of arms as they rotate."
} );
// ### art-human-hands #########################################################
dLinks.insert( { "sSection" : "art-human-hands", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/MangaMaterials/status/1094421988641103872",
 "sSummary" : "Assembling a Hand with the Palm as a Base",
 "sDetails" : "Using simple and complex polygons to assemble a hand from a rectangular base."
} );
dLinks.insert( { "sSection" : "art-human-hands", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/MangaMaterials/status/1100211072827514882",
 "sSummary" : "Structure of the Wrist",
 "sDetails" : "A very important part of human anatomy is the wrist, as it is easy to make it look bad."
} );
dLinks.insert( { "sSection" : "art-human-hands", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/mirshroom/status/777673253062004736",
 "sSummary" : "@mirshroom's Hands",
 "sDetails" : "Here's how mirshroom draws hands."
} );
dLinks.insert( { "sSection" : "art-human-hands", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/alien1452/status/780613625866096640",
 "sSummary" : "@alien1452 On Hands and Feet",
 "sDetails" : "Numerous perspective examples and a step-by-step for the hands and feet."
} );
// ### art-human-waist #########################################################
// ### art-human-legs ##########################################################
dLinks.insert( { "sSection" : "art-human-legs", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/alien1452/status/780282907462029312",
 "sSummary" : "@alien1452 On Petite Legs",
 "sDetails" : "Examples of legs (petite with thigh gap only)."
} );
dLinks.insert( { "sSection" : "art-human-legs", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://salacia-of-vanadiel.deviantart.com/art/Knees-180122323",
 "sSummary" : "Salacia's Knee Examples",
 "sDetails" : "A guide that shows various angles, poses, and even types of knees."
} );
// ### art-human-feet ##########################################################
dLinks.insert( { "sSection" : "art-human-feet", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://qinni.deviantart.com/art/111-Feet-sketches-references-356004973",
 "sSummary" : "111 Sketches of Feet",
 "sDetails" : "Art by Qinni. Good reference for feet."
} );
// ### art-draw-structures #####################################################
dLinks.insert( { "sSection" : "art-draw-structures", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/mocha708/status/1092032547335266304",
 "sSummary" : "Making a Simple Building in Layers",
 "sDetails" : "Twitter user @mocha708 quickly shows how perspective transforming layers can quickly make a building."
} );
// ### art-animals #############################################################
dLinks.insert( { "sSection" : "art-animals", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://x6ud.github.io",
 "sSummary" : "Animal Skull and Head Reference Tool",
 "sDetails" : "Github user x6ud designed a tool for fetching images of animal heads from a manually updated database, filtered by head type and angle."
} );
dLinks.insert( { "sSection" : "art-animals", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://tamberella.deviantart.com/art/Feline-Face-Profile-Tutorial-1-244450740",
 "sSummary" : "TamberElla's Feline Faces",
 "sDetails" : "How to draw lions, tigers, cheetahs, and mountain lions."
} );
dLinks.insert( { "sSection" : "art-animals", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://crystal-eye.deviantart.com/art/Animal-Eye-tutorial-97158396",
 "sSummary" : "Crystal-Eye's Animal Eye Tutorial",
 "sDetails" : "Mainly for predator animals such as wolves, big cats, etc."
} );
dLinks.insert( { "sSection" : "art-animals", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://sammytorres.deviantart.com/art/TUTORIAL-Wings-for-Dragons-434883206",
 "sSummary" : "SammyTorres's Wings for Dragons",
 "sDetails" : "Detailed wing tutorial outlines what not to do when drawing wings and how they anatomically function before teaching you how to draw them right."
} );
dLinks.insert( { "sSection" : "art-animals", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://cakeindafridge.deviantart.com/art/tutorial-how-i-use-to-draw-my-canine-paws-588622323",
 "sSummary" : "Cakeindafridge's Paws and Claws",
 "sDetails" : "Somewhat old but good tutorial on how to improve on drawing paws and claws."
} );
// ### art-draw-materials ######################################################
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/LolitaWardrobe/status/989706698628653061",
 "sSummary" : "Terminology: Skirts, Dress Shapes, Collars, and Pockets",
 "sDetails" : "Company twitter @LolitaWardrobe, an online clothing store, describes various terms for certain fashion pieces."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/miyuliart/status/954832193192374272",
 "sSummary" : "@miyuliart on Shirts, Jackets",
 "sDetails" : "Three poses that focuses on the folds of shirts and jackets."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=S1eR1rcPlHc",
 "sSummary" : "Cloth, Folds, Junctions, and Armor",
 "sDetails" : "Modern Day James breaks down how a number of materials are drawn."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/kaisenn0127/status/831621239965757440",
 "sSummary" : "@kaisenn0127 on Shirts and Skirts",
 "sDetails" : "Specifically stress lines and folds."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/taco1704/status/1002570928113385473?s=19",
 "sSummary" : "@taco1704 on skirt folds",
 "sDetails" : "More on skirt folds, by taco1704."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Online Manual", "sTagColor" : "green",
 "sURL"     : "https://archive.org/details/materialsdocumen01unse",
 "sSummary" : "Materials of Architecture & Sculpture",
 "sDetails" : "Hundreds of pages, mostly of architecture designs, to show all the various kinds of designs for architecture out there."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://68.media.tumblr.com/80373af6d3406ce735abcf95c48b5a49/tumblr_njvn6fW7gP1qdiz3oo2_540.jpg",
 "sSummary" : "Tiled Floor Tutorial",
 "sDetails" : "How to create a tile floor, like in kitchens and bathrooms."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/beccahallstedt/status/1024489473856425985",
 "sSummary" : "How to Draw Wood",
 "sDetails" : "A quick step-by-step to drawing wooden surfaces by Twitter user Becca Hallstedt."
} );
dLinks.insert( { "sSection" : "art-draw-materials", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/taco1704/status/1094238176116260866",
 "sSummary" : "Drawing Pants Over Shoes",
 "sDetails" : "Twitter user @taco1704 gives a good case study for how pants can fold over shoes."
} );
// ### art-nature ##############################################################
dLinks.insert( { "sSection" : "art-nature", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://youtu.be/uaiJNV4hz6s",
 "sSummary" : "How to Draw A Tree",
 "sDetails" : ""
} );
dLinks.insert( { "sSection" : "art-nature", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://68.media.tumblr.com/7f5e631823e957907c681750ce17ca01/tumblr_ol0kn8U9TJ1vbvu5po1_540.png",
 "sSummary" : "How to draw Honey",
 "sDetails" : "cheapcookiez describes how to layer hues and effects to achieve a polished effect."
} );
dLinks.insert( { "sSection" : "art-nature", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://s3.amazonaws.com/cgcookie-rails/wp-uploads/2015/06/E39_SlicedFruitResults.jpg",
 "sSummary" : "Sliced fruit drawings",
 "sDetails" : "More examples of a multi-step process for drawing art, sliced fruit in this case."
} );
// ### art-weapons #############################################################
dLinks.insert( { "sSection" : "art-weapons", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/kamitokatachi/status/992371278190329857",
 "sSummary" : "Poses of sword wielders.",
 "sDetails" : "Poses and angles of people with swords."
} );
// ### art-effects #############################################################
dLinks.insert( { "sSection" : "art-effects", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/EtheringtonBros/status/1041209216390889472",
 "sSummary" : "Fire Tutorial",
 "sDetails" : "@EtheringtonBrothers on Fire."
} );

// ### art-concept-artist ######################################################
dLinks.insert( { "sSection" : "art-concept-artist", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=FqX-UMVTLHI",
 "sSummary" : "Introduction to the Role of a Concept Artist",
 "sDetails" : "How a Concept Artist works as a team member."
} );
dLinks.insert( { "sSection" : "art-concept-artist", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/FZDSCHOOL/videos",
 "sSummary" : "FZD School of Design",
 "sDetails" : "Free videos published by this Singapore-based online school. The channel has a specific focus on concept art and storyboarding."
} );
dLinks.insert( { "sSection" : "art-concept-artist", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/Thomasintokyo/status/845207196002533376",
 "sSummary" : "@Thomasintokyo's design tip - basic shapes.",
 "sDetails" : "A demonstration of how Thomas uses basic shapes as a motif in his concept art."
} );
// ### art-comic-artist ########################################################
dLinks.insert( { "sSection" : "art-comic-artist", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=uwzVKdYcpyQ",
 "sSummary" : "How to Draw Comics the Marvel Way",
 "sDetails" : "Classic video detailing the art style of comic book characters."
} );
dLinks.insert( { "sSection" : "art-comic-artist", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=A7olKdIEtNQ",
 "sSummary" : "David Revoy's Comic Page Tutorial in Krita",
 "sDetails" : "David specializes in Krita's software and explains his workflow."
} );
// ### art-sprite-artist #######################################################
dLinks.insert( { "sSection" : "art-sprite-artist", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/channel/UCsn9MzwyPKeCE6MEGtMU4gg",
 "sSummary" : "MortMort's Channel",
 "sDetails" : "MortMort makes videos that help convey the basics of pixel art."
} );
dLinks.insert( { "sSection" : "art-sprite-artist", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/instant_onion/status/929555346158260225",
 "sSummary" : "Pixel Art in PhotoShop (Slideshow)",
 "sDetails" : "@instant_onion explains how they configure PhotoShop to create pixel art. Click the image and use the arrow keys to navigate between slides."
} );
dLinks.insert( { "sSection" : "art-sprite-artist", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.patreon.com/saint11",
 "sSummary" : "Saint11's Pixel Art Tutorials",
 "sDetails" : "Each of these pixel art guides discuss how to achieve some aspect of typical art using pixels only."
} );
dLinks.insert( { "sSection" : "art-sprite-artist", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://www.patreon.com/brullov_art",
 "sSummary" : "Brullov's Pixel Art Tutorials",
 "sDetails" : "Another sprite artist who regularly produces pixel art tutorials."
} );
dLinks.insert( { "sSection" : "art-sprite-artist", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/OniMille/status/736223709766275072/photo/1",
 "sSummary" : "How to Sprite Foliage",
 "sDetails" : "Includes a thread about a newbie's struggles and advice on how to improve it."
} );
// ### art-storyboard-artist ###################################################
dLinks.insert( { "sSection" : "art-storyboard-artist", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/thefantastician/status/954430786832248832",
 "sSummary" : "What is a Storyboard Revisionist?",
 "sDetails" : "Ian Mutchler explains the difference between a storyboard artist and a storyboard revisionist."
} );
// ### art-2d-aniation #########################################################
dLinks.insert( { "sSection" : "art-2d-animation", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.khanacademy.org/partner-content/pixar/animate",
 "sSummary" : "KhanAcademy: Pixar Animation",
 "sDetails" : "Pixar partners with Khan Academy to provide an introductory course to animation."
} );
dLinks.insert( { "sSection" : "art-2d-animation", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://sotamedialab.files.wordpress.com/2017/03/principle-of-animation-edited-2.jpg",
 "sSummary" : "12 Principles of Animation",
 "sDetails" : "A small animation graphic covering 12 principles in overview."
} );
dLinks.insert( { "sSection" : "art-2d-animation", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=RWtt3Tmnij4",
 "sSummary" : "Who Framed Roger Rabbit: 3 Rules of Living Animation",
 "sDetails" : "Captainkristian takes a look at the fundamentals of hybridizing animation with live action film. "
} );
dLinks.insert( { "sSection" : "art-2d-animation", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=i6Z9m_0-DVo",
 "sSummary" : "Norio Matsumodo's Fight Scenes",
 "sDetails" : "Several breakdowns of fighting maneuvers and how rapid, violent actions are conveyed in traditional animation."
} );
// ### art-software-techniques #################################################
dLinks.insert( { "sSection" : "art-software-techniques", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=_WFMz6bmr7I",
 "sSummary" : "Basics: How to Blend Colors",
 "sDetails" : "YouTuber AruCelli demonstrates three techniques in how to blend colors using Photoshop. These techniques can be transferred to other art softwares with similar tools."
} );
dLinks.insert( { "sSection" : "art-software-techniques", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://aquasixio.deviantart.com/art/Tutorial-15-Adjustment-layers-brought-to-light-312947946",
 "sSummary" : "AquaSixio's Adjustment Layers",
 "sDetails" : "An overview of the workflow concept of adjustment layers, which allow you to quickly tinker your original picture's palette by using blend mode layers."
} );
dLinks.insert( { "sSection" : "art-software-techniques", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://pbs.twimg.com/media/C5jLpCyWcAAauxt.jpg:large",
 "sSummary" : "Johannes Helgeson's Painting Method",
 "sDetails" : "These steps, which break down various lighting techniques and what order to do them in, add polish and dimension to your work."
} );
// ### art-artist-advice #######################################################
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/Shattered_Earth/status/901590763578019840",
 "sSummary" : "Perception of Skill vs Actual Skill",
 "sDetails" : "This chart, produced by Twitter user Shattered-Earth, breaks down the polar extremes an artist feels about their progression."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=-itooEWyQ9E",
 "sSummary" : "Improvement = ( Effort + Time ) x Logic",
 "sDetails" : "A simple video with simple advice. Think about your path to improvement in anything, and you will find yourself rewarded."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/GavinGoulden/status/953852434194972672",
 "sSummary" : "Advice on Portfolios",
 "sDetails" : "Gavin Goulden on improvements you can make as a candidate for a position in the industry."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://cakeindafridge.deviantart.com/art/tutorial-Cake-s-tips-for-drawing-531547710",
 "sSummary" : "Cakeindafridge's Dos and Don'ts",
 "sDetails" : "A mixed grab-bag of certain beginner mistakes to avoid and how to improve on them."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=5kK71t-I-2w",
 "sSummary" : "Tips for Setup in Drawing",
 "sDetails" : "YouTuber Sycra provides advice for warming up for drawing, framing the area in which the pose is drawn, and prioritizing the order in which you focus on sketching your poses."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.blenderguru.com/articles/9-artistic-lessons",
 "sSummary" : "9 Artistic Lessons I Learned the Hard Way",
 "sDetails" : "BlenderGuru details what he had to learn the hard way regarding growth in skill."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "http://shouldiworkforfree.com/clean.html",
 "sSummary" : "Should I Work For Free?",
 "sDetails" : "You know the answer, but here is a chart, anyway."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/arucelli/status/813557970386747392",
 "sSummary" : "Reduce Chicken Scratching",
 "sDetails" : "Arucelli describes the subtle health risks of chicken scratching."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://twitter.com/tagyoungworkers/status/911333178035527680",
 "sSummary" : "What Artists Wish They Were Told Earlier",
 "sDetails" : "Tweet thread of various professionals listing advice they wish they got young."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/SamKallis/status/930147313766432769",
 "sSummary" : "What Constructive Reviews Should Be Like",
 "sDetails" : "@SamKallis explains how she processes portfolio reviews, helpful or otherwise."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/yoshisquared/status/935222445870538752",
 "sSummary" : "How to Reduce Artist Burnout",
 "sDetails" : "@yoshisquares offers advice on how to tailor your workflow to be rewarding and enjoyable. Strategize your practice, improve faster, and avoid burnout."
} );
dLinks.insert( { "sSection" : "art-artist-advice", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/soteikat/status/1023618376113909760",
 "sSummary" : "Your Failures Are Not a Waste",
 "sDetails" : "A quick explanation on why your failed art isn't a (total) loss."
} );

// ### 3d-what-is ##############################################################
dLinks.insert( { "sSection" : "3d-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=DeHasEMCzcc",
 "sSummary" : "20 Paradigms for 3D Modelling",
 "sDetails" : "Use this to get an introductory look at the various approaches to 3D modelling."
} );
// ### 3d-asset-software #######################################################
dLinks.insert( { "sSection" : "3d-asset-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.blender.org/",
 "sSummary" : "Blender",
 "sDetails" : "A free and GPL-friendly 3D asset creation software with lots of features, such as modelling, UV unwrapping, texturing, rigging, simulations, animation, etc."
} );
dLinks.insert( { "sSection" : "3d-blender-group", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/blendercookie",
 "sSummary" : "CG Cookie",
 "sDetails" : "This YouTube user uploads plenty of helpful videos that cover Blender techniques and news."
} );
dLinks.insert( { "sSection" : "3d-blender-group", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "http://3dnchu.com/archives/sprytile-for-blender/",
 "sSummary" : "Sprytile for Blender",
 "sDetails" : "Allows 3D modelling based on tilesets."
} );
dLinks.insert( { "sSection" : "3d-blender-group", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=hJ0GpTQaShs",
 "sSummary" : "Blender to Unreal Engine 4",
 "sDetails" : "Numerous software developers guide a Blender user on how to use their creations in the Unreal game engine."
} );
dLinks.insert( { "sSection" : "3d-blender-group", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://cgcookie.com/tutorial/maintaining-visual-consistency-between-blender-cycles-unreal-engine",
 "sSummary" : "Visual Consistency from Blender to UE4",
 "sDetails" : "When creating game assets with Blender for use in Unreal it's ideal to maintain visual fidelity between both applications. "
} );
dLinks.insert( { "sSection" : "3d-blender-group", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://www.giudansky.com/images/downloads/blender/blender3d-shortcuts-infographic.png",
 "sSummary" : "Infographic on Shortcuts",
 "sDetails" : "The larger something, the more important/frequently used it is."
} );
dLinks.insert( { "sSection" : "3d-blender-group", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=xNlGsmZ6osk",
 "sSummary" : "Hair Shader for Blender",
 "sDetails" : "This shader is an implementation of the paper by Chiang et al., used by major production companies."
} );
// ### 3d-3dsmax ###############################################################
dLinks.insert( { "sSection" : "3d-3dsmax", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.udemy.com/learn-3ds-max/",
 "sSummary" : "Adam Zollinger's 3DS Max Course ($)",
 "sDetails" : "Adam covers the UI, splines, transforms, and many more topics."
} );
// ### 3d-maya #################################################################
dLinks.insert( { "sSection" : "3d-maya", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/MikeHermes65/playlists",
 "sSummary" : "Mike Hermes",
 "sDetails" : "Mike specializes in Maya, although he has dabbled in zbrush and other topics."
} );
// ### 3d-software-assets ######################################################
dLinks.insert( { "sSection" : "3d-software-assets", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://gumroad.com/l/nOkHw",
 "sSummary" : "Michael Vicente's Orb-Brushes (zbrush)",
 "sDetails" : "Michael uses a practical brush pack for making stone and metallic surfaces."
} );
dLinks.insert( { "sSection" : "3d-software-assets", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://www.blendswap.com/blends/view/86419",
 "sSummary" : "Michael Vicente's Orb-Brushes (Blender)",
 "sDetails" : "An unofficial (and possibly not permitted) port of Michael's orb brush pack."
} );
dLinks.insert( { "sSection" : "3d-software-assets", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "http://www.animationstudios.com.au/character-rigs",
 "sSummary" : "AnimationStudios's Character Rigs",
 "sDetails" : "A few free rigs one can experiment with as they learn."
} );
dLinks.insert( { "sSection" : "3d-software-assets", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "http://www.nelsonhurst.com/844/top-character-rigs-for-may-free-and-premium/",
 "sSummary" : "Character Rigs for Maya ($, Terms)",
 "sDetails" : "Some items are for purchase, and some items have clauses in their terms & conditions."
} );
dLinks.insert( { "sSection" : "3d-software-assets", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "http://animationbuffet.blogspot.com/search/label/Creature",
 "sSummary" : "Animation Buffet (Terms)",
 "sDetails" : "A blog dedicated to providing new animation rigs to play with."
} );
// ### 3d-free-textures ########################################################
dLinks.insert( { "sSection" : "3d-free-textures", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://docs.google.com/spreadsheets/d/1Z8lYDYRvj-OkJkMrxPP6HwqOnzi-44fYWDxuvAGBa2I",
 "sSummary" : "Comparison Between 3D Texture Sites",
 "sDetails" : "A simple table comparing multiple collections of texture assets for 3D."
} );
dLinks.insert( { "sSection" : "3d-free-textures", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.cc0textures.com/",
 "sSummary" : "CC0 Textures",
 "sDetails" : "Freely-licensed, high-quality textures supported by Patreon."
} );
dLinks.insert( { "sSection" : "3d-free-textures", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://texturehaven.com/",
 "sSummary" : "Texture Haven",
 "sDetails" : "Freely-licensed, high-quality textures supported by Patreon."
} );
// ### 3d-blender-books ########################################################
dLinks.insert( { "sSection" : "3d-blender-books", "sTag" : "Online Manual", "sTagColor" : "green",
 "sURL"     : "https://docs.blender.org/manual/en/dev/index.html",
 "sSummary" : "Blender Manual",
 "sDetails" : "Blender's official documentation based on the latest version."
} );
dLinks.insert( { "sSection" : "3d-blender-books", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.youtube.com/playlist?list=PLa1F2ddGya_8V90Kd5eC5PeBjySbXWGK1",
 "sSummary" : "Blender's Video Tutorials",
 "sDetails" : "How to use Blender's UI, transformations, layers, meshes, surfaces, and more are covered here."
} );
dLinks.insert( { "sSection" : "3d-blender-books", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/DarrinLile/playlists",
 "sSummary" : "Darrin Lile",
 "sDetails" : "Darrin has made multiple playlists that help you become familiar with the software after following several exercises."
} );
dLinks.insert( { "sSection" : "3d-blender-books", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/AndrewPPrice/playlists",
 "sSummary" : "Andrew Price (Blender Guru)",
 "sDetails" : "Andrew has made several playlists that quickly cover various basics of using Blender."
} );
// ### 3d-animation ############################################################
dLinks.insert( { "sSection" : "3d-animation", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "http://gdcvault.com/play/1023473/Animation-Bootcamp-Intro-and-Overwatch",
 "sSummary" : "GDC Vault: How a Hero is Mei'd",
 "sDetails" : "Speakers from various companies talk on how animators find the soul of a character and channel it into the animations."
} );
dLinks.insert( { "sSection" : "3d-animation", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=BGk__tU3VfI",
 "sSummary" : "Editing/Animating Videos in Blender (1/2)",
 "sDetails" : "An hour-long guide on using the video editing features of Blender."
} );
dLinks.insert( { "sSection" : "3d-animation", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=GTpAju_NU70",
 "sSummary" : "Editing/Animating Videos in Blender (2/2)",
 "sDetails" : "Part two of the tutorial."
} );
// ### 3d-advice ###############################################################
dLinks.insert( { "sSection" : "3d-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=h_zcux6Eneo",
 "sSummary" : "How to Improve Your Art",
 "sDetails" : "Brushboost provides some general tips on incrementally improving your art as a modeller."
} );
dLinks.insert( { "sSection" : "3d-advice", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "http://jugaadanimation.com/blender-freelance-career/",
 "sSummary" : "Freelancing with Blender",
 "sDetails" : "Blender's not quite an industry standard software, compared to Maya. This article discusses how to survive as a freelancer."
} );
dLinks.insert( { "sSection" : "3d-advice", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=Y7LLPgpyiec",
 "sSummary" : "Interview with a Professional Character Designer",
 "sDetails" : "An hour-long interview with an esteemed professional covering various topics, such as setting goals, identifying scam schools, and more."
} );

// ### gd-what-is ##############################################################
dLinks.insert( { "sSection" : "gd-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=zQvWMdWhFCc",
 "sSummary" : "So You Want to Be A Game Designer?",
 "sDetails" : "Extra Credits on what game design is and what you need to know to be a game designer."
} );
// ### gd-utilities ############################################################
dLinks.insert( { "sSection" : "gd-utilities", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.yworks.com/products/yed",
 "sSummary" : "yEd Graph Editing Software",
 "sDetails" : "Excellent tool for creating flow charts, UML diagrams, and more."
} );
dLinks.insert( { "sSection" : "gd-utilities", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=UI6lqHOVHic",
 "sSummary" : "UML Class Diagram Tutorial",
 "sDetails" : "Check this out after you learn a bit about programming. Learn the top-down design tool that is UML and how a diagram software can help you plan your project."
} );
// ### gd-topic-channels ###########################################################
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/channel/UCCODtTcd5M1JavPCOr_Uydg",
 "sSummary" : "Extra Credits",
 "sDetails" : "EC talks very generally about the industry, but the majority of their videos discuss game design concepts."
} );
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/McBacon1337",
 "sSummary" : "Mark Brown's Game Maker's Toolkit",
 "sDetails" : "Mark is one of the best channels on discussing game design from the perspective of Nintendo design philosophies."
} );
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/user/snomangaming",
 "sSummary" : "SnomanGaming",
 "sDetails" : "Snoman is similar to Mark Brown but has overlap with speedrunning communities."
} );
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/channel/UCJfJWct8jN1RpCuVWk3zHTA",
 "sSummary" : "Daryl Talks Games",
 "sDetails" : "Daryl is another topic video producer, but comes from a more psychology-enriched background."
} );
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/channel/UCNOVwMpD-5A1xzcQGbIHNeA",
 "sSummary" : "Design Doc",
 "sDetails" : "Another topic video producer."
} );
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/channel/UCutGiN7c5-CEFwm_ccixR3g",
 "sSummary" : "HeavyEyed",
 "sDetails" : "Another topic video producer."
} );
dLinks.insert( { "sSection" : "gd-topic-channels", "sTag" : "Channel", "sTagColor" : "yellow",
 "sURL"     : "https://www.youtube.com/channel/UC88I_nv3aeJg-P46mUOPTgg",
 "sSummary" : "StealthDocs",
 "sDetails" : "This producer stands out in that he focused exclusively on games that feature stealth elements."
} );


// ### ux-what-is ##############################################################
dLinks.insert( { "sSection" : "ux-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=mPD5dUBFsps",
 "sSummary" : "Intro to UX Design",
 "sDetails" : "Extra Credits describes User Experience and how it relates to the company, the product, and most importantly, the client."
} );
// ### ux-websites #############################################################
dLinks.insert( { "sSection" : "ux-websites", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.usability.gov/",
 "sSummary" : "Usability.Gov",
 "sDetails" : "The United States government apparently has a website dedicated to UX design?!"
} );
// ### ux-menu-cases ###########################################################
dLinks.insert( { "sSection" : "ux-menu-cases", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.patreon.com/posts/17598921",
 "sSummary" : "Two-Column Shop System",
 "sDetails" : "Rebecca Cordingley's two column shop system."
} );


// ### qa-what-is ##############################################################
dLinks.insert( { "sSection" : "qa-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=ntpZt8eAvy0",
 "sSummary" : "So You Want To Be in QA",
 "sDetails" : "Extra Credits describes quality assurance, repro steps, and how to acquire a job in the quality assurance."
} );
// ### qa-basics ###############################################################
dLinks.insert( { "sSection" : "qa-basics", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=OLayCNOPWIo",
 "sSummary" : "Learn to QA: Blackbox Testing",
 "sDetails" : "A veteran QA tester explains the blackbox approach of testing."
} );
dLinks.insert( { "sSection" : "qa-basics", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=_WUzC2tiJoE",
 "sSummary" : "Learn to QA: Embedded Testing",
 "sDetails" : "Also known as the whitebox/greybox tester, these QA testers are present at the start of a project and look at code."
} );
dLinks.insert( { "sSection" : "qa-basics", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=ChftT_2GkIc",
 "sSummary" : "Learn to QA: Beta Testing",
 "sDetails" : "Beta testers are like unpaid blackbox testers in a different stage of development."
} );
dLinks.insert( { "sSection" : "qa-basics", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=rFaWOw8bIMM",
 "sSummary" : "Seven Principles of Software Testing",
 "sDetails" : "This is an important list of things to consider involving your role as a software tester."
} );
// ## qa-techniques ############################################################
dLinks.insert( { "sSection" : "qa-testing-overview", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=WHzeb8YgvM4",
 "sSummary" : "Software Testing Techniques: An Overview",
 "sDetails" : "A brief overview of the various testing techniques of QA."
} );


// ### ppm-what-is #############################################################
dLinks.insert( { "sSection" : "ppm-what-is", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://youtu.be/wRe-81QyzU8",
 "sSummary" : "(GDC) Becoming a Producer the Hard Way",
 "sDetails" : "Producer Nick Laing discusses the difference between a manager and a producer and what a producer does."
} );
dLinks.insert( { "sSection" : "ppm-what-is", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.quora.com/What-is-the-difference-between-a-producer-a-product-manager-and-a-project-manager-in-a-social-game-company",
 "sSummary" : "Producer vs Project Manager vs Product Manager",
 "sDetails" : "A couple of answers highlight that the roles can seem interchangeable and there are loose distinctions between these roles. StudyGameDev aims to distinguish the overlap."
} );
// ### ppm-software ############################################################
dLinks.insert( { "sSection" : "ppm-software", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.perforce.com/indie-studio-pack",
 "sSummary" : "Perforce Indie Pack: Hansoft and HelixCore",
 "sDetails" : "Game dev teams sometimes have a Producer who uses this software. For free, individuals get HelixCore (maintains multiple versions of your game) and HanSoft, an industry standard project management tool."
} );
// ### ppm-design-docs #########################################################
dLinks.insert( { "sSection" : "ppm-design-docs", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "http://www.gamasutra.com/view/feature/131632/creating_a_great_design_document.php",
 "sSummary" : "Creating a Great Design Document",
 "sDetails" : "Tzvi Freeman of GamaSutra describes the process for drafting a design document."
} );


// ### mkt-what-is #############################################################
dLinks.insert( { "sSection" : "mkt-what-is", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "https://www.investopedia.com/terms/m/marketing.asp",
 "sSummary" : "What is Marketing?",
 "sDetails" : "Investopedia explains the fundamentals of marketing, including the four pillars of its department."
} );
dLinks.insert( { "sSection" : "mkt-what-is", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://work.chron.com/different-fields-marketing-2636.html",
 "sSummary" : "What Are the Different Fields in Marketing?",
 "sDetails" : "Karen Johnson provides a simple breakdown of the various types of marketing."
} );
dLinks.insert( { "sSection" : "mkt-what-is", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/beginners-guide-to-seo",
 "sSummary" : "What is Search Engine Optimization?",
 "sDetails" : "Moz.com provides information about SEO, or Search Engine Optimization."
} );
// ### mkt-market-research #####################################################
dLinks.insert( { "sSection" : "mkt-market-research", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.sba.gov/course/market-research/",
 "sSummary" : "SBA: Market Research",
 "sDetails" : "The Small Business Administration's guide to conducting market research."
} );
dLinks.insert( { "sSection" : "mkt-market-research", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://wordpress.org/plugins/social-polls-by-opinionstage/",
 "sSummary" : "OpinionStage for WordPress",
 "sDetails" : "If you want a totally cost-free survey instrument plugin, this one can create graphs and export to spreadsheet file formats."
} );
dLinks.insert( { "sSection" : "mkt-market-research", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.sba.gov/category/advocacy-navigation-structure/research-and-statistics",
 "sSummary" : "SBA's Advocacy Office",
 "sDetails" : "The Research and Statistics section of the advocacy office of the SBA."
} );
dLinks.insert( { "sSection" : "mkt-market-research", "sTag" : "PDF", "sTagColor" : "green",
 "sURL"     : "https://www.sba.gov/sites/default/files/rs416tot.pdf",
 "sSummary" : "Analysis of Internet Sales Taxation",
 "sDetails" : "The SBA analyzed the government's taxation of internet sales."
} );
dLinks.insert( { "sSection" : "mkt-market-research", "sTag" : "PDF", "sTagColor" : "green",
 "sURL"     : "https://www.sba.gov/advocacy/research-current-state-crowdfunding",
 "sSummary" : "Analysis on the Current State of Crowdfunding",
 "sDetails" : "SBA on the effect of crowdfunding performance and outside capital"
} );
// ### mkt-seo #################################################################
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Online Manual", "sTagColor" : "green",
 "sURL"     : "https://moz.com/beginners-guide-to-seo",
 "sSummary" : "What is SEO? Beginner's Guide to SEO",
 "sDetails" : "Moz is one of the leading authorities on search engine optimization."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/serp-features",
 "sSummary" : "What is a SERP Feature?",
 "sDetails" : "Moz describes a typical Search Engine Results Page and its different parts."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/domain-authority",
 "sSummary" : "What is Domain Authority?",
 "sDetails" : "Moz's own custom domain authority scale uses research on search engines to give your website a rating."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/page-authority",
 "sSummary" : "What is Page Authority?",
 "sDetails" : "Similar to domain authority, except applied specifically to a web page."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/on-site-seo",
 "sSummary" : "Advanced: On-Site SEO Overview",
 "sDetails" : "On-Site SEO simply refers to the SEO you apply to your own website. Moz goes into detail here. Consider this topic an overview."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://blog.hubspot.com/marketing/how-to-do-keyword-research-ht",
 "sSummary" : "What is Keyword Research, and How to Perform It?",
 "sDetails" : "Before you begin optimizing your site, you should know what audience you're optimizing it for. HubSpot writer Rachel Leist describes keyword research."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://searchengineland.com/post-prism-google-secure-searches-172487",
 "sSummary" : "Google Moving to Encrypt Keyword Research Data",
 "sDetails" : "Search Engine Land writer Danny Sullivan details more on how keyword research will eventually be a minor focus for online marketing."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/on-page-factors",
 "sSummary" : "On-Page Ranking Factors",
 "sDetails" : "Moz's guide details how to optimize individual pages on your website."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/title-tag",
 "sSummary" : "Title Tags in Detail",
 "sDetails" : "Website titles appear in the tab of your browser and title your content. SEO involves making the title tag just right."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/meta-description",
 "sSummary" : "Meta Description in Detail",
 "sDetails" : "Google obtains a summary of your page content through metadata, such as the meta description."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/alt-text",
 "sSummary" : "Image Alt Text in Detail",
 "sDetails" : "Images that you use on the site should load quickly and have a label that describes the image for those who are blind."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/url",
 "sSummary" : "Technical: URLs",
 "sDetails" : "A Uniform Resource Locator is like an address for a web page. Moz describes it in the context of SEO. It is highly recommended that you learn a little about HTML before proceeding."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/domain",
 "sSummary" : "Technical: Domains",
 "sDetails" : "Your website's domain is the main address or URL of your website."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/conversion-rate-optimization",
 "sSummary" : "Conversion Rate Optimization",
 "sDetails" : "SEO is a waste of time if it doesn't result in sales. Moz explains CRO in more detail."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Online Manual", "sTagColor" : "green",
 "sURL"     : "https://moz.com/beginners-guide-to-link-building",
 "sSummary" : "Beginner's Guide to Link Building",
 "sDetails" : "This seven-chapter manual that details link building helps increase your site's social standing on the Internet, which algorithms tend to favor."
} );
dLinks.insert( { "sSection" : "mkt-seo", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.searchenginejournal.com/social-media-seo/196185/",
 "sSummary" : "How Social Media Can Boost SEO",
 "sDetails" : "Search Engine Journal highlights that social media links do not boost your ranking, but it can still help with the promotion of your content in more fundamental marketing ways."
} );
// ### mkt-seo-mistakes ########################################################
dLinks.insert( { "sSection" : "mkt-seo-mistakes", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/duplicate-content",
 "sSummary" : "About Duplicate Content",
 "sDetails" : "Redundant content is not favored by algorithms and is annoying to readers."
} );
dLinks.insert( { "sSection" : "mkt-seo-mistakes", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://en.wikipedia.org/wiki/Keyword_stuffing",
 "sSummary" : "Keyword Stuffing",
 "sDetails" : "An old and spammy technique that algorithms react negatively to."
} );
// ### mkt-seo-advanced ########################################################
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/robotstxt",
 "sSummary" : "Robots.TXT",
 "sDetails" : "This specific file gives instructions to website crawlers before they explore your website."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/robots-meta-directives",
 "sSummary" : "Robots Meta Directives",
 "sDetails" : "These directives detail how to index a specific page's content. HTML knowledge is required, here."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/http-status-codes",
 "sSummary" : "HTTP Status Codes",
 "sDetails" : "All of the status codes are important to a web developer, but SEO focuses on a subset of them."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/canonicalization",
 "sSummary" : "URL Canonicalization",
 "sDetails" : "A canonical tag tells search engines the \"true form\" of a web page's URL."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/redirection",
 "sSummary" : "URL Redirects",
 "sDetails" : "Setting up redirects can be complicated if done manually. This page details a bit on how it's done."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/schema-structured-data",
 "sSummary" : "Schema Markup for SEO",
 "sDetails" : "Schema gives search engines specific data for richer, more eye-attracting result blurbs. HTML knowledge is required."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://moz.com/learn/seo/page-speed",
 "sSummary" : "Page Speed",
 "sDetails" : "Improving a website's page speed is a complex topic involving compressing resources, setting resource cache, dictating loading rules, and more. Lots of advanced technical knowledge is needed, here."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=TaOA_Zy2XUw",
 "sSummary" : "Advanced: Keyword Research Blueprint",
 "sDetails" : "SEO Expert Brian Dean describes how to obtain meaningful and commercially viable keyword possibilities by valuing who visits your website."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=EceSgY9bDnc",
 "sSummary" : "Advanced: On Page SEO - 9 Actionable Techniques That Work",
 "sDetails" : "Brian Dean details how long content with topic-related terms and comprehensive coverage tends to work as a SEO strategy."
} );
dLinks.insert( { "sSection" : "mkt-seo-advanced", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://betterexplained.com/articles/how-to-optimize-your-site-with-http-caching/",
 "sSummary" : "Advanced: How to Optimize Your Website With Caching",
 "sDetails" : "Caching is the act of giving the website files someone downloads an expiration date, meaning that it is not downloaded all over again when visiting other pages. It's powerful for site speed and this article notes several ways to achieve it."
} );
// ### mkt-seo-tools ###########################################################
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "orange",
 "sURL"     : "https://yoast.com/",
 "sSummary" : "Yoast SEO Tools for WordPress",
 "sDetails" : "Yoast is an online search engine optimization plugin for WordPress, containing a myriad of tools for building a website's SEO."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://trends.google.com/trends/",
 "sSummary" : "Google Trend Explorer",
 "sDetails" : "This is an online tool for browsing Google searches for common search terms."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=EOdN0CF1N68",
 "sSummary" : "How to Use Google Trends",
 "sDetails" : "A Senior Industry Analyst for Google explains how the Google Trends tool works and how you can use it to your advantage."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://ads.google.com/home/tools/keyword-planner/",
 "sSummary" : "Google Keyword Planner",
 "sDetails" : "Google's official tool for suggesting powerful search terms related to the ones you think of for your website."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://moz.com/explorer",
 "sSummary" : "Moz Keyword Explorer ($)",
 "sDetails" : "Moz's online keyword research tool generates keywords based on the content on your website."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://moz.com/link-explorer",
 "sSummary" : "Moz Link Explorer ($)",
 "sDetails" : "Link Explorer provides a set of link analysis and competitive research tools, powered by a live link index."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.wordtracker.com/",
 "sSummary" : "WordTracker ($)",
 "sDetails" : "A comprehensive online tool that claims to provide more insight than Google's tools."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://www.semrush.com/",
 "sSummary" : "SEMRush ($)",
 "sDetails" : "An online search volume tool. It tells you the number of times people performed a specific search, this month."
} );
dLinks.insert( { "sSection" : "mkt-seo-tools", "sTag" : "Software", "sTagColor" : "purple",
 "sURL"     : "https://kwfinder.com/",
 "sSummary" : "KW Finder",
 "sDetails" : "This online tool uses a database 1.6 billion keywords strong to measure how many times people perform a specific search."
} );
// ### mkt-unthical-practices ##################################################
dLinks.insert( { "sSection" : "mkt-unthical-practices", "sTag" : "Video", "sTagColor" : "red",
 "sURL"     : "https://www.youtube.com/watch?v=9hv3CcJYMmU",
 "sSummary" : "How Not to Sponsor on YouTube",
 "sDetails" : "YouTuber Gus Johnson outlines complaints he has about the discomfort of having to pitch your product in specific and intrusive ways."
} );
// ### mkt-asset-sales #########################################################
dLinks.insert( { "sSection" : "mkt-asset-sales", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://img-new.cgtrader.com/uploads/blog/04dLinks7daa-a47d-4188-bfdc-ae17e3ce0a89.png",
 "sSummary" : "CGTrader's 3D Model Overview",
 "sDetails" : "This guide outlines what the best practices are for marketing assets you are selling, as well as what competition levels and price ranges certain trends of models are at."
} );


// ### fm-what-is ##############################################################
dLinks.insert( { "sSection" : "fm-what-is", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.managementstudyguide.com/financial-management.htm",
 "sSummary" : "What is Financial Management?",
 "sDetails" : "The Management Study Guide provides a brief overview of the role of financial management."
} );
// ### fm-business-plan-templates ##############################################
dLinks.insert( { "sSection" : "fm-business-plan-templates", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://www.score.org/resource/financial-projections-template",
 "sSummary" : "Financial Projections Template",
 "sDetails" : "This template for Microsoft Excel calculates startup expenses, payroll costs, sales forecasts, cash flow, income statements, balance sheets, \
            break-even analysis, financial ratios, cost of goods sold, amoritization, and depreciation for small businesses."
} );
dLinks.insert( { "sSection" : "fm-business-plan-templates", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://www.sba.gov/sites/default/files/2018-01/BalanceSheet.xlsx",
 "sSummary" : "Projected Balance Sheet template",
 "sDetails" : "This file helps with Basic accounting: Assets (items of value) minus liabilities (debts) = net worth (equity)."
} );
dLinks.insert( { "sSection" : "fm-business-plan-templates", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://www.sba.gov/sites/default/files/2018-01/Cash_Flow_Statement.xlsx",
 "sSummary" : "Cash Flow Projection template",
 "sDetails" : "This file monitors and projects the amount of incoming/outgoing cash to gauge financial performance."
} );
dLinks.insert( { "sSection" : "fm-business-plan-templates", "sTag" : "Download", "sTagColor" : "purple",
 "sURL"     : "https://www.sba.gov/sites/default/files/2018-01/Income_Statement_for_BPlan_Course.xlsx",
 "sSummary" : "Profit/Loss (Income) Projection template",
 "sDetails" : "This template measures income to arrive at the amount of profit or loss generated by the business."
} );
// ### fm-business-taxes #######################################################
dLinks.insert( { "sSection" : "fm-business-taxes", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.irs.gov/businesses/small-businesses-self-employed/business-taxes",
 "sSummary" : "Small Business Taxes",
 "sDetails" : "The IRS breaks down which taxes a small business is supposed to pay."
} );
dLinks.insert( { "sSection" : "fm-business-taxes", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "http://www.211.org/pages/about",
 "sSummary" : "211.org (USA)",
 "sDetails" : "Each county in the USA has a special phoneline, 2-1-1, to provide services for low-income people. Tax preparation is one of those services."
} );
dLinks.insert( { "sSection" : "fm-business-taxes", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.irs.gov/businesses/small-businesses-self-employed/understanding-employment-taxes",
 "sSummary" : "Employment Taxes",
 "sDetails" : "These are taxes that a business pays when they employ at least one person that isn't the owner."
} );
dLinks.insert( { "sSection" : "fm-business-taxes", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.sba.gov/business-guide/manage-your-business/pay-taxes#section-header-3",
 "sSummary" : "State Tax Selector",
 "sDetails" : "Selecting by state, find online portals for your state's tax requirements. This page is also a good article on taxes in general."
} );
dLinks.insert( { "sSection" : "fm-business-taxes", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/JimZub/status/985560742505140225?s=19",
 "sSummary" : "General Tips for Managing Small Business Finances",
 "sDetails" : "Twitter user @JimZub gives general advice for tracking business expenses."
} );

// ### bl-what-is ##############################################################
dLinks.insert( { "sSection" : "bl-what-is", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.sba.gov/course/legal-requirements-small-business/",
 "sSummary" : "Legal Requirements for Small Business",
 "sDetails" : "(Requires Flash) Whether you operate your business as a sole proprietor or as a small business, this online course teaches you about the basics of the law."
} );
dLinks.insert( { "sSection" : "bl-what-is", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "https://tvtropes.org/pmwiki/pmwiki.php/UsefulNotes/VideoGameDesign",
 "sSummary" : "TVTropes: What is Video Game Development?",
 "sDetails" : "If you don't know anything about game development, this article isn't too bad to start off with."
} );
dLinks.insert( { "sSection" : "bl-what-is", "sTag" : "Wiki", "sTagColor" : "yellow",
 "sURL"     : "https://en.wikipedia.org/wiki/Video_game_publisher",
 "sSummary" : "What is a Video Game Publisher?",
 "sDetails" : "The type of company you probably want to run is a publisher."
} );
// ### bl-plans ################################################################
dLinks.insert( { "sSection" : "bl-plans", "sTag" : "Course", "sTagColor" : "blue",
 "sURL"     : "https://www.sba.gov/course/how-write-business-plan",
 "sSummary" : "What is a Business Plan?",
 "sDetails" : "SBA teaches you what a business plan is and how to write one. See the financial section for template files."
} );
dLinks.insert( { "sSection" : "bl-plans", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan",
 "sSummary" : "Write Your Business Plan",
 "sDetails" : "The SBA's guide (and tool) for making a business plan."
} );
// ### bl-permits ##############################################################
dLinks.insert( { "sSection" : "bl-permits", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online",
 "sSummary" : "Apply for a Federal EIN",
 "sDetails" : "You need an EIN if you are employing anyone or want to open a business bank account."
} );
// ### bl-labor-law ############################################################
dLinks.insert( { "sSection" : "bl-labor-law", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.dol.gov/whd/contacts/state_of.htm",
 "sSummary" : "US DoL State Directory",
 "sDetails" : "You need an EIN if you are employing anyone or want to open a business bank account."
} );
// ### bl-labor-hiring #########################################################
dLinks.insert( { "sSection" : "bl-labor-hiring", "sTag" : "Book", "sTagColor" : "green",
 "sURL"     : "https://steamcdn-a.akamaihd.net/apps/valve/Valve_NewEmployeeHandLinksook.pdf",
 "sSummary" : "Valve's New Employee HandLinksook",
 "sDetails" : "A look into what it's like to work at Valve and what a company like Valve expects of you."
} );
dLinks.insert( { "sSection" : "bl-labor-hiring", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://www.gameworkersunite.org/faq",
 "sSummary" : "Game Workers Unite Organization",
 "sDetails" : "A game developer union."
} );
dLinks.insert( { "sSection" : "bl-labor-hiring", "sTag" : "Website", "sTagColor" : "yellow",
 "sURL"     : "https://gamecompanies.com/",
 "sSummary" : "GameCompanies",
 "sDetails" : "A useful website for learning about game companies who may be hiring in your area."
} );
dLinks.insert( { "sSection" : "bl-labor-hiring", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/itskindred/status/984927782659657729",
 "sSummary" : "Simple rules for a good cover letter.",
 "sDetails" : "Explain what you care about, why are passionate, why it helps you, how you'll contribute, use hyperlinks, and send a PDF."
} );
dLinks.insert( { "sSection" : "bl-labor-hiring", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/nitro_nova/status/1038580458387374080",
 "sSummary" : "Tips on Cover Letters",
 "sDetails" : "StudyGameDev original on the importance of cover letters and how to form great ones."
} );
// ### bl-labor-safety #########################################################
dLinks.insert( { "sSection" : "bl-labor-safety", "sTag" : "Book", "sTagColor" : "green",
 "sURL"     : "https://www.osha.gov/Publications/smallbusiness/small-business.pdf",
 "sSummary" : "OSHA HandLinksook",
 "sDetails" : "A set of guidelines for ensuring your small business is an approved, safe work environment."
} );
dLinks.insert( { "sSection" : "bl-labor-safety", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://waypoint.vice.com/en_us/article/yvwnqk/the-curious-appeal-of-crunch",
 "sSummary" : "Crunch is Employee Abuse",
 "sDetails" : "Some studios don't crunch. This article dives into the topic of crunch time and what we can learn from it."
} );
dLinks.insert( { "sSection" : "bl-labor-safety", "sTag" : "Graphic", "sTagColor" : "red",
 "sURL"     : "https://twitter.com/gcmulk/status/862478705616093184",
 "sSummary" : "Injury Risk Reduction Exercises",
 "sDetails" : "These exercises, illustrated by Twitter user gcmulk, are sourced from Summit Medical, McHesson health (2001), HEP2Go. Journals: Bandy and Irion (1997), Page (IJSPT, 2012)"
} );
dLinks.insert( { "sSection" : "bl-labor-safety", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/nitro_nova/status/1028365305540694016",
 "sSummary" : "Professionally Suggested Preventative Stretch Procedures",
 "sDetails" : "I compiled a list of videos from established physical therapists on exercises and stretches that can help prevent the physical damage that game development can cause. \
            These can combat carpal tunnel, cubital tunnel, back aches, neck aches, and more."
} );
// ### bl-labor-environments ###################################################
dLinks.insert( { "sSection" : "bl-labor-environments", "sTag" : "Article", "sTagColor" : "orange",
 "sURL"     : "https://twitter.com/djamilaknopf/status/1101067791678038016",
 "sSummary" : "Tips for Working From Home",
 "sDetails" : "Twitter user @djamilaknopf explains how they handle the work-from-home lifestyle."
} );
