<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coruscant City Plan</title>
    <!-- Use Tailwind CSS for a clean and responsive design -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #1a1a2e; /* Dark background */
            color: #e0e0e0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .container {
            width: 100%;
            max-width: 1200px;
            padding: 1.5rem;
            margin: 1rem;
        }
        .district-grid {
            display: grid;
            gap: 1.5rem;
            grid-template-columns: repeat(1, 1fr);
            grid-template-areas:
                "civilian"
                "government"
                "industrial";
        }
        @media (min-width: 768px) {
            .district-grid {
                grid-template-columns: 1fr 2fr 1fr;
                grid-template-areas:
                    "civilian-left government civilian-right"
                    "industrial-span industrial-span industrial-span";
            }
            .civilian-sector.left {
                grid-area: civilian-left;
            }
            .civilian-sector.right {
                grid-area: civilian-right;
            }
            .government-district {
                grid-area: government;
            }
            .industrial-sector {
                grid-area: industrial-span;
            }
        }
        .district {
            padding: 1.5rem;
            border-radius: 1rem;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease-in-out;
        }
        .district:hover {
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.1);
        }
        .district h2 {
            font-size: 1.75rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        }
        .district p {
            font-size: 0.9rem;
            opacity: 0.8;
            margin-bottom: 1.5rem;
        }
        .buildings-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
            align-items: flex-end;
            min-height: 120px;
        }
        .building-element {
            width: 40px;
            height: 60px;
            border-radius: 6px;
            position: relative;
            transition: transform 0.2s ease-in-out;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .building-element:hover {
            transform: translateY(-8px);
        }
        .building-element:hover::after {
            content: attr(data-name);
            position: absolute;
            bottom: 110%;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            padding: 0.25rem 0.5rem;
            background-color: #333;
            color: #fff;
            border-radius: 4px;
            font-size: 0.7rem;
            opacity: 1;
            transition: opacity 0.2s;
        }
        .building-element::after {
            content: '';
            opacity: 0;
            pointer-events: none;
        }
        /* Government District styles */
        .government-district {
            background: linear-gradient(145deg, #3f51b5, #2c3e8e);
        }
        .government-building {
            background-color: #f0f0f0;
            border: 2px solid #a0a0a0;
        }
        .jedi-temple {
            width: 50px;
            height: 70px;
            background-color: #d4d4f0;
            border-bottom: 4px solid #b0b0d0;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
            border-radius: 0;
        }
        .senate-building {
            width: 70px;
            height: 50px;
            background-color: #a0c0e0;
            border-radius: 100% 100% 0 0;
            box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);
        }

        /* Civilian Sector styles */
        .civilian-sector {
            background: linear-gradient(145deg, #ff9800, #e68a00);
        }
        .civilian-building {
            background-color: #4b4b4b;
            border: 2px solid #2d2d2d;
            box-shadow: 0 0 10px rgba(255, 152, 0, 0.5);
        }
        .cantina {
            background: linear-gradient(to top, #ff007f, #8e00c4);
            border-radius: 8px;
            width: 45px;
            height: 55px;
        }
        .starport-dock {
            width: 60px;
            height: 30px;
            background-color: #c0c0c0;
            border-radius: 8px;
        }
        /* Criminal buildings within Civilian sector */
        .criminal-hideout {
            background-color: #8b4513;
            border: 2px solid #5c2f0f;
            filter: grayscale(80%); /* Makes it look hidden/out of place */
            opacity: 0.7;
        }
        .sewer-entrance {
            background-color: #4a4a4a;
            border: 2px solid #2f2f2f;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            box-shadow: inset 0 0 5px #111;
        }
        /* Industrial Sector styles */
        .industrial-sector {
            background: linear-gradient(145deg, #5d4037, #3e2723);
        }
        .industrial-building {
            background-color: #4a4a4a;
            border: 2px solid #2f2f2f;
            border-radius: 4px;
        }
        .pipe {
            width: 10px;
            height: 100%;
            background-color: #888;
            margin-right: 2px;
            border-radius: 2px;
        }
    </style>
</head>
<body class="bg-[#1a1a2e] text-[#e0e0e0]">

    <div class="container bg-[#282a36] p-8 rounded-2xl shadow-2xl">
        <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white tracking-wide">Coruscant City Map</h1>
        <p class="text-center text-gray-400 mb-8">
            A visual representation of the city's districts.
            Hover over a district or a building to see its details.
        </p>

        <div class="district-grid">

            <!-- Civilian Sector (Top and Sides) -->
            <div class="district civilian-sector col-span-1 md:col-span-2 md:order-1">
                <h2 class="text-white">Civilian Sector</h2>
                <p>A sprawling, connected web of residential and commercial towers, crisscrossed by bustling **Uscru Plaza** and the **North Coruscant Skyway**. This sector is where the criminal elements are hidden, waiting to be discovered in the back alleys and lower levels.</p>
                <div class="buildings-container">
                    <div class="building-element civilian-building w-12 h-20" data-name="Residential Tower"></div>
                    <div class="building-element cantina" data-name="Cantina"></div>
                    <div class="building-element civilian-building w-16 h-28" data-name="Commercial Tower"></div>
                    <div class="building-element starport-dock" data-name="Starport Docks"></div>
                    <div class="building-element criminal-hideout w-16 h-12" data-name="Criminal Hideout (Hidden)"></div>
                    <div class="building-element civilian-building w-10 h-16" data-name="Market"></div>
                    <div class="building-element sewer-entrance" data-name="The Sewers Entrance (Hidden)"></div>
                </div>
            </div>

            <!-- Government District (Center) -->
            <div class="district government-district md:order-2">
                <h2 class="text-white">Government District</h2>
                <p>The city's pristine hub of power, located at the nexus of the **Grand Plaza Skyway** and the **Senate Transit Line**. This area is home to all the core government and Jedi institutions.</p>
                <div class="buildings-container">
                    <div class="building-element jedi-temple" data-name="Jedi Temple"></div>
                    <div class="building-element senate-building" data-name="Galactic Senate"></div>
                    <div class="building-element government-building w-10 h-24" data-name="Coruscant Guard HQ"></div>
                    <div class="building-element government-building w-12 h-20" data-name="Diplomatic Embassy"></div>
                </div>
            </div>

            <!-- Industrial Sector (Bottom) -->
            <div class="district industrial-sector md:col-span-3">
                <h2 class="text-white">Industrial Sector</h2>
                <p>The city's grimy, dangerous underbelly, accessible via the **Lower Industrial Transit Line**. This area is a maze of factories, rust, and old machinery that serves as the foundation for the city above.</p>
                <div class="buildings-container">
                    <div class="building-element industrial-building w-20 h-24" data-name="Abandoned Factory"></div>
                    <div class="building-element industrial-building w-12 h-20" data-name="Scavenger's Den"></div>
                    <div class="building-element industrial-building w-10 h-18" data-name="Waste Processing"></div>
                </div>
            </div>
        </div>

        <div class="text-center text-gray-500 mt-8 text-sm">
            <p>The districts are interconnected by a system of skyways and ground-level paths, ensuring a seamless flow between zones.</p>
        </div>
    </div>

</body>
</html>
