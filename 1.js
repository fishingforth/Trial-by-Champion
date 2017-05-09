ProgramFont = "Comic Sans MS";
StartingSpeeds = new Array();
Accelerations = new Array();
Decelerations = new Array();
CarColors = new Array("#f40000", "#0000ff", "#ff7f00", "#723cfe", "#f2f208", "#48a000", "#ff00ff");
AccelerationWords = new Array("None", "Yugolike", "Edsellike", "Hondalike", "Lexuslike", "Porchelike", "Teslalike");
DecelerationWords = new Array("None", "Pintolike", "Jeeplike", "Toyotalike", "Volvolike", "Porchelike", "Teslalike");
SpeedWords = new Array("Rest", "Snail", "Turtle", "Deer", "Rabbit", "American Pharoah", "Cheetah", "Golden Eagle");

CarVelocities = new Array();
CarPositions = new Array();
CarTimes = new Array();

HighGrid = 200;
LowGrid = 555;
LeftGrid = 45;
RightGrid = 580;
DeltaY = LowGrid - HighGrid;
DeltaX = RightGrid - LeftGrid;
MidX = (RightGrid-LeftGrid)/2 + LeftGrid;
MidY = LowGrid - (LowGrid - HighGrid)/2;
MaxY = 50;
IncY = 10;
MaxX = 30;
IncX = 10;
BigLinesX = 3;
XSpace = DeltaX/BigLinesX;
LinesBetweenX = 10;
BigLinesY = 5;
YSpace = DeltaY/BigLinesY;
LinesBetweenY = 10;
FontSizeNumbers = 10;
FontSizeVariables = 14;
XScale = DeltaX/MaxX;
YScale = DeltaY/MaxY;

MaxPosY = 1000;
YPosScale = DeltaY/MaxPosY;
IncPosY = 200;

DisplayGraph = "Velocity";

Languages = new Array("English", "Croatian", "Polish", "Macedonian");

AccelerationWordsCroatian = new Array("Nema", "kao jugo", "kao ford edsel", "kao honda", "kao lexus", "kao porche", "kao tesla");
DecelerationWordsCroatian = new Array("Nema", "kao pinto", "kao jeep", "kao toyota", "kao volvo", "kao porche", "kao tesla");
SpeedWordsCroatian = new Array("Odmara", "PuÅ¾", "KornjaÄa", "Jelen", "Zec", "TrkaÄ‡i konj", "Gepard", "Zlatni orao");

AccelerationWordsPolish = new Array("Brak", "jak Yugo", "jak Edsel", "jak Honda", "jak Lexus", "jak Porche", "jak Tesla");
DecelerationWordsPolish = new Array("Brak", "jak Pinto", "jak Jeep", "jak Toyota", "jak Volvo", "jak Porche", "jak Tesla");
SpeedWordsPolish = new Array("Spoczynek", "Åšlimak", "Å»Ã³Å‚w", "JeleÅ„", "ZajÄ…c", "KoÅ„ wyÅ›cigowy", "Gepard", "Golden Eagle");



AccelerationWordsMacedonian = new Array("Ð½ÐµÐ¼Ð°", "ÐºÐ°ÐºÐ¾ ÐˆÑƒÐ³Ð¾", "ÐºÐ°ÐºÐ¾ Ð¤Ð¾Ñ€Ð´ ÐµÑÐµÐ»", "ÐºÐ°ÐºÐ¾ Ð¥Ð¾Ð½Ð´Ð°", "ÐºÐ°ÐºÐ¾ Ð›ÐµÐºÑÑƒÑ", "ÐºÐ°ÐºÐ¾ ÐŸÐ¾Ñ€ÑˆÐµ", "ÐºÐ°ÐºÐ¾ Ð¢ÐµÑÐ»Ð°");
DecelerationWordsMacedonian = new Array("Ð½ÐµÐ¼Ð°", "ÐºÐ°ÐºÐ¾ ÐŸÑƒÐ½Ñ‚Ð¾", "ÐºÐ°ÐºÐ¾ ÐÐ¸Ð¿", "ÐºÐ°ÐºÐ¾ Ð¢Ð¾Ñ˜Ð¾Ñ‚Ð°", "ÐºÐ°ÐºÐ¾ Ð’Ð¾Ð»Ð²Ð¾", "ÐºÐ°ÐºÐ¾ ÐŸÐ¾Ñ€ÑˆÐµ", "ÐºÐ°ÐºÐ¾ Ð¢ÐµÑÐ»Ð°");
SpeedWordsMacedonian = new Array("Ð¼Ð¸Ñ€ÑƒÐ²Ð°", "ÐŸÐ¾Ð»Ð¶Ð°Ð²", "Ð–ÐµÐ»ÐºÐ°", "Ð•Ð»ÐµÐ½", "Ð—Ð°Ñ˜Ð°Ðº", "Ð¢Ñ€ÐºÐ°Ñ‡ÐºÐ¸ ÐºÐ¾Ñš", "Ð“ÐµÐ¿Ð°Ñ€Ð´", "Ð—Ð»Ð°Ñ‚ÐµÐ½ Ð¾Ñ€ÐµÐ»");

ProgramTitleIs = new Array();
ProgramTitleIs[0] = "Graphing of Motion Lab";
ProgramTitleIs[1] = "Dijagrami gibanja-laboratorij";
ProgramTitleIs[2] = "Wykresy ruchu - Ä‡wiczenia";
ProgramTitleIs[3] = "Ð“Ñ€Ð°Ñ„Ð¸Ñ†Ð¸ Ð½Ð° Ð´Ð²Ð¸Ð¶ÐµÑšÐµ";



PictureLocationPlace = new Array();
PictureLocationPlace[0] = "http://www.thephysicsaviary.com/Physics/Programs/Labs/GraphingOfMotionLab/images/OverviewPicture.png";
PictureLocationPlace[1] = "http://www.thephysicsaviary.com/Physics/Programs/Labs/GraphingOfMotionLab/images/OverviewPictureCroatian.png";
PictureLocationPlace[2] = "http://www.thephysicsaviary.com/Physics/Programs/Labs/GraphingOfMotionLab/images/OverviewPicturePolish.png";
PictureLocationPlace[3] = "http://www.thephysicsaviary.com/Physics/Programs/Labs/GraphingOfMotionLab/images/OverviewPictureMacedonian.png";



