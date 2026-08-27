/* =========================================================
   GEOQUIZ V3
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

let TOTAL_ROUNDS = 10;
let GAME_MODE = "country";
let stage = 1;


/* =========================================================
   BASE DE DONNÉES
   ========================================================= */

let COUNTRIES = [

    {
        iso2: "fr",
        name: "France",
        aliases: ["france"],
        capital: "Paris",
        leader: "Emmanuel Macron"
    },

    {
        iso2: "de",
        name: "Allemagne",
        aliases: ["allemagne", "germany"],
        capital: "Berlin",
        leader: "Frank-Walter Steinmeier"
    },

    {
        iso2: "es",
        name: "Espagne",
        aliases: ["espagne", "spain"],
        capital: "Madrid",
        leader: "Felipe VI"
    },

    {
        iso2: "it",
        name: "Italie",
        aliases: ["italie", "italy"],
        capital: "Rome",
        leader: "Sergio Mattarella"
    },

    {
        iso2: "pt",
        name: "Portugal",
        aliases: ["portugal"],
        capital: "Lisbonne",
        leader: "Marcelo Rebelo de Sousa"
    },

    {
        iso2: "be",
        name: "Belgique",
        aliases: ["belgique", "belgium"],
        capital: "Bruxelles",
        leader: "Philippe"
    },

    {
        iso2: "nl",
        name: "Pays-Bas",
        aliases: [
            "pays-bas",
            "pays bas",
            "hollande",
            "netherlands"
        ],
        capital: "Amsterdam",
        leader: "Willem-Alexander"
    },

    {
        iso2: "ch",
        name: "Suisse",
        aliases: ["suisse", "switzerland"],
        capital: "Berne",
        leader: "Conseil fédéral suisse"
    },

    {
        iso2: "at",
        name: "Autriche",
        aliases: ["autriche", "austria"],
        capital: "Vienne",
        leader: "Alexander Van der Bellen"
    },

    {
        iso2: "pl",
        name: "Pologne",
        aliases: ["pologne", "poland"],
        capital: "Varsovie",
        leader: "Karol Nawrocki"
    },

    {
        iso2: "cz",
        name: "Tchéquie",
        aliases: [
            "tchequie",
            "république tchèque",
            "republique tcheque",
            "czechia"
        ],
        capital: "Prague",
        leader: "Petr Pavel"
    },

    {
        iso2: "hu",
        name: "Hongrie",
        aliases: ["hongrie", "hungary"],
        capital: "Budapest",
        leader: "Tamás Sulyok"
    },

    {
        iso2: "ro",
        name: "Roumanie",
        aliases: ["roumanie", "romania"],
        capital: "Bucarest",
        leader: "Nicușor Dan"
    },

    {
        iso2: "gb",
        name: "Royaume-Uni",
        aliases: [
            "royaume-uni",
            "royaume uni",
            "angleterre",
            "united kingdom",
            "uk"
        ],
        capital: "Londres",
        leader: "Charles III"
    },

    {
        iso2: "ie",
        name: "Irlande",
        aliases: ["irlande", "ireland"],
        capital: "Dublin",
        leader: "Michael D. Higgins"
    },

    {
        iso2: "no",
        name: "Norvège",
        aliases: ["norvège", "norvege", "norway"],
        capital: "Oslo",
        leader: "Harald V"
    },

    {
        iso2: "se",
        name: "Suède",
        aliases: ["suède", "suede", "sweden"],
        capital: "Stockholm",
        leader: "Carl XVI Gustaf"
    },

    {
        iso2: "dk",
        name: "Danemark",
        aliases: ["danemark", "danemark", "denmark"],
        capital: "Copenhague",
        leader: "Frederik X"
    },

    {
        iso2: "fi",
        name: "Finlande",
        aliases: ["finlande", "finland"],
        capital: "Helsinki",
        leader: "Alexander Stubb"
    },

    {
        iso2: "is",
        name: "Islande",
        aliases: ["islande", "iceland"],
        capital: "Reykjavik",
        leader: "Halla Tómasdóttir"
    },

    {
        iso2: "us",
        name: "États-Unis",
        aliases: [
            "états-unis",
            "etats-unis",
            "etats unis",
            "usa",
            "united states"
        ],
        capital: "Washington",
        leader: "Donald Trump"
    },

    {
        iso2: "ca",
        name: "Canada",
        aliases: ["canada"],
        capital: "Ottawa",
        leader: "Charles III"
    },

    {
        iso2: "mx",
        name: "Mexique",
        aliases: ["mexique", "mexico"],
        capital: "Mexico",
        leader: "Claudia Sheinbaum"
    },

    {
        iso2: "br",
        name: "Brésil",
        aliases: ["brésil", "bresil", "brazil"],
        capital: "Brasília",
        leader: "Luiz Inácio Lula da Silva"
    },

    {
        iso2: "ar",
        name: "Argentine",
        aliases: ["argentine", "argentina"],
        capital: "Buenos Aires",
        leader: "Javier Milei"
    },

    {
        iso2: "cl",
        name: "Chili",
        aliases: ["chili", "chile"],
        capital: "Santiago",
        leader: "José Antonio Kast"
    },

    {
        iso2: "co",
        name: "Colombie",
        aliases: ["colombie", "colombia"],
        capital: "Bogota",
        leader: "Gustavo Petro"
    },

    {
        iso2: "pe",
        name: "Pérou",
        aliases: ["pérou", "perou", "peru"],
        capital: "Lima",
        leader: "José María Balcázar"
    },

    {
        iso2: "uy",
        name: "Uruguay",
        aliases: ["uruguay"],
        capital: "Montevideo",
        leader: "Yamandú Orsi"
    },

    {
        iso2: "cu",
        name: "Cuba",
        aliases: ["cuba"],
        capital: "La Havane",
        leader: "Miguel Díaz-Canel"
    },

    {
        iso2: "cn",
        name: "Chine",
        aliases: ["chine", "china"],
        capital: "Pékin",
        leader: "Xi Jinping"
    },

    {
        iso2: "jp",
        name: "Japon",
        aliases: ["japon", "japan"],
        capital: "Tokyo",
        leader: "Naruhito"
    },

    {
        iso2: "kr",
        name: "Corée du Sud",
        aliases: [
            "corée du sud",
            "coree du sud",
            "south korea"
        ],
        capital: "Séoul",
        leader: "Lee Jae Myung"
    },

    {
        iso2: "in",
        name: "Inde",
        aliases: ["inde", "india"],
        capital: "New Delhi",
        leader: "Droupadi Murmu"
    },

    {
        iso2: "id",
        name: "Indonésie",
        aliases: ["indonésie", "indonesie", "indonesia"],
        capital: "Jakarta",
        leader: "Prabowo Subianto"
    },

    {
        iso2: "th",
        name: "Thaïlande",
        aliases: ["thaïlande", "thailande", "thailand"],
        capital: "Bangkok",
        leader: "Maha Vajiralongkorn"
    },

    {
        iso2: "vn",
        name: "Vietnam",
        aliases: ["vietnam"],
        capital: "Hanoï",
        leader: "Lương Cường"
    },

    {
        iso2: "ph",
        name: "Philippines",
        aliases: ["philippines"],
        capital: "Manille",
        leader: "Ferdinand Marcos Jr."
    },

    {
        iso2: "sa",
        name: "Arabie saoudite",
        aliases: [
            "arabie saoudite",
            "arabie saoudite",
            "saudi arabia"
        ],
        capital: "Riyad",
        leader: "Salman ben Abdelaziz Al Saoud"
    },

    {
        iso2: "ae",
        name: "Émirats arabes unis",
        aliases: [
            "émirats arabes unis",
            "emirats arabes unis",
            "uae"
        ],
        capital: "Abou Dabi",
        leader: "Mohammed ben Zayed Al Nahyane"
    },

    {
        iso2: "il",
        name: "Israël",
        aliases: ["israël", "israel"],
        capital: "Jérusalem",
        leader: "Isaac Herzog"
    },

    {
        iso2: "tr",
        name: "Turquie",
        aliases: ["turquie", "turkey", "türkiye"],
        capital: "Ankara",
        leader: "Recep Tayyip Erdoğan"
    },

    {
        iso2: "ir",
        name: "Iran",
        aliases: ["iran"],
        capital: "Téhéran",
        leader: "Massoud Pezeshkian"
    },

    {
        iso2: "iq",
        name: "Irak",
        aliases: ["irak", "iraq"],
        capital: "Bagdad",
        leader: "Abdul Latif Rashid"
    },

    {
        iso2: "ru",
        name: "Russie",
        aliases: ["russie", "russia"],
        capital: "Moscou",
        leader: "Vladimir Putin"
    },

    {
        iso2: "ua",
        name: "Ukraine",
        aliases: ["ukraine"],
        capital: "Kyiv",
        leader: "Volodymyr Zelenskyy"
    },

    {
        iso2: "ma",
        name: "Maroc",
        aliases: ["maroc", "morocco"],
        capital: "Rabat",
        leader: "Mohammed VI"
    },

    {
        iso2: "dz",
        name: "Algérie",
        aliases: ["algérie", "algerie", "algeria"],
        capital: "Alger",
        leader: "Abdelmadjid Tebboune"
    },

    {
        iso2: "tn",
        name: "Tunisie",
        aliases: ["tunisie", "tunisia"],
        capital: "Tunis",
        leader: "Kaïs Saïed"
    },

    {
        iso2: "eg",
        name: "Égypte",
        aliases: ["égypte", "egypte", "egypt"],
        capital: "Le Caire",
        leader: "Abdel Fattah al-Sissi"
    },

    {
        iso2: "za",
        name: "Afrique du Sud",
        aliases: [
            "afrique du sud",
            "south africa"
        ],
        capital: "Pretoria",
        leader: "Cyril Ramaphosa"
    },

    {
        iso2: "ng",
        name: "Nigeria",
        aliases: ["nigeria", "nigéria"],
        capital: "Abuja",
        leader: "Bola Tinubu"
    },

    {
        iso2: "ke",
        name: "Kenya",
        aliases: ["kenya"],
        capital: "Nairobi",
        leader: "William Ruto"
    },

    {
        iso2: "et",
        name: "Éthiopie",
        aliases: ["éthiopie", "ethiopie", "ethiopia"],
        capital: "Addis-Abeba",
        leader: "Taye Atske Selassie"
    },

    {
        iso2: "sn",
        name: "Sénégal",
        aliases: ["sénégal", "senegal"],
        capital: "Dakar",
        leader: "Bassirou Diomaye Faye"
    },

    {
        iso2: "ci",
        name: "Côte d'Ivoire",
        aliases: [
            "côte d'ivoire",
            "cote d'ivoire",
            "ivory coast"
        ],
        capital: "Yamoussoukro",
        leader: "Alassane Ouattara"
    },

    {
        iso2: "au",
        name: "Australie",
        aliases: ["australie", "australia"],
        capital: "Canberra",
        leader: "Charles III"
    },

    {
        iso2: "nz",
        name: "Nouvelle-Zélande",
        aliases: [
            "nouvelle-zélande",
            "nouvelle zelande",
            "new zealand"
        ],
        capital: "Wellington",
        leader: "Charles III"
    }

];

