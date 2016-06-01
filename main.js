
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
      // displayData(); //when code is finished run functions
      console.log(dataGold);


        for (var i = 0; i < dataGold.length; i++) {
           for (var variable in dataGold[i].items) {
            var item = dataGold[i].items[variable];


            // $('body').append($(`<div class="border"><p>${dataGold[i].items[variable].itemName}</p>
            // <img src=${bungie + "" + dataGold[i].items[variable].icon }>
            // <p> ${item.itemDescription}</p>
            // <p>equippable: ${item.equippable}</p>
            // <p>itemTypeName${item.itemTypeName}</p>
            // <p>BucketHash:${item.bucketTypeHash}</p>
            // <p>classType:${item.classType}</p>
            // <br><br>
            // <p>exclusive:${item.exclusive}</p>
            // <p>nonTransferable:${item.nonTransferable}</p>
            //
            // </div>`));


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
        // console.log("primary");
        // console.log(primary);
        // console.log('special');
        // console.log(special);
        // console.log('heavy');
        // console.log(heavy);
        // console.log('ghost');
        // console.log(ghost);


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
var choicesNotSet = [["equipedbox2",['equipedContainer2']], [["equipedbox3"],["equipedContainer3"]], [["equipedbox4"],["equipedContainer4"]]];

$('body').on('click', '.item-pad img', function() {
  var setItem = currentItems[this.id];
  //remove image from col that is first in choicesNotSet
  $(`#${choicesNotSet[0][0]}`).remove();
  //set new image for col that had image removed
  $(`#${choicesNotSet[0][1]}`).append(`<div id="equipedbox2"><img id=${choicesNotSet[0][0]} title=${choicesNotSet[0][1]} class="borderGrey responsive-img" src=${bungie + "" + setItem.icon }></div>`);

  choicesNotSet.shift();

  //TABLE SHOULD GET SET HERE
  // if (true) {
  //
  // }
});

$('body').on('click', '.selctionSlots img', function() {
  $(`#${this.id}`).remove();
  $(`#${this.title}`).append(`<div id="${this.id}"><img id="" class="border responsive-img" src="http://placehold.it/90x90"</div>`);
  choicesNotSet.push([[this.id],[this.title]]);
});


//REMOVE SELECTED ITEM AND PUSH BACK TO choicesNotSet








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














//creates on hover popup with expanded item details
$('.items').on('mouseenter', "img", function(event) {
  var weaponClass = this.tierTypeName;
  itemColor = ""
  $('#dynamicPop').remove();

  var currentObject = currentItems[this.id];
  console.log(currentObject);
  console.log(currentObject.tierTypeName);

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
                <td class="left-align">Rate of Fire</td>
                <td>  Graph  </td>
                <td id="talasdfaxw4" class="left-align">37/37</td>
              </tr>
              <tr>
                <td class="left-align">Impact</td>
                <td>  Graph  </td>
                <td id="tadasdfdsxw4" class="left-align">48/48</td>
              </tr>
              <tr>
                <td class="left-align">Range</td>
                <td>  Graph  </td>
                <td id="taxfswd4" class="left-align">59/63</td>
              </tr>
              <tr>
              <td class="left-align">Stability</td>
              <td>  Graph  </td>
              <td id="taswaxw4" class="left-align">57/84</td>
              </tr>
              <tr>
                <td class="left-align">Reload</td>
                <td>  Graph  </td>
                <td id="taxsdvcwd4" class="left-align">64/73</td>
              </tr>
              <tr>
              <td class="left-align">magazine</td>
              <td>  Graph  </td>
              <td id="taszxcvdfxw4" class="left-align">19/19</td>
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



  //this should be were I change the popup before it is displayed

  $("#item-popup").css({"display": "block", "marginLeft": event.pageX + 100, "marginTop": event.pageY -300});
}).on('mouseleave', "img", function() {
  $("#item-popup").css({"display": "none"});
});




$(".button-collapse").sideNav();
