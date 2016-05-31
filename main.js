// var apiKey11 = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.bungie.net/Platform/Destiny/Vanguard/Grimoire/1/4611686018434964640/", true);
// xhr.setRequestHeader("X-API-Key", apiKey11);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response.data); //Gjallarhorn
//   console.log(json.Response);
//  }
// }
//
// xhr.send();
//
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.bungie.net/Platform/Destiny/explorer/items/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response.data); //Gjallarhorn
//   console.log(json.Response);
//  }
// }
//
// xhr.send();
//
// // Get the membership info
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.bungie.net/platform/User/GetBungieAccount/5262939/254/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response); //Gjallarhorn
//  }
// }
//
// xhr.send();
//
//
//
//
//
//
//
//
// //Get the membership info
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.bungie.net/platform/User/GetBungieAccount/SSC20%smiley/254/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response); //Gjallarhorn
//  }
// }
//
// xhr.send();
//
//
//
//
//
//
//
//
// // Attempt at getting ID from USERNAME
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.bungie.net/platform/Destiny/1/Stats/GetMembershipIdByDisplayName/DRayX/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response); //Gjallarhorn
//  }
// }
//
// xhr.send();
//
//
//
//
//
// // SECOND ATTEMPT
// //Attempt at getting ID from USERNAME
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://www.bungie.net/platform/Destiny/SearchDestinyPlayer/2/ssc_killersmiley/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json.Response); //Gjallarhorn
//  }
// }
//
// xhr.send();
//
//
// SECOND ATTEMPT
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.bungie.net/Platform/Destiny/Explorer/items/", true);
// xhr.setRequestHeader("X-API-Key", apiKey);
//
// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   var json = JSON.parse(this.responseText);
//   console.log(json); //Gjallarhorn
//  }
// };
//
// xhr.send();
//
//
//
//
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// $.ajaxSetup({
//   headers: {
//     "X-API-Key": apiKey
//   }
// });
//
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/2/Stats/GetMembershipIdByDisplayName/player12345/');
//
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
//
//
// var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";
//
// $.ajaxSetup({
//   headers: {
//     "X-API-Key": apiKey
//   }
// });
//
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/1/Killersmiley87/');
//
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
// function getMembershipID(psn) {
//           $.ajax({
//             method: "GET",
//             url: "http://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/2/" + psn + "/",
//             dataType: 'JSON',
//             success: function(result){
//               alert(psn);
//               console.log(result);
//              }
//          });
//         }
//
// console.log(getMembershipID('Killersmiley87'));
//
//


//
//
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



//
// //CLOSE BUT NOT QUITE THERE...DATA NOT CONSISTENT
// var dataArray = [];
// var allArray = [];
//
// var dataMine = function() {
//   // var dataMine1 = []
//   for (var d = 0; d < 8; d++) {
//     var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=${d}&definitions=true`);
//     (function(d2){
//
//       $xhr.done(function(data) {
//           if ($xhr.status !== 200) {
//               return;
//           }
//           dataArray[d2] = [];
//             for (var i = 0; i < data.Response.data.itemHashes.length; i++) {
//               dataArray[d2][i] = data.Response.data.itemHashes[i];
//                console.log(data.Response.data.itemHashes[i]);
//             }
//             for (var p = 0; p < dataArray[d2].length; p++) {
//               console.log(data.Response.definitions.items[dataArray[d2][p]]);
//                 allArray.push(data.Response.definitions.items[dataArray[d2][p]]);
//
//             }
//           // }
//           console.log(allArray);
//
//       });
//
//       $xhr.fail(function(err) {
//           console.log(err);
//       });
//     })(d);
//   }
// };
//
// console.log("this is not good");
// dataMine();
//



//CLOSE BUT NOT QUITE THERE...DATA NOT CONSISTENT V2
// dataArray[d2] = [];
// for (var i = 0; i < data.Response.data.itemHashes.length; i++) {
//   dataArray[d2][i] = data.Response.data.itemHashes[i];
//    console.log(data.Response.data.itemHashes[i]);
// }
// for (var p = 0; p < dataArray[d2].length; p++) {
//   console.log(data.Response.definitions.items[dataArray[d2][p]]);
//     allArray.push(data.Response.definitions.items[dataArray[d2][p]]);
//     });
// var dataArray = [];
// var allArray = [];













//
// // Get the FIRST 500 WEAPONS
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/Explorer/Items/?buckets=PrimaryWeapon&count=500&definitions=true');
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
//
// // // Get the FIRST 100 as a page items
// var $xhr = $.getJSON('https://www.bungie.net/Platform/Destiny/Explorer/Items/?count=100&page=0' );
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
//




//NOT WORKING ATM
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/Stats/UniqueWeapons/1/4611686018434064178/2305843009217757075/?definitions=true' );
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








//NOT WORKING ATM
// var $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/' );
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
// /{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Inventory/Summary/

//
//
//
// // // Searching for 1 item
// var $xhr = $.getJSON('https://www.bungie.net/Platform/Destiny/Manifest/2/60040896/' );
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