const COUNTRY_DATA_URL =
    "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";

let countriesReady = Promise.resolve();

function loadCompleteCountryDatabase() {
    countriesReady = fetch(COUNTRY_DATA_URL, { cache: "force-cache" })
        .then(response => {
            if (!response.ok) throw new Error("Pays HTTP " + response.status);
            return response.json();
        })
        .then(externalCountries => {
            const existingByCode = new Map(
                COUNTRIES.map(country => [country.iso2.toUpperCase(), country])
            );

            const completeCountries = externalCountries
                .filter(country => country.unMember || ["VA", "PS"].includes(country.cca2))
                .map(country => {
                    const code = country.cca2.toUpperCase();
                    const existing = existingByCode.get(code);
                    if (existing) return existing;

                    const frenchName = country.translations?.fra?.common || country.name.common;

                    return {
                        iso2: country.cca2.toLowerCase(),
                        name: frenchName,
                        aliases: [frenchName, country.name.common],
                        capital: country.capital?.[0] || "Capitale à vérifier",
                        leader: `À vérifier — ${frenchName}`
                    };
                });

            if (completeCountries.length === 195) {
                COUNTRIES = completeCountries;
            } else {
                console.warn(`Base distante incomplète : ${completeCountries.length}/195 pays.`);
            }
        })
        .catch(error => {
            console.warn("Base complète indisponible, utilisation des pays locaux :", error);
        });

    return countriesReady;
}

