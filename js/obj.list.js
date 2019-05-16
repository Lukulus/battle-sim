
/*
    Projekt:    battle-sim für etoa
                JS-Class Liste
    
        Das 'constructor(obj)' kommt aus den Dateien '*.json.js'

        Aufbau des 'obj':
            {
            "ID": 0, "Name": "keine Auswahl", 
            "Titan": 0, "Silizium": 0, "PVC": 0,"Tritium": 0,
            "Struktur": 0, "Schild": 0, "Waffen": 0, "Heilung": 0,
            "Kapazität": 0, "exp": 0 
            }
    
    Author und Rechte: Lukas "Lukulus" Heyen
    Stand: 04. Mai 2019
*/

'use strict';

class liste {
    
    //Befüllen des Objektes mit einem Schiffs oder Verteidigungs Typ
    constructor(obj) {
        this._obj = obj;
    }

    // Werteabruf
    getId (){
        return this._obj.ID;
    }

    getName(){
        return this._obj.Name;
    }

    getWaffe(){
        return this._obj.Waffen;
    }

    getSchilde(){
        return this._obj.Schild;
    }

    getStruktur(){
        return this._obj.Struktur;
    }

    getHeilung(){
        return this._obj.Heilung;
    }

    isExp(){
        let exp = false;
        if (this._obj.exp === 1) { exp = true; } 
        return exp;
    }

    getTitan(){
        return this._obj.Titan;
    }

    getSilizium(){
        return this._obj.Silizium;
    }

    getPVC(){
        return this._obj.PVC;
    }

    getTritium(){
        return this._obj.Tritium;
    }

    getRohstoffe() {
        return (this._obj.Titan + this._obj.Silizium + this._obj.PVC + this._obj.Tritium);
    }
}