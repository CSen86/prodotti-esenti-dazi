import React, { useState } from 'react';

const ProdottiEsentiDazi = () => {
  const [settoreAttivo, setSettoreAttivo] = useState(null);
  
  const dettagliCompleti = {
    "Energia e Prodotti Energetici": "Carbone, lignite, torba, coke, gas di carbone, catrami minerali, oli di petrolio greggi e raffinati (benzina, carburanti, oli lubrificanti, ecc.), gas naturale, GPL, energia elettrica, uranio [156, 157, 158, 163, 164, 165, 166, 167, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 197, 198].",
    
    "Minerali Critici e Ores": "Grafite, fosfati, barite, magnesite, amianto, fluorite, sali di magnesio, criolite, manganese, rame, cobalto, alluminio, zinco, cromo, tungsteno, uranio, titanio, niobio, tantalio, vanadio, argento, antimonio e loro concentrati [151, 152, 153, 154, 155, 156, 195, 196, 197, 198, 199, 200]. Include anche elementi delle terre rare, scandio, ittrio, litio, germanio e altri specificati nei capitoli 25, 26, 28, 81 [193, 200, 394, 395, 396, 398, 399, 400, 401, 402].",
    
    "Metalli di Base": "Rame e sue leghe (grezzo, rottami, polveri, barre, fili, lamiere, fogli, tubi, accessori, ecc. - Capitolo 74) [375, 376, 377, 378, 380, 381, 382, 383, 384, 386, 387, 388, 389, 390, 391, 392]. Articoli di nichel (7508) [397]. Zinco (grezzo, rottami, articoli - Capitolo 79) [393]. Stagno (grezzo, rottami, articoli - Capitolo 80). Tungsteno, Tantalio, Magnesio, Cobalto, Bismuto, Titanio, Antimonio, Manganese, Cromo, Renio, Tallio, Gallio, Indio, Niobio, Germanio (forme grezze, polveri, rottami, articoli specifici - Capitolo 81) [394, 395, 396, 397, 398, 399, 400, 401, 402]. Ferroleghe (7202) [374]. Rottami di acciaio inossidabile (7204).",
    
    "Prodotti Farmaceutici e Chimici": "Ghiandole/organi per uso organoterapico (3001), prodotti del sangue, sieri, vaccini, colture microbiche, ecc. (3002), medicamenti sfusi (3003) e in dosi (3004), reagenti diagnostici, contraccettivi chimici, ecc. (3006) [304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317]. Molti prodotti chimici organici (Cap. 29) e inorganici (Cap. 28), inclusi vitamine (2936), ormoni (2937), alcaloidi (2939), antibiotici (2941) [189, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 204, 205, 207, 208, 209, 211, 212, 213, 214, 215, 216, 217, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 237, 238, 240, 241, 242, 243, 244, 246, 247, 248, 249, 250, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 264, 265, 266, 267, 268, 269, 270, 271, 273, 274, 275, 276, 277, 278, 279, 280, 281, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303]. Polimeri specifici (Cap. 39) [321, 322, 323, 325]. Fertilizzanti potassici e altri (Cap. 31).",
    
    "Semiconduttori e Componenti Elettronici": "Diodi, transistor, tiristori, dispositivi semiconduttori fotosensibili, LED, circuiti integrati elettronici (processori, memorie, amplificatori, ecc.), loro parti (8541, 8542) [403, 404, 405]. Elementi chimici drogati per uso elettronico (3818).",
    
    "Legname e Prodotti in Legno": "Una vasta gamma di prodotti del Capitolo 44, inclusi legno da ardere, cippato, segatura, carbone di legna, legno grezzo (tronchi), traverse ferroviarie, legno segato o piallato, fogli da impiallacciatura, legno profilato (perline, pavimenti, modanature), pannelli di particelle (OSB), pannelli di fibra (MDF), legno compensato, pannelli impiallacciati e legno stratificato simile, legno densificato [326, 327, 328, 330, 331, 332, 333, 334, 336, 337, 338, 339, 340, 342, 343, 344, 345, 346, 347, 348, 350, 351, 352, 353, 355, 356, 357, 358, 359, 361, 362, 363, 364, 365, 366, 367].",
    
    "Materiale Stampato/Informativo": "Libri, giornali, periodici, libri per bambini, musica stampata, mappe, progetti, cataloghi commerciali, materiale pubblicitario (Capitolo 49) [368, 369, 370]. Questa categoria si allinea all'esclusione statutaria per materiali informativi (50 U.S.C. 1702(b)) [99, 412].",
    
    "Metalli Preziosi e Monete": "Argento, oro, platino, palladio, rodio, iridio, osmio, rutenio (grezzi, semilavorati, rottami), monete [196, 371, 372, 373].",
    
    "Altri": "Gomma naturale (4001). Articoli come corallo, conchiglie (0508)."
  };

  const settori = [
    {
      id: "energia",
      nome: "Energia e Prodotti Energetici",
      descrizione: "Fonti energetiche e combustibili",
      prodotti: [
        "Carbone e derivati",
        "Petrolio e derivati",
        "Gas naturale e GPL",
        "Energia elettrica",
        "Uranio"
      ],
      icona: "⚡",
      colore: "#FFD700"
    },
    {
      id: "minerali",
      nome: "Minerali Critici e Ores",
      descrizione: "Materie prime critiche per l'industria",
      prodotti: [
        "Grafite e fosfati",
        "Manganese, rame, cobalto",
        "Terre rare",
        "Metalli strategici"
      ],
      icona: "⛏️",
      colore: "#A0522D"
    },
    {
      id: "metalli",
      nome: "Metalli di Base",
      descrizione: "Metalli in varie forme e lavorazioni",
      prodotti: [
        "Rame e leghe",
        "Nichel e articoli",
        "Zinco e stagno",
        "Metalli speciali"
      ],
      icona: "🔩",
      colore: "#B8B8B8"
    },
    {
      id: "farmaceutici",
      nome: "Prodotti Farmaceutici e Chimici",
      descrizione: "Medicinali e sostanze chimiche",
      prodotti: [
        "Vaccini e sieri",
        "Medicamenti",
        "Composti chimici",
        "Polimeri specifici"
      ],
      icona: "💊",
      colore: "#4169E1"
    },
    {
      id: "semiconduttori",
      nome: "Semiconduttori e Componenti Elettronici",
      descrizione: "Tecnologia elettronica",
      prodotti: [
        "Diodi e transistor",
        "LED",
        "Circuiti integrati",
        "Componenti elettronici"
      ],
      icona: "🔌",
      colore: "#32CD32"
    },
    {
      id: "legname",
      nome: "Legname e Prodotti in Legno",
      descrizione: "Materiali e prodotti in legno",
      prodotti: [
        "Legno grezzo",
        "Legno lavorato",
        "Pannelli e compensati",
        "Prodotti finiti in legno"
      ],
      icona: "🪵",
      colore: "#8B4513"
    },
    {
      id: "stampati",
      nome: "Materiale Stampato/Informativo",
      descrizione: "Pubblicazioni e informazioni",
      prodotti: [
        "Libri e periodici",
        "Mappe e progetti",
        "Materiale pubblicitario"
      ],
      icona: "📚",
      colore: "#4682B4"
    },
    {
      id: "preziosi",
      nome: "Metalli Preziosi e Monete",
      descrizione: "Materiali di alto valore",
      prodotti: [
        "Oro e argento",
        "Platino e palladio",
        "Monete"
      ],
      icona: "💰",
      colore: "#DAA520"
    },
    {
      id: "altri",
      nome: "Altri",
      descrizione: "Prodotti vari",
      prodotti: [
        "Gomma naturale",
        "Corallo e conchiglie"
      ],
      icona: "🔄",
      colore: "#778899"
    }
  ];

  const handleSettoreClick = (id) => {
    if (settoreAttivo === id) {
      setSettoreAttivo(null);
    } else {
      setSettoreAttivo(id);
    }
  };

  const handleMouseOver = (event, id) => {
    // Potenziale funzionalità aggiuntiva al passaggio del mouse
  };

  return (
    <div className="p-4 max-w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Prodotti Esenti dai Dazi</h1>
      <p className="text-gray-600 mb-6 text-center">Executive Order 14257 - Annex II</p>
      
      {/* Visualizzazione a cerchi concentrici */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {/* Cerchio centrale */}
          <div className="absolute rounded-full w-24 h-24 bg-white border-2 border-gray-400 flex items-center justify-center z-20 shadow-lg">
            <span className="text-lg font-bold text-center">Prodotti Esenti</span>
          </div>
          
          {/* Cerchi esterni */}
          {settori.map((settore, index) => {
            const angle = (index * 2 * Math.PI) / settori.length;
            const radius = 150; // Raggio del cerchio su cui distribuire i settori
            const xPos = Math.cos(angle) * radius;
            const yPos = Math.sin(angle) * radius;
            
            return (
              <div 
                key={settore.id}
                className={`absolute rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md border-2 ${settoreAttivo === settore.id ? 'scale-125 z-30 border-black' : 'z-10 border-gray-200'}`}
                style={{
                  transform: `translate(${xPos}px, ${yPos}px)`,
                  backgroundColor: settore.colore,
                }}
                onClick={() => handleSettoreClick(settore.id)}
                onMouseOver={(e) => handleMouseOver(e, settore.id)}
              >
                <span className="text-2xl">{settore.icona}</span>
              </div>
            );
          })}
          
          {/* Linee di connessione */}
          <svg className="absolute w-full h-full pointer-events-none">
            {settori.map((settore, index) => {
              const angle = (index * 2 * Math.PI) / settori.length;
              const outerX = Math.cos(angle) * 150;
              const outerY = Math.sin(angle) * 150;
              
              return (
                <line
                  key={`line-${settore.id}`}
                  x1="0"
                  y1="0"
                  x2={outerX}
                  y2={outerY}
                  stroke={settoreAttivo === settore.id ? settore.colore : "#dddddd"}
                  strokeWidth={settoreAttivo === settore.id ? "3" : "1"}
                  opacity={settoreAttivo === settore.id ? "1" : "0.5"}
                />
              );
            })}
          </svg>
        </div>
      </div>
      
      {/* Pannello informativo dettagliato */}
      <div className="max-w-4xl mx-auto">
        {settoreAttivo ? (
          <div 
            className="p-5 rounded-lg shadow-lg mb-8 transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: settori.find(s => s.id === settoreAttivo)?.colore + '20',
              borderLeft: `6px solid ${settori.find(s => s.id === settoreAttivo)?.colore}`
            }}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">{settori.find(s => s.id === settoreAttivo)?.icona}</span>
              <h2 className="text-2xl font-bold">{settori.find(s => s.id === settoreAttivo)?.nome}</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Descrizione sintetica:</h3>
              <p>{settori.find(s => s.id === settoreAttivo)?.descrizione}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Dettaglio completo:</h3>
              <p className="text-sm">{dettagliCompleti[settori.find(s => s.id === settoreAttivo)?.nome]}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Principali categorie:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {settori.find(s => s.id === settoreAttivo)?.prodotti.map((prodotto, idx) => (
                  <div key={idx} className="bg-white p-2 rounded border text-sm">
                    {prodotto}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-5 rounded-lg shadow border text-center">
            <p className="text-lg">Seleziona un settore dal diagramma per visualizzare informazioni dettagliate sui prodotti esenti dai dazi.</p>
          </div>
        )}
        
        {/* Tabella riassuntiva */}
        <div className="overflow-hidden rounded-lg shadow mt-8">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700">Settore</th>
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700">Esempi di prodotti</th>
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700">Riferimenti HTSUS</th>
              </tr>
            </thead>
            <tbody>
              {settori.map((settore, idx) => (
                <tr 
                  key={idx} 
                  className={`border-t cursor-pointer ${settoreAttivo === settore.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  onClick={() => handleSettoreClick(settore.id)}
                >
                  <td className="py-2 px-3 text-sm">
                    <div className="flex items-center">
                      <span className="mr-2">{settore.icona}</span>
                      <span className="font-medium">{settore.nome}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-sm">
                    {settore.prodotti.slice(0, 2).join(", ")}
                    {settore.prodotti.length > 2 ? "..." : ""}
                  </td>
                  <td className="py-2 px-3 text-sm">
                    {(dettagliCompleti[settore.nome].match(/\[\d+(, \d+)*\]/g) || []).slice(0, 1).join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-4 border rounded-lg bg-blue-50">
          <p className="font-medium text-blue-800">Nota importante:</p>
          <p className="text-blue-700">Questi prodotti sono ESENTI dai dazi secondo l'Executive Order 14257. L'elenco si basa sui codici specifici del Harmonized Tariff Schedule of the United States (HTSUS) indicati nell'Annex II.</p>
        </div>
      </div>
    </div>
  );
};

export default ProdottiEsentiDazi;