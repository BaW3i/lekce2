
/* Jeden lístek do divadla Pěst na oko stojí 12 euro. 
Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 
představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat 
studentské vstupné ve výši 65 % plného vstupného. 
Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty. */

const numberOfPeople = 174;
const numberOfPlayPerMonth = 15;
const ticketAdult = 12;


const monthlyEarnings = numberOfPeople*numberOfPlayPerMonth*ticketAdult;
console.log(monthlyEarnings);

let numberOfStudents = numberOfPeople* 0.4;   
let ticketStudent = ticketAdult*0.65;
const numberOfAdults = numberOfPeople - numberOfStudents;

const monthlyEarningTotal = (numberOfStudents*ticketStudent*numberOfPlayPerMonth) + (ticketAdult*numberOfPlayPerMonth*numberOfAdults)

console.log(Math.floor(monthlyEarningTotal));


// chat gpt suggested refactoring

// Constants for theatre settings
const numberOfPeople1 = 174;
const numberOfPlayPerMonth1 = 15;
const ticketAdult1 = 12;
const studentDiscount1 = 0.65;   // Students pay 65% of adult ticket price
const studentPercentage1 = 0.4;  // 40% of the audience are students

// Function to calculate total monthly earnings
function calculateMonthlyEarnings(people, playsPerMonth1, adultTicketPrice1, studentPercentage1, studentDiscount1) {
    // Calculate the number of students and adults
    const numberOfStudents1 = Math.floor(people * studentPercentage1);
    const numberOfAdults1 = people - numberOfStudents1;

    // Calculate student and adult ticket prices
    const ticketStudent1 = adultTicketPrice1 * studentDiscount1;

    // Calculate total earnings
    const totalEarnings1 = (numberOfAdults1 * adultTicketPrice1 + numberOfStudents1 * ticketStudent1) * playsPerMonth1;
    
    return totalEarnings1;
}

// Call the function to calculate monthly earnings
const monthlyEarnings1 = calculateMonthlyEarnings(numberOfPeople1, numberOfPlayPerMonth1, ticketAdult1, studentPercentage1, studentDiscount1);

console.log(`Total monthly earnings: $${Math.floor(monthlyEarnings1)}`);


/* Vymyslete, jak použít funkci Math.random a různé zaokrouhlovací funkce probírané v této lekci k simulování hodu klasickou šestistěnnou kostkou. 
S použitím vhodných funkcí sestavte výraz, který vygeneruje náhodné celé číslo mezi 1 a 6.

Zamyslete se nad tím, zda vámi vytvořený výraz generuje všechna čísla skutečně se stejnou 
pravděpodobností. Vemte v úvahu, že funkce Math.random generuje náhodná čísla mezi 0 (včetně) a 1 (vyjma). Je tedy malinká pravěpodobnost, 
že občas padne přesně číslo 0. Naopak číslo 1 padnout nemůže.

*/

let myNumber = Math.floor(Math.random()*10);

const  diceThrow = (myNumber) => {

    if (myNumber >= 1 && myNumber <= 6) {
        return console.log(myNumber);
    } else {
        console.log('Invalid input');
    };
    }

diceThrow(myNumber);

//code with cleaner structure:

const diceThrowFaster = () => {
    const myNumber = Math.floor(Math.random() * 6) + 1;  // Generates a number between 1 and 6
    console.log(myNumber);
};

diceThrowFaster();  