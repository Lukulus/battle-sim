
/*
    Projekt:    battle-sim für etoa
                JS-Script mit den json-Daten der Vtdg-Anlagen aus etoa R19 

    Author und Rechte: Lukas "Lukulus" Heyen
    Stand: 04. Mai 2019
*/

function getDefences () {

    return [
        {
          "ID": 0, "Name": "keine Auswahl",
          "Titan": 0, "Silizium": 0, "PVC": 0, "Tritium": 0,
          "Struktur": 0, "Schild": 0, "Waffen": 0, "Heilung": 0,
          "exp": 0
        },
        {
          "ID": 1, "Name": "CASTOR Hochenergieschild",
          "Titan": 95000, "Silizium": 40000, "PVC": 25000, "Tritium": 45000,
          "Struktur": 52500, "Schild": 105000, "Waffen": 0, "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 2,
          "Name": "KAPPA Minen",
          "Titan": 500,
          "Silizium": 300,
          "PVC": 100,
          "Tritium": 400,
          "Struktur": 5,
          "Schild": 5,
          "Waffen": 500,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 3,
          "Name": "MAGNETRON Störsender",
          "Titan": 20000,
          "Silizium": 50000,
          "PVC": 15000,
          "Tritium": 10000,
          "Struktur": 15000,
          "Schild": 1200,
          "Waffen": 0,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 4,
          "Name": "NEKKAR Plasmawerfer",
          "Titan": 25000000,
          "Silizium": 20000000,
          "PVC": 12000000,
          "Tritium": 11500000,
          "Struktur": 14000000,
          "Schild": 9500000,
          "Waffen": 14500000,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 5,
          "Name": "OMEGA Geschütz",
          "Titan": 750000,
          "Silizium": 525000,
          "PVC": 325000,
          "Tritium": 165000,
          "Struktur": 300000,
          "Schild": 350000,
          "Waffen": 275000,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 6,
          "Name": "OMEGA Geschütz M",
          "Titan": 750000,
          "Silizium": 525000,
          "PVC": 325000,
          "Tritium": 165000,
          "Struktur": 300000,
          "Schild": 350000,
          "Waffen": 275000,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 7,
          "Name": "PHOENIX Reparaturplattform",
          "Titan": 6500,
          "Silizium": 3500,
          "PVC": 1900,
          "Tritium": 3000,
          "Struktur": 3150,
          "Schild": 1900,
          "Waffen": 1700,
          "Heilung": 825,
          "exp": 1
        },
        {
          "ID": 8,
          "Name": "PHOENIX Reparaturplattform M",
          "Titan": 6500,
          "Silizium": 3500,
          "PVC": 1900,
          "Tritium": 3000,
          "Struktur": 3150,
          "Schild": 1900,
          "Waffen": 1700,
          "Heilung": 825,
          "exp": 1
        },
        {
          "ID": 9,
          "Name": "POLARIS Raketengeschütz",
          "Titan": 1000,
          "Silizium": 700,
          "PVC": 500,
          "Tritium": 300,
          "Struktur": 450,
          "Schild": 325,
          "Waffen": 350,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 10,
          "Name": "POLARIS Raketengeschütz M",
          "Titan": 1000,
          "Silizium": 700,
          "PVC": 500,
          "Tritium": 300,
          "Struktur": 450,
          "Schild": 325,
          "Waffen": 350,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 11,
          "Name": "SAGITTARIUS Plasmaschild",
          "Titan": 1350000,
          "Silizium": 1000000,
          "PVC": 625000,
          "Tritium": 1050000,
          "Struktur": 1400000,
          "Schild": 2100000,
          "Waffen": 0,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 12,
          "Name": "SIGMA Hochenergieschild",
          "Titan": 250000000,
          "Silizium": 20000000,
          "PVC": 5000000,
          "Tritium": 25000000,
          "Struktur": 25000000,
          "Schild": 225000000,
          "Waffen": 0,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 13,
          "Name": "SPICA Flakkanone",
          "Titan": 800,
          "Silizium": 475,
          "PVC": 425,
          "Tritium": 0,
          "Struktur": 300,
          "Schild": 150,
          "Waffen": 250,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 14,
          "Name": "SPICA Flakkanone M",
          "Titan": 800,
          "Silizium": 475,
          "PVC": 425,
          "Tritium": 0,
          "Struktur": 300,
          "Schild": 150,
          "Waffen": 250,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 15,
          "Name": "VEGA Hochenergieschild",
          "Titan": 3000,
          "Silizium": 1200,
          "PVC": 600,
          "Tritium": 1800,
          "Struktur": 1200,
          "Schild": 3500,
          "Waffen": 0,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 16,
          "Name": "ZIBAL Laserturm",
          "Titan": 3900,
          "Silizium": 3100,
          "PVC": 1500,
          "Tritium": 2100,
          "Struktur": 1500,
          "Schild": 2000,
          "Waffen": 1800,
          "Heilung": 0,
          "exp": 1
        },
        {
          "ID": 17,
          "Name": "ZIBAL Laserturm M",
          "Titan": 3900,
          "Silizium": 3100,
          "PVC": 1500,
          "Tritium": 2100,
          "Struktur": 1500,
          "Schild": 2000,
          "Waffen": 1800,
          "Heilung": 0,
          "exp": 1
        }
  ]
}  