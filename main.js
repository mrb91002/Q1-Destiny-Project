'use strict';

// // GETS USER ID FROM USER NAME
// let $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/SearchDestinyPlayer/1/SSC%20KillerSmly/');
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
// let $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/Account/4611686018429540397/Character/SSC%20KillerSmly/');
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

//  NEED TO GET INVENTORY ATTEMPT 2
//  let $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/2/Account/
// 4611686018429540397/Character/SSC%20KillerSmly/Inventory/Summary/');
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


// ***********BASIC INFORMATION ON A WEOPON THAT IS CURRENTLY EQUIPPED
// {membershipType}/Account/{destinyMembershipId}/
// Character/{characterId}/Inventory/{itemInstanceId}/
// let $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/Account/
// 4611686018429540397
// Character/2305843009215530210/Inventory/6917529058096904027/');
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
// let $xhr = $.getJSON('http://www.bungie.net/Platform/Destiny/1/Account/4611686018429540397/Items/');
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

const apiKey = '42abbcb15ac647baa65d34b7e6bf6c62';

$.ajaxSetup({
  headers: {
    'X-API-Key': apiKey
  }
});

// THE BELLOW IS THE ONE THAT I WANT TO WORK WITH !!!!!!!!!!!!!!!!!!!!!!!!!
//
//
// THIS IS THE ONE I WILL USE
//
//
// MASSIVE DATA PULL AND DISPLAY TO SCREEN!

const bungie = 'http://www.bungie.net';
let pictureNumber = 0;
let currentItems = [];
let itemGroupStart = 0;
let page = 0;
const dataGold = [];

const subClass = [[], [], []];
const primary = [[], [], [], []];
const special = [[], [], [], []];
const heavy = [];
const ghost = [];

const helmet = [[], [], []];
const gauntlets = [[], [], []];
const chestArmor = [[], [], []];
const legArmor = [[], [], []];
const classArmor = [[], [], []];
const artifact = [[], [], []];


const dataMine = function() {
  page += 1;

  const $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=${page}&definitions=true`);

  $xhr.done((data) => {
    if ($xhr.status !== 200) {
      return;
    }
    dataGold.push(data.Response.definitions);
    if (page === 7) {
      for (let i = 0; i < dataGold.length; i++) {
        for (const variable in dataGold[i].items) {
          const item = dataGold[i].items[variable];

          if (item.bucketTypeHash === 3448274439) {
            if (item.classType === 0) {
              helmet[0].push(item);
            }
            else if (item.classType === 1) {
              helmet[1].push(item);
            }
            else if (item.classType === 2) {
              helmet[2].push(item);
            }
          }
          if (item.bucketTypeHash === 14239492) {
            if (item.classType === 0) {
              chestArmor[0].push(item);
            }
            else if (item.classType === 1) {
              chestArmor[1].push(item);
            }
            else if (item.classType === 2) {
              chestArmor[2].push(item);
            }
          }
          if (item.bucketTypeHash === 3551918588) {
            if (item.classType === 0) {
              gauntlets[0].push(item);
            }
            else if (item.classType === 1) {
              gauntlets[1].push(item);
            }
            else if (item.classType === 2) {
              gauntlets[2].push(item);
            }
          }
          if (item.bucketTypeHash === 20886954) {
            if (item.classType === 0) {
              legArmor[0].push(item);
            }
            else if (item.classType === 1) {
              legArmor[1].push(item);
            }
            else if (item.classType === 2) {
              legArmor[2].push(item);
            }
          }
          if (item.bucketTypeHash === 1585787867) {
            if (item.classType === 0) {
              classArmor[0].push(item);
            }
            else if (item.classType === 1) {
              classArmor[1].push(item);
            }
            else if (item.classType === 2) {
              classArmor[2].push(item);
            }
          }
          if (item.bucketTypeHash === 434908299) {
            if (item.classType === 0) {
              artifact[0].push(item);
            }
            else if (item.classType === 1) {
              artifact[1].push(item);
            }
            else if (item.classType === 2) {
              artifact[2].push(item);
            }
          }

// left side

          if (item.bucketTypeHash === 3284755031) {
            if (item.classType === 0) {
              subClass[0].push(item);
            }
            else if (item.classType === 1) {
              subClass[1].push(item);
            }
            else if (item.classType === 2) {
              subClass[2].push(item);
            }
          }
          if (item.bucketTypeHash === 1498876634 && item.equippable === true) {
            if (item.classType === 0) {
              primary[0].push(item);
            }
            else if (item.classType === 1) {
              primary[1].push(item);
            }
            else if (item.classType === 2) {
              primary[2].push(item);
            }
            else if (item.classType === 3) {
              primary[3].push(item);
            }
          }
          if (item.bucketTypeHash === 2465295065 && item.equippable === true) {
            if (item.classType === 0) {
              special[0].push(item);
            }
            else if (item.classType === 1) {
              special[1].push(item);
            }
            else if (item.classType === 2) {
              special[2].push(item);
            }
            else if (item.classType === 3) {
              special[3].push(item);
            }
          }
          if (item.bucketTypeHash === 953998645 && item.equippable === true) {
            heavy.push(item);
          }
          if (item.bucketTypeHash === 4023194814 && item.equippable === true) {
            ghost.push(item);
          }
        }
      }

      // Logo turns green when it's safe to use the program
      $('.logo').css({ color: 'green' });

      return;
    }
    dataMine();
  });

  // console.log('hit the server');
};


  const $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/www.bungie.net/Platform/Destiny/Explorer/Items/?count=500&page=${page}&definitions=true`);

