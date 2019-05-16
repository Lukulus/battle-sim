
/*
    Projekt:    battle-sim für etoa
                Berechnungs und Ausgabefunktionen (V 3.0)
    
    Author und Rechte: Lukas "Lukulus" Heyen
    Stand: 14. Mai 2019
*/

// ----------------------------------------------------------------------------------------------------
//
// Berechnungsfunktionen
//
// ----------------------------------------------------------------------------------------------------

function getPunkte (Liste, Typ, Menge) {

    let punkte = 0, summeRohstoffe = 0;

    for (let c = 0; c < Typ.length; c++) {
        summeRohstoffe += Liste[(Typ[c])].getRohstoffe() * Menge[c];
    }
    punkte = Math.trunc(summeRohstoffe / 1000);
    return punkte;
}

function getAnzahl(Menge) {

    let anzahl = 0;

    for (let c = 0; c < Menge.length; c++) {
        anzahl += Menge[c];
    }
    return anzahl;
}

function getWaffe (Liste, Typ, Menge) {

    let waffe = 0;

    for (let c = 0; c < Typ.length; c++) {
        waffe += Liste[(Typ[c])].getWaffe() * Menge[c];
    }
    return waffe;
}

function getSchilde (Liste, Typ, Menge) {

    let schilde = 0;

    for (let c = 0; c < Typ.length; c++) {
        schilde += Liste[(Typ[c])].getSchilde() * Menge[c];
    }
    return schilde;
}

function getStruktur (Liste, Typ, Menge) {

    let struktur = 0;

    for (let c = 0; c < Typ.length; c++) {
        struktur += Liste[(Typ[c])].getStruktur() * Menge[c];
    }
    return struktur;
}

function getHeilung (Liste, Typ, Menge) {

    let heilung = 0;

    for (let c = 0; c < Typ.length; c++) {
        heilung += Liste[(Typ[c])].getHeilung() * Menge[c];
    }
    return heilung;
}

function getEXP(Liste, Typ, anfangsMenge, endMenge){

    let exp = 0, summeRohstoffe = 0;

    for (let c = 0; c < anfangsMenge.length; c++) {
        if (Liste[(Typ[c])].isExp() === true) {
            summeRohstoffe += Liste[(Typ[c])].getRohstoffe() * (anfangsMenge[c] - endMenge[c]);
        }    
    }
    exp = Math.ceil(summeRohstoffe / 100000);
    return exp;
}

function getTfTitan(Liste, Typ, anfangsMenge, endMenge, faktor){

    let tf = 0;

    for (let c = 0; c < anfangsMenge.length; c++) {
        if (anfangsMenge[c] < 2 ){
            tf += Liste[(Typ[c])].getTitan() * (anfangsMenge[c] - endMenge[c]);
        } else {
            tf += faktor * Liste[(Typ[c])].getTitan() * (anfangsMenge[c] - endMenge[c]);
        }
    }    
    return tf;
}

function getTfSilizium(Liste, Typ, anfangsMenge, endMenge, faktor){

    let tf = 0;

    for (let c = 0; c < anfangsMenge.length; c++) {
        if (anfangsMenge[c] < 2 ){
            tf += Liste[(Typ[c])].getSilizium() * (anfangsMenge[c] - endMenge[c]);
        } else {
            tf += faktor * Liste[(Typ[c])].getSilizium() * (anfangsMenge[c] - endMenge[c]);
        }
    }    
    return tf;
}

function getTfPVC(Liste, Typ, anfangsMenge, endMenge, faktor){

    let tf = 0;

    for (let c = 0; c < anfangsMenge.length; c++) {
        if (anfangsMenge[c] < 2 ){
            tf += Liste[(Typ[c])].getPVC() * (anfangsMenge[c] - endMenge[c]);
        } else {
            tf += faktor * Liste[(Typ[c])].getPVC() * (anfangsMenge[c] - endMenge[c]);
        }
    }    
    return tf;
}