loadCompleteCountryDatabase();


/* =========================================================
   ÉTAT
   ========================================================= */

let currentCountry = null;

let usedCountries = [];

let round = 1;

let score = 0;

let gameId = 0;

let playerName = "";

let scores = {
    country: 0,
    flag: 0,
    leader: 0,
    capital: 0
};

let mistakes = [];


/* =========================================================
   DOM
   ========================================================= */

const homeScreen =
    document.getElementById("home-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const databaseScreen =
    document.getElementById("database-screen");

const coursesScreen =
    document.getElementById("courses-screen");

const quizTab =
    document.getElementById("quiz-tab");

const brandHome =
    document.getElementById("brand-home");

const databaseTab =
    document.getElementById("database-tab");

const coursesTab =
    document.getElementById("courses-tab");

const databaseSearch =
    document.getElementById("database-search");

const databaseGrid =
    document.getElementById("database-grid");

const databaseCount =
    document.getElementById("database-count");

const courseForm =
    document.getElementById("course-form");

const courseFilter =
    document.getElementById("course-filter");

const courseList =
    document.getElementById("course-list");

const courseFeedback =
    document.getElementById("course-feedback");

const countryModal =
    document.getElementById("country-modal");

const countryModalContent =
    document.getElementById("country-modal-content");

const countryModalClose =
    document.getElementById("country-modal-close");

let courses = [];

const scoreElement =
    document.getElementById("score");

const roundElement =
    document.getElementById("round-number");

const totalRoundsElement =
    document.getElementById("total-rounds");

const gameModeSelect =
    document.getElementById("game-mode");

const questionCountSelect =
    document.getElementById("question-count");

const questionCountLabel =
    document.getElementById("question-count-label");

const modeHelp =
    document.getElementById("mode-help");

const stageNumber =
    document.getElementById("stage-number");

const stageLabel =
    document.getElementById("stage-label");

const progressFill =
    document.getElementById("progress-fill");

const questionIcon =
    document.getElementById("question-icon");

const questionCategory =
    document.getElementById("question-category");

const questionTitle =
    document.getElementById("question-title");

const countryInput =
    document.getElementById("country-input");

const playerNameInput =
    document.getElementById("player-name");

const playerNameFeedback =
    document.getElementById("player-name-feedback");

const leaderboardHome =
    document.getElementById("leaderboard-home");

const leaderboardResultsList =
    document.getElementById("leaderboard-results-list");

const resultPlayerName =
    document.getElementById("result-player-name");

const LEADERBOARD_KEY = "revision_r3_leaderboard";


/* =========================================================
   BOUTONS
   ========================================================= */

function updateModeHelp() {
    if (gameModeSelect.value === "mixed") {
        questionCountLabel.textContent = "Nombre de pays / manches";
        modeHelp.textContent = "Mode classique : chaque pays donne 4 questions — pays, drapeau, chef d’État et capitale.";
    } else {
        questionCountLabel.textContent = "Nombre de questions";
        const texts = {
            country: "Une carte muette : retrouve le pays affiché en rouge.",
            flag: "Le nom du pays est donné : choisis son drapeau parmi 4 propositions.",
            leader: "Le pays est donné : choisis son chef d’État parmi 4 propositions.",
            capital: "Le pays est donné : choisis sa capitale parmi 4 propositions."
        };
        modeHelp.textContent = texts[gameModeSelect.value];
    }

    updateBestScoreMax();
}

// Le score max dépend du mode (x4 en mode classique) et du nombre de
// questions choisi : "/40" était codé en dur dans le HTML et devenait faux
// dès qu'on changeait le mode ou le nombre de questions.
function updateBestScoreMax() {
    const bestScoreMax = document.getElementById("best-score-max");
    if (!bestScoreMax) return;

    const count = Number(questionCountSelect.value);
    const max = gameModeSelect.value === "mixed" ? count * 4 : count;

    bestScoreMax.textContent = max;
}

gameModeSelect.addEventListener("change", updateModeHelp);
questionCountSelect.addEventListener("change", updateBestScoreMax);
updateModeHelp();

quizTab.addEventListener("click", showQuizTab);
brandHome.addEventListener("click", showHome);
databaseTab.addEventListener("click", showDatabaseTab);
coursesTab.addEventListener("click", showCoursesTab);
databaseSearch.addEventListener("input", renderDatabase);
courseFilter.addEventListener("change", renderCourses);
courseForm.addEventListener("submit", addCourse);
countryModalClose.addEventListener("click", closeCountryDetails);
countryModal.addEventListener("click", event => {
    if (event.target === countryModal) closeCountryDetails();
});


document
    .getElementById("start-button")
    .addEventListener(
        "click",
        startGame
    );


document
    .getElementById("restart-button")
    .addEventListener(
        "click",
        startGame
    );


document
    .getElementById("home-button")
    .addEventListener(
        "click",
        showHome
    );


document
    .getElementById("country-submit")
    .addEventListener(
        "click",
        checkCountry
    );


countryInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            checkCountry();

        }

    }
);


