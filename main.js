
//


// // GETS USER ID FROM USER NAME
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/1/SSC%20KillerSmly/');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     console.log(data);
//
// });
//
// $xhr.fail(function(err) {
//     console.log(err);
// });

//
// // //NEED TO GET INVENTORY ATTEMPT 1
// // ///{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/Account/4611686018429540397/Character/SSC%20KillerSmly/');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     console.log(data);
//
// });
//
// $xhr.fail(function(err) {
//     console.log(err);
// });

//NEED TO GET INVENTORY ATTEMPT 2
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/2/Account/4611686018429540397/Character/SSC%20KillerSmly/Inventory/Summary/');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     console.log(data);
//
// });
//
// $xhr.fail(function(err) {
//     console.log(err);
// });


//***********BASIC INFORMATION ON A WEOPON THAT IS CURRENTLY EQUIPPED
// {membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/{itemInstanceId}/
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/Account/4611686018429540397/Character/2305843009215530210/Inventory/6917529058096904027/');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     console.log(data);
//
// });
//
// $xhr.fail(function(err) {
//     console.log(err);
// });




// // Gets ITEMS!!!! WORKS FOR ID
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/Account/4611686018429540397/Items/');
//
// $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//         return;
//     }
//     console.log(data);
//
// });
//
// $xhr.fail(function(err) {
//     console.log(err);
// });




var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";

$.ajaxSetup({
  headers: {
    "X-API-Key": apiKey,
  }
});


//THE BELLOW IS THE ONE THAT I WANT TO WORK WITH !!!!!!!!!!!!!!!!!!!!!!!!!
//
//
// //THIS IS THE ONE I WILL USE
//
//
//MASSIVE DATA PULL AND DISPLAY TO SCREEN!

var bungie = "http://www.bungie.net";
var pictureNumber = 0;
var currentItems = [];
var itemGroupStart = 0;
var page = 0;
var dataGold = [];

var subClass = [[],[],[]];
var primary = [[],[],[],[]];
var special = [[],[],[],[]];
var heavy = [];
var ghost = [];

var helmet = [[],[],[]];
var gauntlets = [[],[],[]];
var chestArmor = [[],[],[]];
var legArmor = [[],[],[]];
var classArmor = [[],[],[]];
var artifact = [[],[],[]];


var dataMine = function() {
  page ++;

  var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=${page}&definitions=true`);
  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
    }
    dataGold.push(data.Response.definitions);
    if (page === 7) {
      console.log(dataGold);


        for (var i = 0; i < dataGold.length; i++) {
           for (var variable in dataGold[i].items) {
            var item = dataGold[i].items[variable];

            if (item.bucketTypeHash == 3448274439) {
              if (item.classType == 0) {
                helmet[0].push(item);
              }
              if (item.classType == 1) {
                helmet[1].push(item);
              }
              if (item.classType == 2) {
                helmet[2].push(item);
              }
            }
            if (item.bucketTypeHash == 14239492) {
              if (item.classType == 0) {
                chestArmor[0].push(item);
              }
              if (item.classType == 1) {
                chestArmor[1].push(item);
              }
              if (item.classType == 2) {
                chestArmor[2].push(item);
              }
            }
            if (item.bucketTypeHash == 3551918588) {
              if (item.classType == 0) {
                gauntlets[0].push(item);
              }
              if (item.classType == 1) {
                gauntlets[1].push(item);
              }
              if (item.classType == 2) {
                gauntlets[2].push(item);
              }
            }
            if (item.bucketTypeHash == 20886954) {
              if (item.classType == 0) {
                legArmor[0].push(item);
              }
              if (item.classType == 1) {
                legArmor[1].push(item);
              }
              if (item.classType == 2) {
                legArmor[2].push(item);
              }
            }
            if (item.bucketTypeHash == 1585787867) {
              if (item.classType == 0) {
                classArmor[0].push(item);
              }
              if (item.classType == 1) {
                classArmor[1].push(item);
              }
              if (item.classType == 2) {
                classArmor[2].push(item);
              }
            }
            if (item.bucketTypeHash == 434908299) {
              if (item.classType == 0) {
                artifact[0].push(item);
              }
              if (item.classType == 1) {
                artifact[1].push(item);
              }
              if (item.classType == 2) {
                artifact[2].push(item);
              }
            }

            //left side

            if (item.bucketTypeHash === 3284755031) {
              if (item.classType == 0) {
                subClass[0].push(item);
              }
              if (item.classType == 1) {
                subClass[1].push(item);
              }
              if (item.classType == 2) {
                subClass[2].push(item);
              }
            }
            if (item.bucketTypeHash == 1498876634 && item.equippable === true) { //specific with extra class all
              if (item.classType == 0) {
                primary[0].push(item)
              }
              if (item.classType == 1) {
                primary[1].push(item)
              }
              if (item.classType == 2) {
                primary[2].push(item)
              }
              if (item.classType == 3) {
                primary[3].push(item)
              }
            }
            if (item.bucketTypeHash == 2465295065 && item.equippable === true) { //specific with extra class all
              if (item.classType == 0) {
                special[0].push(item)
              }
              if (item.classType == 1) {
                special[1].push(item)
              }
              if (item.classType == 2) {
                special[2].push(item)
              }
              if (item.classType == 3) {
                special[3].push(item)
              }
            }
            if (item.bucketTypeHash == 953998645  && item.equippable === true) { //Heavy Weapons are NON CLASS SPECIFIC!
                heavy.push(item)
            }
            if (item.bucketTypeHash == 4023194814  && item.equippable === true) { //GHOST IS NON CLASS SPECIFIC!
              ghost.push(item);
            }
          }
        }
        console.log("subclass");
        console.log(subClass);


      //Logo turns green when it's safe to use the program
      $(".logo").css({"color": "green"});



      return;
    }
    dataMine();
  });
  console.log("hit the server");
};




var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=0&definitions=true`);
$xhr.done(function(data) {
  if ($xhr.status !== 200) {
    return;
  }
  dataGold.push(data.Response.definitions);
  dataMine();
});
$xhr.fail(function(err) {
  console.log(err);
});