$xhr.done((data) => {
  if ($xhr.status !== 200) {
    return;
  }
  dataGold.push(data.Response.definitions);
  dataMine();
});
$xhr.fail((err) => {
  console.log(err);
});

const openMenu = function() {
  $('.popup_bg').css({ display: 'block' });
};
const closeMenu = function() {
  $('.popup_bg').css({ display: 'none' });
  itemGroupStart = 0;
  currentItems = [];
  pictureNumber = 0;
};

// appending funciton used for the items in the Selector popup *************
const appendItem = function(obj) {
  currentItems.push(obj);
  $('#mainSelector').append(`<img id="${pictureNumber}"
  src=${bungie + obj.icon}>`);
  pictureNumber += 1;
};

let selected = '';
let side = 0;
let classSelected = 0;







//working on pagination issues
var selectedLi = 1;

$(`.pagination`).on('click', 'div', (event) => {
  var $thisSelected = $(event.target);

  //when non-active pagination is clicked do something
  console.log(event.target);

  if (!($thisSelected.parent().hasClass('active'))) {
    console.log("this is working");
    $('.pagination').children().eq(selectedLi).toggleClass('active');
    console.log(event.target);
    console.log(event.target.id);
    selectedLi = event.target.id;
    $thisSelected.parent().toggleClass('active');
  }

  //
  //
  // console.log($('.pagination').children());
  // console.log($('.pagination').children().eq(1));
  // console.log($('.pagination').children().length -2); //-2 because of icons

});







const clone = function(clonedItem) {
  if ($(clonedItem).find('img')[0].src !== 'http://placehold.it/90x90') {
    const cloned = $(clonedItem[0]).clone();

    $('#addHere1').children()[0].remove();
    $('#addHere1').append(cloned);
    if ($('#addHere1 img').attr('arraypos') !== undefined) {
      const number = $('#addHere1 img').attr('arraypos');

      $(`#${selected + side}`).replaceWith(`<img id="${selected + side}"
      class="border responsive-img"
      src="${bungie + currentItems[number].icon}")>`);
    }

    $('#addHere1 img').parent().attr('id', 'removedOld');
    $('#addHere1 img').attr('id', 'equiped');
    $('#addHere1 img').parent().parent().attr('id', 'removedOld');
    $('#addHere1 img').parent().parent().parent().attr('id', 'removedOldOuter');
    $('#addHere1 a').remove();
  }
};

// clicking on items in the pop up menu will set them.

const choicesNotSet = [[['equipedbox2'], ['equipedContainer2'], [2]],
[['equipedbox3'], ['equipedContainer3'], [3]], [['equipedbox4'],
['equipedContainer4'], [4]]];

