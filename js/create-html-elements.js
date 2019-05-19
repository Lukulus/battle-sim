
/*
    Projekt:    battle-sim für etoa
                dynamisches Erzeugen der HTML Elemente
    
    Author und Rechte: Lukas "Lukulus" Heyen
    Stand: 04. Mai 2019
*/


//
// Funktion zum dynamischen erzeugen der Import TextAreas 
// genutzt für die datenimporte Nutzereingaben
//
function setImportArea(div) {

    let getDiv = document.getElementById(div + '-Import')    
    let newElement = '';


    newElement = document.createElement('textarea');
    newElement.id = 'scan-' + div;
    newElement.placeholder = 'Hier die Kopie des scans einfügen - Achtung: nur den Teil Schiffe';
    newElement.rows = 6;
    getDiv.appendChild(newElement);
    newElement = document.createElement('button');
    newElement.innerHTML = 'improtieren';
    newElement.setAttribute('onClick', 'parseTextArea("scan-' + div + '" , "' + div + '")');
    getDiv.appendChild(newElement);
}

//
// Funktion zum dynamischen erzeugen eines Eingabe-DIV's 
// genutzt für alle Nutzereingaben
//
function createEingabeDiv() {

    let newElement = document.createElement('div');
    newElement.classList.add('Eingabe');
    newElement.style.textAlign = 'center';
    return newElement;
}

//
//  Funktion zum dynamischen erzeugen eines LABEL-Elementes 
//
function createLabel(name) {
    
    let newLabel = document.createElement('label');
    
    newLabel.innerHTML = name;

    return newLabel;
}

//
//  Funktion zum dynamischen erzeugen eines INPUT-Elementes 
//  Typ: Number - Standardwert: 0
//
function createInputNumber (div, id) {
    
    let newInput = document.createElement('input');
    let bez = div + '_' + id;

    newInput.type = 'number';
    newInput.value = 0;
    newInput.name = bez;
    newInput.id = bez;
    newInput.onchange = aktualsieren;
    return newInput;
}

//
//  Funktion zum dynamischen erzeugen eines SELECT-Elementes
//  Optionen aus den Obj-Listen sListe und dListe
//
function createSelect (div, id) {

    let newOption;
    let newSelect = document.createElement('select');
    let list;

    if ((div == 'Angr-S') || (div == 'Vtdg-S')) {
        list = sListe;
    } else {
        list = dListe;
    }
    // Bezeichnung Angreifer_Schiff => a_s plus Zahl (id)
    let bez = 'select_' + div + '_' + id;
    
    newSelect.name = bez;
    newSelect.id = bez;
    for (let i = 0; i < list.length; i++) {
        newOption = document.createElement('option');
        newOption.value = list[i].getId();
        newOption.text = list[i].getName();
        newSelect.appendChild(newOption);   
        newSelect.onchange = aktualsieren; 
    }
    newSelect.options.selectedIndex = 0;
    return newSelect;
}

//
//  Funktion zum dynamischen erzeugen von Eingabefeldern
//  [Select][InputNumber] in der Anzahl 'anzahl' 
//  Optionen aus den Obj-Listen sListe und dListe
//
function createFelder(div, anzahl){

    let getDiv = document.getElementById(div),
        x, c, newDiv;
    
        x = document.getElementById(div).getElementsByClassName('Eingabe');
        c = x.length;
        anzahl += x.length; 

        while (c < anzahl) {
            newDiv = createEingabeDiv();
            newDiv.appendChild(createSelect(div, c));
            newDiv.appendChild(createInputNumber(div, c));
            getDiv.appendChild(newDiv);
            c++;
         } 
    
}
//
//  Funktion zum dynamischen erzeigen einer Button-Leiste
//
function createButton(div, ziel) {

    let getDiv = document.getElementById(div),
        newElement;

    newElement = document.createElement('button'); 
    newElement.innerHTML = '+';
    newElement.setAttribute('onClick', 'createFelder("' + ziel + '" ,1)');
    getDiv.appendChild(newElement);

    newElement = document.createElement('button'); 
    newElement.innerHTML = '-';
    newElement.setAttribute('onClick', 'deleteFeld("' + ziel +'")');
    getDiv.appendChild(newElement);

    newElement = document.createElement('button'); 
    newElement.innerHTML = 'leeren';
    newElement.setAttribute('onClick', 'clearFelder("' + ziel +'")');
    getDiv.appendChild(newElement);

    newElement = document.createElement('button'); 
    newElement.innerHTML = 'importieren';
    newElement.setAttribute('onClick','setImportArea("' + ziel +'")');

    getDiv.appendChild(newElement);

}