Directions = new Array();
Directions[0] = "You are a professional driver on a closed 1 km course.  Use your gas and brakes to create different motion graphs.  Click on the y-axis of the graph to change what is being graphed.<br /><br />If you select desktop version, you must click on hold the gas pedal and/or the brake pedal to control the car.<br /><br />If you select touch version, you must touch and release the gas pedal or the brake pedal to activate and touch and release the pedal again to deactivate.";
Directions[1] = "Profesionalni ste vozaÄ na zatvorenoj dionici ceste dugoj 1km. PomoÄ‡u pedala koÄnice i gasa kreirajte razliÄite dijagrame gibanja. Kliknite na y-os kako bi promijenili veliÄinu prikazanu na njoj.<br /><br />U verziji za desktop pedale gasa/koÄnice kliknite i drÅ¾ite svo vrijeme ubrzavanja/usporavanja.<br /><br />U verziji za ekrane osjetljive na dodir kliknite jednom na pedalu za aktivaciju, i joÅ¡ jednom za deaktivaciju ubrzavanja/koÄenja. ";
Directions[2] = "JesteÅ› zawodowym kierowcÄ… na zamkniÄ™tym 1 km torze. UÅ¼yj gazu i hamulca, aby tworzyÄ‡ rÃ³Å¼ne wykresy ruchu. Kliknij na osi Y wykresu, aby zmieniÄ‡ jego rodzaj.<br /><br />JeÅ›li wybierzesz wersjÄ™ desktop, naleÅ¼y kliknÄ…Ä‡ i przytrzymaÄ‡ pedaÅ‚ gazu lub hamulca, Å¼eby zmieniaÄ‡ prÄ™dkoÅ›Ä‡ samochodu.<br /><br />JeÅ›li wybierzesz wersjÄ™ dotykowÄ…, naleÅ¼y dotknÄ…Ä‡ i zwolniÄ‡ pedaÅ‚ gazu lub hamulca aby go aktywowaÄ‡ i ponownie dotknÄ…Ä‡ i zwolniÄ‡, aby go wyÅ‚Ä…czyÄ‡.";
Directions[3] = " Ð¢Ð¸ ÑÐ¸ Ð¿Ñ€Ð¾Ñ„ÐµÑÐ¸Ð¾Ð½Ð°Ð»ÐµÐ½ Ð²Ð¾Ð·Ð°Ñ‡ Ð½Ð° Ð·Ð°Ñ‚Ð²Ð¾Ñ€ÐµÐ½Ð° Ð¿Ð°Ñ‚ÐµÐºÐ° ÑÐ¾ Ð´Ð¾Ð»Ð¶Ð¸Ð½Ð° 1 km. Ð¡Ð¾ Ð¿Ð¾Ð¼Ð¾Ñˆ Ð½Ð° Ð¿ÐµÐ´Ð°Ð»Ð¸Ñ‚Ðµ ÐšÐžÐ§ÐÐ˜Ð¦Ð Ð¸ Ð“ÐÐ¡ ÐºÑ€ÐµÐ¸Ñ€Ð°Ñ˜ Ñ€Ð°Ð·Ð»Ð¸Ñ‡Ð½Ð¸ Ð³Ñ€Ð°Ñ„Ð¸Ñ†Ð¸ Ð½Ð° Ð±Ñ€Ð·Ð¸Ð½Ð°Ñ‚Ð° Ð¸ Ð¿Ð¾Ð»Ð¾Ð¶Ð±Ð°Ñ‚Ð° Ð½Ð° Ð°Ð²Ñ‚Ð¾Ð¼Ð¾Ð±Ð¸Ð»Ð¾Ñ‚. ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ Ð½Ð° Ð¾Ñ€Ð´Ð¸Ð½Ð°Ñ‚Ð½Ð°Ñ‚Ð° Ð¾ÑÐºÐ° Ð·Ð° Ð´Ð° Ñ˜Ð° Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸Ñˆ Ñ„Ð¸Ð·Ð¸Ñ‡ÐºÐ°Ñ‚Ð° Ð²ÐµÐ»Ð¸Ñ‡Ð¸Ð½Ð° Ð¿Ñ€Ð¸ÐºÐ°Ð¶Ð°Ð½Ð° Ð½Ð° Ð½ÐµÐ°.<br /><br /> Ð’Ð¾ Ð²ÐµÑ€Ð·Ð¸Ñ˜Ð°Ñ‚Ð° Desktop Ð¿Ñ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ Ð½Ð° Ð¿ÐµÐ´Ð°Ð»Ð¸Ñ‚Ðµ Ð·Ð° ÐºÐ¾Ñ‡ÐµÑšÐµ Ð¸ Ð³Ð°Ñ Ð¸ Ð´Ñ€Ð¶Ð¸ Ð³Ð¸ Ð¿Ñ€Ð¸Ñ‚Ð¸ÑÐ½Ð°Ñ‚Ð¸ Ñ†ÐµÐ»Ð¾ Ð²Ñ€ÐµÐ¼Ðµ Ð´Ð¾Ð´ÐµÐºÐ° Ð°Ð²Ñ‚Ð¾Ð¼Ð¾Ð±Ð¸Ð»Ð¾Ñ‚ Ð·Ð°Ð±Ñ€Ð·ÑƒÐ²Ð°/ÐºÐ¾Ñ‡Ð¸<br /><br /> Ð’Ð¾ Ð²ÐµÑ€Ð·Ð¸Ñ˜Ð°Ñ‚Ð° Ð¾ÑÐµÑ‚Ð»Ð¸Ð²Ð° Ð½Ð° Ð´Ð¾Ð¿Ð¸Ñ€ Ð¿Ñ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ ÑÐ°Ð¼Ð¾ ÐµÐ´Ð½Ð°Ñˆ Ð½Ð° Ð¿ÐµÐ´Ð°Ð»Ð°Ñ‚Ð° Ð·Ð° Ð°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°ÑšÐµ Ð¸ ÑƒÑˆÑ‚Ðµ ÐµÐ´Ð½Ð°Ñˆ Ð·Ð° Ð´ÐµÐ°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°ÑšÐµ Ð½Ð° Ð³Ð°ÑÐ¾Ñ‚/ÐºÐ¾Ñ‡Ð½Ð¸Ñ†Ð°Ñ‚Ð°.";

Button1Text = new Array();
Button1Text[0] = "Desktop";
Button1Text[1] = "Desktop";
Button1Text[2] = "Desktop";
Button1Text[3] = "Desktop";



Button2Text = new Array();
Button2Text[0] = "Touch";
Button2Text[1] = "Dodir";
Button2Text[2] = "Dotykowy";
Button2Text[3] = "Ð”Ð¾Ð¿Ð¸Ñ€";


Button3Text = new Array();
Button3Text[0] = "Start";
Button3Text[1] = "Kreni";
Button3Text[2] = "Start";
Button3Text[3] = "Ð¡Ñ‚Ð°Ñ€Ñ‚";


Button4Text = new Array();
Button4Text[0] = "Reset";
Button4Text[1] = "Ponovo";
Button4Text[2] = "Resetuj";
Button4Text[3] = "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾";


