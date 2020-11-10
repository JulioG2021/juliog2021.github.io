// JavaScript Document
function tellFortune(numKids, partner, location, jobTitle) {
    let future = "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
    return(future)
    
}
   
tellFortune(2, 'Mark', 'Argentina', "Mechanic");
tellFortune(3, 'Angelina', 'Brazil', "Doctor");
tellFortune(1, 'Sebastian', 'France', "Carpenter");
document.getElementById("fortune1").innerHTML = tellFortune(2, 'Mark', 'Argentina', "Mechanic");
document.getElementById("fortune2").innerHTML = tellFortune(3, 'Angelina', 'Brazil', "Doctor");
document.getElementById("fortune3").innerHTML = tellFortune(1, 'Sebastian', 'France', "Carpenter");