$('body').on('click', '.item-pad img', (event) => {
  const setItem = currentItems[event.target.id];
  const stats = setItem.stats;

  // remove image from col that is first in choicesNotSet

  $(`#selectedContainer${choicesNotSet[0][2]}`).remove();
  const named = choicesNotSet[0][2];

// table weapons:make if statement

  $(`#addHere${choicesNotSet[0][2]}`).append($(`
<div id="selectedContainer${choicesNotSet[0][2]}">
  <div id="equipedContainer${choicesNotSet[0][2]}" class="col s12
  borderGrey">
    <div id="equipedBox${choicesNotSet[0][2]}">
      <img id="${choicesNotSet[0][0]}" title="${choicesNotSet[0][1]}"
      name="${named}"  arrayPos="${event.target.id}" class="borderGrey
       responsive-img" src="${bungie}${setItem.icon}">
    </div>
  </div>

  <table class="responsive-table border-bottom col s12 borderGrey">
                <tbody>
                  <tr>
                    <td class="left-align">Attack</td>
                    <td id="" class="left-align">${stats[368428387].minimum}
                    / ${stats[368428387].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Rate of Fire</td>
                    <td id="" class="left-align">${stats[4284893193].minimum}
                    / ${stats[4284893193].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Impact</td>
                    <td id="" class="left-align">${stats[4043523819].minimum}
                    / ${stats[4043523819].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Range</td>
                    <td id="" class="left-align">${stats[1240592695].minimum}
                    / ${stats[1240592695].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">Stability</td>
                    <td id="" class="left-align">${stats[155624089].minimum}
                    / ${stats[155624089].maximum}</td>
                    </tr>
                  <tr>
                    <td class="left-align">Reload</td>
                    <td id="" class="left-align">${stats[4188031367].minimum}
                    / ${stats[4188031367].maximum}</td>
                  </tr>
                  <tr>
                    <td class="left-align">magazine</td>
                    <td id="" class="left-align">${stats[3871231066].minimum}
                    / ${stats[3871231066].maximum}</td>
                  </tr>
                </tbody>
              <tfoot>
              </tfoot>
            </table>
            <div>
              <a id="selectedContainer${choicesNotSet[0][2]}"
              onclick="clone(selectedContainer${choicesNotSet[0][2]})"
              class="waves-effect waves-light btn grey">Equip</a>
            </div>
          </div>
  `));

// End weapon table
// begin table for armor

// end table for armor

  choicesNotSet.shift();
});

// REMOVE SELECTED ITEM AND PUSH BACK TO choicesNotSet
$('body').on('click', '.selctionSlots img', function(event) {
  const target = event.target;

  if (target.id !== '' && target.id !== 'equiped') {
    $(`#${target.id}`).remove();
    $(`#${target.title}`).append('<div id=""><img id="" name="" class="border responsive-img" src="http://placehold.it/90x90"</div>');

    $(`#addHere${target.name} tbody`).replaceWith($(`
      <tbody>
        <tr>
          <td class="left-align">Attack</td>
          <td id="" class="left-align">##/##</td>
        </tr>
        <tr>
          <td class="left-align">Rate of Fire</td>
            <td id="" class="left-align">##/##</td>
          </tr>
          <tr>
            <td class="left-align">Impact</td>
            <td id="" class="left-align">##/##</td>
          </tr>
          <tr>
            <td class="left-align">Range</td>
          <td id="" class="left-align">##/##</td>
        </tr>
        <tr>
          <td class="left-align">Stability</td>
          <td id="" class="left-align">##/##</td>
        </tr>
        <tr>
          <td class="left-align">Reload</td>
          <td id="" class="left-align">##/##</td>
        </tr>
        <tr>
          <td class="left-align">magazine</td>
          <td id="" class="left-align">##/##</td>
        </tr>
      </tbody>
      `));

    choicesNotSet.push([[target.id], [target.title], [target.name]]);
  }
});

