/*
    Projekt:    battle-sim für etoa
                JS-Script zum dynamischen Seitenaufbau 

        Funktionen ausgelagert in 'create-html-elements.js'
        Berechnungen ausgelagert in 'battle-sim.js'

    Author und Rechte: Lukas "Lukulus" Heyen
    Stand: 04. Mai 2019
*/

'use strict';

//
//  Globale Array['obj'] zur Speicherung der Daten der Schiffe und Vtdg-Anlagen
//  In den Arrays sind Obj der Struktur aus 'obj.list.js'
//
let sListe = [],
    dListe = [];

//
//  Globales Objekt zur Speicherung der Eingaben 
//  input = Nutzereingaben und die Listen der Schiffe und Verteidigungsanlagen
//
let input = { 
                a : {
                        s_typ : [], s_menge: [], 
                        f_waffe: 0, f_schilde: 0, f_panzerung: 0, f_heilung: 0,
                        m_waffe: 0, m_schilde: 0, m_panzerung: 0, m_heilung: 0,
                    },
                getForschungWaffeAngreifer : function(){ return ((10 + this.a.f_waffe + (this.a.m_waffe / 10)) / 10); },
                getForschungSchildeAngreifer : function(){ return ((10 + this.a.f_schilde + (this.a.m_schilde / 10)) / 10); },    
                getForschungStrukturAngreifer : function(){ return ((10 + this.a.f_panzerung + (this.a.m_panzerung / 10)) / 10); },    
                getForschungHeilungAngreifer : function(){ return ((10 + this.a.f_heilung + (this.a.m_heilung / 10)) / 10); },    
                v : {
                        s_typ : [], s_menge: [],
                        d_typ : [], d_menge: [],
                        f_waffe: 0, f_schilde: 0, f_panzerung: 0, f_heilung: 0,
                        m_waffe: 0, m_schilde: 0, m_panzerung: 0, m_heilung: 0,
                        ingenieur : false
                    },
                getForschungWaffeVerteidiger : function(){ return ((10 + this.v.f_waffe + (this.v.m_waffe / 10)) / 10); },
                getForschungSchildeVerteidiger : function(){ return ((10 + this.v.f_schilde + (this.v.m_schilde / 10)) / 10); },    
                getForschungStrukturVerteidiger : function(){ return ((10 + this.v.f_panzerung + (this.v.m_panzerung / 10)) / 10); },    
                getForschungHeilungVerteidiger : function(){ return ((10 + this.v.f_heilung + (this.v.m_heilung / 10)) / 10); },    
                };    

//
// Globales Objekt zur Speicherung der Ausgabewerte 
// 'output.*.init'    <=> wird nur durch Nutzereingaben geändert
// 'output.*.aktuell' <=> wird durch das Script (Gefecht) geändert
//
let output = { 
    a : {
        init : {
                    ges_waffe: 0, ges_schilde: 0, ges_panzerung: 0, ges_heilung: 0,
                    sum_schiffe: 0, sum_punkte_schiffe: 0, s_menge: [],
                },
        aktuell: {
                    ges_waffe: 0, ges_schilde: 0, ges_panzerung: 0, ges_heilung: 0,
                    sum_schiffe: 0, sum_punkte_schiffe: 0, s_menge: [], gs_menge: [], exp : 0
                },        
        },
    v : {
        init : {
                    ges_waffe: 0, ges_schilde: 0, ges_panzerung: 0, ges_heilung: 0,
                    sum_schiffe: 0, sum_punkte_schiffe: 0, s_menge: [], 
                    sum_defence: 0, sum_punkte_defence: 0, d_menge: []
                },
        aktuell: {
                    ges_waffe: 0, ges_schilde: 0, ges_panzerung: 0, ges_heilung: 0,
                    sum_schiffe: 0, sum_punkte_schiffe: 0, s_menge: [], gs_menge: [], exp : 0,
                    sum_defence: 0, sum_punkte_defence: 0, d_menge: [], gd_menge: []
                },       
       }    
};

//
//  Funktion zum "setzen" des aktiven und sichtbaren DIV's 
//  In der Ininzialisierung : <div class="innerSim" id="Angreifer"></div>
//  (Die interne Navigation wird dynamisch in der Funktion "createGridBasis()" geschaffen)
//
function setSim (wert) {

    let listElements = document.getElementsByClassName('innerSim'),
        divId;

    for (let c = 0; c < listElements.length; c++) {
        divId = listElements[c].id;
        if (wert === divId){
            listElements[c].classList.add('sim-activ');
        } else {
            listElements[c].classList.remove('sim-activ');
        }    
    }
}

//
//  Inizialfunktion zum dynamischen Füllen der Seite am Ende des Ladevorgangs
//
function init() {

    let s, d, 
        shiplist = getShips(), defencelist = getDefences();
    
    for (let c = 0; c < shiplist.length; c++){
        s = new liste(shiplist[c]);
        sListe.push(s);
    }

    for (let c = 0; c < defencelist.length; c++){
        d = new liste(defencelist[c]);
        dListe.push(d);
    }

    createSimNav();         // in 'create-html-elements.js' 
    createGridForschung();  // in 'create-html-elements.js' 
    createGridFlotten();    // in 'create-html-elements.js' 
    createGridSim();        // in 'create-html-elements.js' 
    createGridInfo();       // in 'create-html-elements.js' 
    createSimFooter();      // in 'create-html-elements.js' 
    
    aktualsieren();
    
    setSim('Forschung');  
}

//
//  Inizialisierung der Seite
//
window.onload = init;