SystemMessage1Text = new Array();
SystemMessage1Text[0] = "Click \"Start\" to start your motion, then use the pedals to change speeds";
SystemMessage1Text[1] = "Kliknite na \"Kreni\" kako bi poÄeli s gibanjem, a pomoÄ‡u pedala mijenjajte brzinu gibanja. ";
SystemMessage1Text[2] = "Kliknij \"Start\" aby rozpoczÄ…Ä‡ ruch, a nastÄ™pnie uÅ¼ywaj pedaÅ‚Ã³w do zmiany prÄ™dkoÅ›ci";
SystemMessage1Text[3] = "ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ \"Ð¡Ñ‚Ð°Ñ€Ñ‚\" Ð·Ð° Ð¿Ð¾Ñ‡ÐµÑ‚Ð¾Ðº Ð½Ð° Ñ‚Ð²Ð¾ÐµÑ‚Ð¾ Ð´Ð²Ð¸Ð¶ÐµÑšÐµ, Ð° Ð¿Ð¾Ñ‚Ð¾Ð°  ÐºÐ¾Ñ€Ð¸ÑÑ‚Ð¸ Ð³Ð¸ Ð¿ÐµÐ´Ð°Ð»Ð¸Ñ‚Ðµ Ð´Ð° Ñ˜Ð° Ð¼ÐµÐ½ÑƒÐ²Ð°Ñˆ Ð±Ñ€Ð·Ð¸Ð½Ð°Ñ‚Ð° ";
;


SystemMessage2Text = new Array();
SystemMessage2Text[0] = "Game Over.  Insert a quarter to play again or just hit the reset button.";
SystemMessage2Text[1] = "Game O67ver. Ubacite novÄiÄ‡ za nastavak, ili jednostavno pritisnite Ponovo.";
SystemMessage2Text[2] = "Gra skoÅ„czona.  WrzuÄ‡ monetÄ™, aby kontynuowaÄ‡, lub po prostu naciÅ›nij przycisk Resetuj.";
SystemMessage2Text[3] = "ÐšÑ€Ð°Ñ˜ Ð½Ð° Ð¸Ð³Ñ€Ð°Ñ‚Ð°.  ÐŸÑ€Ð¸Ñ‚Ð¸ÑÐ½Ð¸ Ð³Ð¾ ÐºÐ¾Ð¿Ñ‡ÐµÑ‚Ð¾ ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾, Ð·Ð° Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ Ð´Ð° Ð·Ð°Ð¿Ð¾Ñ‡Ð½ÐµÑˆ.";
;


SystemMessage3Text = new Array();
SystemMessage3Text[0] = "Use the pedals to change the speed of your vehicle.  Feel free to change the amount of acceleration or braking at any time.";
SystemMessage3Text[1] = " PomoÄ‡u pedala mijenjajte brzinu svog vozila. U svakom trenutku moÅ¾ete promijeniti veliÄinu akceleracije, ili intenzitet koÄenja.";
SystemMessage3Text[2] = "UÅ¼yj pedaÅ‚Ã³w, aby zmieniaÄ‡ prÄ™dkoÅ›Ä‡ pojazdu. W dowolnym momencie zmieniaj wartoÅ›Ä‡ przyspieszania lub opÃ³Åºnienia.";
SystemMessage3Text[3] = " ÐšÐ¾Ñ€Ð¸ÑÑ‚Ð¸ Ð³Ð¸ Ð¿ÐµÐ´Ð°Ð»Ð¸Ñ‚Ðµ Ð·Ð° Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð° Ð½Ð° Ð±Ñ€Ð·Ð¸Ð½Ð°Ñ‚Ð° Ð½Ð° Ñ‚Ð²Ð¾Ñ˜Ð¾Ñ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð¾Ð±Ð¸Ð». Ð’Ð¾ ÑÐµÐºÐ¾Ðµ Ð²Ñ€ÐµÐ¼Ðµ Ð¼Ð¾Ð¶ÐµÑˆ Ð´Ð° Ð³Ð¾ Ð¼ÐµÐ½ÑƒÐ²Ð°Ñˆ Ð·Ð°Ð±Ñ€Ð·ÑƒÐ²Ð°ÑšÐµÑ‚Ð¾ Ð½Ð° Ð°Ð²Ñ‚Ð¾Ð¼Ð¾Ð±Ð¸Ð»Ð¾Ñ‚ Ð¸Ð»Ð¸ Ð´Ð° ÐºÐ¾Ñ‡Ð¸Ñˆ";


SystemMessage4Text = new Array();
SystemMessage4Text[0] = "Make any necessary changes and ride again.";
SystemMessage4Text[1] = "Izvedite nuÅ¾ne promjene i krenite ponovo.";
SystemMessage4Text[2] = "Dokonaj koniecznych zmian i jedÅº ponownie.";
SystemMessage4Text[3] = "ÐÐ°Ð¿Ñ€Ð°Ð²Ð¸ Ð³Ð¸ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð½Ð¸Ñ‚Ðµ Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸ Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ ÑÑ‚Ð°Ñ€Ñ‚ÑƒÐ²Ð°Ñ˜ ÑÐ¾ Ð¸Ð³Ñ€Ð°Ñ‚Ð°";


XAxisTitleText = new Array();
XAxisTitleText[0] = "Time (s)";
XAxisTitleText[1] = "Vrijeme (s)";
XAxisTitleText[2] = "Czas (s)";
XAxisTitleText[3] = "Ð’Ñ€ÐµÐ¼Ðµ (s)";


YAxisTitle1Text = new Array();
YAxisTitle1Text[0] = "Position (m)";
YAxisTitle1Text[1] = "Put (m)";
YAxisTitle1Text[2] = "PoÅ‚oÅ¼enie (m)";
YAxisTitle1Text[3] = "ÐŸÐ¾Ð»Ð¾Ð¶Ð±Ð° (m )";


YAxisTitle2Text = new Array();
YAxisTitle2Text[0] = "Velocity (m/s)";
YAxisTitle2Text[1] = "Brzina (m/s)";
YAxisTitle2Text[2] = "PrÄ™dkoÅ›Ä‡ (m/s)";
YAxisTitle2Text[3] = "Ð‘Ñ€Ð·Ð¸Ð½Ð° (m/s) ";


AccelerationText = new Array();
AccelerationText[0] = "Acceleration (m/s/s)";
AccelerationText[1] = "Ubrzanje (m/s/s)";
AccelerationText[2] = "Przyspieszenie (m/s/s)";
AccelerationText[3] = "Ð—Ð°Ð±Ñ€Ð·ÑƒÐ²Ð°ÑšÐµ (m/s/s)";


InitialSpeedText = new Array();
InitialSpeedText[0] = "Initial Speed (m/s)";
InitialSpeedText[1] = "PoÄetna brzina (m/s)";
InitialSpeedText[2] = "PrÄ™dkoÅ›Ä‡ pocz. (m/s)";
InitialSpeedText[3] = "ÐŸÐ¾Ñ‡ÐµÑ‚Ð½Ð° Ð±Ñ€Ð·Ð¸Ð½Ð° (m/s)";


