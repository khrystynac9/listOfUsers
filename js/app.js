var myButton = document.getElementsByTagName("button");
myButton[0].addEventListener("click", addingNewMembers);
var numberOfEmpl = [];
var nameArray = [];
var lastNameArray = [];
var newLi;

function addingNewMembers() { 

    //span with first name
    var span1regex = new RegExp("^[a-zA-z]+$");
    var userName;
    do {
        var inputSpan1Value = prompt("Please enter the first name (only letters and without space)");
        var span1test = span1regex.test(inputSpan1Value);
        if (nameArray.length >= 1) {
            userName = nameArray.indexOf(inputSpan1Value);
            if(userName !== (- 1)) {
                alert("Employee with first name" + inputSpan1Value + "already exists");
                return;
            }
        }
        nameArray.push(inputSpan1Value);
    } 
    while (!span1test && userName !== (- 1));
     
    //span with last name
    var span1regex = new RegExp("^[a-zA-z]+$");
    var userLastName;
    do {
        var inputSpan2Value = prompt("Please enter the last name (only letters and without space)");
        var span2test = span1regex.test(inputSpan2Value);
        if (lastNameArray.length >= 1) {
            userLastName = lastNameArray.indexOf(inputSpan2Value);
            if(userLastName !== (- 1)) {
                alert("Employee with last name" + inputSpan2Value + "already exists");
                return;
            }
        }
        lastNameArray.push(inputSpan2Value);
    } 
    while (!span2test && userLastName !== (- 1));

    var parent = document.getElementsByClassName("employeeList");
    newLi = document.createElement("li");
    parent[0].appendChild(newLi);
    var newSpan1 = document.createElement("span");
    newSpan1.setAttribute("class", "employeeFirstName");
    var firstLet = (inputSpan1Value.charAt(0)).toLocaleUpperCase();
    var span1Value = firstLet + inputSpan1Value.slice(1) + " ";
    var span1node = document.createTextNode(span1Value);
    newSpan1.appendChild(span1node);
    newLi.appendChild(newSpan1);

    var newSpan2 = document.createElement("span");
    newSpan2.setAttribute("class", "employeeLastName");
    var firstLet = (inputSpan2Value.charAt(0)).toLocaleUpperCase();
    var span2Value = firstLet + inputSpan2Value.slice(1) + " ";
    var span2node = document.createTextNode(span2Value);
    newSpan2.appendChild(span2node);
    newLi.appendChild(newSpan2);        



    //adding the salary
    var newspan3 = document.createElement("span");
    newspan3.setAttribute("class", "employeeSalary");
    var span3regex = new RegExp("^1*?[1-9]\\d*$");
    do {
        var inputSpan3Value = prompt("Please enter the salary (only numbers and without space)");
        var span3salary = Number(inputSpan3Value);
        var span3test = span3regex.test(span3salary);
    } 
    while (!span3test);
    var span3Value = " $   " + span3salary + "    ";
    var span3node = document.createTextNode(span3Value);
    newspan3.appendChild(span3node);
    newLi.appendChild(newspan3);
    numberOfEmpl.push(span3salary);

    //span with position
    var newSpan4 = document.createElement("span");
    newSpan4.setAttribute("class", "employeePosition");
    var span4regex = new RegExp("^[a-zA-z]+$");
    do {
        var inputSpan4Value = prompt("Please enter the position (only letters and without space)");
        var span4test = span4regex.test(inputSpan4Value);
    } 
    while (!span4test);
    var firstLet = (inputSpan4Value.charAt(0)).toLocaleUpperCase();
    var span4Value = firstLet + inputSpan4Value.slice(1);
    var span4node = document.createTextNode(span4Value);
    newSpan4.appendChild(span4node);
    newLi.appendChild(newSpan4);     
    
    numberOfEmp();
}

//and average salary after each entry of new row, possibility to set the limit of employees, 
// Disallow adding new employees when avg. salary reaches $ 2000
var main = document.getElementById("main");
var employNumCell = document.createElement("div");
employNumCell.setAttribute("class", "cell");
main.insertBefore(employNumCell, main.childNodes[0]);

var employSalaryCell = document.createElement("div");
employSalaryCell.setAttribute("class", "cell");
main.insertBefore(employSalaryCell, main.childNodes[0]);

// //set the limit of employees
var limitParent = document.createElement("div");
limitParent.setAttribute("class", "limitClass")
var limitDivNode = document.createTextNode("Limit of employees ");
limitParent.insertBefore(limitDivNode, limitParent.childNodes[0]);
main.insertBefore(limitParent, main.childNodes[0]);
var limitOfEmpl = document.createElement("span");
var limitRegex = new RegExp("^1*?[1-9]\\d*$");
var limitInput;
do {
    limitInput = +prompt("set the limit of people");
    var limitTest = limitRegex.test(limitInput);
} 
while (!limitTest);
var limitSpanNode = document.createTextNode(limitInput);
limitOfEmpl.appendChild(limitSpanNode);
limitParent.appendChild(limitOfEmpl);


function numberOfEmp() {
    var i;
    var sum = 0;
    for (i = 0; i < numberOfEmpl.length; i++) {
        sum += numberOfEmpl[i];
        var averadeSalary = (sum/numberOfEmpl.length).toFixed(2);
    }
    employNumCell.innerHTML = numberOfEmpl.length + "  records";
    employSalaryCell.innerHTML = averadeSalary + " $";

    if(averadeSalary >2000) {
        alert("середня зарплата більше 2000");
        myButton[0].disabled = true;
        return;
    }

    if (numberOfEmpl.length == limitInput) {
        console.log(numberOfEmpl.length, "lim" + limitInput)
        alert("вичерпано ліміт");
        myButton[0].disabled = true;
        return;
    }
}