/* =========================================================
   DÉMARRER
   ========================================================= */

async function startGame() {

    playerName = playerNameInput.value.trim();
    if (!playerName) {
        playerNameFeedback.textContent = "Indique ton pseudo avant de commencer.";
        playerNameFeedback.className = "player-name-feedback error";
        playerNameInput.focus();
        return;
    }

    playerNameFeedback.textContent = "";
    playerNameFeedback.className = "player-name-feedback";

    await countriesReady;
    renderDatabase();

    gameId++;
    document.body.classList.add("quiz-mode-active");
    GAME_MODE = gameModeSelect.value;
    TOTAL_ROUNDS = Number(questionCountSelect.value);

    homeScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    databaseScreen.classList.remove("active");
    coursesScreen.classList.remove("active");
    quizScreen.classList.add("active");

    round = 1;
    score = 0;
    stage = 1;
    usedCountries = [];
    mistakes = [];

    scores = {
        country: 0,
        flag: 0,
        leader: 0,
        capital: 0
    };

    totalRoundsElement.textContent = TOTAL_ROUNDS;
    updateScore();
    updateRound();
    nextCountry();
}


/* =========================================================
   PAYS SUIVANT
   ========================================================= */

function nextCountry() {

    let available =
        COUNTRIES.filter(
            country =>
                !usedCountries.includes(
                    country.iso2
                )
        );


    if (
        available.length === 0
    ) {

        usedCountries = [];

        available =
            [...COUNTRIES];

    }


    currentCountry =
        available[
            Math.floor(
                Math.random() *
                available.length
            )
        ];


    usedCountries.push(
        currentCountry.iso2
    );


    updateRound();

    stage = 1;
    showStage(1);

}


/* =========================================================
   CARTE — carte muette en une seule couche
   ========================================================= */

let quizMap = null;
let countriesLayer = null;
let worldGeoJSON = null;
let worldGeoJSONPromise = null;
let mapRequestId = 0;

const WORLD_GEOJSON_URL =
    "https://raw.githubusercontent.com/datasets/geo-countries/main/data/countries.geojson";

async function drawCountryMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement || !currentCountry) return;

    const countryAtRequest = currentCountry;
    const requestId = ++mapRequestId;

    const showMapMessage = message => {
        let placeholder = mapElement.querySelector(".map-placeholder");
        if (!placeholder) {
            placeholder = document.createElement("div");
            placeholder.className = "map-placeholder";
            mapElement.appendChild(placeholder);
        }
        placeholder.innerHTML = message;
    };

    // Toujours masquer/retirer l'ancien état de chargement.
    mapElement.classList.remove("loading");

    // Initialisation Leaflet une seule fois.
    if (!quizMap) {

        // On ne vide le conteneur (placeholder "Chargement…") qu'avant
        // la toute première création de la carte. Le vider à nouveau
        // par la suite détruirait les éléments internes de Leaflet
        // (panneaux, tuiles, contrôles) sans que Leaflet le sache,
        // ce qui casse l'affichage dès la 2e apparition de l'étape carte.
        mapElement.innerHTML = "";

        quizMap = L.map(mapElement, {
            zoomControl: true,
            attributionControl: false,
            minZoom: 1,
            maxZoom: 7,
            worldCopyJump: false,
            renderer: L.canvas()
        }).setView([18, 0], 2);
    }

    // Important quand l'étape était auparavant masquée.
    await new Promise(resolve => requestAnimationFrame(resolve));
    quizMap.invalidateSize(true);

    try {
        // Chargement unique des frontières.
        if (!worldGeoJSON) {
            if (!worldGeoJSONPromise) {
                worldGeoJSONPromise = fetch(
                    WORLD_GEOJSON_URL,
                    { cache: "force-cache" }
                ).then(response => {
                    if (!response.ok) {
                        throw new Error("GeoJSON HTTP " + response.status);
                    }

                    return response.json();
                }).then(data => {
                    worldGeoJSON = data;
                    return data;
                });
            }

            await worldGeoJSONPromise;
        }

        if (requestId !== mapRequestId || countryAtRequest !== currentCountry) {
            return;
        }

        // Une seule couche GeoJSON à l'écran.
        if (countriesLayer) {
            countriesLayer.remove();
        }

        const oldPlaceholder = mapElement.querySelector(".map-placeholder");
        if (oldPlaceholder) oldPlaceholder.remove();

        const targetISO = String(countryAtRequest.iso2 || "").toUpperCase();

        countriesLayer = L.geoJSON(worldGeoJSON, {
            interactive: false,
            style: function(feature) {
                const p = feature.properties || {};
                const iso = String(
                    p["ISO3166-1-Alpha-2"] ||
                    p.ISO_A2 ||
                    p.iso_a2 ||
                    p.ISO2 ||
                    p.iso2 ||
                    ""
                ).toUpperCase();

                const isTarget = iso === targetISO;

                return {
                    color: isTarget ? "#ffffff" : "#737b84",
                    weight: isTarget ? 2.5 : 0.8,
                    fillColor: isTarget ? "#e53935" : "#d8dde2",
                    fillOpacity: isTarget ? 1 : 0.92
                };
            }
        }).addTo(quizMap);

        quizMap.setView([18, 0], 2);
        quizMap.invalidateSize(true);

    } catch (error) {
        console.error("Erreur de chargement de la carte :", error);

        // Une requête partagée en erreur doit pouvoir être retentée.
        worldGeoJSONPromise = null;

        if (requestId === mapRequestId) {
            showMapMessage(`
                <div style="font-size:42px">⚠️</div>
                <strong>Carte indisponible</strong>
                <small>Impossible de charger les frontières.</small>
            `);
        }
    }
}


