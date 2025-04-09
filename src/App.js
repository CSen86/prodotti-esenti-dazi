import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('it'); // Default to Italian

  const toggleLanguage = () => {
    setLanguage(language === 'it' ? 'en' : 'it');
  };

  // Data for both languages
  const translations = {
    it: {
      title: "Prodotti Esenti dai Dazi",
      subtitle: "Executive Order 14257 - Annex II",
      centerText: "Prodotti Esenti",
      selectPrompt: "Seleziona un settore dal diagramma per visualizzare informazioni dettagliate sui prodotti esenti dai dazi.",
      briefDesc: "Descrizione sintetica:",
      fullDetails: "Dettaglio completo:",
      mainCategories: "Principali categorie:",
      tableHeaders: ["Settore", "Esempi di prodotti", "Riferimenti HTSUS"],
      importantNote: "Nota importante:",
      exemptNotice: "Questi prodotti sono ESENTI dai dazi secondo l'Executive Order 14257. L'elenco si basa sui codici specifici del Harmonized Tariff Schedule of the United States (HTSUS) indicati nell'Annex II.",
      languageButton: "English",
      sectors: [
        {
          id: "energia",
          name: "Energia e Prodotti Energetici",
          description: "Fonti energetiche e combustibili",
          products: [
            "Carbone e derivati",
            "Petrolio e derivati",
            "Gas naturale e GPL",
            "Energia elettrica",
            "Uranio"
          ],
          icon: "⚡",
          color: "#FFD700"
        },
        {
          id: "minerali",
          name: "Minerali Critici e Ores",
          description: "Materie prime critiche per l'industria",
          products: [
            "Grafite e fosfati",
            "Manganese, rame, cobalto",
            "Terre rare",
            "Metalli strategici"
          ],
          icon: "⛏️",
          color: "#A0522D"
        },
        {
          id: "metalli",
          name: "Metalli di Base",
          description: "Metalli in varie forme e lavorazioni",
          products: [
            "Rame e leghe",
            "Nichel e articoli",
            "Zinco e stagno",
            "Metalli speciali"
          ],
          icon: "🔩",
          color: "#B8B8B8"
        },
        {
          id: "farmaceutici",
          name: "Prodotti Farmaceutici e Chimici",
          description: "Medicinali e sostanze chimiche",
          products: [
            "Vaccini e sieri",
            "Medicamenti",
            "Composti chimici",
            "Polimeri specifici"
          ],
          icon: "💊",
          color: "#4169E1"
        },
        {
          id: "semiconduttori",
          name: "Semiconduttori e Componenti Elettronici",
          description: "Tecnologia elettronica",
          products: [
            "Diodi e transistor",
            "LED",
            "Circuiti integrati",
            "Componenti elettronici"
          ],
          icon: "🔌",
          color: "#32CD32"
        },
        {
          id: "legname",
          name: "Legname e Prodotti in Legno",
          description: "Materiali e prodotti in legno",
          products: [
            "Legno grezzo",
            "Legno lavorato",
            "Pannelli e compensati",
            "Prodotti finiti in legno"
          ],
          icon: "🪵",
          color: "#8B4513"
        },
        {
          id: "stampati",
          name: "Materiale Stampato/Informativo",
          description: "Pubblicazioni e informazioni",
          products: [
            "Libri e periodici",
            "Mappe e progetti",
            "Materiale pubblicitario"
          ],
          icon: "📚",
          color: "#4682B4"
        },
        {
          id: "preziosi",
          name: "Metalli Preziosi e Monete",
          description: "Materiali di alto valore",
          products: [
            "Oro e argento",
            "Platino e palladio",
            "Monete"
          ],
          icon: "💰",
          color: "#DAA520"
        },
        {
          id: "altri",
          name: "Altri",
          description: "Prodotti vari",
          products: [
            "Gomma naturale",
            "Corallo e conchiglie"
          ],
          icon: "🔄",
          color: "#778899"
        }
      ],
      fullDetailsText: {
        "Energia e Prodotti Energetici": "Carbone, lignite, torba, coke, gas di carbone, catrami minerali, oli di petrolio greggi e raffinati (benzina, carburanti, oli lubrificanti, ecc.), gas naturale, GPL, energia elettrica, uranio [156, 157, 158, 163, 164, 165, 166, 167, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 197, 198].",
        
        "Minerali Critici e Ores": "Grafite, fosfati, barite, magnesite, amianto, fluorite, sali di magnesio, criolite, manganese, rame, cobalto, alluminio, zinco, cromo, tungsteno, uranio, titanio, niobio, tantalio, vanadio, argento, antimonio e loro concentrati [151, 152, 153, 154, 155, 156, 195, 196, 197, 198, 199, 200]. Include anche elementi delle terre rare, scandio, ittrio, litio, germanio e altri specificati nei capitoli 25, 26, 28, 81 [193, 200, 394, 395, 396, 398, 399, 400, 401, 402].",
        
        "Metalli di Base": "Rame e sue leghe (grezzo, rottami, polveri, barre, fili, lamiere, fogli, tubi, accessori, ecc. - Capitolo 74) [375, 376, 377, 378, 380, 381, 382, 383, 384, 386, 387, 388, 389, 390, 391, 392]. Articoli di nichel (7508) [397]. Zinco (grezzo, rottami, articoli - Capitolo 79) [393]. Stagno (grezzo, rottami, articoli - Capitolo 80). Tungsteno, Tantalio, Magnesio, Cobalto, Bismuto, Titanio, Antimonio, Manganese, Cromo, Renio, Tallio, Gallio, Indio, Niobio, Germanio (forme grezze, polveri, rottami, articoli specifici - Capitolo 81) [394, 395, 396, 397, 398, 399, 400, 401, 402]. Ferroleghe (7202) [374]. Rottami di acciaio inossidabile (7204).",
        
        "Prodotti Farmaceutici e Chimici": "Ghiandole/organi per uso organoterapico (3001), prodotti del sangue, sieri, vaccini, colture microbiche, ecc. (3002), medicamenti sfusi (3003) e in dosi (3004), reagenti diagnostici, contraccettivi chimici, ecc. (3006) [304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317]. Molti prodotti chimici organici (Cap. 29) e inorganici (Cap. 28), inclusi vitamine (2936), ormoni (2937), alcaloidi (2939), antibiotici (2941) [189, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 204, 205, 207, 208, 209, 211, 212, 213, 214, 215, 216, 217, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 237, 238, 240, 241, 242, 243, 244, 246, 247, 248, 249, 250, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 264, 265, 266, 267, 268, 269, 270, 271, 273, 274, 275, 276, 277, 278, 279, 280, 281, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303]. Polimeri specifici (Cap. 39) [321, 322, 323, 325]. Fertilizzanti potassici e altri (Cap. 31).",
        
        "Semiconduttori e Componenti Elettronici": "Diodi, transistor, tiristori, dispositivi semiconduttori fotosensibili, LED, circuiti integrati elettronici (processori, memorie, amplificatori, ecc.), loro parti (8541, 8542) [403, 404, 405]. Elementi chimici drogati per uso elettronico (3818).",
        
        "Legname e Prodotti in Legno": "Una vasta gamma di prodotti del Capitolo 44, inclusi legno da ardere, cippato, segatura, carbone di legna, legno grezzo (tronchi), traverse ferroviarie, legno segato o piallato, fogli da impiallacciatura, legno profilato (perline, pavimenti, modanature), pannelli di particelle (OSB), pannelli di fibra (MDF), legno compensato, pannelli impiallacciati e legno stratificato simile, legno densificato [326, 327, 328, 330, 331, 332, 333, 334, 336, 337, 338, 339, 340, 342, 343, 344, 345, 346, 347, 348, 350, 351, 352, 353, 355, 356, 357, 358, 359, 361, 362, 363, 364, 365, 366, 367].",
        
        "Materiale Stampato/Informativo": "Libri, giornali, periodici, libri per bambini, musica stampata, mappe, progetti, cataloghi commerciali, materiale pubblicitario (Capitolo 49) [368, 369, 370]. Questa categoria si allinea all'esclusione statutaria per materiali informativi (50 U.S.C. 1702(b)) [99, 412].",
        
        "Metalli Preziosi e Monete": "Argento, oro, platino, palladio, rodio, iridio, osmio, rutenio (grezzi, semilavorati, rottami), monete [196, 371, 372, 373].",
        
        "Altri": "Gomma naturale (4001). Articoli come corallo, conchiglie (0508)."
      }
    },
    en: {
      title: "Tariff-Exempt Products",
      subtitle: "Executive Order 14257 - Annex II",
      centerText: "Exempt Products",
      selectPrompt: "Select a sector from the diagram to view detailed information about tariff-exempt products.",
      briefDesc: "Brief description:",
      fullDetails: "Full details:",
      mainCategories: "Main categories:",
      tableHeaders: ["Sector", "Example products", "HTSUS References"],
      importantNote: "Important note:",
      exemptNotice: "These products are EXEMPT from tariffs according to Executive Order 14257. The list is based on specific codes from the Harmonized Tariff Schedule of the United States (HTSUS) indicated in Annex II.",
      languageButton: "Italiano",
      sectors: [
        {
          id: "energy",
          name: "Energy and Energy Products",
          description: "Energy sources and fuels",
          products: [
            "Coal and derivatives",
            "Petroleum and derivatives",
            "Natural gas and LPG",
            "Electricity",
            "Uranium"
          ],
          icon: "⚡",
          color: "#FFD700"
        },
        {
          id: "minerals",
          name: "Critical Minerals and Ores",
          description: "Critical raw materials for industry",
          products: [
            "Graphite and phosphates",
            "Manganese, copper, cobalt",
            "Rare earth elements",
            "Strategic metals"
          ],
          icon: "⛏️",
          color: "#A0522D"
        },
        {
          id: "metals",
          name: "Base Metals",
          description: "Metals in various forms and processes",
          products: [
            "Copper and alloys",
            "Nickel and articles",
            "Zinc and tin",
            "Special metals"
          ],
          icon: "🔩",
          color: "#B8B8B8"
        },
        {
          id: "pharma",
          name: "Pharmaceutical and Chemical Products",
          description: "Medicines and chemical substances",
          products: [
            "Vaccines and serums",
            "Medicaments",
            "Chemical compounds",
            "Specific polymers"
          ],
          icon: "💊",
          color: "#4169E1"
        },
        {
          id: "semiconductors",
          name: "Semiconductors and Electronic Components",
          description: "Electronic technology",
          products: [
            "Diodes and transistors",
            "LEDs",
            "Integrated circuits",
            "Electronic components"
          ],
          icon: "🔌",
          color: "#32CD32"
        },
        {
          id: "timber",
          name: "Timber and Wood Products",
          description: "Wood materials and products",
          products: [
            "Raw wood",
            "Processed wood",
            "Panels and plywood",
            "Finished wood products"
          ],
          icon: "🪵",
          color: "#8B4513"
        },
        {
          id: "printed",
          name: "Printed/Informational Materials",
          description: "Publications and information",
          products: [
            "Books and periodicals",
            "Maps and plans",
            "Advertising materials"
          ],
          icon: "📚",
          color: "#4682B4"
        },
        {
          id: "precious",
          name: "Precious Metals and Coins",
          description: "High-value materials",
          products: [
            "Gold and silver",
            "Platinum and palladium",
            "Coins"
          ],
          icon: "💰",
          color: "#DAA520"
        },
        {
          id: "others",
          name: "Others",
          description: "Various products",
          products: [
            "Natural rubber",
            "Coral and shells"
          ],
          icon: "🔄",
          color: "#778899"
        }
      ],
      fullDetailsText: {
        "Energy and Energy Products": "Coal, lignite, peat, coke, coal gas, mineral tars, crude and refined petroleum oils (gasoline, fuels, lubricating oils, etc.), natural gas, LPG, electricity, uranium [156, 157, 158, 163, 164, 165, 166, 167, 169, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 197, 198].",
        
        "Critical Minerals and Ores": "Graphite, phosphates, barite, magnesite, asbestos, fluorite, magnesium salts, cryolite, manganese, copper, cobalt, aluminum, zinc, chromium, tungsten, uranium, titanium, niobium, tantalum, vanadium, silver, antimony and their concentrates [151, 152, 153, 154, 155, 156, 195, 196, 197, 198, 199, 200]. Also includes rare earth elements, scandium, yttrium, lithium, germanium and others specified in chapters 25, 26, 28, 81 [193, 200, 394, 395, 396, 398, 399, 400, 401, 402].",
        
        "Base Metals": "Copper and its alloys (raw, waste, powders, bars, wires, plates, sheets, tubes, fittings, etc. - Chapter 74) [375, 376, 377, 378, 380, 381, 382, 383, 384, 386, 387, 388, 389, 390, 391, 392]. Nickel articles (7508) [397]. Zinc (raw, waste, articles - Chapter 79) [393]. Tin (raw, waste, articles - Chapter 80). Tungsten, Tantalum, Magnesium, Cobalt, Bismuth, Titanium, Antimony, Manganese, Chromium, Rhenium, Thallium, Gallium, Indium, Niobium, Germanium (raw forms, powders, waste, specific articles - Chapter 81) [394, 395, 396, 397, 398, 399, 400, 401, 402]. Ferroalloys (7202) [374]. Stainless steel waste (7204).",
        
        "Pharmaceutical and Chemical Products": "Glands/organs for organotherapeutic use (3001), blood products, serums, vaccines, microbial cultures, etc. (3002), bulk medicaments (3003) and dosed medicaments (3004), diagnostic reagents, chemical contraceptives, etc. (3006) [304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317]. Many organic chemicals (Ch. 29) and inorganic chemicals (Ch. 28), including vitamins (2936), hormones (2937), alkaloids (2939), antibiotics (2941) [189, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 204, 205, 207, 208, 209, 211, 212, 213, 214, 215, 216, 217, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 237, 238, 240, 241, 242, 243, 244, 246, 247, 248, 249, 250, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 264, 265, 266, 267, 268, 269, 270, 271, 273, 274, 275, 276, 277, 278, 279, 280, 281, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303]. Specific polymers (Ch. 39) [321, 322, 323, 325]. Potassic fertilizers and others (Ch. 31).",
        
        "Semiconductors and Electronic Components": "Diodes, transistors, thyristors, photosensitive semiconductor devices, LEDs, electronic integrated circuits (processors, memories, amplifiers, etc.), their parts (8541, 8542) [403, 404, 405]. Doped chemical elements for electronic use (3818).",
        
        "Timber and Wood Products": "A wide range of products from Chapter 44, including fuel wood, wood chips, sawdust, charcoal, raw wood (logs), railway sleepers, sawn or planed wood, veneer sheets, profiled wood (beadings, floors, moldings), particle board (OSB), fiberboard (MDF), plywood, veneered panels and similar laminated wood, densified wood [326, 327, 328, 330, 331, 332, 333, 334, 336, 337, 338, 339, 340, 342, 343, 344, 345, 346, 347, 348, 350, 351, 352, 353, 355, 356, 357, 358, 359, 361, 362, 363, 364, 365, 366, 367].",
        
        "Printed/Informational Materials": "Books, newspapers, periodicals, children's books, printed music, maps, plans, commercial catalogs, advertising material (Chapter 49) [368, 369, 370]. This category aligns with the statutory exclusion for informational materials (50 U.S.C. 1702(b)) [99, 412].",
        
        "Precious Metals and Coins": "Silver, gold, platinum, palladium, rhodium, iridium, osmium, ruthenium (raw, semi-manufactured, waste), coins [196, 371, 372, 373].",
        
        "Others": "Natural rubber (4001). Articles such as coral, shells (0508)."
      }
    }
  };

  // Current translation data based on selected language
  const t = translations[language];
  
  // State for active section
  const [activeSection, setActiveSection] = useState(null);

  const handleSectorClick = (id) => {
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
    }
  };

  return (
    <div className="p-4 max-w-full bg-gray-50 min-h-screen">
      {/* Language toggle button */}
      <div className="flex justify-end mb-2">
        <button 
          onClick={toggleLanguage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          {t.languageButton}
        </button>
      </div>
      
      <h1 className="text-2xl font-bold text-center mb-4">{t.title}</h1>
      <p className="text-gray-600 mb-6 text-center">{t.subtitle}</p>
      
      {/* Concentric circles visualization */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {/* Central circle */}
          <div className="absolute rounded-full w-24 h-24 bg-white border-2 border-gray-400 flex items-center justify-center z-20 shadow-lg">
            <span className="text-lg font-bold text-center">{t.centerText}</span>
          </div>
          
          {/* Outer circles */}
          {t.sectors.map((sector, index) => {
            const angle = (index * 2 * Math.PI) / t.sectors.length;
            const radius = 150; // Radius of the circle on which to distribute the sectors
            const xPos = Math.cos(angle) * radius;
            const yPos = Math.sin(angle) * radius;
            
            return (
              <div 
                key={sector.id}
                className={`absolute rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md border-2 ${activeSection === sector.id ? 'scale-125 z-30 border-black' : 'z-10 border-gray-200'}`}
                style={{
                  transform: `translate(${xPos}px, ${yPos}px)`,
                  backgroundColor: sector.color,
                }}
                onClick={() => handleSectorClick(sector.id)}
              >
                <span className="text-2xl">{sector.icon}</span>
              </div>
            );
          })}
          
          {/* Connection lines */}
          <svg className="absolute w-full h-full pointer-events-none">
            {t.sectors.map((sector, index) => {
              const angle = (index * 2 * Math.PI) / t.sectors.length;
              const outerX = Math.cos(angle) * 150;
              const outerY = Math.sin(angle) * 150;
              
              return (
                <line
                  key={`line-${sector.id}`}
                  x1="0"
                  y1="0"
                  x2={outerX}
                  y2={outerY}
                  stroke={activeSection === sector.id ? sector.color : "#dddddd"}
                  strokeWidth={activeSection === sector.id ? "3" : "1"}
                  opacity={activeSection === sector.id ? "1" : "0.5"}
                />
              );
            })}
          </svg>
        </div>
      </div>
      
      {/* Detailed information panel */}
      <div className="max-w-4xl mx-auto">
        {activeSection ? (
          <div 
            className="p-5 rounded-lg shadow-lg mb-8 transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: t.sectors.find(s => s.id === activeSection)?.color + '20',
              borderLeft: `6px solid ${t.sectors.find(s => s.id === activeSection)?.color}`
            }}
          >
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-3">{t.sectors.find(s => s.id === activeSection)?.icon}</span>
              <h2 className="text-2xl font-bold">{t.sectors.find(s => s.id === activeSection)?.name}</h2>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.briefDesc}</h3>
              <p>{t.sectors.find(s => s.id === activeSection)?.description}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="font-semibold mb-2">{t.fullDetails}</h3>
              <p className="text-sm">{t.fullDetailsText[t.sectors.find(s => s.id === activeSection)?.name]}</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">{t.mainCategories}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {t.sectors.find(s => s.id === activeSection)?.products.map((product, idx) => (
                  <div key={idx} className="bg-white p-2 rounded border text-sm">
                    {product}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-5 rounded-lg shadow border text-center">
            <p className="text-lg">{t.selectPrompt}</p>
          </div>
        )}
        
        {/* Summary table */}
        <div className="overflow-hidden rounded-lg shadow mt-8">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700">{t.tableHeaders[0]}</th>
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700">{t.tableHeaders[1]}</th>
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700">{t.tableHeaders[2]}</th>
              </tr>
            </thead>
            <tbody>
              {t.sectors.map((sector, idx) => (
                <tr 
                  key={idx} 
                  className={`border-t cursor-pointer ${activeSection === sector.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                  onClick={() => handleSectorClick(sector.id)}
                >
                  <td className="py-2 px-3 text-sm">
                    <div className="flex items-center">
                      <span className="mr-2">{sector.icon}</span>
                      <span className="font-medium">{sector.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-3 text-sm">
                    {sector.products.slice(0, 2).join(", ")}
                    {sector.products.length > 2 ? "..." : ""}
                  </td>
                  <td className="py-2 px-3 text-sm">
                    {(t.fullDetailsText[sector.name].match(/\[\d+(, \d+)*\]/g) || []).slice(0, 1).join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 p-4 border rounded-lg bg-blue-50">
          <p className="font-medium text-blue-800">{t.importantNote}</p>
          <p className="text-blue-700">{t.exemptNotice}</p>
        </div>
      </div>
    </div>
  );
};

export default App;