BrakingRateText = new Array();
BrakingRateText[0] = "Braking Rate (m/s/s)";
BrakingRateText[1] = "Usporavanje (m/s/s)";
BrakingRateText[2] = "OpÃ³Åºnienie (m/s/s)";
BrakingRateText[3] = "ÐšÐ¾Ñ‡ÐµÑšÐµ (m/s/s)";


TimingText = new Array();
TimingText[0] = "Time Accelerating: ";
TimingText[1] = "Vrijeme ubrzavanja";
TimingText[2] = "Czas przyspieszania: ";
TimingText[3] = "Ð’Ñ€ÐµÐ¼Ðµ Ð½Ð° Ð·Ð°Ð±Ñ€Ð·ÑƒÐ²Ð°ÑšÐµ:";

/* called by onLoad */

function initialize(){

    theCanvas = document.getElementById("CanvasOne");
    ctx = theCanvas.getContext("2d");

    for (i = 0; i<7; i++){
        StartingSpeeds[i] = Math.floor(Math.random()*2 + 3*(i-1));
        Accelerations[i] = Math.floor(Math.random()*8 + 10*(i-1) + 5)/10;
        Decelerations[i] = Math.floor(Math.random()*8 + 10*(i-1) + 5)/10;
    }

    StartingSpeeds[0] = 0;
    Accelerations[0] = 0;
    Decelerations[0] = 0;

    StartingSpeeds[3] = Math.floor(Math.random()*3 + 10);

    StartingSpeeds[4] = Math.floor(Math.random()*3 + 15);

    StartingSpeeds[5] = Math.floor(Math.random()*3 + 20);

    StartingSpeeds[6] = Math.floor(Math.random()*8 + 30);

    StartingSpeeds[7] = Math.floor(Math.random()*8 + 40);

    startspeednumber = 3;
    accelerationnumber = 3;
    decelerationnumber = 3;

    numberofcarpositions = 0;

    colornumber = Math.floor(Math.random()*6 + 0);

    StartingSpeeds[0] = 0;

    CarLengthm = 5;
    CarinPix = 100;

    mToPix = CarinPix/CarLengthm;

    xFG = 0;
    yFG = 160;

    CalculateParameters();

    document.getElementById("LabDirections").innerHTML = Directions[languagenumber];
    document.getElementById("BeginButton").innerHTML = Button1Text[languagenumber];
    document.getElementById("TouchButton").innerHTML = Button2Text[languagenumber];
    document.getElementById("StartButton").innerHTML = Button3Text[languagenumber];
    document.getElementById("ResetButton").innerHTML = Button4Text[languagenumber];
    document.getElementById("SystemMessage").innerHTML = SystemMessage1Text[languagenumber];
    document.getElementById("ProgramTitle").innerHTML = ProgramTitleIs[languagenumber];
    document.title = ProgramTitleIs[languagenumber];
    document.getElementById("OverviewPicture").src = PictureLocationPlace[languagenumber];
}

function CalculateParameters(){

    startspeed=StartingSpeeds[startspeednumber];

    acceleration=Accelerations[accelerationnumber];

    deceleration=Decelerations[decelerationnumber];

    Speed = startspeed;

    totaltime = 0;
    timeaccel = 0;
    timedecel = 0;
    count = 0;
    Angle = 0;
    accel = "no";
    decel = "no"
    Moving = "no";

    xCar = 0;
    yCar = 152;
    xPos = 0;

    document.getElementById("SystemMessage").innerHTML = SystemMessage1Text[languagenumber];

    CarVelocities[0] = LowGrid-Speed*YScale;
    CarPositions[0] = LowGrid-0.0*YPosScale;
    CarTimes[0] = LeftGrid+0.0*XScale;
}


/* Called by the Begin Button */

function LoadIt(x){
    GameVersion = x;
    document.getElementById("LabSection").style.visibility = "visible";
    document.getElementById("OverviewSection").style.visibility = "hidden";
    document.getElementById("ResetButton").style.visibility = "hidden";
    if (x == 1){
        document.getElementById("GasPedal2").style.visibility = "hidden";
        document.getElementById("BrakePedal2").style.visibility = "hidden";
    }
    else{
        document.getElementById("GasPedal").style.visibility = "hidden";
        document.getElementById("BrakePedal").style.visibility = "hidden";

    }
    d = new Date();
    nowtime = d.getTime();
    StartItMoving = setInterval(drawingpart, 20);

}

function drawingpart(){

    /* 	background drawing */

    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(0,0,900,600);

    lasttime = nowtime;

    DrawBackground();

    d = new Date();
    nowtime = d.getTime();

    if (accel == "no"){
        DrawGasPedal(760,400,100,200);
    }
    else{
        DrawGasPedal(770,410,100,190);
        if (Moving == "yes"){
            timeaccel = (nowtime - startacctime)/1000;
            changeinspeed = acceleration*timeaccel;
            Speed = startspeed+changeinspeed;
        }

        if (Speed > 50){
            Speed = 50;
            accel = "no";
        }
    }
    if (decel == "no"){
        DrawBrakePedal(600,450,125,75);
    }
    else{
        DrawBrakePedal(605,440,125,75);
        if (Moving == "yes"){
            timedecel = (nowtime - startdectime)/1000;
            changeinspeed = deceleration*timedecel;
            Speed = startspeed-changeinspeed;
        }

        if (Speed < 0){
            Speed = 0;
            decel = "no";
        }
    }

    if (Moving == "yes"){
        totaltime = (nowtime - movetime)/1000;
        if (totaltime >= MaxX){
            EndTrial();
        }
    }

    if (Moving == "yes"){
        changeintime = (nowtime-lasttime)/1000;
        AngularSpeed = Speed/0.5334;
        Angle = Angle + AngularSpeed*changeintime;
    }

    if (Moving == "yes"){
        FractionFG = xCar/850;
        if (FractionFG > 1){
            FractionFG = 1;
        }
        FractionCar = 1-FractionFG;

        CarSpeed = FractionCar*Speed;
        ForeGroundSpeed = FractionFG*Speed;
        xCar = xCar + CarSpeed*(changeintime)*mToPix;
        xFG = xFG - ForeGroundSpeed*(changeintime)*mToPix;
        xPos = (xCar - xFG)/mToPix;
        CarPositions[numberofcarpositions] = LowGrid-xPos*YPosScale;
        CarTimes[numberofcarpositions] = LeftGrid+totaltime*XScale;
        CarVelocities[numberofcarpositions] = LowGrid-Speed*YScale;
        numberofcarpositions++;
        if (xPos >= 1000){
            EndTrial();
        }
    }
    if (Moving == "off"){
        CarSpeed = 1.0*Speed;
        ForeGroundSpeed = 0.0*Speed;
        xCar = xCar + CarSpeed*(changeintime)*mToPix;
        xFG = xFG - ForeGroundSpeed*(changeintime)*mToPix;
    }

    AccelerationControlArea(600,180,296,68);
    DecelerationControlArea(600,250,296,68);
    SpeedControlArea(600,320,296,68);


    DrawCar(xCar,yCar,100,1);

    DrawForeGround(xFG,yFG);

    if (DisplayGraph == "Velocity"){
        DrawAxes();
        PlotPoints();
    }
    if (DisplayGraph == "Position"){
        DrawPosAxes();
        PlotPosPoints();
    }

    if (DisplayGraph == "Both"){
        DrawAxes();
        PlotPoints();
        ctx.globalAlpha = 0.5;
        DrawPosAxes();
        PlotPosPoints();
        ctx.globalAlpha = 1.0;
    }

}

