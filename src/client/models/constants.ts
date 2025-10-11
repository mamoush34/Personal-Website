export const doodleDesc: string =
    'An implementation of the popular game DoodleJump, except in this we have a monkey trying to climb during halloween. The project is coded in Java, using Object-Oriented Programming principles.';
export const doodleUrl: string = '/images/doodle.png';

export const pacmanDesc: string =
    'An implementation of the game Pacman, with increasing difficulty. Side Map transitions are enabled. The ghosts use BFS algorithm to chase Pacman, so that the game is actually challenging to users. Every Pacman feature in the classic game, such as energizer(ghosts becoming eadible and scared) is implemented as well. Object Oriented Principles, such as Polymorphism, Inheritence, Encapsulation are obeyed.';
export const pacmanUrl: string = '/images/pacman.png';

export const cShellDesc: string =
    'A personal implementation of a shell coded in C. The shell has the ability to handle unix built-in system calls, child and parent processes, command line input, as well as file handling(descriptors etc.). Additionally, the shell is also able to handle both foreground and background processes with reaping that results in no leaks.';
export const cShellUrl: string = '/images/cshell.png';

export const mallocDesc: string =
    "A personal implementation of a dynamic memory allocator for C programs. It's implemented using first-fit explicit free list approach.";
export const mallocUrl: string = '/images/malloc.png';

export const databaseDesc: string =
    'In this project, you are able to create a simple server to manage a database of key-value pairs over a network. Multiple concurrent users are able to search for items in the database, add new entries, and remove existing entries, all while using proper lock usage to ensure no data race happens.';
export const databaseUrl: string = '/images/database.png';

export const mapsDesc: string =
    "Created a navigation app that draws a map on a canvas, loaded from a database, and lets users find a way to their target. Implemented a K-D Tree to find roads that fall inside a box of 4 coordinates, or closest to a point. The roads are painted depending on the traffic values received through server, and Dijkstra implementation takes traffic into account while giving the shortest path. The road names are suggested to users as they're typing with the help of my AutoCorrect implementation that relies on an implemented Trie structure.";
export const mapsUrl: string = '/images/maps.png';

export const UDDUDesc: string =
    'Collaborated to develop a Start-Up web application that allows users to share travel experiences, activities, and itineraries. Users could browse shared activities based on filters on the city selected. Implemented itinerary creation for users using a cyclic non-deterministic selection algorithm that tried to match preferences on criteria like budget, time, etc. The itinerary could be displayed in various ways including on a map, which was accomplished through Google Maps API. Incorporated persistent data storage for data including credentials through SQLite. Leveraged caching for recently searched activities or the cities. Data stored is user-specific, which is handled by a credential system backed by Passport.js.';
export const UDDUUrl: string = '/images/UDDU.png';

export const featureDesc: string =
    'An implementation of a local feature matching algorithm, which attempts to match multiple views of real-world scene. It uses Harris Corner Detector to get interesting points, SIFT to form local descriptors and ratio or nearest neighbor test for matching.';
export const featureUrl: string = '/images/feature.png';

export const sceneDesc: string =
    'Created an application that recognized the scenery of an image through a bag of words representation model used with the nearest neighbor and SVM classifiers.';
export const sceneUrl: string = '/images/scene.png';

export const decisionDesc: string =
    'Machine Learning implementation of ID3 Algorithm with > 95% accuracy on test data.';
export const decisionUrl: string = '/images/decision.jpg';

export const weenixDesc: string =
    'A Linux-like OS from scratch in C. Used S5FS as File System, which is backed by an implemented virtual file system. Implemented multithreading, essential drivers, and virtual memory for the system.';
export const weenixUrl: string = '/images/weenix.png';

export const inTurnDesc: string =
    "A Web Application that gives users tools to track their job application status in a more automated way. It uses a chrome extension, which requires users to sign up using google account. After the sign-up, if filling an internship application that uses greenhouse.io, the extension will detect the application. The user information will be automatically filled through the database. After the application is submitted, the application information like job title, company, date applied, and status of your application automatically shows up in a list item in the home page of the web application. The extension captures this application automatically and puts it into the database for the current user as well. You can filter through the applications dynamically using the search bar, on the home view. Inside the home view, you can manually add new jobs and it'll be added to the database and the list. You can also update the status of the added job.";
export const inTurnUrl: string = '/images/inTurn.png';

export const camDesc: string =
    'This app will grant a quick way to analyze images, instead of going through exhaustive Google searches to get descriptions of objects present. Fast RCNN is implemented to segment images and create bounding boxes. On click to the bounding boxes the information found on the objects are displayed. Users will be able to query their image using the web application for the project.';
export const camUrl: string = '/images/cam.png';

export const deepTrex: string =
    "A deep reinforcement learning model that can perform comparably well to an intermediate-level human player in the four-player, predominantly Middle-Eastern card game Trex. The game is relatively straightforward for a human to learn, but does have a very specific and comparatively complex structure containing a fixed number of sub-games. There are 4 Kingdoms each consisting of 5 contracts, and, glossing over the nature of the Trex contract, each contract is effectively 13 tricks. Each one requires strategy to consistently perform well. We have found it a compelling challenge to tackle because at any given time (particularly early in a round, or at any point if one doesn't count cards) the game state is one of imperfect information. Thus, an initial point of interest in the project was learning to what extent a deep learning model is able to cope with the combination of, at varying times, both very constrained choices (a subset of legal moves) and more arbitrary actions (strategy)";
export const deepUrl: string = '/images/DeepTrex.png';

export const pandemicDeadline: string =
    'This app models the hypothesis testing performed on whether vaccine administration in states is correlated with infection rates. We proposed as our null hypothesis the  following proposition, on a per capita basis for U.S. states over the 12 weeks observed: the proportions of state-specific Covid vaccine administration rates relative to the respective national average rate are not correlated with the proportions of state-specific total Covid case rates relative to the respective national average rate. We were able to reject our null hypothesis and found correlation in administration of vaccines with state-specific infection levels. The results of the experiment were modeled in the web application with different metrics to display the results along with a map to highlight the general picture, which allowed interactive access to the data.';
export const pandemicUrl: string = '/images/pandemic.png';
