
var information = "";

function getComments(){
  fetch("http://localhost:3000/comments")
  .then((data) => { return data.json() })
  .then((json) => displayComments(json))
}

function displayComments(data){
  let responseArea = document.getElementById('responseArea');
  responseArea.innerHTML = information;
  for (let i = 0; i<data.length; i++){
      let authorName = document.createElement('P');
      authorName.style.fontWeight = "bold";
      authorName.style.fontSize = "20px";
      authorName.innerText = data[i]["name"];
      let commentContent = document.createElement('P');
      commentContent.innerText = data[i]["comment"];
      let someRespone = document.createElement('DIV')
      someRespone.appendChild(authorName)
      //someRespone.appendChild(document.createElement('BR'))
      someRespone.appendChild(commentContent);
      someRespone.style.border = "1px solid black";
      someRespone.style.width = "500px";
      someRespone.style.marginLeft = "10px";
      someRespone.style.paddingLeft = "5px";
      responseArea.appendChild(someRespone);
  }
  
}

function sendInformation(){
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;

  fetch("http://localhost:3000", {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({name: name, comment: comment})
  }).then((data) => {
      return data.json()
  }).then((json)=>{
      if(json.Status === 'OK'){
          information = "Information received";
          getComments();
      } else {
          information = 'Information was not received';
          getComments();
      }
      console.log(json);
  })
}


// Color theme ------------------------------------------------------------------------------------------------------------------------------
 
 function changeColor_id(id, color)
 {
	// document.getElementById(id).style.backgroundColor = "lightblue";
var css = '#' + id +'{ background-color: ' + color + ' !important;}';
var style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);
 }
 
  function changeColor_border(id, color)
 {
	// document.getElementById(id).style.backgroundColor = "lightblue";
var css = '#' + id +'{ border-color: ' + color + ' !important;}';
var style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);
 }
 
  function changeColor_tag(tag, color)
 {
	// document.getElementById(id).style.backgroundColor = "lightblue";
var css = tag +'{ background-color: ' + color + ' !important;}';
var style = document.createElement('style');
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

document.getElementsByTagName('head')[0].appendChild(style);
 }
 
 
 function modifyColors1(){
	document.body.style.backgroundColor = "#DFF6F0";
	changeColor_id("zonaTitlu" ,"#46b3e6");
	changeColor_id("zonaImagine" ,"#46b3e6");
	changeColor_id("participation" ,"#46b3e6");
	changeColor_id("prize" ,"#46b3e6");
	changeColor_id("tabel" ,"#46b3e6");
	changeColor_border("LinieTitlu" ,"#46b3e6");
	changeColor_tag("table" ,"#46b3e6");
 }
 var el = document.getElementById("colors1");
 el.addEventListener("click", modifyColors1, false);
 
  function modifyColors2(){
	document.body.style.backgroundColor = "LightGray";
	changeColor_id("zonaTitlu" ,"#aeaba7");
	changeColor_id("zonaImagine" ,"#aeaba7");
	changeColor_id("participation" ,"#aeaba7");
	changeColor_id("prize" ,"#aeaba7");
	changeColor_id("tabel" ,"#aeaba7");
	changeColor_border("LinieTitlu" ,"#aeaba7");
	changeColor_tag("table" ,"#aeaba7");
 }
 
 var el2 = document.getElementById("colors2");
 el2.addEventListener("click", modifyColors2, false);
 
 
 // function Transition() {
	 // var css = '#zonaTitlu:hover{ background-color: yellow !important;}';
// var style = document.createElement('style');
// if (style.styleSheet) {
    // style.styleSheet.cssText = css;
// } else {
    // style.appendChild(document.createTextNode(css));
// }

// document.getElementsByTagName('head')[0].appendChild(style);

  // document.getElementById("zonaTitlu").style.WebkitTransition = "all 2s"; // Code for Safari 3.1 to 6.0
  // document.getElementById("zonaTitlu").style.transition = "all 2s";     // Standard syntax	 
	 
// }

// var el3 = document.getElementById("zonaTitlu");
// el3.addEventListener("hover", Transition, false);


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

	myVar = setInterval(setColor, 500);
	function setColor() {
	var x = document.body;
	x.style.backgroundColor = x.style.backgroundColor == "lightgrey" ? "#DFF6F0" : "lightgrey";

	}
	function stopColor() {
	clearInterval(myVar);
	 }


