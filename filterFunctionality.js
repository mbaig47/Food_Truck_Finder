
function myMap() {
    let mapProp= {
        center:new google.maps.LatLng(41.850033, -87.6500523),
        zoom:5,
    };
    let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function setLabelVal() {
    let lbl = document.getElementById("distanceValue");
    let slider = document.getElementById("distanceByMiles");

    let val = slider.value;
    lbl.innerText = val.toString();

}

function populateChkBoxes() {
    let types = ["Mexican", "Indian", "American", "Chinese", "Italian", "Russian", "Canadian", "Japanese", "Thai", "Arabic", "Brazilian", "Ethiopian"];
    let pos = 0;
    let chkBoxContainer = document.getElementById("chkBoxes");

    for (let i =0; i < 3; i++)
    {
        let row = chkBoxContainer.insertRow(i);
        for (let j = 0; j < 4; j++)
        {
            let divE = document.createElement("DIV");
            let chkbox = document.createElement("INPUT");
            let lbl = document.createElement("LABEL");
            lbl.setAttribute("class", "cType");
            lbl.innerText = types[pos];
            pos+=1;
            chkbox.setAttribute("type", "checkbox");
            divE.appendChild(chkbox);
            divE.appendChild(lbl);

            let cell = row.insertCell(j);
            cell.appendChild(divE);
        }
    }
}

function populatePrice() {
    let prc = document.getElementById("priceVals");
    let row = prc.insertRow(0);
    let csh = "$";
    for (let j = 0; j < 4; j++)
    {
        let divE = document.createElement("DIV");
        let chkbox = document.createElement("INPUT");
        let lbl = document.createElement("LABEL");
        lbl.setAttribute("class", "cType");
        for (let i = 0; i < j+1; i++){
            lbl.innerText += csh;
        }
        chkbox.setAttribute("type", "checkbox");
        divE.appendChild(chkbox);
        divE.appendChild(lbl);

        let cell = row.insertCell(j);
        cell.appendChild(divE);
    }
}

function getCuisnes() {
    let cuisines = [];
    let tbl = document.getElementById("chkBoxes");
    for (let x of tbl.rows) {
        for (let y of x.cells) {
            let lbl = y.childNodes.item(0).childNodes.item(1).innerText;
            if (y.childNodes.item(0).childNodes.item(0).checked) {
                cuisines.push(lbl);
            }
        }
    }
    return cuisines;
}

function getPrices() {
    let prices = [];
    let pVal = document.getElementById("priceVals");
    for (x of pVal.rows[0].cells) {
        let lbl = x.childNodes.item(0).childNodes.item(1).innerText;
        if (x.childNodes.item(0).childNodes.item(0).checked) {
            prices.push(lbl);
        }
    }
    return prices;
}

function getResults() {

}

function getChecks(btn) {
    //gets all the values for the check boxes
    let distVal = document.getElementById("distanceByMiles").value;
    let cuisine = getCuisnes();
    let price = getPrices();
    console.log(distVal);
    if (document.getElementById("categories").style.display == "block") {
        document.getElementById("categories").style.display = "none";
        document.getElementById("results").style.display = "block";
    }
    else {
        document.getElementById("categories").style.display = "block";
        document.getElementById("results").style.display = "none";
    }

}
