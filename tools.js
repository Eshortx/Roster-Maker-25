output=null;

async function convertplayertable23to24() {
    
    const file = document.getElementById('fifa23playertable').files[0];
    let obj23 = await readtxtfile(file);
    
    let newdefaults={
        icontrait1: 0,
        icontrait2: 0,
        muscularitycode: 0
    }
    
    let obj24 = obj23.map(obj => Object.assign({}, obj, newdefaults));
    
    let stringoutput = playerstableobjtostring24(obj24);
    
    downloadtxt(stringoutput, 'rm24file-playertableconversion.txt');
}

function playerstableobjtostring24(obj){

    const keysorder=['firstnameid', 'lastnameid', 'playerjerseynameid', 'commonnameid', 'gkglovetypecode',
    'skintypecode', 'haircolorcode', 'facialhairtypecode', 'curve', 'jerseystylecode',
    'agility', 'tattooback', 'accessorycode4', 'gksavetype', 'positioning',
    'tattooleftarm', 'hairtypecode', 'standingtackle', 'preferredposition3', 'longpassing',
    'penalties', 'animfreekickstartposcode', 'isretiring', 'longshots', 'gkdiving',
    'icontrait2', 'interceptions', 'shoecolorcode2', 'crossing', 'potential',
    'gkreflexes', 'finishingcode1', 'reactions', 'composure', 'vision',
    'contractvaliduntil', 'finishing', 'dribbling', 'slidingtackle', 'accessorycode3',
    'accessorycolourcode1', 'headtypecode', 'driref', 'sprintspeed', 'height',
    'hasseasonaljersey', 'tattoohead', 'preferredposition2', 'strength', 'shoetypecode',
    'birthdate', 'preferredposition1', 'tattooleftleg', 'ballcontrol', 'phypos',
    'shotpower', 'trait1', 'socklengthcode', 'weight', 'hashighqualityhead',
    'tattoorightarm', 'icontrait1', 'balance', 'gender', 'headassetid',
    'gkkicking', 'defspe', 'internationalrep', 'shortpassing', 'freekickaccuracy',
    'skillmoves', 'faceposerpreset', 'usercaneditname', 'avatarpomid', 'attackingworkrate',
    'finishingcode2', 'aggression', 'acceleration', 'paskic', 'headingaccuracy',
    'iscustomized', 'eyebrowcode', 'runningcode2', 'modifier', 'gkhandling',
    'eyecolorcode', 'jerseysleevelengthcode', 'accessorycolourcode3', 'accessorycode1',
    'playerjointeamdate', 'headclasscode', 'defensiveworkrate', 'tattoofront', 'nationality',
    'preferredfoot', 'sideburnscode', 'weakfootabilitytypecode', 'jumping', 'personality',
    'gkkickstyle', 'stamina', 'playerid', 'accessorycolourcode4', 'gkpositioning',
    'headvariation', 'skillmoveslikelihood', 'trait2', 'shohan', 'skintonecode',
    'shortstyle', 'overallrating', 'smallsidedshoetypecode', 'emotion', 'runstylecode',
    'muscularitycode', 'jerseyfit', 'accessorycode2', 'shoedesigncode', 'shoecolorcode1',
    'hairstylecode', 'bodytypecode', 'animpenaltiesstartposcode', 'pacdiv', 'defensiveawareness',
    'runningcode1', 'preferredposition4', 'volleys', 'accessorycolourcode2', 'tattoorightleg', 'facialhaircolorcode'];

    // Create the header row by joining keysOrder with tabs
  const headerrow = keysorder.join('\t');

  // Initialize an array to hold all rows including the header
  const allrows = [headerrow];

  // Map the keys to the object's values, throw an error if a key is missing
  Object.keys(obj).forEach(nestedobjectkey => {
    const nestedobj = obj[nestedobjectkey];

    // Create a tab-delimited string for the current nested object
    const valuesrow = keysorder.map(key => {
        if (!(key in nestedobj)) {
            throw new Error(`Missing data: the key '${key}' does not exist in the nested object.`);
        }
        return String(nestedobj[key]);
    }).join('\t');

    
    // Add the values row to the allRows array
    allrows.push(valuesrow);

    });

  // Combine all rows, separated by newline characters, into a single string
  return allrows.join('\n');
}