// var sameDigits = function(a, b) {
//   a.sort(function(a, b){return b-a});
//   b.sort(function(a, b){return b-a});
//   }
// }


//
// //
// //
//
// //
// //
// //
// //
// // //Isolate Information /full pull
// //
// //
//
// //MASSIVE DATA PULL AND DISPLAY TO SCREEN!
// //dataGold now contains only the unique codes...
//
// var page = 0;
// var dataGold = [];
// var dataDef = [];
// var displayData = function(){
//   var bungie = "http://www.bungie.net";
//   // for (var i = 0; i < dataGold.length; i++) {
//     console.log(dataGold);
//     console.log(dataDef);
//
//     // // console.log(dataGold[i].items);
//     // for (var variable in dataGold[i].items) {
//     //   var item = dataGold[i].items[variable];
//     //   console.log(dataGold[i].items[variable]);
//     //   $('body').append($(`<div class="border"><p>${dataGold[i].items[variable].itemName}</p>
//     //   <img src=${bungie + "" + dataGold[i].items[variable].icon }>
//     //   <p> ${item.itemDescription}</p>
//     //   <p>equippable: ${item.equippable}</p>
//     //   <p>${item.tierTypeName}</p>
//     //   <p>${item.itemTypeName}</p>
//     //   <p>BucketHash:${item.bucketTypeHash}</p>
//     //   <p>ItemHash:${item.itemHash}</p>
//     //   <br><br>
//     //   </div>`))
//     // }
//   // }
// };
// //
// // var dataMine = function() {
// //   page ++;
// //
// //   var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?BucketHash=284967655&count=500&page=${page}&definitions=true`);
// //   $xhr.done(function(data) {
// //     if ($xhr.status !== 200) {
// //       return;
// //     }
// //     dataGold.push(data.Response.data.itemHashes);
// //     console.log(Object.keys(dataDef[0]).length);
// //     // if (page > 0) {
// //     //   console.log(dataGold);
// //     // }
// //     if (page === 7) {
// //       displayData()
// //       return;
// //     }
// //     dataMine();
// //   });
// //   console.log("does this ever print?");
// // };
//
// var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?BucketHash=284967655&definitions=true`);
// $xhr.done(function(data) {
//   if ($xhr.status !== 200) {
//     return;
//   }
//   dataGold.push(data);
//   // dataDef.push(data.Response.definitions.items);
//   // dataMine();
//   displayData();
// });
// $xhr.fail(function(err) {
//   console.log(err);
// });
//



// $('body').on('hover', 'tr', function() {
//   console.log(this);
//   $(this).toggle(function () {
//     $(this).css({backgroundColor: "grey"});
//   }, function () {
//
//   }
//
// });


















var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";

$.ajaxSetup({
  headers: {
    "X-API-Key": apiKey
  }
});


//THE BELLOW IS THE ONE THAT I WANT TO WORK WITH !!!!!!!!!!!!!!!!!!!!!!!!!
//
//
// //THIS IS THE ONE I WILL USE
//
//
//MASSIVE DATA PULL AND DISPLAY TO SCREEN!

var page = 0;
var dataGold = [];

var helmet = [[],[],[]];
var gauntlets = [[],[],[]];
var chestArmor = [[],[],[]];
var legArmor = [[],[],[]];
var classArmor = [[],[],[]];
var artifact = [[],[],[]];

var hunterChestArmor = [];
var hunterGauntlets = [];
var hunterHelmet = [];
var hunterLegArmor = [];
var hunterClassArmor = [];
var hunterArtifact = []; //This may not be class specific... check later.


var warlockChestArmor = [];
var warlockGauntlets = [];
var warlockHelmet = [];
var warlockLegArmor = [];
var warlockClassArmor = [];
var warlockArtifact = []; //This may not be class specific... check later.


var titanChestArmor = [];
var titanGauntlets = [];
var titanHelmet = [];
var titanLegArmor = [];
var titanClassArmor = [];
var titanArtifact = []; //This may not be class specific... check later.


// var displayData = function(){
  var bungie = "http://www.bungie.net";
//   for (var i = 0; i < dataGold.length; i++) {
//     // console.log(dataGold[i].items);
//     for (var variable in dataGold[i].items) {
//       var item = dataGold[i].items[variable];
//       console.log(dataGold[i].items[variable]);
//       $('body').append($(`<div class="border"><p>${dataGold[i].items[variable].itemName}</p>
//       <img src=${bungie + "" + dataGold[i].items[variable].icon }>
//       <p> ${item.itemDescription}</p>
//       <p>equippable: ${item.equippable}</p>
//       <p>${item.tierTypeName}</p>
//       <p>${item.itemTypeName}</p>
//       <p>BucketHash:${item.bucketTypeHash}</p>
//       <p>ItemHash:${item.itemHash}</p>
//       <br><br>
//       </div>`))
//     }
//   };
// };