function showStage(stage) {

    document.querySelectorAll(".quiz-step").forEach(element =>
        element.classList.add("hidden")
    );

    let actualStage = stage;

    if (GAME_MODE === "country") actualStage = 1;
    if (GAME_MODE === "flag") actualStage = 2;
    if (GAME_MODE === "capital") actualStage = 3;
    if (GAME_MODE === "leader") actualStage = 4;

    const config = {
        1: { label: "IDENTIFICATION", icon: "🗺️", category: "GÉOGRAPHIE", title: "Quel est ce pays ?", step: "map-step" },
        2: { label: "DRAPEAU", icon: "🏳️", category: "GÉOGRAPHIE", title: "Quel est le drapeau de ce pays ?", step: "flag-step" },
        3: { label: "CAPITALE", icon: "🏛️", category: "GÉOGRAPHIE", title: "Quelle est la capitale de ce pays ?", step: "capital-step" },
        4: { label: "CHEF D'ÉTAT", icon: "👤", category: "GÉOPOLITIQUE", title: "Qui est le chef d'État de ce pays ?", step: "leader-step" }
    }[actualStage];

    stageNumber.textContent = GAME_MODE === "mixed" ? actualStage : 1;
    progressFill.style.width = GAME_MODE === "mixed" ? ((actualStage / 4) * 100) + "%" : "100%";
    stageLabel.textContent = config.label;
    questionIcon.textContent = config.icon;
    questionCategory.textContent = config.category;
    questionTitle.textContent = config.title;

    document.getElementById(config.step).classList.remove("hidden");

    if (actualStage === 1) {
        countryInput.value = "";
        document.getElementById("country-feedback").textContent = "";
        setTimeout(() => drawCountryMap(), 50);
    }

    if (actualStage === 2) {
        document.getElementById("flag-country-name").textContent = currentCountry.name;
        createFlagOptions();
    }

    if (actualStage === 3) {
        document.getElementById("capital-country-name").textContent = currentCountry.name;
        createCapitalOptions();
    }

    if (actualStage === 4) {
        document.getElementById("leader-country-name").textContent = currentCountry.name;
        createLeaderOptions();
    }
}


/* =========================================================
   PAYS (carte muette)
   ========================================================= */

function checkCountry() {

    const submitButton =
        document.getElementById("country-submit");

    const feedback =
        document.getElementById("country-feedback");

    const answer =
        normalize(countryInput.value);

    const isCorrect =
        normalize(currentCountry.name) === answer ||
        currentCountry.aliases.some(
            alias => normalize(alias) === answer
        );

    countryInput.disabled = true;
    submitButton.disabled = true;

    if (isCorrect) {

        score++;
        scores.country++;
        updateScore();

        feedback.textContent = "✓ Bonne réponse !";
        feedback.className = "feedback success";

    } else {

        feedback.textContent =
            `✕ La bonne réponse était ${currentCountry.name}.`;
        feedback.className = "feedback error";

        mistakes.push({
            country: currentCountry.name,
            category: "Pays"
        });

    }

    const currentGameId = gameId;
    setTimeout(() => {
        if (currentGameId !== gameId) return;

        countryInput.disabled = false;
        submitButton.disabled = false;

        if (GAME_MODE === "mixed" && stage < 4) {
            stage++;
            showStage(stage);
        } else {
            finishRound();
        }

    }, 1000);

}


/* =========================================================
   DRAPEAUX
   ========================================================= */

function flagURL(country) {

    return (
        "https://flagcdn.com/w320/" +
        country.iso2 +
        ".png"
    );

}


function createFlagOptions() {

    const container =
        document.getElementById("flag-options");

    container.innerHTML = "";

    // Toujours 4 drapeaux : le bon + 3 pays différents.
    const others = shuffle(
        COUNTRIES.filter(country =>
            country.iso2 !== currentCountry.iso2
        )
    ).slice(0, 3);

    const options = shuffle([
        currentCountry,
        ...others
    ]);

    options.forEach(country => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.innerHTML = `
            <img
                src="${flagURL(country)}"
                alt="Drapeau"
            >
        `;

        button.addEventListener(
            "click",
            () => checkFlag(button, country)
        );

        container.appendChild(button);
    });
}


function checkFlag(
    button,
    country
) {

    disableOptions(
        "#flag-options .option"
    );


    if (
        country.iso2 ===
        currentCountry.iso2
    ) {

        button.classList.add(
            "correct"
        );

        score++;

        scores.flag++;

        updateScore();


        document.getElementById(
            "flag-feedback"
        ).textContent =
            "✓ Excellent !";


        document.getElementById(
            "flag-feedback"
        ).className =
            "feedback success";

    } else {

        button.classList.add(
            "incorrect"
        );


        document.getElementById(
            "flag-feedback"
        ).textContent =
            `✕ La bonne réponse était ${currentCountry.name}.`;


        document.getElementById(
            "flag-feedback"
        ).className =
            "feedback error";


        mistakes.push({

            country:
                currentCountry.name,

            category:
                "Drapeau"

        });

    }


    const currentGameId = gameId;
    setTimeout(() => {
        if (currentGameId !== gameId) return;
        if (GAME_MODE === "mixed" && stage < 4) {
            stage++;
            showStage(stage);
        } else {
            finishRound();
        }
    }, 1000);

}