//all other functions


var openMenu = function() {
  $(".popup_bg").css({display: "block"});
};
var closeMenu = function () {
  $(".popup_bg").css({display: "none"});
  itemGroupStart = 0;
  currentItems = [];
  pictureNumber = 0;
};


//appending funciton used for the items in the initial popup ***********************************
var appendItem = function (obj) {
  currentItems.push(obj);
  $('#mainSelector').append(`<img id="${pictureNumber}" src=${bungie + "" + obj.icon}>`);
  pictureNumber +=1;
};

var selected = "";
var side = 0;
//titan=0, hunter=1 warlock=2, -- Titan SET TO DEFAULT -- NEED TO BUILD OUT CLASS CHANGE BUTTONS
var classSelected = 0;


//clicking on items in the pop up menu will set them.
//Future build will have data placed in graph bellow
var choicesNotSet = [[["equipedbox2"],['equipedContainer2'],[2]] , [["equipedbox3"],["equipedContainer3"],[3]], [["equipedbox4"],["equipedContainer4"],[4]]];

$('body').on('click', '.item-pad img', function() {
  var setItem = currentItems[this.id];
  var stats = setItem.stats;

  //remove image from col that is first in choicesNotSet

     $(`#${"selectedContainer" + choicesNotSet[0][2]}`).remove();
     console.log("this is choiceNotSet");
     var named = choicesNotSet[0][2];
      // $(`#${"addHere" + choicesNotSet[0][2]}`).append($('<p>added </p>'));

//insert table for weapons:
//

$(`#${"addHere" + choicesNotSet[0][2]}`).append($(`

<div id="${"selectedContainer" + choicesNotSet[0][2]}">
  <div id="${"equipedContainer" + choicesNotSet[0][2]}" class="col s12 borderGrey">
    <div id=${"equipedBox" + choicesNotSet[0][2]}>
      <img id=${choicesNotSet[0][0]} title=${choicesNotSet[0][1]} name="${named}" class="borderGrey responsive-img" src=${bungie + "" + setItem.icon }>
    </div>
  </div>

  <table class="responsive-table border-bottom col s12 borderGrey">
                <tbody>
                  <tr>
                    <td class="left-align">Attack</td>
                    <td id="" class="left-align">${stats[368428387].minimum} / ${stats[368428387].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Rate of Fire</td>
                    <td id="" class="left-align">${stats[4284893193].minimum} / ${stats[4284893193].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Impact</td>
                    <td id="" class="left-align">${stats[4043523819].minimum} / ${stats[4043523819].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Range</td>
                    <td id="" class="left-align">${stats[1240592695].minimum} / ${stats[1240592695].maximum}</td>
                  </tr>
                  <tr>
                  <td class="left-align">Stability</td>
                  <td id="" class="left-align">${stats[155624089].minimum} / ${stats[155624089].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Reload</td>
                    <td id="" class="left-align">${stats[4188031367].minimum} / ${stats[4188031367].maximum}</td>
                  </tr>
                  <tr>
                  <td class="left-align">magazine</td>
                  <td id="" class="left-align">${stats[3871231066].minimum} / ${stats[3871231066].maximum}</td>
                  </tr>
                </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>

  `));
//

//End weapon table

//begin table for armor




//end table for armor


  // $(`#${choicesNotSet[0][0]}`).remove();
  // //set new image for col that had image removed
  // $(`#${choicesNotSet[0][1]}`).append(`<div id="equipedbox2"><img id=${choicesNotSet[0][0]} title=${choicesNotSet[0][1]} name="${choicesNotSet[0[3]]}" class="borderGrey responsive-img" src=${bungie + "" + setItem.icon }></div>`);




  // $(`#equipedbox2`).append($('<p>this is some text</p>'));


//
// <div id="equipedbox2">
//   <img id=${choicesNotSet[0][0]} title=${choicesNotSet[0][1]} name="${choicesNotSet[0[3]]}" class="borderGrey responsive-img" src=${bungie + "" + setItem.icon }>
// </div>



  choicesNotSet.shift();
  console.log(setItem);


});



