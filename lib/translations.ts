export type Lang = "en" | "it" | "de" | "pt";

export const langLabels: Record<Lang, string> = {
  en: "EN",
  it: "IT",
  de: "DE",
  pt: "PT",
};

const translations = {
  // ─── HeroSlide ───
  hero: {
    inbox: { en: "Your Inbox.", it: "La Tua Inbox.", de: "Dein Posteingang.", pt: "Sua Caixa de Entrada." },
    handled: { en: "Handled.", it: "Gestita.", de: "Erledigt.", pt: "Resolvida." },
    subtitle: {
      en: "Stop wasting your best hours reading, sorting, and replying to email.",
      it: "Smetti di sprecare le tue ore migliori leggendo, ordinando e rispondendo alle email.",
      de: "Verschwenden Sie nicht Ihre besten Stunden mit dem Lesen, Sortieren und Beantworten von E-Mails.",
      pt: "Pare de desperdicar suas melhores horas lendo, organizando e respondendo e-mails.",
    },
    responseTime: { en: "Response Time", it: "Tempo di Risposta", de: "Antwortzeit", pt: "Tempo de Resposta" },
    languages: { en: "Languages", it: "Lingue", de: "Sprachen", pt: "Idiomas" },
    alwaysOn: { en: "Always On", it: "Sempre Attivo", de: "Immer Aktiv", pt: "Sempre Ativo" },
    cta: { en: "See How It Works", it: "Scopri Come Funziona", de: "So funktioniert es", pt: "Veja Como Funciona" },
  },

  // ─── EmailMattersSlide ───
  emailMatters: {
    tag: { en: "The Paradox", it: "Il Paradosso", de: "Das Paradoxon", pt: "O Paradoxo" },
    titleStart: {
      en: "When It Matters, It Happens Over",
      it: "Quando Conta, Succede via",
      de: "Wenn es wichtig ist, passiert es per",
      pt: "Quando Importa, Acontece por",
    },
    titleHighlight: { en: "Email", it: "Email", de: "E-Mail", pt: "E-mail" },
    importantChannel: {
      en: "The Most Important Business Channel",
      it: "Il Canale Aziendale Più Importante",
      de: "Der wichtigste Geschäftskanal",
      pt: "O Canal de Negócios Mais Importante",
    },
    salesConversations: {
      en: "Sales conversations that close deals",
      it: "Conversazioni di vendita che chiudono affari",
      de: "Verkaufsgespräche, die Deals abschließen",
      pt: "Conversas de vendas que fecham negócios",
    },
    supportLoyal: {
      en: "Support that keeps customers loyal",
      it: "Supporto che fidelizza i clienti",
      de: "Support, der Kunden bindet",
      pt: "Suporte que mantém clientes fiéis",
    },
    contracts: {
      en: "Contracts and partnerships",
      it: "Contratti e partnership",
      de: "Verträge und Partnerschaften",
      pt: "Contratos e parcerias",
    },
    decisions: {
      en: "Important decisions",
      it: "Decisioni importanti",
      de: "Wichtige Entscheidungen",
      pt: "Decisões importantes",
    },
    crushing: {
      en: "But It's Crushing Your Team",
      it: "Ma Sta Schiacciando il Tuo Team",
      de: "Aber es erdrückt Ihr Team",
      pt: "Mas Está Esmagando Sua Equipe",
    },
    endlessInbox: {
      en: "Endless inbox, constant context-switching",
      it: "Inbox infinita, continuo cambio di contesto",
      de: "Endloser Posteingang, ständiger Kontextwechsel",
      pt: "Caixa de entrada infinita, troca constante de contexto",
    },
    hoursSpent: {
      en: "Hours spent reading, sorting, replying",
      it: "Ore spese a leggere, ordinare, rispondere",
      de: "Stunden mit Lesen, Sortieren, Antworten",
      pt: "Horas gastas lendo, organizando, respondendo",
    },
    buriedEmails: {
      en: "Important emails buried under noise",
      it: "Email importanti sepolte sotto il rumore",
      de: "Wichtige E-Mails unter Lärm begraben",
      pt: "E-mails importantes enterrados sob ruído",
    },
    bestHours: {
      en: "Your team's best hours, gone",
      it: "Le ore migliori del tuo team, perse",
      de: "Die besten Stunden Ihres Teams, verloren",
      pt: "As melhores horas da sua equipe, perdidas",
    },
    bottomStat: {
      en: "of the workday spent on email — and still can't keep up.",
      it: "della giornata lavorativa spesa in email — e ancora non basta.",
      de: "des Arbeitstages für E-Mails — und trotzdem reicht es nicht.",
      pt: "do dia de trabalho gasto em e-mail — e ainda não dá conta.",
    },
  },

  // ─── OldPlaybookSlide ───
  oldPlaybook: {
    tag: { en: "The Reality", it: "La Realtà", de: "Die Realität", pt: "A Realidade" },
    titleStart: {
      en: "Every Business Must Do More with",
      it: "Ogni Azienda Deve Fare di Più con",
      de: "Jedes Unternehmen muss mehr erreichen mit",
      pt: "Toda Empresa Precisa Fazer Mais com",
    },
    titleHighlight: { en: "Less.", it: "Meno.", de: "Weniger.", pt: "Menos." },
    customersExpect: { en: "Customers Expect", it: "I Clienti Si Aspettano", de: "Kunden erwarten", pt: "Clientes Esperam" },
    customersExpectDesc: {
      en: "90% rate an immediate response as essential when they reach out.",
      it: "Il 90% considera essenziale una risposta immediata quando contattano.",
      de: "90% bewerten eine sofortige Antwort als essenziell.",
      pt: "90% consideram uma resposta imediata essencial ao entrar em contato.",
    },
    businessesDeliver: { en: "Businesses Deliver", it: "Le Aziende Offrono", de: "Unternehmen liefern", pt: "Empresas Entregam" },
    businessesDeliverDesc: {
      en: "The average email sits over half a day before anyone replies.",
      it: "L'email media rimane più di mezza giornata prima di ricevere risposta.",
      de: "Die durchschnittliche E-Mail wartet über einen halben Tag auf Antwort.",
      pt: "O e-mail médio fica mais de meio dia antes de alguém responder.",
    },
    theResult: { en: "The Result", it: "Il Risultato", de: "Das Ergebnis", pt: "O Resultado" },
    theResultDesc: {
      en: "of consumers switch brands after poor service. Slow replies cost you customers.",
      it: "dei consumatori cambia marca dopo un servizio scadente. Risposte lente costano clienti.",
      de: "der Verbraucher wechseln die Marke nach schlechtem Service. Langsame Antworten kosten Kunden.",
      pt: "dos consumidores trocam de marca após mau atendimento. Respostas lentas custam clientes.",
    },
    teamsMaxed: { en: "Teams Are Maxed Out", it: "I Team Sono al Limite", de: "Teams sind am Limit", pt: "Equipes Estão no Limite" },
    teamsMaxedDesc: {
      en: "Email already demands too much time. The volume keeps growing — the capacity doesn't.",
      it: "L'email richiede già troppo tempo. Il volume cresce — la capacità no.",
      de: "E-Mail fordert bereits zu viel Zeit. Das Volumen wächst — die Kapazität nicht.",
      pt: "E-mail já exige tempo demais. O volume cresce — a capacidade não.",
    },
    cantHire: { en: "Can't Hire Your Way Out", it: "Assumere Non Basta", de: "Einstellen reicht nicht", pt: "Contratar Não Resolve" },
    cantHireDesc: {
      en: "Additional headcount is expensive. Every team is being asked to do more with less.",
      it: "Personale aggiuntivo è costoso. A ogni team si chiede di fare di più con meno.",
      de: "Zusätzliches Personal ist teuer. Jedes Team soll mehr mit weniger erreichen.",
      pt: "Mais funcionários é caro. Toda equipe precisa fazer mais com menos.",
    },
    bottomStart: {
      en: "The old playbook doesn't work.",
      it: "Il vecchio metodo non funziona.",
      de: "Das alte Konzept funktioniert nicht.",
      pt: "O velho método não funciona.",
    },
    bottomHighlight: {
      en: "Businesses need something fundamentally different.",
      it: "Le aziende hanno bisogno di qualcosa di fondamentalmente diverso.",
      de: "Unternehmen brauchen etwas grundlegend Anderes.",
      pt: "Empresas precisam de algo fundamentalmente diferente.",
    },
  },

  // ─── ThreeLevelsSlide ───
  threeLevels: {
    tag: { en: "AI is the Answer, but", it: "L'IA è la Risposta, ma", de: "KI ist die Antwort, aber", pt: "IA é a Resposta, mas" },
    titleStart: { en: "Draft-Only AI Is", it: "L'IA Solo-Bozza", de: "Nur-Entwurf-KI ist", pt: "IA Só de Rascunho" },
    titleHighlight: { en: "Not Enough.", it: "Non Basta.", de: "Nicht Genug.", pt: "Não Basta." },
    level1Title: { en: "Templated Auto-Replies", it: "Risposte Automatiche Template", de: "Vorlagen-Autoantworten", pt: "Respostas Automáticas por Template" },
    level1Desc: {
      en: "Canned responses. No personalization. Customers feel ignored and relationships deteriorate.",
      it: "Risposte preconfezionate. Nessuna personalizzazione. I clienti si sentono ignorati.",
      de: "Standardantworten. Keine Personalisierung. Kunden fühlen sich ignoriert.",
      pt: "Respostas prontas. Sem personalização. Clientes se sentem ignorados.",
    },
    level2Title: { en: "AI Draft Generation", it: "Generazione Bozze IA", de: "KI-Entwurfserstellung", pt: "Geração de Rascunhos por IA" },
    level2Desc: {
      en: "Copilot, Gemini, HubSpot AI. They draft, you review, you rewrite. Still manual. Still slow.",
      it: "Copilot, Gemini, HubSpot AI. Creano bozze, tu revisioni, tu riscrivi. Ancora manuale. Ancora lento.",
      de: "Copilot, Gemini, HubSpot AI. Sie entwerfen, Sie prüfen, Sie schreiben um. Immer noch manuell.",
      pt: "Copilot, Gemini, HubSpot AI. Eles rascunham, você revisa, você reescreve. Ainda manual. Ainda lento.",
    },
    level3Title: { en: "Autonomous Email Agents", it: "Agenti Email Autonomi", de: "Autonome E-Mail-Agenten", pt: "Agentes de E-mail Autônomos" },
    level3Desc: {
      en: "Reads, understands, replies, takes action. End-to-end resolutions.",
      it: "Legge, comprende, risponde, agisce. Risoluzioni end-to-end.",
      de: "Liest, versteht, antwortet, handelt. End-to-End-Lösungen.",
      pt: "Lê, entende, responde, age. Resoluções de ponta a ponta.",
    },
    level: { en: "Level", it: "Livello", de: "Stufe", pt: "Nível" },
    hint: { en: "Click each level to explore", it: "Clicca ogni livello per esplorare", de: "Klicken Sie auf jede Stufe", pt: "Clique em cada nível para explorar" },
  },

  // ─── SolutionSlide ───
  solution: {
    tag: { en: "The Solution", it: "La Soluzione", de: "Die Lösung", pt: "A Solução" },
    titleStart: { en: "Meet", it: "Scopri", de: "Lernen Sie kennen:", pt: "Conheça" },
    subtitle: {
      en: "The best email assistant in the world",
      it: "Il miglior assistente email al mondo",
      de: "Der beste E-Mail-Assistent der Welt",
      pt: "O melhor assistente de e-mail do mundo",
    },
    cap1Title: { en: "Reads & Understands", it: "Legge e Comprende", de: "Liest & Versteht", pt: "Lê e Compreende" },
    cap1Desc: {
      en: "160+ languages, intent capture, sentiment analysis",
      it: "160+ lingue, cattura dell'intento, analisi del sentimento",
      de: "160+ Sprachen, Absichtserkennung, Stimmungsanalyse",
      pt: "160+ idiomas, captura de intenção, análise de sentimento",
    },
    cap2Title: { en: "Thinks & Decides", it: "Pensa e Decide", de: "Denkt & Entscheidet", pt: "Pensa e Decide" },
    cap2Desc: {
      en: "Smart filters, knowledge lookup, routing logic",
      it: "Filtri intelligenti, ricerca nella knowledge base, logica di routing",
      de: "Intelligente Filter, Wissensabfrage, Routing-Logik",
      pt: "Filtros inteligentes, busca de conhecimento, lógica de roteamento",
    },
    cap3Title: { en: "Writes in Your Voice", it: "Scrive con la Tua Voce", de: "Schreibt in Ihrer Stimme", pt: "Escreve com Sua Voz" },
    cap3Desc: {
      en: "Brand voice matching, custom personas, tone consistency",
      it: "Matching della voce del brand, personas personalizzate, coerenza del tono",
      de: "Markenstimmen-Matching, individuelle Personas, Tonkonsistenz",
      pt: "Correspondência de voz da marca, personas customizadas, consistência de tom",
    },
    cap4Title: { en: "Learns & Improves", it: "Impara e Migliora", de: "Lernt & Verbessert sich", pt: "Aprende e Melhora" },
    cap4Desc: {
      en: "Self-learning engine, performance tracking, continuous refinement",
      it: "Motore di auto-apprendimento, monitoraggio prestazioni, miglioramento continuo",
      de: "Selbstlernende Engine, Leistungsverfolgung, kontinuierliche Verbesserung",
      pt: "Motor de autoaprendizado, rastreamento de desempenho, refinamento contínuo",
    },
  },

  // ─── TrustSlide ───
  trust: {
    tag: { en: "Eloquens\u00ae AI is Built for", it: "Eloquens\u00ae AI è Costruita per la", de: "Eloquens\u00ae AI ist gebaut für", pt: "Eloquens\u00ae AI foi Feita para" },
    titleStart: { en: "End-to-End", it: "Risoluzione", de: "End-to-End-", pt: "Resolução" },
    titleHighlight: { en: "Resolution.", it: "End-to-End.", de: "Lösung.", pt: "de Ponta a Ponta." },
    pillar1Title: { en: "Full Control", it: "Controllo Totale", de: "Volle Kontrolle", pt: "Controle Total" },
    pillar1Desc: {
      en: "Set rules for what\u2019s auto-sent, what needs review, and what escalates. Draft-only, intelligent response, or full automation \u2014 you choose.",
      it: "Imposta regole per cosa viene inviato automaticamente, cosa richiede revisione e cosa viene escalato. Solo bozza, risposta intelligente o automazione completa \u2014 tu scegli.",
      de: "Legen Sie Regeln fest: Was automatisch gesendet wird, was gepr\u00fcft werden muss, was eskaliert wird. Nur Entwurf, intelligente Antwort oder volle Automatisierung \u2014 Sie entscheiden.",
      pt: "Defina regras para o que é enviado automaticamente, o que precisa de revisão e o que escala. Só rascunho, resposta inteligente ou automação total \u2014 você escolhe.",
    },
    pillar1Highlight: { en: "You choose the automation level", it: "Tu scegli il livello di automazione", de: "Sie wählen den Automatisierungsgrad", pt: "Você escolhe o nível de automação" },
    pillar2Title: { en: "No Hallucinations. Ever.", it: "Nessuna Allucinazione. Mai.", de: "Keine Halluzinationen. Nie.", pt: "Sem Alucinações. Nunca." },
    pillar2Desc: {
      en: "Grounded in your real data. Backed by approved information. No guessing, no made-up answers, no brand risk.",
      it: "Basata sui tuoi dati reali. Supportata da informazioni approvate. Nessuna supposizione, nessuna risposta inventata, nessun rischio per il brand.",
      de: "Basierend auf Ihren realen Daten. Gestützt durch genehmigte Informationen. Kein Raten, keine erfundenen Antworten, kein Markenrisiko.",
      pt: "Baseada em seus dados reais. Apoiada por informações aprovadas. Sem suposições, sem respostas inventadas, sem risco para a marca.",
    },
    pillar2Highlight: { en: "Only real, verified data", it: "Solo dati reali e verificati", de: "Nur echte, verifizierte Daten", pt: "Apenas dados reais e verificados" },
    pillar3Title: { en: "Human-in-the-Loop", it: "Human-in-the-Loop", de: "Human-in-the-Loop", pt: "Human-in-the-Loop" },
    pillar3Desc: {
      en: "When Eloquens\u00ae AI hits a knowledge gap, it escalates to a human. Then it learns from the answer. A self-learning engine that gets smarter with every interaction.",
      it: "Quando Eloquens\u00ae AI incontra un gap di conoscenza, escala a un umano. Poi impara dalla risposta. Un motore auto-apprendente che diventa più intelligente ad ogni interazione.",
      de: "Wenn Eloquens\u00ae AI auf eine Wissenslücke stößt, eskaliert es an einen Menschen. Dann lernt es aus der Antwort. Eine selbstlernende Engine, die mit jeder Interaktion klüger wird.",
      pt: "Quando Eloquens\u00ae AI encontra uma lacuna de conhecimento, escala para um humano. Então aprende com a resposta. Um motor autoaprendiz que fica mais inteligente a cada interação.",
    },
    pillar3Highlight: { en: "Self-learning, always improving", it: "Auto-apprendimento, sempre in miglioramento", de: "Selbstlernend, stetige Verbesserung", pt: "Autoaprendizado, sempre melhorando" },
    bottomBold: {
      en: "Eloquens\u00ae AI doesn\u2019t just draft\u2009\u2014\u2009",
      it: "Eloquens\u00ae AI non fa solo bozze\u2009\u2014\u2009",
      de: "Eloquens\u00ae AI entwirft nicht nur\u2009\u2014\u2009",
      pt: "Eloquens\u00ae AI não faz apenas rascunhos\u2009\u2014\u2009",
    },
    bottomHighlight: { en: "it sends.", it: "invia.", de: "es sendet.", pt: "envia." },
    bottomDesc: {
      en: "With HITL controls and knowledge-grounded responses, it was built for autonomous execution.",
      it: "Con controlli HITL e risposte basate sulla conoscenza, è stata costruita per l'esecuzione autonoma.",
      de: "Mit HITL-Kontrollen und wissensbasierten Antworten wurde es für autonome Ausführung entwickelt.",
      pt: "Com controles HITL e respostas baseadas em conhecimento, foi feita para execução autônoma.",
    },
  },

  // ─── VoiceSlide ───
  voice: {
    tag: { en: "Voice Matching", it: "Matching Vocale", de: "Stimmen-Matching", pt: "Correspondência de Voz" },
    titleStart: { en: "It Sounds Like You.", it: "Sembra Proprio Te.", de: "Es klingt wie Sie.", pt: "Parece Você." },
    titleHighlight: { en: "Because You Trained It.", it: "Perché l'Hai Addestrata.", de: "Weil Sie es trainiert haben.", pt: "Porque Você a Treinou." },
    subtitle: {
      en: "Eloquens\u00ae AI adapts to how you actually communicate.",
      it: "Eloquens\u00ae AI si adatta a come comunichi realmente.",
      de: "Eloquens\u00ae AI passt sich Ihrem Kommunikationsstil an.",
      pt: "Eloquens\u00ae AI se adapta a como você realmente se comunica.",
    },
    supportLabel: { en: "Customer Support", it: "Supporto Clienti", de: "Kundensupport", pt: "Suporte ao Cliente" },
    supportTone: {
      en: "Warm, empathetic, solution-focused",
      it: "Caloroso, empatico, orientato alla soluzione",
      de: "Warmherzig, empathisch, lösungsorientiert",
      pt: "Caloroso, empático, focado em soluções",
    },
    supportExample: {
      en: "Hi Sarah, thank you for reaching out! I completely understand the frustration. I've already looked into your order (#4821) and issued a full refund. You should see it within 2-3 business days. Is there anything else I can help with?",
      it: "Ciao Sarah, grazie per averci contattato! Capisco perfettamente la frustrazione. Ho già verificato il tuo ordine (#4821) e emesso un rimborso completo. Lo vedrai entro 2-3 giorni lavorativi. Posso aiutarti con altro?",
      de: "Hallo Sarah, vielen Dank für Ihre Nachricht! Ich verstehe Ihren Ärger vollkommen. Ich habe Ihre Bestellung (#4821) bereits geprüft und eine vollständige Rückerstattung veranlasst. Sie sollten diese innerhalb von 2-3 Werktagen sehen. Kann ich Ihnen noch bei etwas anderem helfen?",
      pt: "Oi Sarah, obrigado por entrar em contato! Entendo completamente a frustração. Já verifiquei seu pedido (#4821) e emiti um reembolso total. Você deve vê-lo em 2-3 dias úteis. Posso ajudar com mais alguma coisa?",
    },
    salesLabel: { en: "Sales", it: "Vendite", de: "Vertrieb", pt: "Vendas" },
    salesTone: {
      en: "Confident, value-driven, action-oriented",
      it: "Sicuro, orientato al valore, orientato all'azione",
      de: "Selbstbewusst, wertorientiert, handlungsorientiert",
      pt: "Confiante, orientado a valor, orientado a ação",
    },
    salesExample: {
      en: "Hi Mark, great speaking with you yesterday. Based on your team\u2019s needs, I\u2019ve put together a custom proposal. The Enterprise plan would give your 50-person team full coverage at $12/seat \u2014 a 40% saving vs. your current setup. Want to hop on a quick call this Thursday?",
      it: "Ciao Mark, è stato un piacere parlare con te ieri. In base alle esigenze del tuo team, ho preparato una proposta personalizzata. Il piano Enterprise darebbe al tuo team di 50 persone copertura completa a $12/posto \u2014 un risparmio del 40% rispetto alla configurazione attuale. Vuoi fare una breve chiamata giovedì?",
      de: "Hallo Mark, es war toll, gestern mit Ihnen zu sprechen. Basierend auf den Bedürfnissen Ihres Teams habe ich ein individuelles Angebot zusammengestellt. Der Enterprise-Plan bietet Ihrem 50-köpfigen Team volle Abdeckung für $12/Platz \u2014 40% Ersparnis gegenüber Ihrem aktuellen Setup. Wollen wir uns am Donnerstag kurz besprechen?",
      pt: "Oi Mark, foi ótimo falar com você ontem. Com base nas necessidades da sua equipe, preparei uma proposta personalizada. O plano Enterprise daria à sua equipe de 50 pessoas cobertura total por $12/assento \u2014 40% de economia vs. sua configuração atual. Quer fazer uma ligação rápida nesta quinta?",
    },
    assistantLabel: { en: "Personal Assistant", it: "Assistente Personale", de: "Persönlicher Assistent", pt: "Assistente Pessoal" },
    assistantTone: {
      en: "Professional, concise, proactive",
      it: "Professionale, conciso, proattivo",
      de: "Professionell, prägnant, proaktiv",
      pt: "Profissional, conciso, proativo",
    },
    assistantExample: {
      en: "Hi David, confirming your meeting with Acme Corp is set for Thursday at 2 PM EST. I\u2019ve attached the prep materials and added the agenda to your calendar. Let me know if you\u2019d like me to reschedule anything else this week.",
      it: "Ciao David, confermo che il tuo meeting con Acme Corp è fissato per giovedì alle 14:00 EST. Ho allegato i materiali preparatori e aggiunto l'agenda al tuo calendario. Fammi sapere se vuoi che riprogrammi qualcos'altro questa settimana.",
      de: "Hallo David, Ihr Meeting mit Acme Corp ist für Donnerstag um 14:00 Uhr EST bestätigt. Ich habe die Vorbereitungsunterlagen angehängt und die Agenda in Ihren Kalender eingetragen. Lassen Sie mich wissen, ob ich diese Woche noch etwas umplanen soll.",
      pt: "Oi David, confirmando que sua reunião com a Acme Corp está marcada para quinta às 14h EST. Anexei os materiais preparatórios e adicionei a agenda ao seu calendário. Me avise se quiser que eu reagende algo esta semana.",
    },
    legalLabel: { en: "Legal", it: "Legale", de: "Recht", pt: "Jurídico" },
    legalTone: {
      en: "Precise, formal, detail-oriented",
      it: "Preciso, formale, attento ai dettagli",
      de: "Präzise, formell, detailorientiert",
      pt: "Preciso, formal, orientado a detalhes",
    },
    legalExample: {
      en: "Dear Ms. Chen, please find attached the revised NDA reflecting the amendments discussed. Specifically, Section 4.2 has been updated to extend the confidentiality period to 36 months. Kindly review and confirm your acceptance at your earliest convenience.",
      it: "Gentile Sig.ra Chen, in allegato trova l'NDA rivisto con le modifiche discusse. In particolare, la Sezione 4.2 è stata aggiornata per estendere il periodo di riservatezza a 36 mesi. La preghiamo di revisionare e confermare l'accettazione al più presto.",
      de: "Sehr geehrte Frau Chen, anbei finden Sie die überarbeitete NDA mit den besprochenen Änderungen. Insbesondere wurde Abschnitt 4.2 aktualisiert, um die Vertraulichkeitsfrist auf 36 Monate zu verlängern. Bitte prüfen Sie und bestätigen Sie Ihre Zustimmung bei nächster Gelegenheit.",
      pt: "Prezada Sra. Chen, segue anexo o NDA revisado refletindo as alterações discutidas. Especificamente, a Seção 4.2 foi atualizada para estender o período de confidencialidade para 36 meses. Gentilmente revise e confirme sua aceitação na primeira oportunidade.",
    },
    bottomStart: { en: "Not generic AI filler.", it: "Non è filler generico di IA.", de: "Kein generischer KI-Fülltext.", pt: "Não é preenchimento genérico de IA." },
    bottomBold: {
      en: "Your voice, your knowledge, your rules.",
      it: "La tua voce, la tua conoscenza, le tue regole.",
      de: "Ihre Stimme, Ihr Wissen, Ihre Regeln.",
      pt: "Sua voz, seu conhecimento, suas regras.",
    },
    tone: { en: "Tone", it: "Tono", de: "Ton", pt: "Tom" },
  },

  // ─── HowItWorksSlide ───
  howItWorks: {
    tag: { en: "Getting Started", it: "Per Iniziare", de: "Erste Schritte", pt: "Como Começar" },
    titleStart: { en: "How It", it: "Come", de: "So", pt: "Como" },
    titleHighlight: { en: "Works", it: "Funziona", de: "funktioniert es", pt: "Funciona" },
    subtitle: {
      en: "Create your email assistant in minutes.",
      it: "Crea il tuo assistente email in pochi minuti.",
      de: "Erstellen Sie Ihren E-Mail-Assistenten in Minuten.",
      pt: "Crie seu assistente de e-mail em minutos.",
    },
    step1Title: { en: "Connect Your Inbox", it: "Collega la Tua Inbox", de: "Verbinden Sie Ihren Posteingang", pt: "Conecte Sua Caixa de Entrada" },
    step1Desc: {
      en: "Works with Gmail, Outlook, or KerioConnect. Setup takes seconds.",
      it: "Funziona con Gmail, Outlook o KerioConnect. La configurazione richiede pochi secondi.",
      de: "Funktioniert mit Gmail, Outlook oder KerioConnect. Einrichtung in Sekunden.",
      pt: "Funciona com Gmail, Outlook ou KerioConnect. Configuração em segundos.",
    },
    step2Title: { en: "Set Rules & Tone", it: "Imposta Regole e Tono", de: "Regeln & Ton festlegen", pt: "Defina Regras e Tom" },
    step2Desc: {
      en: "Define how Eloquens\u00ae AI should respond, escalate, or close emails.",
      it: "Definisci come Eloquens\u00ae AI deve rispondere, escalare o chiudere le email.",
      de: "Definieren Sie, wie Eloquens\u00ae AI antworten, eskalieren oder E-Mails schließen soll.",
      pt: "Defina como Eloquens\u00ae AI deve responder, escalar ou fechar e-mails.",
    },
    step3Title: { en: "Add Your Knowledge", it: "Aggiungi la Tua Conoscenza", de: "Fügen Sie Ihr Wissen hinzu", pt: "Adicione Seu Conhecimento" },
    step3Desc: {
      en: "Upload documents, FAQs, or connect approved content sources.",
      it: "Carica documenti, FAQ o collega fonti di contenuto approvate.",
      de: "Laden Sie Dokumente, FAQs hoch oder verbinden Sie genehmigte Inhaltsquellen.",
      pt: "Carregue documentos, FAQs ou conecte fontes de conteúdo aprovadas.",
    },
    step4Title: { en: "Let Eloquens\u00ae AI Run", it: "Lascia Correre Eloquens\u00ae AI", de: "Lassen Sie Eloquens\u00ae AI laufen", pt: "Deixe Eloquens\u00ae AI Rodar" },
    step4Desc: {
      en: "Approve replies or enable auto-send. Start saving hours immediately.",
      it: "Approva le risposte o abilita l'invio automatico. Inizia a risparmiare ore immediatamente.",
      de: "Genehmigen Sie Antworten oder aktivieren Sie Auto-Send. Sparen Sie sofort Stunden.",
      pt: "Aprove respostas ou ative envio automático. Comece a economizar horas imediatamente.",
    },
    connectCta: { en: "Connect Your Inbox \u2192", it: "Collega la Tua Inbox \u2192", de: "Posteingang verbinden \u2192", pt: "Conecte Sua Caixa de Entrada \u2192" },
  },

  // ─── ProcessSlide ───
  process: {
    tag: { en: "Inside the Engine", it: "Dentro il Motore", de: "Im Inneren der Engine", pt: "Dentro do Motor" },
    titleStart: { en: "How Eloquens\u00ae AI", it: "Come Eloquens\u00ae AI", de: "Wie Eloquens\u00ae AI", pt: "Como Eloquens\u00ae AI" },
    titleHighlight: { en: "Thinks & Decides", it: "Pensa e Decide", de: "Denkt & Entscheidet", pt: "Pensa e Decide" },
    step1: { en: "Email Received", it: "Email Ricevuta", de: "E-Mail empfangen", pt: "E-mail Recebido" },
    step2: { en: "Smart Filters", it: "Filtri Intelligenti", de: "Intelligente Filter", pt: "Filtros Inteligentes" },
    step3: { en: "Knowledge Base", it: "Base di Conoscenza", de: "Wissensdatenbank", pt: "Base de Conhecimento" },
    step4: { en: "Routing", it: "Routing", de: "Routing", pt: "Roteamento" },
    step5: { en: "Response", it: "Risposta", de: "Antwort", pt: "Resposta" },
    previous: { en: "Previous", it: "Precedente", de: "Zurück", pt: "Anterior" },
    nextStep: { en: "Next Step", it: "Prossimo", de: "Nächster Schritt", pt: "Próximo" },
    // Panel texts
    emailAnalysis: { en: "Email Analysis", it: "Analisi Email", de: "E-Mail-Analyse", pt: "Análise de E-mail" },
    approvedForResponse: { en: "Approved for Response", it: "Approvata per Risposta", de: "Für Antwort genehmigt", pt: "Aprovado para Resposta" },
    intent: { en: "Intent", it: "Intento", de: "Absicht", pt: "Intenção" },
    followUpScheduling: { en: "Follow-up / Scheduling", it: "Follow-up / Pianificazione", de: "Follow-up / Terminplanung", pt: "Follow-up / Agendamento" },
    urgency: { en: "Urgency", it: "Urgenza", de: "Dringlichkeit", pt: "Urgência" },
    medium: { en: "Medium", it: "Media", de: "Mittel", pt: "Média" },
    sentiment: { en: "Sentiment", it: "Sentimento", de: "Stimmung", pt: "Sentimento" },
    positive: { en: "Positive", it: "Positivo", de: "Positiv", pt: "Positivo" },
    analysisQuote: {
      en: "Business email requiring a scheduling follow-up with pricing clarification.",
      it: "Email aziendale che richiede un follow-up di pianificazione con chiarimento prezzi.",
      de: "Geschäftliche E-Mail, die ein Planungs-Follow-up mit Preisklärung erfordert.",
      pt: "E-mail comercial que requer follow-up de agendamento com esclarecimento de preços.",
    },
    knowledgeSearch: { en: "Knowledge Search", it: "Ricerca Conoscenza", de: "Wissenssuche", pt: "Busca de Conhecimento" },
    sourcesSearched: { en: "Sources Searched", it: "Fonti Ricercate", de: "Quellen durchsucht", pt: "Fontes Pesquisadas" },
    matchesFound: { en: "Matches Found", it: "Corrispondenze", de: "Treffer gefunden", pt: "Correspondências" },
    topMatches: { en: "Top Matches", it: "Migliori Risultati", de: "Beste Treffer", pt: "Melhores Resultados" },
    routingDecision: { en: "Routing Decision", it: "Decisione di Routing", de: "Routing-Entscheidung", pt: "Decisão de Roteamento" },
    escalate: { en: "Escalate", it: "Escala", de: "Eskalieren", pt: "Escalar" },
    handover: { en: "Handover", it: "Passaggio", de: "Übergabe", pt: "Transferência" },
    reply: { en: "Reply", it: "Rispondi", de: "Antworten", pt: "Responder" },
    confidence: { en: "Confidence", it: "Fiducia", de: "Konfidenz", pt: "Confiança" },
    draftReply: { en: "Draft Reply", it: "Bozza Risposta", de: "Antwortentwurf", pt: "Rascunho de Resposta" },
    toneLabel: { en: "Tone: Professional \u00b7 Warm", it: "Tono: Professionale \u00b7 Caloroso", de: "Ton: Professionell \u00b7 Warm", pt: "Tom: Profissional \u00b7 Caloroso" },
    send: { en: "Send", it: "Invia", de: "Senden", pt: "Enviar" },
    to: { en: "To:", it: "A:", de: "An:", pt: "Para:" },
    subject: { en: "Subject:", it: "Oggetto:", de: "Betreff:", pt: "Assunto:" },
    received: { en: "Received 2 min ago", it: "Ricevuta 2 min fa", de: "Vor 2 Min. empfangen", pt: "Recebido há 2 min" },
    newBadge: { en: "New", it: "Nuova", de: "Neu", pt: "Novo" },
  },

  // ─── ProofSlide ───
  proof: {
    tag: { en: "Trust & Results", it: "Fiducia e Risultati", de: "Vertrauen & Ergebnisse", pt: "Confiança e Resultados" },
    titleStart: { en: "Trusted by Teams.", it: "Affidabile per i Team.", de: "Von Teams vertraut.", pt: "Confiável para Equipes." },
    titleHighlight: { en: "Secured by Design.", it: "Sicura by Design.", de: "Sicher by Design.", pt: "Segura por Design." },
    casaVerified: { en: "CASA Verified", it: "Verificato CASA", de: "CASA-verifiziert", pt: "Verificado CASA" },
    dataResidency: { en: "EU & US Data Residency", it: "Residenza Dati EU & US", de: "EU & US Datenresidenz", pt: "Residência de Dados EU & US" },
    compliance: { en: "GDPR \u00b7 CCPA \u00b7 HIPAA", it: "GDPR \u00b7 CCPA \u00b7 HIPAA", de: "DSGVO \u00b7 CCPA \u00b7 HIPAA", pt: "LGPD \u00b7 CCPA \u00b7 HIPAA" },
    fasterResponse: { en: "Faster Response", it: "Risposta Più Veloce", de: "Schnellere Antwort", pt: "Resposta Mais Rápida" },
    fasterResponseDesc: {
      en: "From hours to under 5 minutes",
      it: "Da ore a meno di 5 minuti",
      de: "Von Stunden auf unter 5 Minuten",
      pt: "De horas para menos de 5 minutos",
    },
    timeFreed: { en: "Time Freed", it: "Tempo Liberato", de: "Zeit gespart", pt: "Tempo Liberado" },
    timeFreedDesc: {
      en: "Your team focuses on what actually matters",
      it: "Il tuo team si concentra su ciò che conta davvero",
      de: "Ihr Team konzentriert sich auf das, was wirklich zählt",
      pt: "Sua equipe foca no que realmente importa",
    },
    testimonial: {
      en: "Eloquens\u00ae AI feels like hiring a full-time assistant without the overhead. Our response times dropped from hours to minutes.",
      it: "Eloquens\u00ae AI è come assumere un assistente a tempo pieno senza i costi aggiuntivi. I nostri tempi di risposta sono passati da ore a minuti.",
      de: "Eloquens\u00ae AI fühlt sich an wie ein Vollzeit-Assistent ohne die Zusatzkosten. Unsere Antwortzeiten sanken von Stunden auf Minuten.",
      pt: "Eloquens\u00ae AI é como contratar um assistente em tempo integral sem os custos extras. Nossos tempos de resposta caíram de horas para minutos.",
    },
    testimonialAuthor: {
      en: "\u2014 Head of Customer Success, SaaS Platform (50K+ users)",
      it: "\u2014 Head of Customer Success, Piattaforma SaaS (50K+ utenti)",
      de: "\u2014 Head of Customer Success, SaaS-Plattform (50K+ Nutzer)",
      pt: "\u2014 Head de Customer Success, Plataforma SaaS (50K+ usuários)",
    },
  },

  // ─── CTASlide ───
  cta: {
    title: { en: "Email, Finally", it: "Email, Finalmente", de: "E-Mail, Endlich", pt: "E-mail, Finalmente" },
    titleHighlight: { en: "Handled.", it: "Gestita.", de: "Erledigt.", pt: "Resolvida." },
    subtitle: {
      en: "Start your free trial today. No credit card required.",
      it: "Inizia la tua prova gratuita oggi. Nessuna carta di credito richiesta.",
      de: "Starten Sie noch heute Ihre kostenlose Testversion. Keine Kreditkarte erforderlich.",
      pt: "Comece seu teste gratuito hoje. Sem cartão de crédito.",
    },
    getStarted: { en: "Get Started Free", it: "Inizia Gratis", de: "Kostenlos starten", pt: "Comece Grátis" },
    bookDemo: { en: "Book a Demo", it: "Prenota una Demo", de: "Demo buchen", pt: "Agende uma Demo" },
    tagline: { en: "Your Inbox. Handled.", it: "La Tua Inbox. Gestita.", de: "Ihr Posteingang. Erledigt.", pt: "Sua Caixa de Entrada. Resolvida." },
  },
} as const;

export type Translations = typeof translations;
export default translations;