function setOutput(afaktor, vfaktor) {

    let x = document.getElementById('Angr-S').getElementsByClassName('Eingabe');
    let y = document.getElementById('Vtdg-S').getElementsByClassName('Eingabe');
    let z = document.getElementById('Vtdg-D').getElementsByClassName('Eingabe');
    let s;

    // aktualisieren der Schiffe und Vtdg-Anlagen in den Arrays 'output.*.s_menge und .d_menge
    output.a.aktuell.s_menge.length = x.length;
    output.a.aktuell.gs_menge.length = x.length;
    for (let c = 0; c < input.a.s_menge.length; c++) {
        s = (sListe[(input.a.s_typ[c])].getSchilde() + sListe[(input.a.s_typ[c])].getStruktur());
        output.a.aktuell.s_menge[c] = Math.ceil(afaktor * input.a.s_menge[c]);
        output.a.aktuell.gs_menge[c] = afaktor * input.a.s_menge[c];
        if ((s == 0) && (afaktor != 1)){
            output.a.aktuell.s_menge[c] = 0;
            output.a.aktuell.gs_menge[c] = 0;
        }
    }  
    output.v.aktuell.s_menge.length = y.length;
    output.v.aktuell.gs_menge.length = y.length;
    for (let c = 0; c < input.v.s_menge.length; c++) {
        s = (sListe[(input.v.s_typ[c])].getSchilde() + sListe[(input.v.s_typ[c])].getStruktur());
        output.v.aktuell.s_menge[c] = Math.ceil(vfaktor * input.v.s_menge[c]);
        output.v.aktuell.gs_menge[c] = vfaktor * input.v.s_menge[c];
        if ((s == 0) && (vfaktor != 1)){
            output.v.aktuell.s_menge[c] = 0;
            output.v.aktuell.gs_menge[c] = 0;
        }
    }  
    output.v.aktuell.d_menge.length = z.length;
    output.v.aktuell.gd_menge.length = z.length;
    for (let c = 0; c < input.v.d_menge.length; c++) {
        output.v.aktuell.d_menge[c] = Math.ceil(vfaktor * input.v.d_menge[c]);
        output.v.aktuell.gd_menge[c] = vfaktor * input.v.d_menge[c];
    }  

    output.a.aktuell.ges_waffe = Math.trunc(getWaffe(sListe, input.a.s_typ, output.a.aktuell.s_menge) * input.getForschungWaffeAngreifer());
    output.a.aktuell.ges_schilde = Math.trunc(getSchilde(sListe, input.a.s_typ, output.a.aktuell.s_menge) * input.getForschungSchildeAngreifer());
    output.a.aktuell.ges_panzerung = Math.trunc(getStruktur(sListe, input.a.s_typ, output.a.aktuell.s_menge) * input.getForschungStrukturAngreifer());
    output.a.aktuell.ges_heilung = Math.trunc(getHeilung(sListe, input.a.s_typ, output.a.aktuell.s_menge) * input.getForschungHeilungAngreifer());
    output.a.aktuell.sum_schiffe = getAnzahl(output.a.aktuell.s_menge);
    output.a.aktuell.sum_punkte_schiffe = getPunkte(sListe, input.a.s_typ, output.a.aktuell.s_menge);

    output.v.aktuell.ges_waffe = Math.trunc((getWaffe(sListe, input.v.s_typ, output.v.aktuell.s_menge) + getWaffe(dListe, input.v.d_typ, output.v.aktuell.d_menge)) * input.getForschungWaffeVerteidiger());
    output.v.aktuell.ges_schilde = Math.trunc((getSchilde(sListe, input.v.s_typ, output.v.aktuell.s_menge) + getSchilde(dListe, input.v.d_typ, output.v.aktuell.d_menge)) * input.getForschungSchildeVerteidiger());
    output.v.aktuell.ges_panzerung = Math.trunc((getStruktur(sListe, input.v.s_typ, output.v.aktuell.s_menge) + getStruktur(dListe, input.v.d_typ, output.v.aktuell.d_menge)) * input.getForschungStrukturVerteidiger());
    output.v.aktuell.ges_heilung = Math.trunc((getHeilung(sListe, input.v.s_typ, output.v.aktuell.s_menge) + getHeilung(dListe, input.v.d_typ, output.v.aktuell.d_menge)) * input.getForschungHeilungVerteidiger());
    output.v.aktuell.sum_schiffe = getAnzahl(output.v.aktuell.s_menge);
    output.v.aktuell.sum_punkte_schiffe = getPunkte(sListe, input.v.s_typ, output.v.aktuell.s_menge);
    output.v.aktuell.sum_defence = getAnzahl(output.v.aktuell.d_menge);
    output.v.aktuell.sum_punkte_defence = getPunkte(dListe, input.v.d_typ, output.v.aktuell.d_menge);
}

