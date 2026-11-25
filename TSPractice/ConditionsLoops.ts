let age = 19;
if (age >= 18)
    console.log("Eligible for voting")
else if(age >=13 && age <18)
    console.log("Teen age")
else
    console.log("Kid")


let day = "M"
switch (day) {
    case "M":
        console.log("Monday")
        break;
    case "T":
        console.log("Tuesday")
        break;
    default:
         console.log("No day")
        break;
}

// Why using while loop insead of for loop?
//In while loop we can check the boolean conditions whereas in for loop we cannot