/* =========================================================
   CHEF D'ÉTAT
   ========================================================= */

function createLeaderOptions() {

    const container =
        document.getElementById(
            "leader-options"
        );


    container.innerHTML = "";


    // On exclut les pays qui partagent le même chef d'État que le pays à
    // deviner ou entre eux (ex : Charles III pour le Royaume-Uni, le
    // Canada, l'Australie et la Nouvelle-Zélande), sinon la même réponse
    // peut apparaître deux fois parmi les 4 propositions.
    const seenLeaders = new Set([currentCountry.leader]);

    const others =
        shuffle(
            COUNTRIES.filter(
                country =>
                    country.iso2 !==
                    currentCountry.iso2
            )
        )
        .filter(country => {
            if (seenLeaders.has(country.leader)) return false;
            seenLeaders.add(country.leader);
            return true;
        })
        .slice(0, 3);


    const options =
        shuffle([

            currentCountry.leader,

            ...others.map(
                country =>
                    country.leader
            )

        ]);


    options.forEach(
        leader => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";

            button.textContent =
                leader;


            button.addEventListener(
                "click",
                () =>
                    checkLeader(
                        button,
                        leader
                    )
            );


            container.appendChild(
                button
            );

        }
    );

}


function checkLeader(
    button,
    answer
) {

    disableOptions(
        "#leader-options .option"
    );


    const correct =
        answer ===
        currentCountry.leader;


    if (correct) {

        button.classList.add(
            "correct"
        );

        score++;

        scores.leader++;

        updateScore();


        document.getElementById(
            "leader-feedback"
        ).textContent =
            "✓ Bonne réponse !";


        document.getElementById(
            "leader-feedback"
        ).className =
            "feedback success";

    } else {

        button.classList.add(
            "incorrect"
        );


        document.getElementById(
            "leader-feedback"
        ).textContent =
            `✕ La bonne réponse était ${currentCountry.leader}.`;


        document.getElementById(
            "leader-feedback"
        ).className =
            "feedback error";


        mistakes.push({

            country:
                currentCountry.name,

            category:
                "Chef d'État"

        });

    }


    const currentGameId = gameId;
    setTimeout(() => {
        if (currentGameId !== gameId) return;
        if (GAME_MODE === "mixed" && stage < 4) {
            stage++;
            showStage(stage);
        } else {
            finishRound();
        }
    }, 1000);

}


/* =========================================================
   CAPITALES
   ========================================================= */

function createCapitalOptions() {

    const container =
        document.getElementById(
            "capital-options"
        );


    container.innerHTML = "";


    const others =
        shuffle(
            COUNTRIES.filter(
                country =>
                    country.iso2 !==
                    currentCountry.iso2
            )
        )
        .slice(0, 3)
        .map(
            country =>
                country.capital
        );


    const options =
        shuffle([

            currentCountry.capital,

            ...others

        ]);


    options.forEach(
        capital => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";

            button.textContent =
                capital;


            button.addEventListener(
                "click",
                () =>
                    checkCapital(
                        button,
                        capital
                    )
            );


            container.appendChild(
                button
            );

        }
    );

}


function checkCapital(
    button,
    answer
) {

    disableOptions(
        "#capital-options .option"
    );


    const correct =
        normalize(answer) ===
        normalize(
            currentCountry.capital
        );


    if (correct) {

        button.classList.add(
            "correct"
        );

        score++;

        scores.capital++;

        updateScore();


        document.getElementById(
            "capital-feedback"
        ).textContent =
            "✓ Bonne réponse !";


        document.getElementById(
            "capital-feedback"
        ).className =
            "feedback success";

    } else {

        button.classList.add(
            "incorrect"
        );


        document.getElementById(
            "capital-feedback"
        ).textContent =
            `✕ La bonne réponse était ${currentCountry.capital}.`;


        document.getElementById(
            "capital-feedback"
        ).className =
            "feedback error";


        mistakes.push({

            country:
                currentCountry.name,

            category:
                "Capitale"

        });

    }


    const currentGameId = gameId;
    setTimeout(() => {
        if (currentGameId !== gameId) return;
        if (GAME_MODE === "mixed" && stage < 4) {
            stage++;
            showStage(stage);
        } else {
            finishRound();
        }
    }, 1000);

}


/* =========================================================
   FIN DE PARTIE
   ========================================================= */

function finishRound() {

    if (
        round >= TOTAL_ROUNDS
    ) {

        showResults();

        return;

    }


    round++;

    nextCountry();

}


/* =========================================================
   RÉSULTATS
   ========================================================= */