//
//  Funktion zum dynamischen löschen von Eingabefeldern
//
function deleteFeld(div) {

    let getDiv = document.getElementById(div);

    getDiv.removeChild(getDiv.lastChild);
}

//
//  Funktion zum dynamischen löschen der Inhalte von Eingabefeldern
//
function clearFelder(div) {

    let getDiv = document.getElementById(div);
    let x = getDiv.getElementsByClassName('Eingabe');

    while (getDiv.firstChild){
        getDiv.removeChild(getDiv.firstChild);
    }

    createFelder(div, 7);
    // for (let c = 0; c < x.length; c++){
    //     document.getElementById('select_' + div + '_' + c).selectedIndex = 0;  
    //     document.getElementById(div + '_' + c).value = 0;
    // }  
    aktualsieren();      
}

//
//  Dynamisches erzeugen der Sim-Navigation
//
function createSimNav () {

    let nav = document.getElementById('nav');
    let newElement, innerElement, newLink;

    newElement = document.createElement('ul');

    innerElement = document.createElement('li');
    newLink = document.createElement('a');
    newLink.innerHTML = 'Forschung';
    newLink.setAttribute('href', '#');
    newLink.setAttribute('onclick', 'setSim("Forschung")');
    innerElement.appendChild(newLink);
    newElement.appendChild(innerElement)

    innerElement = document.createElement('li');
    newLink = document.createElement('a');
    newLink.innerHTML = 'Flotten';
    newLink.setAttribute('href', '#');
    newLink.setAttribute('onclick', 'setSim("Flotten")');
    innerElement.appendChild(newLink);
    newElement.appendChild(innerElement)

    innerElement = document.createElement('li');
    newLink = document.createElement('a');
    newLink.innerHTML = 'kb-Sim';
    newLink.setAttribute('href', '#');
    newLink.setAttribute('onclick', 'setSim("kb-Sim")');
    innerElement.appendChild(newLink);
    newElement.appendChild(innerElement)

    innerElement = document.createElement('li');
    newLink = document.createElement('a');
    newLink.innerHTML = 'Infos';
    newLink.setAttribute('href', '#');
    newLink.setAttribute('onclick', 'setSim("Infos")');
    innerElement.appendChild(newLink);
    newElement.appendChild(innerElement)
 
    // Einfügen der erzeugen Navigation in das <div class="nav" id="nav"></div> 
    nav.appendChild(newElement); 
}