window.onload=function()
{
  getComments();
	var p2 = document.getElementsByTagName("p");
	for (let i = 0; i < p2.length; i++)
		setInterval(colorare2, 1500 * (i + 1), "red", p2[i]);
	function colorare2(culoare, ob)
	{
		ob.style.color = culoare;
	}
}


//---------------------------------------------------------------------------------------------------------------------------------------------

//C.R.U.D -------------------------------------------------------------------------------------------------------------------------------------

    var crudApp = new function () {

        // AN ARRAY OF JSON OBJECTS WITH VALUES.
        this.myTournaments = [
            { ID: '1', Tournament_Name: 'Fog of War', Match_Type: '5v5', Map: 'Summoners Rift' },
            { ID: '2', Tournament_Name: 'Brawl of Legends', Match_Type: '1v1', Map: 'Summoners Rift' }
        ]

        this.match_type = ['5v5', '1v1', '2v2'];
		this.map = ['Summoners Rift', 'Howling Abyss'];
        this.col = [];

        this.createTable = function () {

            // EXTRACT VALUE FOR TABLE HEADER.
            for (var i = 0; i < this.myTournaments.length; i++) {
                for (var key in this.myTournaments[i]) {
                    if (this.col.indexOf(key) === -1) {
                        this.col.push(key);
                    }
                }
            }

            // CREATE A TABLE.
            var table = document.createElement('table');
            table.setAttribute('id', 'tournamentsTable');     // SET TABLE ID.

            var tr = table.insertRow(-1);               // CREATE A ROW (FOR HEADER).
			tr.innerHTML = "";
            for (var h = 0; h < this.col.length; h++) {
                // ADD TABLE HEADER.
				tr.innerHTML += '<th data-mlr-text>' + this.col[h].replace('_', ' ') + '</th>';
            }

            // ADD ROWS USING JSON DATA.
            for (var i = 0; i < this.myTournaments.length; i++) {

                tr = table.insertRow(-1);           // CREATE A NEW ROW.

                for (var j = 0; j < this.col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = this.myTournaments[i][this.col[j]];
                }

                // DYNAMICALLY CREATE AND ADD ELEMENTS TO TABLE CELLS WITH EVENTS.

                this.td = document.createElement('td');

                // *** CANCEL OPTION.
                tr.appendChild(this.td);
                var lblCancel = document.createElement('label');
                lblCancel.innerHTML = 'X';
                lblCancel.setAttribute('onclick', 'crudApp.Cancel(this)');
                lblCancel.setAttribute('style', 'display:none;');
                lblCancel.setAttribute('title', 'Cancel');
                lblCancel.setAttribute('id', 'lbl' + i);
                this.td.appendChild(lblCancel);

                // *** SAVE.
                tr.appendChild(this.td);
                var btSave = document.createElement('input');

                btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
                btSave.setAttribute('value', 'Save');
                btSave.setAttribute('id', 'Save' + i);
                btSave.setAttribute('style', 'display:none;');
                btSave.setAttribute('onclick', 'crudApp.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btSave);

                // *** UPDATE.
                tr.appendChild(this.td);
                var btUpdate = document.createElement('input');

                btUpdate.setAttribute('type', 'button');    // SET ATTRIBUTES.
                btUpdate.setAttribute('value', 'Update');
                btUpdate.setAttribute('id', 'Edit' + i);
                btUpdate.setAttribute('style', 'background-color:#44CCEB;');
                btUpdate.setAttribute('onclick', 'crudApp.Update(this)');   // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btUpdate);

                // *** DELETE.
                this.td = document.createElement('th');
                tr.appendChild(this.td);
                var btDelete = document.createElement('input');
                btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
                btDelete.setAttribute('value', 'Delete');
                btDelete.setAttribute('style', 'background-color:#ED5650;');
                btDelete.setAttribute('onclick', 'crudApp.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btDelete);
            }


            // ADD A ROW AT THE END WITH BLANK TEXTBOXES AND A DROPDOWN LIST (FOR NEW ENTRY).

            tr = table.insertRow(-1);           // CREATE THE LAST ROW.

            for (var j = 0; j < this.col.length; j++) {
                var newCell = tr.insertCell(-1);
                if (j >= 1) {

                    if (j == 2) {   // WE'LL ADD A DROPDOWN LIST AT THE SECOND COLUMN (FOR Category).

                        var select = document.createElement('select');      // CREATE AND ADD A DROPDOWN LIST.
                        select.innerHTML = '<option value=""></option>';
                        for (k = 0; k < this.match_type.length; k++) {
                            select.innerHTML = select.innerHTML +
                                '<option value="' + this.match_type[k] + '">' + this.match_type[k] + '</option>';
                        }
                        newCell.appendChild(select);
                    }
					else if (j == 3) {   // WE'LL ADD A DROPDOWN LIST AT THE SECOND COLUMN (FOR Category).

                        var select = document.createElement('select');      // CREATE AND ADD A DROPDOWN LIST.
                        select.innerHTML = '<option value=""></option>';
                        for (k = 0; k < this.map.length; k++) {
                            select.innerHTML = select.innerHTML +
                                '<option value="' + this.map[k] + '">' + this.map[k] + '</option>';
                        }
                        newCell.appendChild(select);
                    }
                    else {
                        var tBox = document.createElement('input');          // CREATE AND ADD A TEXTBOX.
                        tBox.setAttribute('type', 'text');
                        tBox.setAttribute('value', '');
                        newCell.appendChild(tBox);
                    }
                }
            }

            this.td = document.createElement('td');
            tr.appendChild(this.td);

            var btNew = document.createElement('input');

            btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
            btNew.setAttribute('value', 'Create');
            btNew.setAttribute('id', 'New' + i);
            btNew.setAttribute('style', 'background-color:#207DD1;');
            btNew.setAttribute('onclick', 'crudApp.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btNew);

            var div = document.getElementById('container');
            div.innerHTML = '';
            div.appendChild(table);    // ADD THE TABLE TO THE WEB PAGE.
        };

        // ****** OPERATIONS START.

        // CANCEL.
        this.Cancel = function (oButton) {

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none; float:none;');

            var activeRow = oButton.parentNode.parentNode.rowIndex;

            // HIDE THE SAVE BUTTON.
            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:none;');

            // SHOW THE UPDATE BUTTON AGAIN.
            var btUpdate = document.getElementById('Edit' + (activeRow - 1));
            btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color:#44CCEB;');

            var tab = document.getElementById('tournamentsTable').rows[activeRow];

            for (i = 0; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                td.innerHTML = this.myTournaments[(activeRow - 1)][this.col[i]];
            }
        }


        // EDIT DATA.
        this.Update = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('tournamentsTable').rows[activeRow];

            // SHOW A DROPDOWN LIST WITH A LIST OF CATEGORIES.
            for (i = 1; i < 4; i++) {
                if (i == 2) {
                    var td = tab.getElementsByTagName("td")[i];
                    var ele = document.createElement('select');      // DROPDOWN LIST.
                    ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
                    for (k = 0; k < this.match_type.length; k++) {
                        ele.innerHTML = ele.innerHTML +
                            '<option value="' + this.match_type[k] + '">' + this.match_type[k] + '</option>';
                    }
                    td.innerText = '';
                    td.appendChild(ele);
                }
				else if (i == 3) {
                    var td = tab.getElementsByTagName("td")[i];
                    var ele = document.createElement('select');      // DROPDOWN LIST.
                    ele.innerHTML = '<option value="' + td.innerText + '">' + td.innerText + '</option>';
                    for (k = 0; k < this.map.length; k++) {
                        ele.innerHTML = ele.innerHTML +
                            '<option value="' + this.map[k] + '">' + this.map[k] + '</option>';
                    }
                    td.innerText = '';
                    td.appendChild(ele);
                }
                else {
                    var td = tab.getElementsByTagName("td")[i];
                    var ele = document.createElement('input');      // TEXTBOX.
                    ele.setAttribute('type', 'text');
                    ele.setAttribute('value', td.innerText);
                    td.innerText = '';
                    td.appendChild(ele);
                }
            }

            var lblCancel = document.getElementById('lbl' + (activeRow - 1));
            lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none;');
        };


        // DELETE DATA.
        this.Delete = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            this.myTournaments.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
            this.createTable();                         // REFRESH THE TABLE.
        };

        // SAVE DATA.
        this.Save = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('tournamentsTable').rows[activeRow];

            // UPDATE myTournaments ARRAY WITH VALUES.
            for (i = 1; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {  // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                    this.myTournaments[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;      // SAVE THE VALUE.
                }
            }
            this.createTable();     // REFRESH THE TABLE.
        }

        // CREATE NEW.
        this.CreateNew = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('tournamentsTable').rows[activeRow];
            var obj = {};

            // ADD NEW VALUE TO myTournaments ARRAY.
            for (i = 1; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') {      // CHECK IF ELEMENT IS A TEXTBOX OR SELECT.
                    var txtVal = td.childNodes[0].value;
                    if (txtVal != '') {
                        obj[this.col[i]] = txtVal.trim();
                    }
                    else {
                        obj = '';
                        alert('all fields are compulsory');
                        break;
                    }
                }
            }
            obj[this.col[0]] = this.myTournaments.length + 1;     // NEW ID.

            if (Object.keys(obj).length > 0) {      // CHECK IF OBJECT IS NOT EMPTY.
                this.myTournaments.push(obj);             // PUSH (ADD) DATA TO THE JSON ARRAY.
                this.createTable();                 // REFRESH THE TABLE.
            }
        }

        // ****** OPERATIONS END.
    }

    crudApp.createTable();

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

