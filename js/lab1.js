// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    let skills = ['Web Development','Gardening','Drumming','Volunteering']; //was missing closing square bracket
    let output = "<h2>Bruce's Skills</h2>"; //missing '/' in ending h2 tag
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    let firstName = 'Bruce'; //missing '=' and 'semi-colon' at the end
    let lastName = 'Elgort';
    let collegeName = 'Clark College'; //missing semi-colon
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`; //missing '$' before {lastname}, {city}, and {gpa}

    document.getElementById('place1').innerHTML = '<p>' + output + '</p>'; // replaced double quotes instead of single after </p>
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}