//
// Funktion zum Berechnung einer Kampfrunde
//
function setRunde(a, v){

    let kb = {a: 0, v: 0, aDeff:  0, aOff: 0, aReg: 0, vReg: 0, vDeff: 0, vOff: 0, afaktor: 1, vfaktor: 1, aSumme: 0, vSumme: 0};

    kb.a = a;
    kb.v = v; 
    kb.aSumme = output.a.aktuell.sum_schiffe;
    kb.vSumme = output.v.aktuell.sum_schiffe + output.v.aktuell.sum_defence;  
    kb.aOff = output.a.aktuell.ges_waffe;
    kb.vOff = output.v.aktuell.ges_waffe;

    // Kampfrunde
    kb.aDeff =  a - output.v.aktuell.ges_waffe;
    if (kb.aDeff < 0){
        kb.aDeff = 0;
        kb.fertig = true;
    }
    kb.vDeff = v - output.a.aktuell.ges_waffe;
    if (kb.vDeff < 0){
        kb.vDeff = 0;
        kb.fertig = true;
    }

    // Listen zwischenaktualisieren zur Berechnung der Heilung
    kb.afaktor = kb.aDeff / (output.a.init.ges_schilde + output.a.init.ges_panzerung);
    kb.vfaktor = kb.vDeff / (output.v.init.ges_schilde + output.v.init.ges_panzerung);
    setOutput(kb.afaktor, kb.vfaktor);

    //Heilung berechnen und umsetzen
    kb.aReg = Math.trunc(getHeilung(sListe, input.a.s_typ, output.a.aktuell.s_menge) * input.getForschungHeilungAngreifer());
    kb.vReg = Math.trunc((getHeilung(sListe, input.v.s_typ, output.v.aktuell.s_menge) + getHeilung(dListe, input.v.d_typ, output.v.aktuell.d_menge)) * input.getForschungHeilungVerteidiger());
    if (kb.aReg >= (0.9 * output.v.aktuell.ges_waffe)){
        kb.aReg = 0.9 * output.v.aktuell.ges_waffe;
    }
    if (kb.vReg >= (0.9 * output.a.aktuell.ges_waffe)){
        kb.vReg = 0.9 * output.a.aktuell.ges_waffe;
    }
    kb.aReg = Math.trunc(kb.aReg);
    kb.vReg = Math.trunc(kb.vReg);    
    kb.aDeff += kb.aReg;
    kb.vDeff += kb.vReg;
   
    // abschließende Listenaktualisierung
    kb.afaktor = kb.aDeff / (output.a.init.ges_schilde + output.a.init.ges_panzerung);
    kb.vfaktor = kb.vDeff / (output.v.init.ges_schilde + output.v.init.ges_panzerung);
    setOutput(kb.afaktor, kb.vfaktor);

    // Rückgabe der Rundenwerte
    return kb;
}

function getWiederherstellung(ing){

    let wh = [], x;

    for (let c = 0; c < input.v.d_menge.length; c++) {
        x = Math.trunc(ing * (input.v.d_menge[c] - output.v.aktuell.d_menge[c]));
        wh.push(x);
    }
    return wh;
}

// ----------------------------------------------------------------------------------------------------
//
// Ein- und Ausgabefunktionen
// 
// ----------------------------------------------------------------------------------------------------

function setScan (div, getText) {

    let Liste;

    if((div === 'Angr-S') || (div === 'Vtdg-S')) {
        Liste = sListe;
    } else {
        Liste = dListe;
    }
    for (let c = 0; c < getText.objekt.length; c++){

        for (let z = 0; z < Liste.length; z++){
           if (getText.objekt[c] == Liste[z].getName()) {
              document.getElementById('select_' + div + '_' + c).selectedIndex = z;  
              document.getElementById(div + '_' + c).value = getText.menge[c];
            } 
        }
    }        
    aktualsieren();
}

function parseTextArea(id, div) {

    let newText = document.getElementById(id),
        zeilen = [], worte = [], n = 2, x = 0,
        getText = {
                    objekt : [], 
                    menge : []
                  }
        
    zeilen = newText.value.split('\n');
    
    for (let c = 0; c < zeilen.length; c++){
        zeilen[c] = zeilen[c].replace('`', '');
        zeilen[c] = zeilen[c].replace(/\s+/g,' '); 
        if (zeilen[c].indexOf(' ') != -1 ){
            worte[x] = zeilen[c].split(' ');
            getText.objekt[x] = worte[x].slice(0, n).join(' ');            
            getText.menge[x] = Number(worte[x].slice(n, n + 1).join(' '));
            x++
        }
    }
    document.getElementById(div + '-Import').innerHTML = '';
    createFelder(div, (getText.menge.length + 1));
    setScan(div, getText);
}