function showResults() {

    document.body.classList.remove("quiz-mode-active");
    quizScreen.classList.remove(
        "active"
    );

    resultScreen.classList.add(
        "active"
    );


    document.getElementById(
        "final-score"
    ).textContent =
        score;

    resultPlayerName.textContent = playerName;

    const maxScore = GAME_MODE === "mixed" ? TOTAL_ROUNDS * 4 : TOTAL_ROUNDS;
    const resultTotal = document.getElementById("result-total");
    if (resultTotal) resultTotal.textContent = maxScore;

    document.getElementById(
        "country-score"
    ).textContent =
        scores.country;


    document.getElementById(
        "flag-score"
    ).textContent =
        scores.flag;


    document.getElementById(
        "leader-score"
    ).textContent =
        scores.leader;


    document.getElementById(
        "capital-score"
    ).textContent =
        scores.capital;


    let message;


    const percentage = maxScore > 0 ? score / maxScore : 0;

    if (percentage >= 0.9) {

        message =
            "🔥 Exceptionnel !";

    } else if (percentage >= 0.75) {

        message =
            "🏆 Excellent résultat !";

    } else if (percentage >= 0.6) {

        message =
            "👏 Très bon résultat !";

    } else if (percentage >= 0.4) {

        message =
            "📚 Continue tes révisions !";

    } else {

        message =
            "💪 Il faut encore travailler !";

    }


    document.getElementById(
        "result-message"
    ).textContent =
        message;


    saveBestScore();
    saveLeaderboardScore();
    renderLeaderboard(leaderboardResultsList);

    displayMistakes();

}


/* =========================================================
   ERREURS
   ========================================================= */

function displayMistakes() {

    const container =
        document.getElementById(
            "mistakes-container"
        );


    container.innerHTML = "";


    if (
        mistakes.length === 0
    ) {

        container.innerHTML = `

            <div class="mistakes-title">
                Résultat
            </div>

            <div class="mistake">

                <strong>
                    🎯 Aucune erreur !
                </strong>

                <span>
                    Partie parfaite
                </span>

            </div>

        `;

        return;

    }


    const title =
        document.createElement(
            "div"
        );


    title.className =
        "mistakes-title";


    title.textContent =
        `Points à revoir (${mistakes.length})`;


    container.appendChild(
        title
    );


    mistakes.forEach(
        mistake => {

            const element =
                document.createElement(
                    "div"
                );


            element.className =
                "mistake";


            element.innerHTML = `

                <strong>
                    ${mistake.country}
                </strong>

                <span>
                    ${mistake.category}
                </span>

            `;


            container.appendChild(
                element
            );

        }
    );

}


/* =========================================================
   OUTILS
   ========================================================= */

function createCountryOptions(
    correct
) {

    const others =
        shuffle(
            COUNTRIES.filter(
                country =>
                    country.iso2 !==
                    correct.iso2
            )
        )
        .slice(0, 3);


    return shuffle([
        correct,
        ...others
    ]);

}


function shuffle(array) {

    const result =
        [...array];


    for (
        let i = result.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[j]
        ] =
        [
            result[j],
            result[i]
        ];

    }


    return result;

}


function disableOptions(
    selector
) {

    document
        .querySelectorAll(selector)
        .forEach(
            button =>
                button.disabled = true
        );

}


function normalize(text) {

    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        // Uniformise les apostrophes typographiques (\u2019) et les apostrophes
        // simples ('), sinon "C\u00f4te d'Ivoire" tap\u00e9 avec l'une ou l'autre
        // ne matche pas toujours l'alias attendu.
        .replace(/[\u2018\u2019`\u00b4]/g, "'")
        .trim();

}


/* =========================================================
   SCORE
   ========================================================= */

function updateScore() {

    scoreElement.textContent =
        score;

}


function updateRound() {
    roundElement.textContent = round;
    if (totalRoundsElement) totalRoundsElement.textContent = TOTAL_ROUNDS;
}


/* =========================================================
   MEILLEUR SCORE
   ========================================================= */

function saveBestScore() {

    const old =
        Number(
            localStorage.getItem(
                "geoquiz_best_score"
            ) || 0
        );


    if (
        score > old
    ) {

        localStorage.setItem(
            "geoquiz_best_score",
            score
        );

    }

}


function loadBestScore() {

    const best =
        Number(
            localStorage.getItem(
                "geoquiz_best_score"
            ) || 0
        );


    document.getElementById(
        "best-score-home"
    ).textContent =
        best;

}


function getLeaderboard() {
    try {
        const saved = JSON.parse(localStorage.getItem(LEADERBOARD_KEY) || "[]");
        return Array.isArray(saved) ? saved : [];
    } catch (error) {
        return [];
    }
}


function saveLeaderboardScore() {
    const leaderboard = getLeaderboard();
    leaderboard.push({
        name: playerName,
        score,
        maxScore: GAME_MODE === "mixed" ? TOTAL_ROUNDS * 4 : TOTAL_ROUNDS,
        date: new Date().toLocaleDateString("fr-FR")
    });

    leaderboard.sort((first, second) => {
        const firstRate = first.maxScore ? first.score / first.maxScore : 0;
        const secondRate = second.maxScore ? second.score / second.maxScore : 0;
        return secondRate - firstRate || second.score - first.score;
    });

    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard.slice(0, 10)));
}


function renderLeaderboard(container) {
    if (!container) return;

    const leaderboard = getLeaderboard();
    container.innerHTML = "";

    if (leaderboard.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "leaderboard-empty";
        emptyState.textContent = "Aucun résultat enregistré pour le moment.";
        container.appendChild(emptyState);
        return;
    }

    leaderboard.forEach((entry, index) => {
        const row = document.createElement("div");
        row.className = "leaderboard-row";
        row.innerHTML = `
            <strong class="leaderboard-rank">${index + 1}</strong>
            <span class="leaderboard-name"></span>
            <span class="leaderboard-score">${entry.score}/${entry.maxScore}</span>
        `;
        row.querySelector(".leaderboard-name").textContent = entry.name;
        container.appendChild(row);
    });
}


/* =========================================================
   ACCUEIL
   ========================================================= */

function showHome() {

    document.body.classList.remove("quiz-mode-active");
    quizScreen.classList.remove(
        "active"
    );

    resultScreen.classList.remove(
        "active"
    );

    homeScreen.classList.add(
        "active"
    );

    setActiveTab(quizTab);

    loadBestScore();

}


function setActiveTab(activeTab) {
    [quizTab, databaseTab, coursesTab].forEach(tab => {
        const isActive = tab === activeTab;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
    });
}


function showQuizTab() {
    databaseScreen.classList.remove("active");
    coursesScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    if (!quizScreen.classList.contains("active")) {
        document.body.classList.remove("quiz-mode-active");
        homeScreen.classList.add("active");
    }

    setActiveTab(quizTab);
}


function showDatabaseTab() {
    document.body.classList.remove("quiz-mode-active");
    homeScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    coursesScreen.classList.remove("active");
    databaseScreen.classList.add("active");

    setActiveTab(databaseTab);
    renderDatabase();
}


function showCoursesTab() {
    document.body.classList.remove("quiz-mode-active");
    homeScreen.classList.remove("active");
    quizScreen.classList.remove("active");
    resultScreen.classList.remove("active");
    databaseScreen.classList.remove("active");
    coursesScreen.classList.add("active");

    setActiveTab(coursesTab);
    renderCourses();
}


function renderDatabase() {
    const query = normalize(databaseSearch.value);
    const matchingCountries = COUNTRIES.filter(country => {
        const searchableText = normalize([
            country.name,
            country.capital,
            country.leader,
            ...country.aliases
        ].join(" "));

        return searchableText.includes(query);
    });

    databaseCount.textContent = matchingCountries.length;
    databaseGrid.innerHTML = "";

    if (matchingCountries.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "database-empty";
        emptyState.textContent = "Aucun résultat pour cette recherche.";
        databaseGrid.appendChild(emptyState);
        return;
    }

    matchingCountries.forEach(country => {
        const card = document.createElement("article");
        card.className = "database-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Ouvrir la fiche de ${country.name}`);
        card.addEventListener("click", () => showCountryDetails(country));
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                showCountryDetails(country);
            }
        });
        card.innerHTML = `
            <div class="database-card-top">
                <img src="${flagURL(country)}" alt="Drapeau de ${country.name}" loading="lazy">
                <h3>${country.name}</h3>
            </div>
            <dl>
                <dt>Capitale</dt>
                <dd>${country.capital}</dd>
                <dt>Dirigeant</dt>
                <dd>${country.leader}</dd>
            </dl>
        `;
        databaseGrid.appendChild(card);
    });
}


