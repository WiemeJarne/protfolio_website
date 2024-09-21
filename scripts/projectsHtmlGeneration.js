
    const projects = [
        {
            title: "Fijit",
            imageId: "FijitImage",
            videoSrc: "videos/Fijit.mp4",
            technologies: [
                { src: "images/logos/csLogo.png", alt: "C#" },
                { src: "images/logos/unityLogo.png", alt: "Unity" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "The first project of my Say It Labs internship is a mini-game collection aimed at 6-8 year olds to practice articulation. After each fidget game, the player says a word to improve speech. Some noted it could also help people with Alzheimer's. I focused on implementing the mini-games over a month and a half.",
            lastUpdate: "March 2024",
            codeLink: "https://github.com/example/fijit",
            styleType: 1
        },
        {
            title: "Train game",
            imageId: "TrainGameImage",
            videoSrc: "videos/TrainGame.mp4",
            technologies: [
                { src: "images/logos/csLogo.png", alt: "C#" },
                { src: "images/logos/unityLogo.png", alt: "Unity" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "The third project of my Say It Labs internship is a game based on Unrailed. Players gather resources by saying words correctly, use them to complete contracts, and upgrade their train. Bandits try to steal resources, and I built the system that controls their behavior. I also worked on spawning props, resources, and created the sand material. This project took about a month and a half.",
            lastUpdate: "June 2024",
            styleType: 2
        },
        {
            title: "Speech dash",
            imageId: "SpeechDashImage",
            videoSrc: "videos/SpeechDash.mp4",
            technologies: [
                { src: "images/logos/csLogo.png", alt: "C#" },
                { src: "images/logos/unityLogo.png", alt: "Unity" },
                { src: "images/logos/gitLogo.png", alt: "Git" }                
            ],
            description: "The fourth project of my Say It Labs internship is a voice-controlled game based on Geometry Dash. I worked on sound detection, tapping inputs, beat patterns, and progressively harder levels. I worked on it for two weeks.",
            lastUpdate: "June 2024",
            codeLink: null,
            styleType: 1
        },
        {
            title: "Grapple-It Out",
            imageId: "GrappleItOutImage",
            videoSrc: "videos/GrappleItOut.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/unrealLogo.png", alt: "Unreal" },
                { src: "images/logos/perforceLogo.png", alt: "Perforce" }
            ],
            description: "This was a school project. We where divided in groups with 2 programmers and 3 artists. This was developed over the course of 1 semester. I programmed the menus, the pickUps, the pickUp spawn system and the input.",
            lastUpdate: "May 2023",
            codeLink: "https://ozikov.itch.io/grappleitout",
            styleType: 1
        },
        {
            title: "VR Shopping",
            imageId: "VRShoppingImage",
            videoSrc: "videos/VRShopping.mp4",
            technologies: [
                { src: "images/logos/csLogo.png", alt: "C#" },
                { src: "images/logos/unityLogo.png", alt: "Unity" },
                { src: "images/logos/perforceLogo.png", alt: "Perforce" }
            ],
            description: "This was a school project made in collaboration with AZ Groeninge Hospital in Kortrijk and Hitlab. The project was developed over the course of one semester. I was responsible for programming the item-grabbing mechanics, teleportation within the aisles, interaction with fridge doors, input handling, the settings menu and the implementation of the settings. I also handled all localization in Dutch, French, English, and German.",
            lastUpdate: "November 2023",
            codeLink: null,
            styleType: 2
        },
        {
            title: "Tea for the Queen",
            imageId: "TeaForTheQueenImage",
            videoSrc: "videos/TeaForTheQueen.mp4",
            technologies: [
                { src: "images/logos/UnrealLogo.png", alt: "Unreal" }
            ],
            description: "This was made in a game jam where we had 3 days the time to make a game in the theme \"fragile\". The goal of the game is to bring the tea to the queen by balancing the tea on the table with 2 people. I helped programming how the table works.",
            lastUpdate: "May 2023",
            codeLink: "https://ozikov.itch.io/tea-for-the-queen",
            styleType: 1
        },
        {
            title: "Zombie AI Game",
            imageId: "ZombieAIGameImage",
            videoSrc: "videos/ZombieAIGame.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This is a zombie game that was made by our teachers for the course gameplay programming.We had to create an AI plugin that plays the game with as goal to survive as long as possible. I made the AI using a behavior tree.",
            lastUpdate: "January 2023",
            codeLink: "https://github.com/WiemeJarne/ZombieAIGame",
            styleType: 1
        },
        {
            title: "Flow field pathfinding",
            imageId: "FlowFieldPathfindingImage",
            videoSrc: "videos/FlowFieldPathfinding.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This was a small school research project for the course gameplay programming. We had to choose a topic that has something to do with AI. I choose to explore flow fields because I found it interesting how it works and that it can be used in very different fields. For example it can be used for calculating the flow of water, the spread of gas and also for the optimizing the movement of agent who have a specific goal. Due to the limited time I only researched and programmed the latter.",
            lastUpdate: "January 2023",
            codeLink: "https://github.com/WiemeJarne/Flow-field-pathfinding",
            styleType: 2
        },
        {
            title: "AI steering behaviors",
            imageId: "AISteeringBehaviorsImage",
            videoSrc: "videos/AISteeringBehaviors.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "In this project there are various application which I programmed during a school task. It shows the implementation of variours steering behaviors like seek, flee, arrive, wander, evade... One of the tasks was to implement spatial partitioning which you can see in the end of the video.",
            lastUpdate: "October 2022",
            codeLink: "https://github.com/WiemeJarne/AISteeringBehaviors",
            styleType: 1
        },
        {
            title: "AI pathfinding",
            imageId: "AIPathfindingImage",
            videoSrc: "videos/AIPathfinding.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This was an assignment for the course gameplay programming where we learned graph theory, pathfinding with the A-star algorithm and how to make an AI navigate a navmesh using a graph. The colored graph was an excercise to learn what an eulerian graph, semi-eulerian graph and none eulerian graph is. The nodes are collored in a way that neighboring nodes can not have the same color.",
            lastUpdate: "November 2022",
            codeLink: "https://github.com/WiemeJarne/AIPathfinding",
            styleType: 1
        },
        {
            title: "CheapShark API",
            imageId: "CheapSharkAPI_Image",
            videoSrc: "videos/CheapSharkAPI.mp4",
            technologies: [
                { src: "images/logos/csLogo.png", alt: "C#" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "I have developed an application that utilizes the <a href=\"https://apidocs.cheapshark.com/\"> CheapShark API</a> to collect extensive information about games and their sales across various stores. The API also enables users to set up alerts for when a game reaches a specific price or falls below it, triggering an email notification. I chose this API for its comprehensive and up-to-date data. This is a WPF application where I programmed all the C# (in async) and the xaml using the MVVM pattern.",
            lastUpdate: "April 2023",
            codeLink: "https://github.com/WiemeJarne/CheapSharkAPI_App",
            styleType: 2
        },
        {
            title: "2D game engine",
            imageId: "GameEngineImage",
            videoSrc: null,
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This was part of a school assignment for the course programming 4. We had to make a simple 2d game engine using the next game programming patterns: Command, Observer, Singelton, Game Loop, Update Method, Component, Event Queue, Service Locator, Dirty Flag.",
            lastUpdate: "August 2023",
            codeLink: "https://github.com/WiemeJarne/GameEngine",
            styleType: 1
        },
        {
            title: "Burger Time",
            imageId: "BurgerTimeImage",
            videoSrc: "videos/BurgerTime.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This project is to show what is possible with my own 2D game engine. It's a replica of the first tree levels of Burger Time. There are tree game modes: single player, co-op(local) and versus.",
            lastUpdate: "June 2023",
            codeLink: "https://github.com/WiemeJarne/BurgerTime",
            styleType: 1
        },
        {
            title: "Dual rasterizer",
            imageId: "DualRasterizerImage",
            videoSrc: "videos/DualRasterizer.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This was a school assignment for the course graphics programming. We had to program a software and a hardware rasterizer and combine the 2 in 1 app so you can switch between software and hardware with the press of a button. As an extra I also implemented transparency and multithreading in the software version.",
            lastUpdate: "January 2023",
            codeLink: "https://github.com/WiemeJarne/DualRasterizer",
            styleType: 2
        },
        {
            title: "Software ray tracer",
            imageId: "SoftwareRayTracerImage",
            videoSrc: "videos/SoftwareRayTracer.mp4",
            technologies: [
                { src: "images/logos/cppLogo.png", alt: "C++" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "This was a school assigment for the course graphics programming. We had to program a software ray tracer and make it have as much fps as possible. To improve the fps I implemented AABB (Axis aligned bounding box) and I added multithreading.",
            lastUpdate: "November 2022",
            codeLink: "https://github.com/WiemeJarne/SoftwareRayTracer",
            styleType: 1
        },
        {
            title: "Block game",
            imageId: "BlockGameImage",
            videoSrc: "videos/BlockGame.mp4",
            technologies: [
                { src: "images/logos/csLogo.png", alt: "C#" },
                { src: "images/logos/unityLogo.png", alt: "Unity" },
                { src: "images/logos/gitLogo.png", alt: "Git" }
            ],
            description: "The second project of my Say It Labs internship is a game where blocks form words. I came up with mini-games for all categories of phonemic awareness and implemented one for the segmentation category, where players separate phonemes. Due to time constraints, I only managed to separate letters. I worked on this for about three days. This was a great excercise for me to get familiar with the codebase of an existing project.",
            lastUpdate: "March 2024",
            codeLink: null,
            styleType: 1
        }
    ];

    function createProjectHTML(project) {
        if (project.styleType === 1) {
            // Layout style 1 (original Fijit example)
            return `
                <div class="roundedCorners boxContainerItemsVertical projectContainer dropShadow">
                    <h3><strong>${project.title}</strong></h3>
                    <div class="playVideoOnImageHover">
                        <img id="${project.imageId}" alt="${project.title} image" class="roundedCorners projectVisials" style="border-radius:25px">
                        ${project.videoSrc ? `
                            <video class="hover-video roundedCorners projectVisials" muted loop preload="metadata" style="border-radius:25px">
                                <source src="${project.videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        ` : ""}
                    </div>
                    <div class="boxContainerItemsHorizontal transparentBackground">
                        ${project.technologies.map(tech => `<img src="${tech.src}" alt="${tech.alt}" class="smallLogoImage">`).join("")}
                    </div>
                    <p>${project.description}</p>
                    <div class="boxContainerItemsVertical transparentBackground">
                        <span>Last update: ${project.lastUpdate}</span>
                        ${project.codeLink ? `<a href="${project.codeLink}" target="_blank" class="projectCodeLink">View Code</a>` : ""}
                    </div>
                </div>
            `;
        } else if (project.styleType === 2) {
            // Layout style 2 (Train game example)
            return `
                <div class="roundedCorners boxContainerItemsVertical projectContainer dropShadow" style="padding:0%">
                    <div class="playVideoOnImageHover">
                        <img id="${project.imageId}" alt="${project.title} image" class="roundedCorners projectVisials">
                        ${project.videoSrc ? `
                            <video class="hover-video roundedCorners projectVisials" muted loop preload="metadata">
                                <source src="${project.videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        ` : ""}
                    </div>
                    <div class="boxContainerItemsHorizontal transparentBackground">
                        ${project.technologies.map(tech => `<img src="${tech.src}" alt="${tech.alt}" class="smallLogoImage">`).join("")}
                    </div>
                    <h3><strong>${project.title}</strong></h3>
                    <div class="boxContainerItemsVertical transparentBackground" style="margin:2%">
                        <p>${project.description}</p>
                        <span>Last update: ${project.lastUpdate}</span>
                        ${project.codeLink ? `<a href="${project.codeLink}" target="_blank" class="projectCodeLink">View Code</a>` : ""}
                    </div>
                </div>
            `;
        }
    }

    const projectsContainer = document.getElementById("projectsSection");
    projects.forEach(project => {
        projectsContainer.innerHTML += createProjectHTML(project);
    });