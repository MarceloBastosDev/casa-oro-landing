"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

type Line = "Todas" | "Origem" | "Ancestral" | "Essencial";

interface Candle {
  name: string;
  line: Exclude<Line, "Todas">;
  aroma: string;
  weight?: string;
  material?: string;
  price?: string;
  description: string;
  image: string;
  objectPosition?: string;
  comingSoon?: boolean;
}

const lines: Line[] = ["Todas", "Origem", "Ancestral", "Essencial"];

const lineDescriptions: Record<string, { label: string; text: string }> = {
  Essencial: {
    label: "Linha Essencial — Casa Oro",
    text: "Uma coleção criada para os rituais simples do cotidiano.\nVelas em vidro que unem elegância, aroma e presença para transformar pequenos momentos em experiências de cuidado.\n\nTransparentes, delicadas e atemporais, foram pensadas para habitar qualquer espaço com leveza, beleza e significado.\n\nCada chama acesa convida a desacelerar, respirar e sentir a casa como refúgio.",
  },
  Origem: {
    label: "Linha Origem — Casa Oro",
    text: "Uma coleção que nasce da matéria e do gesto.\nPeças em cerâmica fria preenchidas com cera de coco, criadas à mão para habitar o cotidiano com beleza e intenção.\n\nCada forma carrega uma história: de ciclos, raízes e da permanência do que é verdadeiro.\n\nSão objetos que não apenas decoram — existem para lembrar de onde viemos e do que nos sustenta.",
  },
  Ancestral: {
    label: "Linha Ancestral — Casa Oro",
    text: "Uma coleção que honra o que veio antes.\nFormas orgânicas, curvas que acolhem e fios que conectam — cada peça é uma homenagem aos ciclos da vida e à sabedoria dos processos.\n\nFeita à mão com cerâmica fria e cera de coco, a linha Ancestral convida à contemplação do que é profundo, invisível e essencial.\n\nQuando acesa, cada chama revela que tudo o que transforma também precisa de tempo.",
  },
};