//
//  Dynamisches erzeugen des Sim-DIV's Forschung
//
function createGridForschung() {

    let div = document.getElementById('sim-grid');
    let newDiv, newElement;

    // Erzeugen und füllen eines DIV's ".forschung_links" für den Angreifer 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('forschung_links');
    newDiv.id = 'Forschung';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Forschung Angreifer:';
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Waffe:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('af','waffe'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Schilde:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('af','schild'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Struktur:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('af','panzerung'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Regeneration:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('af','heilung'));
    newDiv.appendChild(newElement);
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Angreifer-Mystikum:';
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Waffe:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('am','waffe'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Schilde:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('am','schild'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Struktur:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('am','panzerung'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Regeneration:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('am','heilung'));
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".forschung _links" 
    div.appendChild(newDiv);                        

    // Erzeugen und füllen eines DIV's ".forschung_rechts" für den Verteidiger
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('forschung_rechts');
    newDiv.id = 'Forschung';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Forschung Verteidiger:';
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Waffe:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vf','waffe'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Schilde:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vf','schild'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Struktur:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vf','panzerung'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('Regeneration:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vf','heilung'));
    newDiv.appendChild(newElement);
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Verteidiger-Mystikum:';
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Waffe:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vm','waffe'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Schilde:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vm','schild'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Struktur:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vm','panzerung'));
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.appendChild(createLabel('%-Regeneration:'))
    newDiv.appendChild(newElement);
    newElement.appendChild(createInputNumber('vm','heilung'));
    newDiv.appendChild(newElement);
    newElement = document.createElement('h3');
    newElement.innerHTML = 'Spezialist:';
    newDiv.appendChild(newElement);
    newElement = createEingabeDiv();
    newElement.innerHTML = '<p><input id ="cb_ing" type="checkbox"> Ingieneur eingestellt</p>';
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".forschung _rechts" 
    div.appendChild(newDiv);                        
}

//
//  Dynamisches erzeugen des Sim-DIV's Flotten
//
function createGridFlotten() {

    let div = document.getElementById('sim-grid');
    let newDiv, newElement;

    // Erzeugen und füllen eines DIV's ".flotte_links" für den Angreifer 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('flotte_links');
    newDiv.id = 'Flotten';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Flotte des Angreifers:';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Angr-S-Import';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Angr-S';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Angr-S-button';
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".flotte_links" 
    div.appendChild(newDiv);                        
    createFelder('Angr-S', 7);
    createButton('Angr-S-button', 'Angr-S');
   
    // Erzeugen und füllen eines DIV's ".flotte_mitte" für den Verteidiger 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('flotte_mitte');
    newDiv.id = 'Flotten';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Flotte des Verteidigers:';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Vtdg-S-Import';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Vtdg-S';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Vtdg-S-button';
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".flotte_links" 
    div.appendChild(newDiv);                        
    createFelder('Vtdg-S', 7);
    createButton('Vtdg-S-button', 'Vtdg-S');

    // Erzeugen und füllen eines DIV's ".flotte_rechts" für den Verteidiger 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('flotte_rechts');
    newDiv.id = 'Flotten';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Verteidigungsanlagen:';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Vtdg-D-Import';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Vtdg-D';
    newDiv.appendChild(newElement);
    newElement  = document.createElement('div');
    newElement.id = 'Vtdg-D-button';
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".flotte_links" 
    div.appendChild(newDiv);                        
    createFelder('Vtdg-D', 7);
    createButton('Vtdg-D-button', 'Vtdg-D');

    // Erzeugen und füllen eines DIV's ".werte_links" für die Werte des Angreifers 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('werte_links');
    newDiv.id = 'Flotten';
    newElement = document.createElement('h3');
    newElement.innerHTML = 'Werte Angreifer:';
    newDiv.appendChild(newElement);
    newElement = document.createElement('div');
    newElement.id = 'a_werte';
    newElement.innerHTML = simAusgabe('a');
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".werte_links" 
    div.appendChild(newDiv); 

    // Erzeugen und füllen eines DIV's ".werte_mitterechts" für die Werte des Verteidigers 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('werte_mitterechts');
    newDiv.id = 'Flotten';
    newElement = document.createElement('h3');
    newElement.innerHTML = 'Werte Verteidiger:';
    newDiv.appendChild(newElement);
    newElement = document.createElement('div');
    newElement.id = 'v_werte';
    newElement.innerHTML = simAusgabe('v');
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".werte_mitterechts" 
    div.appendChild(newDiv); 
}

//
//  Dynamisches erzeugen des Sim-DIV's Kb-Sim
//
function createGridSim() {

    let div = document.getElementById('sim-grid');
    let newDiv, newElement;

    // Erzeugen und füllen eines DIV's ".kb_links" 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('kb_links');
    newDiv.id = 'kb-Sim';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Kampfbericht:';
    newDiv.appendChild(newElement);
    newElement = document.createElement('div');
    newElement.id = 'kb_werte';
    //newElement.innerHTML = kbAusgabe();
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".kb_links" 
    div.appendChild(newDiv); 

    // Erzeugen und füllen eines DIV's ".tf_rechts" 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('tf_rechts');
    newDiv.id = 'kb-Sim';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Trümmerfeld:';
    newDiv.appendChild(newElement);
    newElement = document.createElement('div');
    newElement.id = 'tf_werte';
    newElement.innerHTML = tfAusgabe();
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".tf_rechts" 
    div.appendChild(newDiv); 

    // Erzeugen und füllen eines DIV's ".ank_links" 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('ank_links');
    newDiv.id = 'kb-Sim';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Angreifer nach dem Kampf:';
    newDiv.appendChild(newElement);
    newElement = document.createElement('div');
    newElement.id = 'ank_werte';
    newElement.innerHTML = ankAusgabe();
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's ".ank_links" 
    div.appendChild(newDiv); 

    // Erzeugen und füllen eines DIV's ".vnk_rechts" 
    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('vnk_rechts');
    newDiv.id = 'kb-Sim';
    newElement  = document.createElement('h3');
    newElement.innerHTML = 'Verteidiger nach dem Kampf:';
    newDiv.appendChild(newElement);
    newElement = document.createElement('div');
    newElement.id = 'vnk_werte';
    newElement.innerHTML = vnkAusgabe();
    newDiv.appendChild(newElement);
    // Einfügen des erzeugen DIV's "vnk_rechts" 
    div.appendChild(newDiv); 
}

//
//  Dynamisches erzeugen des Info-DIV's
//
function createGridInfo () {

    let div = document.getElementById('sim-grid');
    let newDiv, newBlock = '';

    newDiv = document.createElement('div');
    newDiv.classList.add('innerSim');
    newDiv.classList.add('Infos');
    newDiv.id = 'Infos';
    newBlock += '<h2>Projekt "battle-sim" für ETOA</h2>';
    newBlock += '<p></p>';
    newBlock += '<h3>über Escape to Andromeda - ETOA</h3>';
    newBlock += '<p>Ein Zitat von der Homepage:</p>';
    newBlock += '<p>Escape to Andromeda ist ein browserbasiertes Sci-Fi Multiplayerspiel. ';
    newBlock += 'Es ist eine strategische Weltraumsimulation, bei der Spieler aus der ganzen Welt';
    newBlock += 'gleichzeitig gegeneinander antreten können. Du brauchst nur einen normalen Webbrowser';
    newBlock += 'um mitzuspielen. Die Anmeldung und das Spiel sind kostenlos, wir finanzieren uns';
    newBlock += 'alleine durch Bannerwerbung und Spenden.</p>';
    newBlock += '<p>Weitere Informationen zum Spiel findest du auf der <a href="http://www.etoa.ch" >Homepage</a> des ';
    newBlock += 'Spiels.</p>';
    newBlock += '<p></p><p></p>';
    newBlock += '<h3>Der battle sim</h3>';
    newBlock += '<p>wurde durch Lukas "Lukulus" Heyen im Mai 2019 erstellt.</p>';
    newBlock += '<p>Fragen, Anregungen und alles andere was ihr zum "battle-sim" mitteilen wollt bitte an:</p>';
    newBlock += '<p>E-Mail: l.heyen@gmx.net</p>';
    newBlock += '<p></p><p></p>';
    newBlock += '<h3>Hinweise:</h3>';
    newBlock += '<p>Die Daten und Werte der Schiffe und Verteidigungsanlagen geben die ';
    newBlock += 'Konfiguration der Runde 19 des Spieles wieder. Sie wurden manuell aus ';
    newBlock += 'den Spiel übertragen.</p>';
    newDiv.innerHTML = newBlock;
    div.appendChild(newDiv); 
}

//
//  Dynamisches erzeugen des Sim-Footer
//
function createSimFooter () {

    let div = document.getElementById('sim-grid');
    let newElement, innerElement;

    newElement = document.createElement('div');
    newElement.classList.add('footer');
    innerElement = document.createElement('p');
    innerElement.innerHTML ='etoa battle-sim by Lukulus, 2019';
    newElement.appendChild(innerElement);
    // Einfügen der erzeugen Navigation in das <div class="nav" id="nav"></div> 
    div.appendChild(newElement); 
}