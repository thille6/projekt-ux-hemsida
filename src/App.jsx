import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">LOGOTYP</div>
          <nav>
            <ul className="flex space-x-8 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Start</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tjänster</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Nyheter</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-white py-20 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-extrabold mb-6">Rubrik</h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Kort beskrivning som förklarar värdeerbjudandet tydligt och koncist.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-all">
              CTA-knapp
            </button>
          </div>
        </section>

        {/* TJÄNSTER */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Våra Tjänster</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mb-6 flex items-center justify-center font-bold text-gray-400">
                    0{i}
                  </div>
                  <h3 className="text-xl font-bold mb-4">Kort {i}: Rubrik</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Beskrivande text om tjänsten som hjälper användaren att förstå vad som erbjuds.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OM FÖRETAGET */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Om Företaget</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Här presenteras företaget med 3–5 rader text som ger en inblick i visionen, historiken eller teamet bakom tjänsterna. Vi strävar efter att leverera högsta kvalitet i allt vi gör.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Redo att börja?</h2>
            <button className="bg-white text-black px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all">
              En tydlig knapp
            </button>
          </div>
        </section>

        {/* NYHETER */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Nyheter</h2>
            <div className="space-y-12">
              {[1, 2].map((i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0">
                  <div className="md:w-1/4">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      2026-02-07
                    </p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold mb-4">Titel på inlägg {i}</h3>
                    <p className="text-gray-600 mb-6">
                      Kort text som sammanfattar nyheten och lockar till vidare läsning. En intressant rubrik följt av värdefull information.
                    </p>
                    <a href="#" className="text-black font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
                      Läs mer
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KONTAKT */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Telefon</h3>
                <p className="text-xl font-medium">08-123 45 67</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">E-post</h3>
                <p className="text-xl font-medium">hej@foretaget.se</p>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Ort</h3>
                <p className="text-xl font-medium">Stockholm</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-gray-500">
            <p className="font-bold text-gray-900 mb-2">Kontaktuppgifter</p>
            <p>Storgatan 1, 111 22 Stockholm</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-black">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-black">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-black">Twitter</a>
          </div>
          <div className="text-sm text-gray-400">
            © 2026 Företaget. Alla rättigheter förbehållna.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