function initOutput() {

    // Berechnung der Obj 'output.*.init' - werden nur durch Nutezereingaben
    // Erstbefüllen des Obj 'output.*.aktuell -werden im weiteren durch kb-sim geändert 
    output.a.init.ges_waffe = Math.trunc(getWaffe(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungWaffeAngreifer());
    output.a.aktuell.ges_waffe = Math.trunc(getWaffe(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungWaffeAngreifer());
    output.a.init.ges_schilde = Math.trunc(getSchilde(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungSchildeAngreifer());
    output.a.aktuell.ges_schilde = Math.trunc(getSchilde(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungSchildeAngreifer());
    output.a.init.ges_panzerung = Math.trunc(getStruktur(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungStrukturAngreifer());
    output.a.aktuell.ges_panzerung = Math.trunc(getStruktur(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungStrukturAngreifer());
    output.a.init.ges_heilung = Math.trunc(getHeilung(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungHeilungAngreifer());
    output.a.aktuell.ges_heilung = Math.trunc(getHeilung(sListe, input.a.s_typ, input.a.s_menge) * input.getForschungHeilungAngreifer());
    output.a.init.sum_schiffe = getAnzahl(input.a.s_menge);
    output.a.aktuell.sum_schiffe = getAnzahl(input.a.s_menge);
    output.a.init.sum_punkte_schiffe = getPunkte(sListe, input.a.s_typ, input.a.s_menge);
    output.a.aktuell.sum_punkte_schiffe = getPunkte(sListe, input.a.s_typ, input.a.s_menge);
    output.a.init.s_menge = input.a.s_menge;
        
    output.v.init.ges_waffe = Math.trunc((getWaffe(sListe, input.v.s_typ, input.v.s_menge) + getWaffe(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungWaffeVerteidiger());
    output.v.aktuell.ges_waffe = Math.trunc((getWaffe(sListe, input.v.s_typ, input.v.s_menge) + getWaffe(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungWaffeVerteidiger());
    output.v.init.ges_schilde = Math.trunc((getSchilde(sListe, input.v.s_typ, input.v.s_menge) + getSchilde(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungSchildeVerteidiger());
    output.v.aktuell.ges_schilde = Math.trunc((getSchilde(sListe, input.v.s_typ, input.v.s_menge) + getSchilde(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungSchildeVerteidiger());
    output.v.init.ges_panzerung = Math.trunc((getStruktur(sListe, input.v.s_typ, input.v.s_menge) + getStruktur(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungStrukturVerteidiger());
    output.v.aktuell.ges_panzerung = Math.trunc((getStruktur(sListe, input.v.s_typ, input.v.s_menge) + getStruktur(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungStrukturVerteidiger());
    output.v.init.ges_heilung = Math.trunc((getHeilung(sListe, input.v.s_typ, input.v.s_menge) + getHeilung(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungHeilungVerteidiger());
    output.v.aktuell.ges_heilung = Math.trunc((getHeilung(sListe, input.v.s_typ, input.v.s_menge) + getHeilung(dListe, input.v.d_typ, input.v.d_menge)) * input.getForschungHeilungVerteidiger());
    output.v.init.sum_schiffe = getAnzahl(input.v.s_menge);
    output.v.aktuell.sum_schiffe = getAnzahl(input.v.s_menge);
    output.v.init.sum_punkte_schiffe = getPunkte(sListe, input.v.s_typ, input.v.s_menge);
    output.v.aktuell.sum_punkte_schiffe = getPunkte(sListe, input.v.s_typ, input.v.s_menge);
    output.v.init.s_menge = input.v.s_menge;
    output.v.init.sum_defence = getAnzahl(input.v.d_menge);
    output.v.aktuell.sum_defence = getAnzahl(input.v.d_menge);
    output.v.init.sum_punkte_defence = getPunkte(dListe, input.v.d_typ, input.v.d_menge);
    output.v.aktuell.sum_punkte_defence = getPunkte(dListe, input.v.d_typ, input.v.d_menge);
    output.v.init.d_menge = input.v.d_menge;
}

//
// Funktion zum Berechnung und Ausgabe des TF's im DIV 'id=tf_Ausgabe' 
// Aufruf erfolgt durch die Funktion 'aktualisieren'
//
function tfAusgabe() {

    let newBlock = '';
    let tf_titan = 0, tf_silizium = 0, tf_pvc = 0;

    // Anteil des Angreifers am TF
    tf_titan = getTfTitan(sListe, input.a.s_typ, input.a.s_menge, output.a.aktuell.s_menge, 0.5);
    tf_silizium = getTfSilizium(sListe, input.a.s_typ, input.a.s_menge, output.a.aktuell.s_menge, 0.5);
    tf_pvc = getTfPVC(sListe, input.a.s_typ, input.a.s_menge, output.a.aktuell.s_menge, 0.5);

    // + Anteil des Vtdg am TF (Schiffe)
    tf_titan += getTfTitan(sListe, input.v.s_typ, input.v.s_menge, output.v.aktuell.s_menge, 0.5);
    tf_silizium += getTfSilizium(sListe, input.v.s_typ, input.v.s_menge, output.v.aktuell.s_menge, 0.5);
    tf_pvc += getTfPVC(sListe, input.v.s_typ, input.v.s_menge, output.v.aktuell.s_menge, 0.5);

    // + Anteil des Vtdg am TF (Vtdg-Anlagen)
    tf_titan += getTfTitan(dListe, input.v.d_typ, input.v.d_menge, output.v.aktuell.d_menge, 0.4);
    tf_silizium += getTfSilizium(dListe, input.v.d_typ, input.v.d_menge, output.v.aktuell.d_menge, 0.4);
    tf_pvc += getTfPVC(dListe, input.v.d_typ, input.v.d_menge, output.v.aktuell.d_menge, 0.4);

    // Aufrunden der Werte
    tf_titan = Math.ceil(tf_titan);
    tf_silizium = Math.ceil(tf_silizium);
    tf_pvc = Math.ceil(tf_pvc);

    // Ausgabe des errechneten TF's    
    newBlock += '<table>';
    newBlock += '<tr><td>Titan:</td><td>' + tf_titan.toLocaleString() + '</td></tr>';
    newBlock += '<tr><td>Silizium:</td><td>' + tf_silizium.toLocaleString() + '</td></tr>';
    newBlock += '<tr><td>PVC:</td><td>' + tf_pvc.toLocaleString() + '</td></tr>';
    newBlock += '</table><br />';
    newBlock += '<p>Für das Sammeln des TF\'s werden benötigt: </p>';
    newBlock += '<br /><table>';
    newBlock += '<tr><td>LORIAL Transporter:</td><td>' + Math.ceil((tf_pvc + tf_silizium + tf_titan) / 600000).toLocaleString()  + '</td></tr>';
    newBlock += '<tr><td>DEMETER Transporter:</td><td>' + Math.ceil((tf_pvc + tf_silizium + tf_titan) / 375000).toLocaleString()  + '</td></tr>';
    newBlock += '<tr><td>EOS, ATLAS oder SAIPH Transporter:</td><td>' + Math.ceil((tf_pvc + tf_silizium + tf_titan) / 325000).toLocaleString()  + '</td></tr>';
    newBlock += '<tr><td>AURORA Sonden:</td><td>' + Math.ceil((tf_pvc + tf_silizium + tf_titan) / 30000).toLocaleString()  + '</td></tr>';
    newBlock += '<tr><td>AIN Sonden:</td><td>' + Math.ceil((tf_pvc + tf_silizium + tf_titan) / 15000).toLocaleString()  + '</td></tr>';
    newBlock += '</table><br />';
    
    return newBlock;
}

//
// Funktion zum Berechnung und Ausgabe der Daten des Vtdg nach dem Kampf im DIV 'id=vnk_Ausgabe' 
// Aufruf erfolgt durch die Funktion 'aktualisieren'
//
function vnkAusgabe() {

    let newBlock = '', wh;

    // Berechnung des Anteils Wiederherstellung
    if (input.v.ingenieur == true) { ing = 0.8; } 
    else { ing = 0.4; }
    wh = getWiederherstellung(ing);

    // Ausgabe Tabelle der "überlebenden" Schiffe und Vtdg-Anlagen
    newBlock += '<br /><table>';
    for (let c = 0; c < output.v.init.s_menge.length; c++){
        if(input.v.s_typ[c] != 0) {
            newBlock += '<tr><td>' + sListe[(input.v.s_typ[c])].getName();
            newBlock += ' : </td><td>' + output.v.aktuell.s_menge[c].toLocaleString() + '</td></tr>';
        }
    }
    newBlock += '<tr><td><p></p></td></tr>';
    for (let c = 0; c < output.v.init.d_menge.length; c++){
        if(input.v.d_typ[c] != 0) {
            newBlock += '<tr><td>' + dListe[(input.v.d_typ[c])].getName();
            newBlock += ' : </td><td>' + output.v.aktuell.d_menge[c].toLocaleString() + ' (+';
            newBlock += wh[c] + ' =' + (ing *100) + '% Wiederherstellung)</td></tr>';
        }
    }
    newBlock += '</table>';
    // Ausgabe verlust an Flottenpunkte
    newBlock += '<p>Du hast ' + (output.v.init.sum_punkte_schiffe - output.v.aktuell.sum_punkte_schiffe).toLocaleString();
    newBlock += ' Flottenpunkte verloren. </p>';
    // Ausgabe verlust an Gebäudepunkte
    newBlock += '<p>Du hast ' + (output.v.init.sum_punkte_defence - output.v.aktuell.sum_punkte_defence).toLocaleString();
    newBlock += ' Gebäudepunkte verloren. ';
    newBlock += (getPunkte(dListe, input.v.d_typ, wh)).toLocaleString();
    newBlock += ' Gebäudepunkte wurden wieder hergestellt.</p>';

    newBlock += '<br />';
    // Ausgabe exp
    newBlock += '<p>Du gewinnst für jedes Mystikum, dass am Kampf teilnimmt und übersteht:<br /> ' + output.v.aktuell.exp.toLocaleString() + ' EXP. </p>';
    
    return newBlock;
}

//
// Funktion zum Berechnung und Ausgabe der Daten Angreifers nach dem Kampf im DIV 'id=ank_Ausgabe' 
// Aufruf erfolgt durch die Funktion 'aktualisieren'
//
function ankAusgabe() {

    let newBlock = '';

    // Ausgabe Schiffstabelle der "überlebenden" Schiffe
    newBlock += '<br /><table>';
    for (let c = 0; c < output.a.init.s_menge.length; c++){
        if(input.a.s_typ[c] != 0) {
            newBlock += '<tr><td>' + sListe[(input.a.s_typ[c])].getName();
            newBlock += ": </td><td>" + output.a.aktuell.s_menge[c].toLocaleString() + "</td><tr>";
        }
    }
    newBlock += '</table>';
    // Ausgabe verlust an Flottenpunkte
    newBlock += '<p>Du hast ' + (output.a.init.sum_punkte_schiffe - output.a.aktuell.sum_punkte_schiffe).toLocaleString();
    newBlock += ' Flottenpunkte verloren. </p>';
    newBlock += '<br />';
    // Ausgabe exp
    newBlock += '<p>Du gewinnst für jedes Mystikum, dass am Kampf teilnimmt und übersteht:<br />' + output.a.aktuell.exp.toLocaleString() + ' EXP. </p>';
    
    return newBlock;
}

//
// Funktion zum Berechnung und Ausgabe des Kampfes im DIV 'id=kb_Ausgabe' 
// Aufruf erfolgt durch die Funktion 'aktualisieren'
//
function kbAusgabe(Kampf) {

    let newBlock = '';

    for (let c = 0; c < Kampf.length; c++) {
        newBlock += '<p>' + Kampf[c].aSumme.toLocaleString() + ' Einheiten des Angreifers schießen mit einer Stärke von ' + Kampf[c].aOff.toLocaleString() + ' auf den Verteidiger.';
        newBlock += ' Der Verteidiger hat danach noch ' + (Kampf[c].vDeff - Kampf[c].vReg).toLocaleString() + ' Struktur- und Schildpunkte.</p>';
        newBlock += '<p>' + Kampf[c].vSumme.toLocaleString() + ' Einheiten des Verteidigers erwidern mit einer Stärke von ' + Kampf[c].vOff.toLocaleString() + ' auf den Angreifer.';
        newBlock += ' Der Angreifer hat danach noch ' + (Kampf[c].aDeff - Kampf[c].aReg).toLocaleString() + ' Struktur- und Schildpunkte.</p>';
        if ((Kampf[c].aReg > 0) && (Kampf[c].aDeff > 0)) {
                newBlock += '<p>Der Angreifer heilt danach ' + Kampf[c].aReg.toLocaleString() + ' Punkte und hat dann wieder ' + Kampf[c].aDeff.toLocaleString() + ' Struktur- und Schildpunkte.</p>';
            }
            if ((Kampf[c].vReg > 0) && (Kampf[c].vDeff > 0)) {
                newBlock += '<p>Der Verteidiger heilt danach ' + Kampf[c].vReg.toLocaleString() + ' Punkte und hat dann wieder ' + Kampf[c].vDeff.toLocaleString() + ' Struktur- und Schildpunkte.</p>';
            }
        newBlock += '<p></p>';    
    }
    if (Kampf.length != 0){
        if (Kampf.length == 1) {
                newBlock += '<p>Der Kampf dauert ' + Kampf.length + ' Runde.</p>';
            } else {
                newBlock += '<p>Der Kampf dauert ' + Kampf.length + ' Runden.</p>';
            }
        if ((Kampf[(Kampf.length-1)].aDeff != 0) && (Kampf[(Kampf.length-1)].vDeff == 0)) {
                newBlock += '<p><b>Der Angreifer hat den Kampf gewonnen.</b></p><br />';
            }        
        if ((Kampf[(Kampf.length-1)].vDeff != 0) && (Kampf[(Kampf.length-1)].aDeff == 0)) {
                newBlock += '<p><b>Der Verteidiger hat den Kampf gewonnen.</b></p><br />';
            }        
        if ((Kampf[(Kampf.length-1)].vDeff != 0) && (Kampf[(Kampf.length-1)].aDeff != 0)) {
                newBlock += '<p><b>Der Kampf endet unentschieden.</b></p><br />';
            }        
        if ((Kampf[(Kampf.length-1)].vDeff == 0) && (Kampf[(Kampf.length-1)].aDeff == 0)) {
                newBlock += '<p><b>Der Kampf endet unentschieden, da beide Flotten zerstört sind.</b></p><br />';
            }  
        }        

    return newBlock;
}

//
// Funktion zum Berechnung und Ausgabe des Grundwerte vor dem Kampf  
// Aufruf erfolgt durch die Funktion 'aktualisieren'
//
function simAusgabe(wer) {

    let newBlock = '',
        werte, forschungWaffe, forschungSchilde, forschungStruktur, forschungHeilung;
    
    // Prüfung Angreifer oder Verteidiger und berechnung der Forschungswerte
    if (wer === 'a') {
        werte = output.a.init;
        forschungWaffe = Math.round(100 * input.getForschungWaffeAngreifer());
        forschungSchilde = Math.round(100 * input.getForschungSchildeAngreifer());
        forschungStruktur = Math.round(100 * input.getForschungStrukturAngreifer());
        forschungHeilung = Math.round(100 * input.getForschungHeilungAngreifer());
    } else if (wer === 'v') {
        werte = output.v.init;
        forschungWaffe = Math.round(100 * input.getForschungWaffeVerteidiger());
        forschungSchilde = Math.round(100 * input.getForschungSchildeVerteidiger());
        forschungStruktur = Math.round(100 * input.getForschungStrukturVerteidiger());
        forschungHeilung = Math.round(100 * input.getForschungHeilungVerteidiger());
    }  
    //Ausgabe der Werte
    newBlock += '<table>';
    newBlock += '<tr><td>Schilde:</td><td>' + werte.ges_schilde.toLocaleString();
    newBlock += '</td><td> inkl. Forschung und Mystikum: ' + forschungSchilde + ' %</td></tr>';
    newBlock += '<tr><td>Struktur:</td><td>' + werte.ges_panzerung.toLocaleString();
    newBlock += '</td><td> inkl. Forschung und Mystikum: ' + forschungStruktur + ' %</td></tr>';
    newBlock += '<tr><td>Waffe:</td><td>' + werte.ges_waffe.toLocaleString();
    newBlock += '</td><td> inkl. Forschung und Mystikum: ' + forschungWaffe + ' %</td></tr>';
    newBlock += '<tr><td>Heilung:</td><td>' + werte.ges_heilung.toLocaleString();
    newBlock += '</td><td> inkl. Forschung und Mystikum: ' + forschungHeilung + ' %</td></tr>';
    newBlock += '<tr><td>Anzahl Schiffe:</td><td>' + werte.sum_schiffe.toLocaleString() + '</td><td>Flottenpunkte: ' + werte.sum_punkte_schiffe.toLocaleString() + '</td></tr>'; 
    if (wer === 'v') {
        newBlock += '<tr><td>Verteidigungsanlagen:</td><td>' + werte.sum_defence.toLocaleString() + '</td><td>Gebäudepunkte: ' + werte.sum_punkte_defence.toLocaleString() + '</td></tr>'; 
    }
    newBlock += '</table>';

    return newBlock;
}

//
// Funktion zum auslesen und Speichern der Nutzereingaben  
// Aufruf erfolgt durch die Funktion 'aktualisieren'
//
function inputAuslesen(){

    let name, i;
    let x = document.getElementById('Angr-S').getElementsByClassName('Eingabe');
    let y = document.getElementById('Vtdg-S').getElementsByClassName('Eingabe');
    let z = document.getElementById('Vtdg-D').getElementsByClassName('Eingabe');

    input.a.s_typ.length = 0; input.a.s_menge.length = 0;
    input.v.s_typ.length = 0; input.v.s_menge.length = 0;
    input.v.d_typ.length = 0; input.v.d_menge.length = 0;
    for (let c = 0; c < x.length; c++) {
        name = 'select_Angr-S_' + c;
        input.a.s_typ.push(Number(document.getElementById(name).selectedIndex));
        name = 'Angr-S_' + c;
        input.a.s_menge.push(Number(document.getElementById(name).value));
    }    
    for (let c = 0; c < y.length; c++) {
        name = 'select_Vtdg-S_' + c;
        input.v.s_typ.push(Number(document.getElementById(name).selectedIndex));
        name = 'Vtdg-S_' + c;
        input.v.s_menge.push(Number(document.getElementById(name).value));
    }
    for (let c = 0; c < z.length; c++) {
        name = 'select_Vtdg-D_' + c;
        input.v.d_typ.push(Number(document.getElementById(name).selectedIndex));
        name = 'Vtdg-D_' + c;
        input.v.d_menge.push(Number(document.getElementById(name).value));
    }
    input.a.f_waffe = Number(document.getElementById('af_waffe').value);
    input.a.f_schilde = Number(document.getElementById('af_schild').value);
    input.a.f_panzerung = Number(document.getElementById('af_panzerung').value);
    input.a.f_heilung = Number(document.getElementById('af_heilung').value);
    input.a.m_waffe = Number(document.getElementById('am_waffe').value);
    input.a.m_schilde = Number(document.getElementById('am_schild').value);
    input.a.m_panzerung = Number(document.getElementById('am_panzerung').value);
    input.a.m_heilung = Number(document.getElementById('am_heilung').value);
    input.v.f_waffe = Number(document.getElementById('vf_waffe').value);
    input.v.f_schilde = Number(document.getElementById('vf_schild').value);
    input.v.f_panzerung = Number(document.getElementById('vf_panzerung').value);
    input.v.f_heilung = Number(document.getElementById('vf_heilung').value);
    input.v.m_waffe = Number(document.getElementById('vm_waffe').value);
    input.v.m_schilde = Number(document.getElementById('vm_schild').value);
    input.v.m_panzerung = Number(document.getElementById('vm_panzerung').value);
    input.v.m_heilung = Number(document.getElementById('vm_heilung').value);
    input.v.ingenieur = document.getElementById('cb_ing').checked;
}

//
// Funktion zum aktualisieren alles Berechnungen und Ausgaben  
// Aufruf erfolgt bei Änderung eines der Eingabefelder Nutzereingaben 'onchange'
//
function aktualsieren() {

    let kb = {}, Kampf = [], a, v, r, ap = false, vp = false;
 
    // Schritt 1: Inputs lesen
    inputAuslesen();

    // Schritt 2a: Output.*.init setzen
    // Schritt 2b: Output.*.aktuell mit Faktor '1, 1' erstbefüllen 
    initOutput();
    setOutput(1, 1);

    // Schritt 3: Kampf rechnen
    Kampf.length = 0;
    r = 1;
    a = output.a.init.ges_schilde + output.a.init.ges_panzerung;
    v = output.v.init.ges_schilde + output.v.init.ges_panzerung;
    if ((a == 0) && (output.a.init.ges_waffe != 0)){ a++; ap = true; }
    if ((v == 0) && (output.v.init.ges_waffe != 0)){ v++; vp = true; }
    while ((r <= 5) && (a != 0) && (v != 0)) {
        if (ap == true) { a--; ap = false; }
        if (vp == true) { v--; vp = false; }
        kb = setRunde(a,v);
        Kampf.push(kb);
        a = kb.aDeff;
        v = kb.vDeff;
        r++;
    }

    // Schritt 4: exp berechnen
    output.a.aktuell.exp = getEXP(sListe, input.v.s_typ, output.v.init.s_menge, output.v.aktuell.s_menge);
    output.a.aktuell.exp += getEXP(dListe, input.v.d_typ, output.v.init.d_menge, output.v.aktuell.d_menge);
    output.v.aktuell.exp = getEXP(sListe, input.a.s_typ, output.a.init.s_menge, output.a.aktuell.s_menge);

    // Schritt 5: TF Berechnen
    // erfolgt bis auf weiteres in der TF-Ausgabe

    // Schritt 6: Ausgabe der Werte
    document.getElementById('a_werte').innerHTML = simAusgabe('a');
    document.getElementById('v_werte').innerHTML = simAusgabe('v');
    document.getElementById('kb_werte').innerHTML = kbAusgabe(Kampf);
    document.getElementById('tf_werte').innerHTML = tfAusgabe();
    document.getElementById('ank_werte').innerHTML = ankAusgabe();
    document.getElementById('vnk_werte').innerHTML = vnkAusgabe();
}