function EndTrial(){
    document.getElementById("SystemMessage").innerHTML = SystemMessage2Text[languagenumber];
    Moving = "no";
    document.getElementById("GasPedal2").style.visibility = "hidden";
    document.getElementById("BrakePedal2").style.visibility = "hidden";
    document.getElementById("GasPedal").style.visibility = "hidden";
    document.getElementById("BrakePedal").style.visibility = "hidden";
    Moving = "off";
}

function PlotPosPoints(){
    ctx.strokeStyle = "#FF0000";
    ctx.fillStyle = "#FF0000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(CarTimes[0],CarPositions[0]);
    for (i = 0; i <= numberofcarpositions; i++){
        if (CarTimes[i] != ""){
            ctx.lineTo(CarTimes[i], CarPositions[i]);
        }

    }
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(CarTimes[numberofcarpositions-1], CarPositions[numberofcarpositions-1], 2, 0, 2*Math.PI);
    ctx.fill();
}


function PlotPoints(){
    ctx.strokeStyle = "#0000FF";
    ctx.fillStyle = "#0000FF";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(CarTimes[0],CarVelocities[0]);
    for (i = 0; i <= numberofcarpositions; i++){
        if (CarTimes[i] != ""){
            ctx.lineTo(CarTimes[i], CarVelocities[i]);
        }

    }
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(CarTimes[numberofcarpositions-1], CarVelocities[numberofcarpositions-1], 2, 0, 2*Math.PI);
    ctx.fill();
}