var mlCodes = [
{
  code: "bg",
  name: "Bulgarian" },

{
  code: "zh",
  name: "Traditional" },

{
  code: "zh",
  name: "Simplified" },

{
  code: "cs",
  name: "Czech" },

{
  code: "da",
  name: "Danish" },

{
  code: "nl",
  name: "Dutch" },

{
  code: "en",
  name: "English" },

{
  code: "et",
  name: "Estonian" },

{
  code: "de",
  name: "German" },

{
  code: "el",
  name: "Greek" },

{
  code: "hu",
  name: "Hungarian" },

{
  code: "it",
  name: "Italian" },

{
  code: "no",
  name: "Norwegian" },

{
  code: "pl",
  name: "Polish" },

{
  code: "pt",
  name: "Portuguese" },

{
  code: "ro",
  name: "Romanian" },

{
  code: "sk",
  name: "Slovak" },

{
  code: "ru",
  name: "Russian" },

{
  code: "es",
  name: "Spanish" },

{
  code: "sv",
  name: "Swedish" }];


var MLstrings = [
{ 
  Romanian: "Acasa",
  English: "Home",
  },
{ 
  Romanian: "Contact",
  English: "Contact",
  },
{ 
  Romanian: "Site-uri LOL",
  English: "League Sites",
  },
{ 
  Romanian: "Statistici Pro",
  English: "Pro Stats",
  },
{ 
  Romanian: "Statistici Ranked",
  English: "Ranked Stats",
  },
{ 
  Romanian: "Canalul de LOL Prima Divizie",
  English: "First Pro League Channel",
  },
  { 
  Romanian: "Bun venit la LOL Tournaments",
  English: "Welcome to LOL Tournaments",
  },
  { 
  Romanian: "Click pe logo pentru a merge la site-ul League of Legends",
  English: "Click on the logo to go to League of Legends site",
  },
  { 
  Romanian: "Cum sa participi la un Tournament de League of Legends",
  English: "How to participate at a League of Legends Tournament",
  },
  { 
  Romanian: "1.Creaza un cont de LOL Tournaments",
  English: "1.Make a LOL Tournaments account",
  },
  { 
  Romanian: "2.Alege tournamentul la care vrei sa participi",
  English: "2.Choose the tournament you want to participate in",
  },
  { 
  Romanian: "3.Confirma participarea prin email",
  English: "3.Confirm the participation by email",
  },
  { 
  Romanian: "3.Confirma participarea prin email",
  English: "Types of prizes for winning a League of Legends Tournament:",
  },
  { 
  Romanian: "1.Puncte Riot",
  English: "1.Riot Points",
  },
  { 
  Romanian: "2.Paypal",
  English: "2.Paypal",
  },
  { 
  Romanian: "3.Skin-uri",
  English: "3.Skins",
  },
  { 
  Romanian: "Disponibilitatea tournamentelor",
  English: "Tournaments Availability",
  },
  { 
  Romanian: "Ora",
  English: "Time",
  },
  { 
  Romanian: "Luni",
  English: "Mo",
  },
  { 
  Romanian: "Ma",
  English: "Tu",
  },
  { 
  Romanian: "Mie",
  English: "W",
  },
  { 
  Romanian: "Joi",
  English: "Th",
  },
  { 
  Romanian: "Vi",
  English: "F",
  },
  { 
  Romanian: "Sam",
  English: "Sa",
  },
  { 
  Romanian: "Du",
  English: "Su",
  },
  { 
  Romanian: "DA",
  English: "YES",
  },
  { 
  Romanian: "NU",
  English: "NO",
  },
  { 
  Romanian: "Informatii de contact:",
  English: "Contact information:",
  },
  { 
  Romanian: "Postat de: Preda Catalin",
  English: "Posted by: Preda Catalin",
  },
  { 
  Romanian: "Numele Turneului",
  English: "Tournament Name",
  },
  { 
  Romanian: "Tipul Meciului",
  English: "Match Type",
  },
  { 
  Romanian: "Mapa",
  English: "Map"
  },
  { 
    Romanian: "Nume",
    English: "Name"
    },
    { 
  Romanian: "Comentariu",
  English: "Comment"
  }
  ];