// clicking on an image uses image id to change hidden menu then opens it
$('body').on('click', '.pushDown img', (event) => {
// SIDE 1-------------------------------------------
  const target = event.target;

  if (target.id === 'subClass1') {
    selected = 'subClass';
    side = 1;
  }
  if (target.id === 'primary1') {
    selected = 'primary';
    side = 1;
  }
  if (target.id === 'special1') {
    selected = 'special';
    side = 1;
  }
  if (target.id === 'heavy1') {
    selected = 'heavy';
    side = 1;
  }
  if (target.id === 'ghost1') {
    selected = 'ghost';
    side = 1;
  }
  if (target.id === 'helmet1') {
    selected = 'helmet';
    side = 1;
  }
  if (target.id === 'gauntlets1') {
    selected = 'gauntlets';
    side = 1;
  }
  if (target.id === 'chest1') {
    selected = 'chestArmor';
    side = 1;
  }
  if (target.id === 'leg1') {
    selected = 'legArmor';
    side = 1;
  }
  if (target.id === 'classArmor1') {
    selected = 'classArmor';
    side = 1;
  }
  if (target.id === 'artifact1') {
    selected = 'artifact';
    side = 1;
  }

// SIDE 2 --------------------------------------------------------
  if (target.id === 'subClass2') {
    selected = 'subClass';
    side = 2;
  }
  if (target.id === 'primary2') {
    selected = 'primary';
    side = 2;
  }
  if (target.id === 'special2') {
    selected = 'special';
    side = 2;
  }
  if (target.id === 'heavy2') {
    selected = 'heavy';
    side = 2;
  }
  if (target.id === 'ghost2') {
    selected = 'ghost';
    side = 2;
  }
  if (target.id === 'helmet2') {
    selected = 'helmet';
    side = 2;
  }
  if (target.id === 'gauntlets2') {
    selected = 'gauntlets';
    side = 2;
  }
  if (target.id === 'chest2') {
    selected = 'chestArmor';
    side = 2;
  }
  if (target.id === 'leg2') {
    selected = 'legArmor';
    side = 2;
  }
  if (target.id === 'classArmor2') {
    selected = 'classArmor';
    side = 2;
  }
  if (target.id === 'artifact2') {
    selected = 'artifact';
    side = 2;
  }

  $('.item-pad img').remove();

  for (let i = 0; i < 24; i++) {
    itemGroupStart += 0;
    if (selected === 'helmet') {
      appendItem(helmet[classSelected][i]);
    }
    if (selected === 'gauntlets') {
      appendItem(gauntlets[classSelected][i]);
    }
    if (selected === 'chestArmor') {
      appendItem(chestArmor[classSelected][i]);
    }
    if (selected === 'legArmor') {
      appendItem(legArmor[classSelected][i]);
    }
    if (selected === 'classArmor') {
      appendItem(classArmor[classSelected][i]);
    }
    if (selected === 'artifact') {
      // need to check to see if there is enough in the array to continue
      // appending... DO THIS FOR EVERYTHING!!!!!!
      // Hereby Marked as FUTURE BUILD OUT
      if (itemGroupStart + i < artifact[classSelected].length) {
        appendItem(artifact[classSelected][i]);
      }
    }

    // left side of chars

    if (selected === 'subClass') {
      if (itemGroupStart + i < subClass[classSelected].length) {
        appendItem(subClass[classSelected][i]);
      }
    }

    if (selected === 'primary') {
      if (itemGroupStart + i < primary[3].length) { // need exclusive gun
        appendItem(primary[3][i]);
      }
    }

    if (selected === 'special') {
      if (itemGroupStart + i < special[3].length) { // need exclusive gun
        appendItem(special[3][i]);
      }
    }

    if (selected === 'heavy') {
      if (itemGroupStart + i < heavy.length) {
        appendItem(heavy[i]);
      }
    }

    if (selected === 'ghost') {
      if (itemGroupStart + i < ghost.length) {
        appendItem(ghost[i]);
      }
    }
  }
  openMenu();
});

// clicking on the x kills the menu
$('#x').on('click', () => {
  closeMenu();
});

// highlights line currently hovering over
// $('body').on('mouseenter', 'tr', function() {
//   $(this).toggleClass('hover');
// }).on('mouseleave', 'tr', function() {
//   $(this).toggleClass('hover');
// });

$('body').on('mouseenter', 'tr', (event) => {
  $(event.target).parent().toggleClass('hover');
}).on('mouseleave', 'tr', (event) => {
  $(event.target).parent().toggleClass('hover');
});


// THIS IS THE POPUP********

