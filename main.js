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
var apiKey = "42abbcb15ac647baa65d34b7e6bf6c62";

$.ajaxSetup({
  headers: {
    "X-API-Key": apiKey
  }
});


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












//THE BELLOW IS THE ONE THAT I WANT TO WORK WITH !!!!!!!!!!!!!!!!!!!!!!!!!









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
//
// //THIS IS THE ONE I WILL USE
//
//
//
//
//
//
// //MASSIVE DATA PULL AND DISPLAY TO SCREEN!
//
// var page = 0;
// var dataGold = [];
//
// var displayData = function(){
//   var bungie = "http://www.bungie.net";
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
// var dataMine = function() {
//   page ++;
//
//   var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=${page}&definitions=true`);
//   $xhr.done(function(data) {
//     if ($xhr.status !== 200) {
//       return;
//     }
//     dataGold.push(data.Response.definitions);
//     console.log(data);
//     // if (page > 0) {
//     //   console.log(dataGold);
//     // }
//     if (page === 7) {
//       displayData()
//       return;
//     }
//     dataMine();
//   });
//   console.log("does this ever print?");
// };
//
// var $xhr = $.getJSON(`http://www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=0&definitions=true`);
// $xhr.done(function(data) {
//   if ($xhr.status !== 200) {
//     return;
//   }
//   dataGold.push(data.Response.definitions);
//   dataMine();
// });
// $xhr.fail(function(err) {
//   console.log(err);
// });
//
//
//
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








var openMenu = function() {
  $(".popup_bg").css({display: "block"});
};
var closeMenu = function () {
  $(".popup_bg").css({display: "none"});
};

$('body').on('mouseenter', 'tr', function() {
  // if ($) {
  //
  // }
  $(this).toggleClass('hover');
}).on('mouseleave', 'tr', function() {
  $(this).toggleClass('hover');
});


$('body').on('click', 'img', function() {
    openMenu();
});

$('#x').on('click', function() {
  closeMenu();
});

$(".button-collapse").sideNav();