// Global var :(
var mlrLangInUse;
var mlr = function (_a) {
  var _b = _a === void 0 ? {} : _a,_c = _b.dropID,dropID = _c === void 0 ? "mbPOCControlsLangDrop" : _c,_d = _b.stringAttribute,stringAttribute = _d === void 0 ? "data-mlr-text" : _d,_e = _b.chosenLang,chosenLang = _e === void 0 ? "English" : _e,_f = _b.mLstrings,mLstrings = _f === void 0 ? MLstrings : _f,_g = _b.countryCodes,countryCodes = _g === void 0 ? false : _g,_h = _b.countryCodeData,countryCodeData = _h === void 0 ? [] : _h;
  var root = document.documentElement;
  var listOfLanguages = Object.keys(mLstrings[0]);
  mlrLangInUse = chosenLang;
  (function createMLDrop() {
    var mbPOCControlsLangDrop = document.getElementById(dropID);
    // Reset the menu
    mbPOCControlsLangDrop.innerHTML = "";
    // Now build the options
    listOfLanguages.forEach(function (lang, langidx) {
      var HTMLoption = document.createElement("option");
      HTMLoption.value = lang;
      HTMLoption.textContent = lang;
      mbPOCControlsLangDrop.appendChild(HTMLoption);
      if (lang === chosenLang) {
        mbPOCControlsLangDrop.value = lang;
      }
    });
    mbPOCControlsLangDrop.addEventListener("change", function (e) {
      mlrLangInUse = mbPOCControlsLangDrop[mbPOCControlsLangDrop.selectedIndex].value;
      resolveAllMLStrings();
      // Here we update the 2-digit lang attribute if required
      if (countryCodes === true) {
        if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
          console.warn("Cannot access strings for language codes");
          return;
        }
        root.setAttribute("lang", updateCountryCodeOnHTML().code);
      }
    });
  })();
  function updateCountryCodeOnHTML() {
    return countryCodeData.find(function (this2Digit) {return this2Digit.name === mlrLangInUse;});
  }
  function resolveAllMLStrings() {
    var stringsToBeResolved = document.querySelectorAll("[" + stringAttribute + "]");
    stringsToBeResolved.forEach(function (stringToBeResolved) {
      var originaltextContent = stringToBeResolved.textContent;
      var resolvedText = resolveMLString(originaltextContent, mLstrings);
      stringToBeResolved.textContent = resolvedText;
    });
  }
};
function resolveMLString(stringToBeResolved, mLstrings) {
  var matchingStringIndex = mLstrings.find(function (stringObj) {
    // Create an array of the objects values:
    var stringValues = Object.values(stringObj);
    // Now return if we can find that string anywhere in there
    return stringValues.includes(stringToBeResolved);
  });
  if (matchingStringIndex) {
    return matchingStringIndex[mlrLangInUse];
  } else
  {
    // If we don't have a match in our language strings, return the original
    return stringToBeResolved;
  }
}
mlr({
  dropID: "mbPOCControlsLangDrop",
  stringAttribute: "data-mlr-text",
  chosenLang: "English",
  mLstrings: MLstrings,
  countryCodes: true,
  countryCodeData: mlCodes });
 

 
 
 
 
 
 