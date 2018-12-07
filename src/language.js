var languageSelector = document.querySelector("#languageselector");
var currentLanguage = document.documentElement.lang;

var pathName = window.location.pathname;
pathName = pathName.split("/").pop();
var pageName = pathName.substr(0, pathName.indexOf('.'));

var selectString = "<p><select id='languageselect' onchange='changeLanguages()'>";
selectString += "<option>Choose:</option>"
if (currentLanguage != "zh-tw") { selectString += "<option value='../" + pageName + ".html'>中文</option>";}
if (currentLanguage != "en-us") { selectString += "<option value='en-us/" + pageName + ".html'>English</option>";}
selectString += "</select></p>";

languageSelector.innerHTML = selectString;

function changeLanguages() {
    var x = document.getElementById("languageselect").selectedIndex;
    //alert(document.getElementsByTagName("option")[x].value);
    window.location = document.getElementsByTagName("option") [x].value;
}