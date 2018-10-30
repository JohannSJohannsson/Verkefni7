/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Velkomin/n í leikinn. \nNú verða lagðar fyrir 10 einfaldar stærðfræðispurningar sem svara skal eins fljótt og hægt er.\nSmelltu á OK til að hefja leikinn.');
  
  do{
  play();
  }while(confirm('Smelltu á OK til að spila annan leik.\nSmelltu á Cancel til að hætta.'))
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  const GAMES_TO_PLAY = 10;
  const timia = new Date();
  let leikir = 0;
  let rettir = 0;
  do {
    utkoma = ask();
    if (utkoma === true){
      rettir++;
    }
    if (utkoma === null){
      alert ('Hætt í leik');
      return;
    }
  leikir++;
  }while(GAMES_TO_PLAY > leikir);
  const timib = new Date ();
  const timi = (timib-timia)/1000;
    if (rettir === 0){
      heildarsvör = 0;
    }
    else{
      medalsvor = rettir/timi;
    }
  alert(`Þú svaraðir ${rettir} af ${GAMES_TO_PLAY} dæmum rétt á ${timi.toFixed(2)} sekúndum.\nMeðalrétt svör á sekúndu eru: ${medalsvor.toFixed(2)} svör.`);	
}
/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */

function ask() {
  let spurning = randomNumber(1,4);
  
  /* Samlagning */
  if (spurning === 1){
    const a = randomNumber (0, 100);
    const b = randomNumber (0, 100);
    const input = prompt('Reiknaðu: '+a+ ' + ' + b);
    const tala = parseInt(input);  
    if (tala === (a+b)){
      return true;
    }
    else if (input === null){
      return null;
    }
    else{
      return false;
    }
  }

  /* Frádráttur */
  else if (spurning === 2){
    const a = randomNumber (0, 100);
    const b = randomNumber (0, 100);
      if (a>b){
      const input = prompt('Reiknaðu: '+a+ ' - ' + b);
      const tala = parseInt(input);  
      if (tala === (a-b)){
        return true;
      }
      else if (input === null){
        return null;
      }
      else{
        return false;
      }
    }
    else{
      const input = prompt('Reiknaðu: '+b+ ' - ' + a);
      const tala = parseInt(input);  
      if (tala === (b-a)){
        return true;
      }
      else if (input === null){
        return null;
      }
      else{
        return false;
      }
    }
  }

  /* Margföldun */
  if (spurning === 3){
    const a = randomNumber (1, 10);
    const b = randomNumber (1, 10);
    const input = prompt('Reiknaðu: '+a+ ' * ' + b);
    const tala = parseInt(input);  
    if (tala === (a*b)){
      return true;
    }
    else if (input === null){
      return null;
    }
    else{
      return false;
    }
  }

  /* Deiling */
  if (spurning === 4){
    const a = randomNumber (2, 10);
    const b = (randomNumber (2, 10)*a);
    const input = prompt('Reiknaðu: '+b+ ' / ' + a);
    const tala = parseInt(input); 
    if (tala === (b / a)){
      return true;
    }
    else if (input === null){
      return null;
    }
    else{
      return false;
    }
  }
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