//
// $('body').append($(`<div class="border"><p>${dataGold[i].items[variable].itemName}</p>
// <img src=${bungie + "" + dataGold[i].items[variable].icon }>
// <p> ${item.itemDescription}</p>
// <p>equippable: ${item.equippable}</p>
// <p>${item.tierTypeName}</p>
// <p>${item.itemTypeName}</p>
// <p>BucketHash:${item.bucketTypeHash}</p>
// <p>ItemHash:${item.itemHash}</p>
// <br><br>
// </div>`));




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
            if (item.bucketTypeHash == 3448274439) {
              if (item.classType == 0) {
                helmet[0].push(item)
              }
              if (item.classType == 1) {
                helmet[1].push(item)
              }
              if (item.classType == 2) {
                helmet[2].push(item)
              }
            }
            if (item.bucketTypeHash == 14239492) {
              if (item.classType == 0) {
                chestArmor[0].push(item)
              }
              if (item.classType == 1) {
                chestArmor[1].push(item)
              }
              if (item.classType == 2) {
                chestArmor[2].push(item)
              }
            }
            if (item.bucketTypeHash == 3551918588) {
              if (item.classType == 0) {
                gauntlets[0].push(item)
              }
              if (item.classType == 1) {
                gauntlets[1].push(item)
              }
              if (item.classType == 2) {
                gauntlets[2].push(item)
              }
            }
            if (item.bucketTypeHash == 20886954) {
              if (item.classType == 0) {
                legArmor[0].push(item)
              }
              if (item.classType == 1) {
                legArmor[1].push(item)
              }
              if (item.classType == 2) {
                legArmor[2].push(item)
              }
            }
            if (item.bucketTypeHash == 1585787867) {
              if (item.classType == 0) {
                classArmor[0].push(item)
              }
              if (item.classType == 1) {
                classArmor[1].push(item)
              }
              if (item.classType == 2) {
                classArmor[2].push(item)
              }
            }
            if (item.bucketTypeHash == 434908299) {
              if (item.classType == 0) {
                artifact[0].push(item)
              }
              if (item.classType == 1) {
                artifact[1].push(item)
              }
              if (item.classType == 2) {
                artifact[2].push(item)
              }
            }
          }
        }
        console.log(titanHelmet);
        console.log(titanChestArmor);
        console.log(titanGauntlets);
        console.log(titanLegArmor);
        console.log(hunterHelmet);
        console.log(hunterChestArmor);
        console.log(hunterGauntlets);
        console.log(hunterLegArmor);
        console.log(warlockHelmet);
        console.log(warlockChestArmor);
        console.log(warlockGauntlets);
        console.log(warlockLegArmor);
        console.log(hunterArtifact);
        console.log(warlockArtifact);
        console.log(titanArtifact);
        console.log(titanClassArmor);
        console.log(hunterClassArmor);
        console.log(warlockClassArmor);
        console.log(helmet);
        console.log(gauntlets);
        console.log(chestArmor);
        console.log(legArmor);
        console.log(classArmor);
        console.log(artifact);


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
  page = 0;
};




var selected = "";
var side = 0;
//titan=0, hunter=1 warlock=2, -- Titan SET TO DEFAULT -- NEED TO BUILD OUT CLASS CHANGE BUTTONS
var classSelected = 0;

//clicking on an image uses image id to change hidden menu then opens it
$('body').on('click', 'img', function() {


//SIDE 1-------------------------------------------
  if (this.id === "helmet1") {
    selected = "helmet";
    side = 1;
  }
  if (this.id === "gauntles1") {
    selected = "gauntlets";
    side = 1;
  }
  if (this.id === "chest1") {
    selected = "chest";
    side = 1;
  }
  if (this.id === "leg1") {
    selected = "leg";
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
  if (this.id === "helmet2") {
    selected = "helmet";
    side = 2;
    console.log(selected);
    console.log(side);
  }
  if (this.id === "gauntles2") {
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

  for (var i = 0; i < 27; i++) {
    page += 27; //MAKE SURE TO UPON EXITING SCREEN SET PAGE TO ZERO
    //everything checks out, but have a hiccup with the append ATM
    //of course its not going to work... it has no idea what to append... need $('body')
    //and whatever else... should build into a function...
    if (selected === "helmet") {
      $('#mainSelector').append(helmet[classSelected][i]);
    }
    if (selected === "gauntlets") {
      $('#mainSelector').append(gauntlets[classSelected][i]);
    }
    if (selected === "chestArmor") {
      $('#mainSelector').append(chestArmor[classSelected][i]);
    }
    if (selected === "legArmor") {
      $('#mainSelector').append(legArmor[classSelected][i]);
    }
    if (selected === "classArmor") {
      $('#mainSelector').append(classArmor[classSelected][i]);
    }
    if (selected === "artifact") {
      $('#mainSelector').append(artifact[classSelected][i]);
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
  $("#item-popup").css({"display": "block", "marginLeft": event.pageX + 100, "marginTop": event.pageY -300});
}).on('mouseleave', "img", function() {
  $("#item-popup").css({"display": "none"});
});





$(".button-collapse").sideNav();