function DrawPosAxes(){

    /* Main X and Y */
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(LeftGrid,HighGrid);
    ctx.lineTo(LeftGrid,LowGrid);
    ctx.lineTo(RightGrid,LowGrid);
    ctx.stroke();


    /* Vertical Lines */

    for (i = 0; i < BigLinesX+1; i++){

        if (i < (BigLinesX)){
            for (j = 0; j<LinesBetweenX; j++){
                if (j == 5){
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#000000";
                }
                else{
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#999999";
                }
                ctx.beginPath();
                ctx.moveTo(LeftGrid+i*XSpace+j*XSpace/LinesBetweenX,HighGrid);
                ctx.lineTo(LeftGrid+i*XSpace+j*XSpace/LinesBetweenX,LowGrid);
                ctx.stroke();
            }
        }

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(LeftGrid+i*XSpace,HighGrid);
        ctx.lineTo(LeftGrid+i*XSpace,LowGrid+5);
        ctx.stroke();

        ctx.font = FontSizeNumbers + "px Arial";
        ctx.fillStyle="#000000";
        temptext = (i*IncX).toFixed(0);
        metrics = ctx.measureText(temptext);
        textWidth = metrics.width;
        xposition = LeftGrid+i*XSpace - textWidth/2;
        ctx.fillText(temptext,xposition, LowGrid+2*FontSizeNumbers);

    }

    ctx.font = FontSizeVariables + "px Arial";
    ctx.fillStyle="#000000";
    temptext = XAxisTitleText[languagenumber];
    metrics = ctx.measureText(temptext);
    textWidth = metrics.width;
    xposition = MidX - textWidth/2;
    ctx.fillText(temptext,xposition, 590);

    for (i = 0; i < BigLinesY+1; i++){

        if (i < BigLinesY){
            for (j = 0; j<LinesBetweenY; j++){
                if (j == 5){
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#000000";
                }
                else{
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#999999";
                }
                ctx.beginPath();
                ctx.moveTo(LeftGrid,HighGrid+i*YSpace+j*YSpace/LinesBetweenY);
                ctx.lineTo(RightGrid,HighGrid+i*YSpace+j*YSpace/LinesBetweenY);
                ctx.stroke();
            }
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(LeftGrid-5,HighGrid+i*YSpace);
        ctx.lineTo(RightGrid,HighGrid+i*YSpace);
        ctx.stroke();

        ctx.font = FontSizeNumbers + "px Arial";
        ctx.fillStyle="#000000";
        temptext = (MaxPosY - i*IncPosY).toFixed(0);
        metrics = ctx.measureText(temptext);
        textWidth = metrics.width;
        xposition = LeftGrid-FontSizeNumbers - textWidth;
        ctx.fillText(temptext,xposition, HighGrid+i*YSpace+2);

    }

    ctx.font = FontSizeVariables + "px Arial";
    ctx.fillStyle="#990000";
    temptext = YAxisTitle1Text[languagenumber];
    metrics = ctx.measureText(temptext);
    textWidth = metrics.width;
    xposition = 15;
    yposition = MidY + textWidth/2;
    ctx.save();
    ctx.translate(xposition, yposition);
    ctx.rotate(3*Math.PI/2);
    ctx.fillText(temptext,-50,0);
    ctx.restore();

}

function DrawAxes(){

    /* Main X and Y */
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(LeftGrid,HighGrid);
    ctx.lineTo(LeftGrid,LowGrid);
    ctx.lineTo(RightGrid,LowGrid);
    ctx.stroke();


    /* Vertical Lines */

    for (i = 0; i < BigLinesX+1; i++){

        if (i < (BigLinesX)){
            for (j = 0; j<LinesBetweenX; j++){
                if (j == 5){
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#000000";
                }
                else{
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#999999";
                }
                ctx.beginPath();
                ctx.moveTo(LeftGrid+i*XSpace+j*XSpace/LinesBetweenX,HighGrid);
                ctx.lineTo(LeftGrid+i*XSpace+j*XSpace/LinesBetweenX,LowGrid);
                ctx.stroke();
            }
        }

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(LeftGrid+i*XSpace,HighGrid);
        ctx.lineTo(LeftGrid+i*XSpace,LowGrid+5);
        ctx.stroke();

        ctx.font = FontSizeNumbers + "px Arial";
        ctx.fillStyle="#000000";
        temptext = (i*IncX).toFixed(0);
        metrics = ctx.measureText(temptext);
        textWidth = metrics.width;
        xposition = LeftGrid+i*XSpace - textWidth/2;
        ctx.fillText(temptext,xposition, LowGrid+2*FontSizeNumbers);

    }

    ctx.font = FontSizeVariables + "px Arial";
    ctx.fillStyle="#000000";
    temptext = XAxisTitleText[languagenumber];
    metrics = ctx.measureText(temptext);
    textWidth = metrics.width;
    xposition = MidX - textWidth/2;
    ctx.fillText(temptext,xposition, 590);

    for (i = 0; i < BigLinesY+1; i++){

        if (i < BigLinesY){
            for (j = 0; j<LinesBetweenY; j++){
                if (j == 5){
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#000000";
                }
                else{
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#999999";
                }
                ctx.beginPath();
                ctx.moveTo(LeftGrid,HighGrid+i*YSpace+j*YSpace/LinesBetweenY);
                ctx.lineTo(RightGrid,HighGrid+i*YSpace+j*YSpace/LinesBetweenY);
                ctx.stroke();
            }
        }

        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(LeftGrid-5,HighGrid+i*YSpace);
        ctx.lineTo(RightGrid,HighGrid+i*YSpace);
        ctx.stroke();

        ctx.font = FontSizeNumbers + "px Arial";
        ctx.fillStyle="#000000";
        temptext = (MaxY - i*IncY).toFixed(0);
        metrics = ctx.measureText(temptext);
        textWidth = metrics.width;
        xposition = LeftGrid-FontSizeNumbers - textWidth;
        ctx.fillText(temptext,xposition, HighGrid+i*YSpace+2);

    }

    ctx.font = FontSizeVariables + "px Arial";
    ctx.fillStyle="#000099";
    temptext = YAxisTitle2Text[languagenumber];
    metrics = ctx.measureText(temptext);
    textWidth = metrics.width;
    xposition = 15;
    yposition = MidY + textWidth/2;
    ctx.save();
    ctx.translate(xposition, yposition);
    ctx.rotate(3*Math.PI/2);
    ctx.fillText(temptext,50,0);
    ctx.restore();
}

function DrawForeGround(x, y){
    xint = x + 200*count;
    if (xint < -200){
        count++;
    }
    xstart = xint;

    for(i=0; i<60; i++){
        if(i%10 == 0){
            ctx.beginPath();
            ctx.moveTo(xstart + i*20, y);
            ctx.lineTo(xstart + i*20, y-65);
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#8a3a04";
            ctx.stroke();
            DrawRectangle(xstart + i*20-30, y-95, 60, 30, 2, "#000000", "#bc7604", 1);
            temptext = (i/10+count)*10;
            WriteText(xstart + i*20,y-75,temptext.toFixed(0) + " m",12,"#FFFFFF",0.5,ProgramFont);
        }
        else{
            if (i%5 == 0){
                spoty = 20;
            }
            else{
                spoty = 10;
            }
            ctx.beginPath();
            ctx.moveTo(xstart + i*20, y);
            ctx.lineTo(xstart + i*20, y-spoty);
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#000000";
            ctx.stroke();
        }

    }
}

function DrawBackground(){
    DrawRectangle(0, 0, 900, 150, 0, "#000000", "#20ffff", 0);
    DrawRectangle(0, 150, 900, 25, 0, "#000000", "#32e947", 0);
    DrawRectangle(0, 148, 900, 5, 0, "#000000", "#666666", 0);
    DrawRectangle(0, 145, 900, 3, 0, "#000000", "#32e947", 0);
}

function DrawCar(x,y,w,o){
    carScale = w/750;
    h = w/3;
    ctx.globalAlpha = o;
    //DrawFrontWheel
    DrawTire(x-110/750*w,y-50/250*h, 50/250*h, Angle);

    //DrawBackWheel
    DrawTire(x-610/750*w,y-50/250*h, 50/250*h, Angle);

    DrawBody(x,y,w,carScale);
    ctx.globalAlpha = 1.0;
}

function DrawBody(xb, yb, wb, lb){
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = CarColors[colornumber];
    ctx.lineWidth = lb;
    ctx.beginPath();
    ctx.moveTo(xb, yb-40*lb);
    ctx.lineTo(xb, yb-120*lb);
    ctx.quadraticCurveTo(xb, yb-180*lb, xb-230*lb, yb-180*lb);
    ctx.lineTo(xb-220*lb, yb-180*lb);
    ctx.bezierCurveTo(xb-260*lb, yb-250*lb, xb-600*lb, yb-250*lb, xb-710*lb, yb-190*lb);
    ctx.lineTo(xb-750*lb, yb-180*lb);
    ctx.lineTo(xb-750*lb, yb-70*lb);
    ctx.lineTo(xb-710*lb, yb-50*lb);
    ctx.arc(xb-610*lb, yb-50*lb, 53*lb, 1.0*Math.PI, 0*Math.PI);
    ctx.lineTo(xb-557*lb, yb-20*lb);
    ctx.lineTo(xb-163*lb, yb-20*lb);
    ctx.lineTo(xb-163*lb, yb-50*lb);
    ctx.arc(xb-110*lb, yb-50*lb, 53*lb, 1.0*Math.PI, 0*Math.PI);
    ctx.lineTo(xb-57*lb, yb-30*lb);
    ctx.lineTo(xb, yb-40*lb);
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = "#0d6e6e";
    ctx.lineWidth = lb;
    ctx.beginPath();
    ctx.moveTo(xb-240*lb, yb-160*lb);
    ctx.lineTo(xb-510*lb, yb-170*lb);
    ctx.bezierCurveTo(xb-600*lb, yb-180*lb, xb-600*lb, yb-200*lb, xb-510*lb, yb-220*lb);
    ctx.lineTo(xb-410*lb, yb-220*lb);
    ctx.bezierCurveTo(xb-240*lb, yb-220*lb, xb-240*lb, yb-160*lb, xb-240*lb, yb-160*lb);
    ctx.fill();

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2*lb;
    ctx.beginPath();
    ctx.moveTo(xb-220*lb, yb-40*lb);
    ctx.lineTo(xb-410*lb, yb-40*lb);
    ctx.lineTo(xb-410*lb, yb-220*lb);

    ctx.stroke();

}

function DrawTire(xt,yt, rt, at){
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.lineWidth = carScale;
    ctx.beginPath();
    ctx.arc(xt, yt, rt, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#c0c0c0";
    ctx.fillStyle = "#c0c0c0";
    ctx.lineWidth = carScale;
    ctx.beginPath();
    ctx.arc(xt, yt, 35/50*rt, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#000000";
    ctx.lineWidth = carScale;
    ctx.beginPath();
    ctx.arc(xt, yt, 30/50*rt, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#c0c0c0";
    ctx.fillStyle = "#c0c0c0";
    ctx.lineWidth = carScale;
    ctx.beginPath();
    ctx.arc(xt, yt, 10/50*rt, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 7*carScale;
    for (i = 0; i < 8; i++){
        ctx.save();
        ctx.translate(xt, yt);
        ctx.rotate(at+i*2*Math.PI/8)
        ctx.beginPath();
        ctx.moveTo(30/50*rt,0);
        ctx.lineTo(-30/50*rt,0);
        ctx.stroke();
        ctx.restore();
    }
}

function AccelerationControlArea(x, y, w, h){
    DrawRectangle(x, y, w, h, 1, "#990000", "#CCCCCC", 1);
    WriteText(x+0.5*w,y+0.4*h,AccelerationText[languagenumber],28,"#990000",0.5);
    if (languagenumber == 0){
        WriteText(x+0.5*w,y+0.8*h,AccelerationWords[accelerationnumber],24,"#990000",0.5);
    }
    if (languagenumber == 1){
        WriteText(x+0.5*w,y+0.8*h,AccelerationWordsCroatian[accelerationnumber],24,"#990000",0.5);
    }
    if (languagenumber == 3){
        WriteText(x+0.5*w,y+0.8*h,AccelerationWordsMacedonian[accelerationnumber],24,"#990000",0.5);
    }

}

function SpeedControlArea(x, y, w, h){
    DrawRectangle(x, y, w, h, 1, "#990000", "#CCCCCC", 1);
    WriteText(x+0.5*w,y+0.4*h,InitialSpeedText[languagenumber],28,"#990000",0.5);
    if (languagenumber == 0){
        WriteText(x+0.5*w,y+0.8*h,SpeedWords[startspeednumber],24,"#990000",0.5);
    }
    if (languagenumber == 1){
        WriteText(x+0.5*w,y+0.8*h,SpeedWordsCroatian[startspeednumber],24,"#990000",0.5);
    }
    if (languagenumber == 3){
        WriteText(x+0.5*w,y+0.8*h,SpeedWordsMacedonian[startspeednumber],24,"#990000",0.5);
    }

}

function DecelerationControlArea(x, y, w, h){
    DrawRectangle(x, y, w, h, 1, "#990000", "#CCCCCC", 1);
    WriteText(x+0.5*w,y+0.4*h,BrakingRateText[languagenumber],28,"#990000",0.5);
    if (languagenumber == 0){
        WriteText(x+0.5*w,y+0.8*h,DecelerationWords[decelerationnumber],24,"#990000",0.5);
    }
    if (languagenumber == 1){
        WriteText(x+0.5*w,y+0.8*h,DecelerationWordsCroatian[decelerationnumber],24,"#990000",0.5);
    }
    if (languagenumber == 3){
        WriteText(x+0.5*w,y+0.8*h,DecelerationWordsMacedonian[decelerationnumber],24,"#990000",0.5);
    }

}



function DrawShowMeter(x,y,w){
    h = 0.8*w;
    MaxDisplaySpeed = 50;
    DisplayCurrentWords = "mph";
    if (Speed <= MaxDisplaySpeed){
        NeedlePercent = Speed/MaxDisplaySpeed;
    }
    else{
        NeedlePercent = 1;
    }

    needleanglerotate = 7*Math.PI/10 + NeedlePercent*1.6*Math.PI;


    radiusofmeter = 0.40*w;
    //body
    DrawRectangle(x, y, w, w, 20, "#FFFFFF", "#000000", 3);

    //circle for face
    ctx.fillStyle = "#666666";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x+0.5*w, y+0.5*w,1.05*radiusofmeter, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    WriteText(x+0.5*w,y+0.65*w,"m/s",40,"#DDDDDD",0.5,ProgramFont);


    //needle center
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x+0.5*w, y+0.5*w,4, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

    //Markings and Numbers
    for (i = 0; i < 51; i++){
        anglerotate = 7*Math.PI/10+i*3.2*Math.PI/100;
        ctx.save();
        ctx.translate(x+0.5*w, y+0.5*w);
        ctx.rotate(anglerotate);
        ctx.beginPath();
        if (i%5 == 0){
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 2;
            starttickmark = 0.8*radiusofmeter;
            endtickmark = 1.05*radiusofmeter;
        }
        else{
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 1;
            starttickmark = 0.9*radiusofmeter;
            endtickmark = 1.0*radiusofmeter;
        }
        ctx.moveTo(starttickmark, 0);
        ctx.lineTo(endtickmark, 0);
        ctx.stroke();
        if (i%10 == 0){
            temptext = i;
            ctx.save();
            ctx.translate(0.7*radiusofmeter, 0);
            ctx.rotate(-1.0*anglerotate);
            WriteText(0, 0,temptext.toFixed(0),14,"#FFFFFF",0.5,ProgramFont);
            ctx.restore();
        }

        ctx.restore();

    }

    WriteText(x+0.5*w,y+0.80*w,"Tesla Model S",12,"#82f3ff",0.5,"Georgia");
    WriteText(x+0.5*w,y+0.85*w,"Made in California",12,"#82f3ff",0.5,"Georgia");

    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 3;
    ctx.save();
    ctx.translate(x+0.5*w, y+0.5*w);
    ctx.rotate(needleanglerotate);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(1.0*radiusofmeter, 0);

    ctx.stroke();
    ctx.restore();



}

function DrawGasPedal(x,y,w,h){
    DrawRectangle(x, y, w, h, 0.1*w, "#000000", "#c0c0c0", 3);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 1.0;
    ctx.fillStyle = "#000000";
    for(i = 1; i<4;i++){
        for(j=1; j<10; j++){
            ctx.beginPath();
            ctx.arc(x+0.25*i*w, y+0.1*j*h, 0.05*w, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
}

function DrawBrakePedal(x,y,w,h){
    DrawRectangle(x, y, w, h, 0.1*w, "#000000", "#c0c0c0", 3);
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 1.0;
    ctx.fillStyle = "#000000";
    for(i = 1; i<10;i++){
        for(j=1; j<5; j++){
            ctx.beginPath();
            ctx.arc(x+0.1*i*w, y+0.2*j*h, 0.025*w, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
        }
    }
}

function DrawTimerArea(x,y,w,h){
    DrawRectangle(x, y, w, h, 0, "#990000", "#c0c0c0", 1);
    WriteText(x+0.5*w,y+30,TimingText[languagenumber] + timeaccel.toFixed(1) + " s",22,"#990000",0.5,ProgramFont);
}

function Accelerate(){
    accel = "yes";
    acceleration=Accelerations[accelerationnumber];
    d = new Date();
    startacctime = d.getTime();
}

function Unaccelerate(){
    accel = "no";
    xCarOld = xCar;
    startspeed = Speed;
}

function Decelerate(){
    decel = "yes";
    deceleration=Decelerations[decelerationnumber];
    d = new Date();
    startdectime = d.getTime();
}

function Undecelerate(){
    decel = "no";
    xCarOld = xCar;
    startspeed = Speed;
}



function Activate(){
    if (accel == "no"){
        accel = "yes";
        decel = "no";
        acceleration=Accelerations[accelerationnumber];
        startspeed = Speed;
        d = new Date();
        startacctime = d.getTime();

    }
    else{
        accel = "no";
        xCarOld = xCar;
        startspeed = Speed;
    }
}

function Bractivate(){
    if (decel == "no"){
        decel = "yes";
        accel = "no";
        startspeed = Speed;
        deceleration=Decelerations[decelerationnumber];
        d = new Date();
        startdectime = d.getTime();

    }
    else{
        decel = "no";
        xCarOld = xCar;
        startspeed = Speed;
    }
}


function StartTime(){
    numberofcarpositions = 1;
    Speed = StartingSpeeds[startspeednumber];
    startspeed = StartingSpeeds[startspeednumber];
    Moving = "yes";
    if (accel == "yes"){
        d = new Date();
        startacctime = d.getTime();
    }
    if (decel == "yes"){
        d = new Date();
        startdectime = d.getTime();
    }

    d = new Date();
    movetime = d.getTime();
    if (GameVersion == 1){
        document.getElementById("GasPedal").style.visibility = "visible";
        document.getElementById("BrakePedal").style.visibility = "visible";
    }
    else{
        document.getElementById("GasPedal2").style.visibility = "visible";
        document.getElementById("BrakePedal2").style.visibility = "visible";
    }
    document.getElementById("ChangeSpeedButton").style.visibility = "hidden";
    document.getElementById("StartButton").style.visibility = "hidden";
    document.getElementById("ResetButton").style.visibility = "visible";
    document.getElementById("SystemMessage").innerHTML = SystemMessage3Text[languagenumber];
}

function ResetSpeed(){
    CarVelocities.length = 0;
    CarPositions.length = 0;
    CarTimes.length = 0;
    numberofcarpositions = 1;
    HideArrows = "no";
    Speed = StartingSpeeds[startspeednumber];
    timeaccel = 0;
    xCar = 0;
    xFG = 0;
    count = 0;
    xPos = 0;
    numberofspeedchanges = 0;
    accel = "no";
    decel = "no"
    Moving = "no";
    d = new Date();
    nowtime = d.getTime();
    Angle = 0;
    totaltime = 0;
    if (GameVersion == 1){
        document.getElementById("GasPedal").style.visibility = "visible";
        document.getElementById("BrakePedal").style.visibility = "visible";
    }
    else{
        document.getElementById("GasPedal2").style.visibility = "visible";
        document.getElementById("BrakePedal2").style.visibility = "visible";
    }
    document.getElementById("SystemMessage").innerHTML = SystemMessage4Text[languagenumber];
    document.getElementById("StartButton").style.visibility = "visible";
    document.getElementById("ResetButton").style.visibility = "hidden";
    document.getElementById("ChangeSpeedButton").style.visibility = "visible";
}

function SwitchSpeed(x){
    startspeednumber++;
    if (startspeednumber > 7){
        startspeednumber = 0;
    }

    CalculateParameters();
}

function SwitchGraph(){
    if (DisplayGraph == "Velocity"){
        DisplayGraph = "Position";
    }
    else if (DisplayGraph == "Position"){
        DisplayGraph = "Both";
    }
    else{
        DisplayGraph = "Velocity";
    }
}

function SwitchAcceleration(){
    accelerationnumber++;
    if (accelerationnumber > 6){
        accelerationnumber = 0;
    }
    acceleration=Accelerations[accelerationnumber];
    if (accel == "yes"){
        d = new Date();
        startacctime = d.getTime();
        startspeed = Speed;
    }
}

function SwitchDeceleration(){
    decelerationnumber++;
    if (decelerationnumber > 6){
        decelerationnumber = 0;
    }
    deceleration=Decelerations[decelerationnumber];
    if (decel == "yes"){
        d = new Date();
        startdectime = d.getTime();
        startspeed = Speed;
    }
}

function SwitchLanguage(x){
    languagenumber = x;
    document.getElementById("LabDirections").innerHTML = Directions[languagenumber];
    document.getElementById("BeginButton").innerHTML = Button1Text[languagenumber];
    document.getElementById("TouchButton").innerHTML = Button2Text[languagenumber];
    document.getElementById("StartButton").innerHTML = Button3Text[languagenumber];
    document.getElementById("ResetButton").innerHTML = Button4Text[languagenumber];
    document.getElementById("SystemMessage").innerHTML = SystemMessage1Text[languagenumber];
    document.getElementById("ProgramTitle").innerHTML = ProgramTitleIs[languagenumber];
    document.title = ProgramTitleIs[languagenumber];
    document.getElementById("OverviewPicture").src = PictureLocationPlace[languagenumber];

}


function WriteText(x,y,t,s,c,m,ff){
    ctx.fillStyle = c;
    ctx.font= s + "px " + ff;
    temptext = t;
    metrics = ctx.measureText(temptext);
    textWidth = metrics.width;
    xposition = x - m*textWidth;
    ctx.fillText(temptext,xposition, y);
}

function DrawArrow(x, y, h, w, c, r){
    ctx.save();
    ctx.translate(x, y+0.5*h);
    ctx.rotate(r);
    ctx.fillStyle = c;
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0,-0.5*h);
    ctx.lineTo(0+w, -0.5*h+w);
    ctx.lineTo(0+0.5*w, -0.5*h+w);
    ctx.lineTo(0+0.5*w, -0.5*h+h);
    ctx.lineTo(0-0.5*w, -0.5*h+h);
    ctx.lineTo(0-0.5*w, -0.5*h+w);
    ctx.lineTo(0-w, -0.5*h+w);
    ctx.lineTo(0,-0.5*h);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}


function DrawRectangle(xrect, yrect, wrect, hrect, curverectangle, lcolor, fcolor, lwid){
    ctx.fillStyle = fcolor;
    ctx.strokeStyle = lcolor;
    ctx.lineWidth = lwid;
    ctx.beginPath();
    ctx.moveTo(xrect+curverectangle, yrect);
    ctx.lineTo(xrect+wrect-curverectangle, yrect);
    ctx.arc(xrect+wrect-curverectangle, yrect+curverectangle, curverectangle, 1.5*Math.PI, 0*Math.PI, false);
    ctx.lineTo(xrect+wrect, yrect+hrect-curverectangle);
    ctx.arc(xrect+wrect-curverectangle, yrect+hrect-curverectangle, curverectangle, 0.0*Math.PI, 0.5*Math.PI, false);
    ctx.lineTo(xrect+curverectangle, yrect+hrect);
    ctx.arc(xrect+curverectangle, yrect+hrect-curverectangle, curverectangle, 0.5*Math.PI, 1.0*Math.PI, false);
    ctx.lineTo(xrect, yrect+curverectangle);
    ctx.arc(xrect+curverectangle, yrect+curverectangle, curverectangle, 1.0*Math.PI, 1.5*Math.PI, false);
    ctx.stroke();
    ctx.fill();
}