/**
 * Created by harryliu on 1/25/17.
 */
window.onload = function () {
    var items = [
        {
            title: 'EMERGENCY CONTACTS & RESOURCES',
            detail: '<h1>EMERGENCY CONTACTS & RESOURCES</h1>'
        },
        {
            title: 'REPORTING EMERGENCIES',
            detail: '<h1>REPORTING EMERGENCIES</h1>'
        },
        {
            title: 'ACTIVE SHOOTER',
            detail: '<h1>ACTIVE SHOOTER</h1>'
        },
        {
            title: 'HOSTAGE SITUATION',
            detail: '<h1>HOSTAGE SITUATION</h1>'
        },
        {
            title: 'LOCKDOWN',
            detail: '<h1>LOCKDOWN</h1>'
        },
        {
            title: 'SHELTER-IN-PLACE',
            detail: '<h1>Shelter-in-Place</h1>' +
            '<p>Shelter-in-Place is designed to keep you safe while indoors if dangerous environmental conditions exist, such as extreme weather or a hazardous  materials release.</p>' +
            '<p> If a Shelter-in-Place is ordered:' +
            '<ul>' +
                '<li>If outside, seek shelter in the nearest building, preferably in an interior room with few windows' +
                '</li>' +
                '<li>Allow access to others seeking shelter. Remember: a Shelter-in-Place order means there are dangerous environmental conditions but NOT any' +
                '<li>known threat of violent behavior. Allowing others into the building will not jeopardize your safety.</li>' +
                '<li>Close all exterior doors, windows and any other openings to the outside.</li>' +
                '<li>Avoid overcrowding by selecting several rooms if necessary.</li>' +
                '<li>Monitor WPI Alert and email for further instructions.</li>' +
                '<li>Report any emergency or unusual conditions to WPI Police.</li>' +
                '<li>Do not leave the building until receiving the “all clear” from a police officer, WPI Alert, email or website.</li>' +
            '</ul>'
        },
        {
            title: 'FIRE',
            detail: '<h1>FIRE</h1>'
        },
        {
            title: 'FIRE EVACUATION',
            detail: '<h1>FIRE EVACUATION</h1>'
        },
        {
            title: 'BOMB THREAT',
            detail: '<h1>BOMB THREAT</h1>'
        },
        {
            title: 'SUSPICIOUS PACKAGE',
            detail: '<h1>SUSPICIOUS PACKAGE</h1>'
        },
        {
            title: 'HAZARDOUS MATERIAL INCIDENT',
            detail: '<h1>HAZARDOUS MATERIAL INCIDENT</h1>'
        },
        {
            title: 'EMERGENCY NOTIFICATIONS',
            detail: '<h1>MERGENCY NOTIFICATIONS</h1>'
        },
        {
            title: 'EVACUATING THE DISABLED',
            detail: '<h1>EVACUATING THE DISABLED</h1>'
        },
        {
            title: 'MEDICAL EMERGENCY',
            detail: '<h1>MEDICAL EMERGENCY</h1>'
        },
        {
            title: 'STUDENT IN DISTRESS',
            detail: '<h1>STUDENT IN DISTRESS</h1>'
        },
        {
            title: 'WEATHER EMERGENCY',
            detail: '<h1>WEATHER EMERGENCY</h1>'
        }
    ];

    // var buttons = document.querySelectorAll(".buttons>li>ul>li");
    createButtons(items);
};

function createButtons(items) {
    var rowEl,
        buttonsEl;

    buttonsEl = document.querySelector(".buttons");

    items.forEach(function (item, index) {
        if (index % 4 == 0) {
            var rowWrapper = document.createElement("li");
            rowEl = document.createElement("ul");
            rowEl.className = "row";
            rowWrapper.appendChild(rowEl);

            var detailEl = document.createElement("div");
            detailEl.className = 'detail';
            rowWrapper.appendChild(detailEl);
            buttonsEl.appendChild(rowWrapper);
        }

        var buttonEl = document.createElement("li");
        buttonEl.innerHTML = "<div>" + item.title + "</div>";
        buttonEl.addEventListener('click', showDetail(buttonEl, rowEl,item));
        rowEl.appendChild(buttonEl);
    });
}

function showDetail(buttonEl, rowEl, item) {
    return function (event) {
        var allRows = document.querySelectorAll(".buttons>li>ul");
        allRows.forEach(function(row) {
            removeClass(row, 'active');

            var allButtons = row.querySelectorAll("li");
            allButtons.forEach(function(button) {
                removeClass(button, 'active');
            });
        });

        addClass(buttonEl, 'active');

        if (item.detail) {
            var detailEl = rowEl.nextSibling;
            detailEl.innerHTML = item.detail;
            var closeBtnEl = createCloseBtn(rowEl, buttonEl);
            detailEl.appendChild(closeBtnEl);
            addClass(rowEl, 'active');
        }
    }
}

/**
 * Add a class to a DOM object
 * @param {HTMLElement} dom - The DOM object
 * @param {string} className - The class name to add
 */
function addClass(dom, className) {
    if (dom.className.indexOf(className) == -1)
        dom.className += dom.className.length > 0 ? ' ' + className : className;
}

/**
 * Remove a class from a DOM object
 * @param {HTMLElement} dom - The DOM object
 * @param {string} className - The class name to remove
 */
function removeClass(dom, className) {
    dom.className = dom.className.replace(new RegExp('\\s?' + className, 'g'), '')
}

function createCloseBtn(rowEl, buttonEl) {
    var btn = document.createElement("div");
    btn.className = 'btn close';
    btn.innerHTML = '<span>close</span><i class="material-icons">close</i>';

    btn.addEventListener('click', function(){
        removeClass(rowEl, 'active');
        removeClass(buttonEl, 'active');
    });
    return btn;
}