const candles: Candle[] = [
  // ── Linha Origem ──────────────────────────────────────
  {
    name: "Chá da Alma",
    line: "Origem",
    aroma: "Vanilla",
    weight: "120g",
    material: "Cerâmica fria + cera de coco",
    objectPosition: "center 80%",
    description:
      "Em muitas tradições, a xícara representa pausa, partilha e escuta.\nÉ o recipiente que acolhe aquilo que nutre.\n\nNa espiritualidade, recipientes simbolizam tudo o que guardamos internamente: pensamentos, emoções, energia e intenção.\n\nNesta peça, a xícara se torna um ritual cotidiano.\nUm convite para voltar a si com calma, silêncio e presença.\n\nEla representa a vida interior: aquilo que se preenche conforme escolhas, atitudes e caminhos.\n\nE deixa uma pergunta silenciosa:\nDo que você tem se alimentado por dentro?",
    image: "/images/produtos/LINHA ORIGEM - CHA DA ALMA.png",
  },
  {
    name: "Coco Vivo",
    line: "Origem",
    aroma: "Bamboo",
    weight: "100g",
    material: "Cerâmica fria + cera de coco",
    objectPosition: "center 80%",
    description:
      "Inspirada no coco em seu ciclo natural, esta peça representa transformação, proteção e abundância.\n\nA base verde relembra a origem: o fruto ainda vivo, fresco e cheio de seiva.\nA parte superior em tom seco simboliza o tempo, a maturação e a sabedoria que só os processos revelam.\n\nAssim como a natureza, tudo passa por fases. Há momentos de florescer, amadurecer e entregar ao mundo o que foi cultivado por dentro.\n\nPreenchida com cera de coco, a peça honra sua própria essência ao retornar à matéria que a inspira.\n\nO aroma bamboo traz frescor, leveza e renovação.\nEvoca o vento entre as folhas, a força flexível da natureza e a calma de quem cresce sem pressa.\n\nQuando acesa, esta vela recorda que raízes profundas sustentam novos ciclos.\n\nFeita à mão para lembrar que tudo tem seu tempo de se tornar inteiro.",
    image: "/images/produtos/ORIGEM - COCO VIVO.png",
  },
  {
    name: "Pedra Âmago",
    line: "Origem",
    aroma: "Vanilla",
    weight: "120g",
    material: "Cerâmica fria + cera de coco",
    objectPosition: "center 80%",
    description:
      "Inspirada na força silenciosa da pedra, esta peça representa a base que sustenta e o tempo que transforma.\n\nNascida da terra e moldada pela passagem dos ciclos, lembra que tudo o que permanece verdadeiro se constrói com profundidade.\n\nCom aroma vanilla, sua chama aquece o ambiente com suavidade e conforto, revelando que até a matéria mais firme também guarda calor em seu centro.\n\nFeita à mão para honrar a essência que sustenta.",
    image: "/images/produtos/ORIGEM - Pedra Âmago.png",
  },
  {
    name: "Jardim de Luz",
    line: "Origem",
    aroma: "Vanilla",
    weight: "150g",
    material: "Cerâmica fria + cera de coco",
    objectPosition: "center 100%",
    price: "R$ 139,90",
    description:
      "Moldada em forma orgânica e adornada por flores, esta peça representa delicadeza, florescimento e beleza que nasce no tempo certo.\n\nSeu recipiente une contraste e equilíbrio: a base clara simboliza pureza e recomeço, enquanto o contorno escuro lembra a terra fértil que sustenta tudo o que floresce.\n\nAs flores repousam sobre a superfície como sinal de vida em expansão, lembrando que até os ciclos mais silenciosos carregam potência para desabrochar.\n\nCom aroma vanilla, a chama envolve o ambiente em conforto, suavidade e acolhimento.\n\nQuando acesa, recorda que crescer também pode ser leve.\n\nFeita à mão para honrar a beleza que floresce de dentro para fora.",
    image: "/images/produtos/Origem  Jardim de Luz.png",
  },

  // ── Linha Ancestral ───────────────────────────────────
  {
    name: "Ventre de Luz",
    line: "Ancestral",
    aroma: "Bamboo",
    weight: "120g",
    material: "Cerâmica fria + cera de coco",
    objectPosition: "center 100%",
    price: "R$ 139,90",
    description:
      "Moldada em curvas orgânicas e envolventes, esta peça representa o espaço onde tudo começa: acolhimento, criação e transformação.\n\nSuas bordas em movimento lembram os ciclos da vida — fases que se abrem, se recolhem e retornam renovadas.\nOs fios que atravessam a forma simbolizam conexão, união e tudo aquilo que sustenta o invisível.\n\nComo um recipiente sagrado, guarda intenções, silêncios e recomeços.\n\nQuando acesa, sua chama revela que até os processos mais profundos precisam de tempo para se tornar luz.\n\nFeita à mão para honrar o que nasce de dentro.",
    image: "/images/produtos/ANCESTRAL - VENTRE DE LUZ_.png",
  },
  {
    name: "Travessia",
    line: "Ancestral",
    aroma: "Bamboo",
    weight: "120g",
    material: "Cerâmica fria + cera de coco",
    objectPosition: "center 100%",
    price: "R$ 139,90",
    description:
      "Moldada em tons de terra e em curvas que se abrem, esta peça representa a vida em movimento e a beleza de crescer sem perder a essência.\n\nSeus contornos lembram caminhos que mudam, ciclos que amadurecem e escolhas que conduzem a novos começos.\nOs fios que atravessam a forma simbolizam tudo o que conecta passado, presente e futuro.\n\nCom aroma bamboo, sua chama traz frescor, renovação e leveza — como o vento que passa pela natureza e anuncia novos tempos.\n\nQuando acesa, recorda que raízes firmes também sabem seguir adiante.\n\nFeita à mão para honrar o crescimento que nasce da própria base.",
    image: "/images/produtos/ANCESTRAL - TRAVESSIA.png",
  },

  // ── Linha Essencial ───────────────────────────────────
  {
    name: "Jardim de Aconchego",
    line: "Essencial",
    aroma: "Vanilla",
    weight: "100g",
    price: "R$ 69,90",
    description:
      "Adornada por flores claras e envolvida pelo perfume suave da vanilla, esta peça representa conforto, doçura e presença.\n\nSeu aroma aquece o ambiente com delicadeza e desperta a sensação de casa, calma e afeto.\n\nUma vela criada para momentos de pausa, acolhimento e reconexão.\n\nFeita para aquecer o que existe por dentro e ao redor.",
    image: "/images/produtos/Essencial  Jardim de Aconchego.png",
  },
  {
    name: "Manhã Clara",
    line: "Essencial",
    aroma: "Capim Limão",
    weight: "100g",
    price: "R$ 69,90",
    objectPosition: "center 100%",
    description:
      "Leve e revigorante, esta peça carrega a energia dos recomeços.\n\nO aroma de capim limão purifica a atmosfera, desperta os sentidos e traz frescor ao ambiente, como a primeira brisa de um novo dia.\n\nIdeal para renovar a casa e a mente.\n\nFeita para abrir espaço ao novo.",
    image: "/images/produtos/Essencial  Manhã Clara.png",
  },
  {
    name: "Silêncio em Flor",
    line: "Essencial",
    aroma: "Lavanda",
    weight: "100g",
    price: "R$ 69,90",
    description:
      "Com flores em tons suaves e perfume sereno, esta vela representa descanso, equilíbrio e paz interior.\n\nO aroma de lavanda acalma pensamentos, suaviza o ritmo e transforma o ambiente em abrigo.\n\nPerfeita para noites tranquilas e momentos de autocuidado.\n\nFeita para florescer serenidade.",
    image: "/images/produtos/SilêncioFlor.png",
  },
  {
    name: "Jardim de Aconchego Especial",
    line: "Essencial",
    aroma: "Vanilla",
    price: "R$ 79,90",
    description:
      "Em um vidro de design diferenciado e delicado, esta peça valoriza a transparência, a elegância e a beleza dos detalhes.\n\nAdornada por flores claras e envolvida pelo perfume suave da vanilla, representa conforto, doçura e presença.\n\nSeu aroma aquece o ambiente com suavidade e desperta a sensação de casa, calma e afeto.\n\nUma vela criada para momentos de pausa, acolhimento e reconexão.\n\nFeita para aquecer o que existe por dentro e ao redor.",
    image: "/images/produtos/Essencial  Jardim de aconchego_.png",
  },

  // ── Em breve ──────────────────────────────────────────
  { name: "Flor de Laranjeira", line: "Essencial", aroma: "Floral Cítrico", description: "", image: "", comingSoon: true },
  { name: "Alecrim Blanc", line: "Essencial", aroma: "Aromático", description: "", image: "", comingSoon: true },
  { name: "Rosas Vermelhas", line: "Essencial", aroma: "Floral", description: "", image: "", comingSoon: true },
  { name: "Cereja com Avelã", line: "Essencial", aroma: "Gourmand", description: "", image: "", comingSoon: true },
  { name: "Morango com Champanhe", line: "Essencial", aroma: "Gourmand", description: "", image: "", comingSoon: true },
  { name: "Vanilla Black", line: "Essencial", aroma: "Doce", description: "", image: "", comingSoon: true },
  { name: "Frutas Vermelhas", line: "Essencial", aroma: "Frutado", description: "", image: "", comingSoon: true },
];

