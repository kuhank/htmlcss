
function validatename() {
    var name = document.getElementById("name").value;
    if (name.trim() == "") {
        alert("Name is Empty");
    }
    else {
        alert(`name is ${name}`);
    }
}

function GradeAssign(){
    var markObtained = document.getElementById("stud-marks").value;
    var totalmarks = document.getElementById("total-marks").value;
    var percen = (markObtained/totalmarks)*100;
    if(percen>=85){
        alert("first class");
        var result = "first class"
    }
    else if(percen>=60 && percen <85){
        alert("Second class");
        var result = "second class"
    }
    else if(percen>=40 && percen<60){
        alert("thrid class");
        var result = "thrid class"
    }
    else{
        alert("Failed");
        var result = "Failed"
    }
    document.getElementById("result").textContent=result;
}