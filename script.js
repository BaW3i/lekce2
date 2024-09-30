
/* Jeden lístek do divadla Pěst na oko stojí 12 euro. 
Spočítejte měsíční příjem divadla ze vstupného, přichází-li průměrně 174 návštěvníků na jedno představení a divadlo hraje 15 
představení měsíčně. Uložte výsledek do proměnné prijem. Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat 
studentské vstupné ve výši 65 % plného vstupného. 
Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? Vypište do stránky i příjem divadla se započítanou slevou pro studenty. */

const numOfPplPerMonth = 174;
const numOfPlaysMonth = 15;
const CostTicket = 12;
const MonthlyBrutto = numOfPlaysMonth*numOfPplPerMonth*CostTicket;
console.log(MonthlyBrutto);

let numStudents = numOfPplPerMonth* 0.4;
let newNumofPpl = numStudents + (numOfPplPerMonth - numStudents);
let numPplNoStud = numOfPplPerMonth - numStudents;
let noStudentBrutto = numPplNoStud*numOfPlaysMonth*CostTicket;
let studentTicket = CostTicket*0.65;
let studentBrutto = studentTicket*numStudents*numOfPlaysMonth;
let newBrutto = studentBrutto + noStudentBrutto;

console.log(Math.floor(newBrutto));