//REMOVE SELECTED ITEM AND PUSH BACK TO choicesNotSet
$('body').on('click', '.selctionSlots img', function() {
  if (this.id !== "") {

    $(`#${this.id}`).remove();
    $(`#${this.title}`).append(`<div id=""><img id="" name="" class="border responsive-img" src="http://placehold.it/90x90"</div>`);
    choicesNotSet.push([[this.id],[this.title],[this.name]]);
    console.log(this);
    console.log(this.name);
  }
});










//clicking on an image uses image id to change hidden menu then opens it
$('body').on('click', '.pushDown img', function() { //causes a problem when clickin on the popup imgs... define 'body' more specific


//SIDE 1-------------------------------------------
  if (this.id === 'subClass1') {
    selected = "subClass";
    side = 1;
  }
  if (this.id === "primary1") {
    selected = "primary";
    side = 1;
  }
  if (this.id === "special1") {
    selected = "special";
    side = 1;
  }
  if (this.id === "heavy1") {
    selected = "heavy";
    side = 1;
  }
  if (this.id === 'ghost1') {
    selected = 'ghost';
    side = 1;
  }





  if (this.id === "helmet1") {
    selected = "helmet";
    side = 1;
  }
  if (this.id === "gauntlets1") {
    selected = "gauntlets";
    side = 1;
  }
  if (this.id === "chest1") {
    selected = "chestArmor";
    side = 1;
  }
  if (this.id === "leg1") {
    selected = "legArmor";
    side = 1;
  }
  if (this.id === 'classArmor1') {
    selected = 'classArmor';
    side = 1;
  }
  if (this.id === 'artifact1') {
    selected = 'artifact';
    side = 1;
  }


//SIDE 2 ---------------------------------------------

  if (this.id === 'subClass2') {
    selected = "subClass";
    side = 2;
  }
  if (this.id === "primary2") {
    selected = "primary";
    side = 2;
  }
  if (this.id === "special2") {
    selected = "special";
    side = 2;
  }
  if (this.id === "heavy2") {
    selected = "heavy";
    side = 2;
  }
  if (this.id === 'ghost2') {
    selected = 'ghost';
    side = 2;
  }




  if (this.id === "helmet2") {
    selected = "helmet";
    side = 2;
  }
  if (this.id === "gauntlets2") {
    selected = "gauntlets";
    side = 2;
  }
  if (this.id === "chest2") {
    selected = "chestArmor";
    side = 2;
  }
  if (this.id === "leg2") {
    selected = "legArmor";
    side = 2;
  }
  if (this.id === 'classArmor2') {
    selected = 'classArmor';
    side = 2;
  }
  if (this.id === 'artifact2') {
    selected = 'artifact';
    side = 2;
  }

  $('.item-pad img').remove();

  for (var i = 0; i < 24; i++) {
    itemGroupStart += 0;
    if (selected === "helmet") {
      appendItem(helmet[classSelected][i]);
    }
    if (selected === "gauntlets") {
      appendItem(gauntlets[classSelected][i]);
    }
    if (selected === "chestArmor") {
      appendItem(chestArmor[classSelected][i]);
      console.log("this is getting through");
      console.log(chestArmor[classSelected][i]);
    }
    if (selected === "legArmor") {
      appendItem(legArmor[classSelected][i]);
    }
    if (selected === "classArmor") {
      appendItem(classArmor[classSelected][i]);
    }
    if (selected === "artifact") {
      //need to check to see if there is enough in the array to continue appending... DO THIS FOR EVERYTHING!!!!!!
      //Hereby Marked as FUTURE BUILD OUT
      if (itemGroupStart + i < artifact[classSelected].length) {
        appendItem(artifact[classSelected][i]);
        console.log(artifact[classSelected].length);//check to make sure the length matches with the output
      }
      console.log("you have passed the end!");
    }

    //left side of chars

    if (selected === "subClass") {
      console.log(itemGroupStart);
      if (itemGroupStart + i < subClass[classSelected].length) {
        appendItem(subClass[classSelected][i]);
      }
      console.log("you have passed the end!");
    }

    if (selected === "primary") {
      if (itemGroupStart + i < primary[3].length) { //somehow need to get the single exclusive gun in
        appendItem(primary[3][i]);
      }
      console.log("you have passed the end!");
    }

    if (selected === "special") {
      if (itemGroupStart + i < special[3].length) { //somehow need to get the single exclusive gun in
        appendItem(special[3][i]);
      }
      console.log("you have passed the end!");
    }

    if (selected === "heavy") {
      if (itemGroupStart + i < heavy.length) {
        appendItem(heavy[i]);
      }
      console.log("you have passed the end!");
    }

    if (selected === "ghost") {
      if (itemGroupStart + i < ghost.length) {
        appendItem(ghost[i]);
      }
      console.log("you have passed the end!");
    }

  }



  openMenu();
  console.log(this.id);

});