function showCountryDetails(country) {
    countryModalContent.innerHTML = `
        <span class="eyebrow">FICHE PAYS</span>
        <h2 id="country-modal-title">${country.name}</h2>
        <p class="country-history">
            ${country.name} est un pays dont la capitale est ${country.capital}.
            Cette fiche constitue un repère de révision pour situer le pays,
            comprendre son environnement et poursuivre l'étude de son histoire.
        </p>
        <div class="country-detail-grid">
            <div>
                <h3>Dirigeants importants</h3>
                <ul>
                    <li>${country.leader}</li>
                </ul>
            </div>
            <div>
                <h3>Informations essentielles</h3>
                <dl>
                    <dt>Capitale</dt>
                    <dd>${country.capital}</dd>
                    <dt>Code pays</dt>
                    <dd>${country.iso2.toUpperCase()}</dd>
                </dl>
            </div>
        </div>
    `;
    countryModal.classList.remove("hidden");
    countryModalClose.focus();
}


function closeCountryDetails() {
    countryModal.classList.add("hidden");
}


function addCourse(event) {
    event.preventDefault();

    const titleInput = document.getElementById("course-title");
    const fileInput = document.getElementById("course-file");
    const file = fileInput.files[0];
    if (!file) return;

    const allowedExtensions = /\.(pdf|xls|xlsx|doc|docx)$/i;
    if (!allowedExtensions.test(file.name)) {
        courseFeedback.textContent = "Format non accepté. Utilise PDF, Excel ou Word.";
        courseFeedback.className = "course-feedback error";
        return;
    }

    courses.unshift({
        id: Date.now(),
        title: titleInput.value.trim(),
        category: document.getElementById("course-category").value,
        fileName: file.name,
        fileUrl: URL.createObjectURL(file)
    });

    courseForm.reset();
    courseFeedback.textContent = "Cours ajouté à la banque.";
    courseFeedback.className = "course-feedback success";
    renderCourses();
}


function renderCourses() {
    const selectedCategory = courseFilter.value;
    const visibleCourses = courses.filter(course =>
        selectedCategory === "all" || course.category === selectedCategory
    );

    courseList.innerHTML = "";
    if (visibleCourses.length === 0) {
        const emptyState = document.createElement("p");
        emptyState.className = "database-empty";
        emptyState.textContent = "Aucun cours dans cette sous-partie pour le moment.";
        courseList.appendChild(emptyState);
        return;
    }

    visibleCourses.forEach(course => {
        const item = document.createElement("article");
        item.className = "course-item";
        item.innerHTML = `
            <div>
                <span class="course-category">${course.category}</span>
                <h4>${course.title}</h4>
                <small>${course.fileName}</small>
            </div>
            <div class="course-actions">
                <a class="course-open" href="${course.fileUrl}" target="_blank" rel="noopener">Ouvrir</a>
                <button type="button" class="course-delete">Supprimer</button>
            </div>
        `;
        item.querySelector(".course-delete").addEventListener("click", () => {
            URL.revokeObjectURL(course.fileUrl);
            courses = courses.filter(item => item.id !== course.id);
            renderCourses();
        });
        courseList.appendChild(item);
    });
}


loadBestScore();
renderDatabase();
countriesReady.then(renderDatabase);
renderLeaderboard(leaderboardHome);