// creates on hover popup with expanded item details
$('.items').on('mouseenter', 'img', (event) => {
  // use for item borders later or item (item color could work as well)
  // const weaponClass = event.target.tierTypeName;

  let itemColor = '';

  const currentObject = currentItems[event.target.id];

  const stats = currentObject.stats;

  $('#dynamicPop').remove();

  // set color for item bg
  if (currentObject.tierTypeName === 'Common') {
    itemColor = 'white';
  }
  else if (currentObject.tierTypeName === 'Uncommon') {
    itemColor = 'green';
  }
  else if (currentObject.tierTypeName === 'Rare') {
    itemColor = 'blue';
  }
  else if (currentObject.tierTypeName === 'Legendary') {
    itemColor = 'purple';
  }
  else if (currentObject.tierTypeName === 'Exotic') {
    itemColor = 'yellow';
  }

  let attackOrDefense = '';

  // set layout Option and Attack or Defense
  if (currentObject.itemTypeName === 'Hand Cannon' ||
   currentObject.itemTypeName === 'Auto Rifle' ||
   currentObject.itemTypeName === 'Pulse Rifle' ||
   currentObject.itemTypeName === 'Scout Rifle' ||
   currentObject.itemTypeName === 'Fusion Rifle' ||
   currentObject.itemTypeName === 'Shotgun' ||
   currentObject.itemTypeName === 'Sniper Rifle' ||
   currentObject.itemTypeName === 'Sidearm') {
    attackOrDefense = 'Attack';
  }
  else if (currentObject.itemTypeName === 'Sword' ||
   currentObject.itemTypeName === 'Machine Gun' ||
   currentObject.itemTypeName === 'Rocket Launcher') {
    attackOrDefense = 'Attack';
  }
  else {
    attackOrDefense = 'Defense';
  }

// THIS WILL ONLY WORK FOR PRIMARY WEAPONS must create dynamic if statements
  if (attackOrDefense === 'Attack') {
    $('#item-popup').append($(`

    <div id="dynamicPop">
      <div class="row ${itemColor}">

        <div id="image1" class="col s3">
          <img class="responsive-img"
          src=${String(bungie) + currentObject.icon}>
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
                <td id="talasdfaxw4" class="left-align">
                ${stats[4284893193].minimum} / ${stats[4284893193].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Impact</td>
                <td>  Graph  </td>
                <td id="tadasdfdsxw4" class="left-align">
                ${stats[4043523819].minimum} / ${stats[4043523819].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Range</td>
                <td>  Graph  </td>
                <td id="taxfswd4" class="left-align">
                ${stats[1240592695].minimum} / ${stats[1240592695].maximum}</td>
              </tr>
              <tr>
              <td class="left-align">Stability</td>
              <td>  Graph  </td>
              <td id="taswaxw4" class="left-align">
              ${stats[155624089].minimum} / ${stats[155624089].maximum}</td>
              </tr>
              <tr>
                <td class="left-align">Reload</td>
                <td>  Graph  </td>
                <td id="taxsdvcwd4" class="left-align">
                ${stats[4188031367].minimum} / ${stats[4188031367].maximum}</td>
              </tr>
              <tr>
              <td class="left-align">magazine</td>
              <td>  Graph  </td>
              <td id="taszxcvdfxw4" class="left-align">
              ${stats[3871231066].minimum} / ${stats[3871231066].maximum}</td>
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

  if (attackOrDefense === 'Defense') { // NEED INPUT CODES FOR DEFENSE STATS
    $('#item-popup').append($(`

      <div id="dynamicPop">
        <div class="row ${itemColor}">

          <div id="image1" class="col s3">
            <img class="responsive-img"
            src=${String(bungie) + currentObject.icon}>
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
                  <td id="talasdfaxw4" class="left-align">${45} / ${65}</td>
                </tr>
                <tr>
                  <td class="left-align">Icon</td>
                  <td>  Discipline  </td>
                  <td id="tadasdfdsxw4" class="left-align">${100} / ${100}</td>
                </tr>
                <tr>
                  <td class="left-align">Icon</td>
                  <td>  Strength  </td>
                  <td id="taxfswd4" class="left-align">${70} / ${75}</td>
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

// this should be were I change the popup before it is displayed

  $('#item-popup').css({ display: 'block', marginLeft: event.pageX + 100,
  marginTop: event.pageY - 300 });
}).on('mouseleave', 'img', () => {
  $('#item-popup').css({ display: 'none' });
});

$('.button-collapse').sideNav();