//clicking on the x kills the menu
$('#x').on('click', function() {
  closeMenu();
});

//highlights line currently hovering over
$('body').on('mouseenter', 'tr', function() {
  $(this).toggleClass('hover');
}).on('mouseleave', 'tr', function() {
  $(this).toggleClass('hover');
});












//THIS IS THE POPUP********

//creates on hover popup with expanded item details
$('.items').on('mouseenter', "img", function(event) {
  var weaponClass = this.tierTypeName;
  itemColor = ""
  $('#dynamicPop').remove();

  var currentObject = currentItems[this.id];
  // console.log(currentObject);
  // console.log(currentObject.tierTypeName);
  var stats = currentObject.stats;
  console.log(currentObject);

  //set color for item bg
  if (currentObject.tierTypeName === "Common"){
    itemColor = "white";
  }
  if (currentObject.tierTypeName === "Uncommon"){
    itemColor = "green";
  }
  if (currentObject.tierTypeName === "Rare"){
    itemColor = "blue";
  }
  if (currentObject.tierTypeName === "Legendary"){
    itemColor = "purple";
  }
  if (currentObject.tierTypeName === "Exotic"){
    itemColor = "yellow";
  }

  var attackOrDefense = "";
  //set layout Option and Attack or Defense
  if (currentObject.itemTypeName === "Hand Cannon" || currentObject.itemTypeName === "Auto Rifle" || currentObject.itemTypeName === "Pulse Rifle" || currentObject.itemTypeName === "Scout Rifle" || currentObject.itemTypeName === "Fusion Rifle" || currentObject.itemTypeName === "Shotgun" || currentObject.itemTypeName === "Sniper Rifle" || currentObject.itemTypeName === "Sidearm") {
    attackOrDefense = "Attack";
  } else if (currentObject.itemTypeName === "Sword" || currentObject.itemTypeName === "Machine Gun"||  currentObject.itemTypeName === "Rocket Launcher"){
    attackOrDefense = "Attack";
  } else {
    attackOrDefense = "Defense"
  }


//THIS WILL ONLY WORK FOR PRIMARY WEAPONS must create dynamic if statements
if (attackOrDefense === "Attack") {

  $('#item-popup').append($(`

    <div id="dynamicPop">
      <div class="row ${itemColor}">

        <div id="image1" class="col s3">
          <img class="responsive-img" src=${bungie + "" + currentObject.icon}>
        </div>
        <div  class="col s9">
          <div class="row">
            <div class="col 12 padding-top">
              <h2>${currentObject.itemName}</h2>
            </div>
          </div>

          <p class="left">${currentObject.itemTypeName}</p>
          <p class="right">${currentObject.tierTypeName}</p>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <div class="row">
            <div id="testInsert" class="col s12">
              <p>${stats[368428387].minimum} / ${stats[368428387].maximum}</p>
            </div>
            <div class="col s12">
              <p>${attackOrDefense}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row border-bottom pushDown">
        <div class="col s12">
          <p class="">${currentObject.itemDescription}</p>
        </div>
      </div>


      <div class="row">

          <table class="responsive-table border-bottom col s12">
            <tbody>
              <tr>
                <td class="left-align">Rate of Fire</td>
                <td>  Graph  </td>
                <td id="talasdfaxw4" class="left-align">${stats[4284893193].minimum} / ${stats[4284893193].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Impact</td>
                <td>  Graph  </td>
                <td id="tadasdfdsxw4" class="left-align">${stats[4043523819].minimum} / ${stats[4043523819].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Range</td>
                <td>  Graph  </td>
                <td id="taxfswd4" class="left-align">${stats[1240592695].minimum} / ${stats[1240592695].maximum}</td>
              </tr>
              <tr>
              <td class="left-align">Stability</td>
              <td>  Graph  </td>
              <td id="taswaxw4" class="left-align">${stats[155624089].minimum} / ${stats[155624089].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Reload</td>
                <td>  Graph  </td>
                <td id="taxsdvcwd4" class="left-align">${stats[4188031367].minimum} / ${stats[4188031367].maximum}</td>
              </tr>
              <tr>
              <td class="left-align">magazine</td>
              <td>  Graph  </td>
              <td id="taszxcvdfxw4" class="left-align">${stats[3871231066].minimum} / ${stats[3871231066].maximum}</td>
              </tr>
            </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>

      <div class="row">
        <div class="col s2">
          <img class="responsive-img" src="http://placehold.it/40x40">
        </div>
        <div class="col s10">
          <h6>FUTURE BUILD AREA</h6>
        </div>
      </div>

      <div class="row">
        <div class="col s2">
          <img class="responsive-img" src="http://placehold.it/40x40">
        </div>
        <div class="col s10">
          <h6>DESCRIPTION OF THE SET PERKS</h6>
        </div>
      </div>


    </div>
`));
}

if (attackOrDefense === "Defense") { // NEED INPUT CODES FOR DEFENSE STATS

  $('#item-popup').append($(`

    <div id="dynamicPop">
      <div class="row ${itemColor}">

        <div id="image1" class="col s3">
          <img class="responsive-img" src=${bungie + "" + currentObject.icon}>
        </div>
        <div  class="col s9">
          <div class="row">
            <div class="col 12 padding-top">
              <h2>${currentObject.itemName}</h2>
            </div>
          </div>

          <p class="left">${currentObject.itemTypeName}</p>
          <p class="right">${currentObject.tierTypeName}</p>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <div class="row">
            <div id="testInsert" class="col s12">
              <p>130/170</p>
            </div>
            <div class="col s12">
              <p>${attackOrDefense}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row border-bottom pushDown">
        <div class="col s12">
          <p class="">${currentObject.itemDescription}</p>
        </div>
      </div>


      <div class="row">

          <table class="responsive-table border-bottom col s12">
            <tbody>
              <tr>
                <td class="left-align">Icon</td>
                <td>  Intelect  </td>
                <td id="talasdfaxw4" class="left-align">${stats[3871231066].minimum} / ${stats[3871231066].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Icon</td>
                <td>  Discipline  </td>
                <td id="tadasdfdsxw4" class="left-align">${stats[3871231066].minimum} / ${stats[3871231066].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Icon</td>
                <td>  Strength  </td>
                <td id="taxfswd4" class="left-align">${stats[3871231066].minimum} / ${stats[3871231066].maximum}</td>
              </tr>
            </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>

      <div class="row">
        <div class="col s2">
          <img class="responsive-img" src="http://placehold.it/40x40">
        </div>
        <div class="col s10">
          <h6>This weapon can be fired in full auto mode</h6>
        </div>
      </div>

      <div class="row">
        <div class="col s2">
          <img class="responsive-img" src="http://placehold.it/40x40">
        </div>
        <div class="col s10">
          <h6>Causing damage with this weapon increases its stability</h6>
        </div>
      </div>


    </div>
`));
}






  //this should be were I change the popup before it is displayed

  $("#item-popup").css({"display": "block", "marginLeft": event.pageX + 100, "marginTop": event.pageY -300});
}).on('mouseleave', "img", function() {
  $("#item-popup").css({"display": "none"});
});




$(".button-collapse").sideNav();