export default function Collection() {
  const [activeLine, setActiveLine] = useState<Line>("Todas");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [showComingSoon, setShowComingSoon] = useState(false);

  const allFiltered =
    activeLine === "Todas"
      ? candles
      : candles.filter((c) => c.line === activeLine);

  const filtered = showComingSoon
    ? allFiltered
    : allFiltered.filter((c) => !c.comingSoon);

  const comingSoonCount = allFiltered.filter((c) => c.comingSoon).length;

  const toggleDescription = (key: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section id="colecao" className="py-16 md:py-32 bg-cream-dark/30">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <p className="text-terracotta/60 font-sans text-[10px] tracking-[0.5em] uppercase mb-4">
              Coleção
            </p>
            <h2 className="font-sans text-3xl md:text-5xl font-light text-moss tracking-[0.15em]">
              Nossas Velas
            </h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-terracotta to-transparent mx-auto mt-6" />
          </div>
        </AnimatedSection>

        {/* Line tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {lines.map((line) => (
              <button
                key={line}
                onClick={() => setActiveLine(line)}
                className={`px-5 py-2 text-[10px] tracking-[0.3em] uppercase font-sans transition-all duration-300 rounded-full border ${
                  activeLine === line
                    ? "bg-terracotta text-cream border-terracotta"
                    : "bg-transparent text-terracotta/60 border-terracotta/30 hover:border-terracotta/60 hover:text-terracotta"
                }`}
              >
                {line}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Line description banner */}
        {activeLine !== "Todas" && lineDescriptions[activeLine] && (
          <AnimatedSection delay={0.1}>
            <div className="mb-12 text-center max-w-xl mx-auto">
              <p className="text-terracotta/60 font-sans text-[9px] tracking-[0.4em] uppercase mb-3">
                {lineDescriptions[activeLine].label}
              </p>
              <p className="text-moss/60 text-xs font-sans font-light leading-relaxed whitespace-pre-line">
                {lineDescriptions[activeLine].text}
              </p>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent mx-auto mt-6" />
            </div>
          </AnimatedSection>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {filtered.map((candle, i) => {
            const key = `${candle.line}-${candle.name}-${i}`;
            const isExpanded = expanded.has(key);

            if (candle.comingSoon) {
              return (
                <AnimatedSection key={key} delay={i * 0.08}>
                  <div className="bg-cream/50 rounded-2xl p-6 flex flex-col h-full border border-dashed border-terracotta/20">

                    {/* Image placeholder */}
                    <div className="relative aspect-square mb-6 rounded-xl overflow-hidden bg-cream-dark/30 flex items-center justify-center">
                      <p className="text-terracotta/30 font-sans text-[9px] tracking-[0.4em] uppercase">Em breve</p>
                    </div>

                    {/* Same structure as regular cards */}
                    <div className="flex flex-col flex-1 items-center text-center">
                      <div className="mb-4">
                        <p className="text-[10px] font-sans text-moss/30 tracking-[0.3em] uppercase">
                          <span className="font-medium">{candle.line}</span>
                        </p>
                        <h3 className="font-sans text-xl text-moss/40 font-bold tracking-wide mt-0.5">
                          <span className="font-medium text-xl">{candle.name}</span>
                        </h3>
                      </div>

                      <div className="flex-1" />
                      <div className="w-6 h-px bg-terracotta/10 mx-auto my-4" />
                      <p className="text-terracotta/30 font-sans text-[10px] tracking-[0.2em] uppercase">
                        Em lançamento
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            }

            return (
              <AnimatedSection key={key} delay={i * 0.08}>
                <div className="group bg-cream rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/5 hover:-translate-y-1 flex flex-col h-full">

                  {/* Image */}
                  <div className="relative aspect-square mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={candle.image}
                      alt={candle.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: candle.objectPosition ?? "center" }}
                    />
                  </div>

                  {/* Always-visible info */}
                  <div className="flex flex-col flex-1 items-center text-center">
                    {/* Linha + Nome */}
                    <div className="mb-4">
                      <p className="text-[10px] font-sans text-moss/50 tracking-[0.3em] uppercase">
                        <span className="font-medium">{candle.line}</span>
                      </p>
                      <h3 className="font-sans text-xl text-moss font-bold tracking-wide mt-0.5">
                        <span className="font-medium text-xl">{candle.name}</span>
                      </h3>
                    </div>

                    {/* Aroma / Material / Peso */}
                    <div className="space-y-1 mb-2 text-left w-full">
                      <p className="text-[10px] font-sans text-moss/50 tracking-[0.2em] uppercase">
                        <span className="font-bold">Aroma:</span>{" "}
                        <span className="font-medium">{candle.aroma}</span>
                      </p>
                      {candle.material && (
                        <p className="text-[10px] font-sans text-moss/50 tracking-[0.2em] uppercase">
                          <span className="font-bold">Matéria-prima:</span>{" "}
                          <span className="font-medium">{candle.material}</span>
                        </p>
                      )}
                      {candle.weight && (
                        <p className="text-[10px] font-sans text-moss/50 tracking-[0.2em] uppercase">
                          <span className="font-bold">Peso:</span>{" "}
                          <span className="font-medium">{candle.weight}</span>
                        </p>
                      )}
                    </div>

                    {/* Description dropdown toggle */}
                    <button
                      onClick={() => toggleDescription(key)}
                      className="flex items-center justify-center gap-1.5 text-[9px] text-terracotta/55 tracking-[0.25em] uppercase font-sans mt-4 mx-auto hover:text-terracotta transition-colors duration-200 focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "Fechar" : "Descrição"}
                      <svg
                        width="8"
                        height="5"
                        viewBox="0 0 8 5"
                        fill="none"
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1L4 4L7 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Expandable description */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isExpanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="text-moss/60 text-xs font-sans font-light leading-relaxed whitespace-pre-line text-left">
                        {candle.description}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    <div className="w-6 h-px bg-terracotta/20 mx-auto my-4" />

                    {candle.price ? (
                      <p className="inline-block text-terracotta font-sans text-sm font-medium tracking-wider border border-terracotta/30 rounded-full px-4 py-1.5">
                        {candle.price}
                      </p>
                    ) : (
                      <p className="text-terracotta/40 font-sans text-[10px] tracking-[0.2em] uppercase">
                        Sob consulta
                      </p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Botão em breve */}
        {comingSoonCount > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowComingSoon((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-sans border border-terracotta/30 rounded-full text-terracotta/60 hover:border-terracotta/60 hover:text-terracotta transition-all duration-300"
            >
              {showComingSoon ? "Ocultar lançamentos" : `Ver lançamentos (${comingSoonCount})`}
              <svg
                width="8" height="5" viewBox="0 0 8 5" fill="none"
                className={`transition-transform duration-300 ${showComingSoon ? "rotate-180" : ""}`}
              >
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
