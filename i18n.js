// Shared translations + language persistence across pages.
// English is written directly into each HTML page, so the site is fully
// readable with JavaScript disabled. This script only switches language.
const i18n = {
  en:{
    nav_home:"Home", nav_about:"About", nav_projects:"Projects", nav_contact:"Contact",
    kicker:"Cultural and scientific benefit foundation",
    lede:"We promote the knowledge, study and dissemination of mineralogy and the earth sciences, and foster their scientific outreach.",
    home_mv_h:"Mission & vision",
    home_mission:"Our mission is to promote the knowledge, study and dissemination of mineralogy and the earth sciences, highlighting their relevance to society and fostering their scientific outreach and education.",
    home_vision:"Our vision is to become a reference point for the appreciation of mineralogy and the earth sciences, making mineralogical knowledge and heritage accessible to a broad audience.",
    home_what_h:"What we do",
    home_what_p:"The foundation supports long-running outreach projects that bring mineralogy to a wide community: two reference online forums and a virtual museum of mineral specimens.",
    home_see_projects:"See our projects →",
    home_ident_h:"The foundation",
    home_ident_p:"FMF - Fundació Mineralògica Fabre is a private non-profit foundation (NIF G26807578), with its registered office in Barcelona and registered with the Foundations Registry of the Generalitat de Catalunya.",
    home_more_about:"More about us →",

    about_head_h:"About the foundation",
    about_head_p:"Who we are, our history, and the mission and vision that guide our work.",
    about_who_h:"Who we are",
    about_who_p1:"FMF - Fundació Mineralògica Fabre is a private non-profit foundation, established in Barcelona and registered with the Foundations Registry of the Generalitat de Catalunya. It is classified as a cultural and scientific benefit foundation.",
    about_who_p2:"The foundation gives institutional continuity to a set of mineralogy outreach initiatives created and maintained by its founders, bringing them together under a single non-profit organization devoted to the public benefit.",
    about_hist_h:"Our history",
    about_hist_p1:"The foundation was constituted on 9 February 2026 and entered in the Foundations Registry of the Generalitat de Catalunya by resolution of 27 April 2026.",
    about_hist_p2:"It was created to support and give long-term stability to mineralogy outreach projects that its founders had been developing for years — the FMF community forums (in Spanish and English) and the MVM Virtual Museum of Minerals — ensuring their continuity and growth as a shared, non-profit endeavour.",
    about_mission_h:"Mission",
    about_mission_p:"To promote the knowledge, study and dissemination of mineralogy and the earth sciences in general, highlighting their relevance to society and fostering their study, education and scientific outreach.",
    about_vision_h:"Vision",
    about_vision_p:"To be a reference point for the appreciation and dissemination of mineralogy and the earth sciences, making mineralogical knowledge and heritage accessible to society and connecting a broad international community of enthusiasts, collectors, students and researchers.",
    details_h:"Foundation details",
    l_name:"Legal name", l_nif:"Tax ID (NIF)", l_nature:"Nature", l_office:"Registered office",
    l_reg:"Registration", l_class:"Classification", l_inc:"Date of incorporation",
    v_nature:"Private non-profit foundation",
    v_reg:"Foundations Registry of the Generalitat de Catalunya (resolution of 27 April 2026)",
    v_class:"Cultural and scientific benefit foundation",
    v_inc:"9 February 2026",
    board_h:"Board of trustees",
    role_pres:"President", role_sec:"Secretary", role_voc:"Trustee",

    proj_head_h:"Projects", proj_head_p:"The initiatives the foundation currently supports.",
    projects_intro:"The foundation currently supports the following projects:",
    proj_foro_name:"FMF Forum — Spanish",
    proj_foro_desc:"Spanish-language community forum on minerals and mineralogy, bringing together collectors, enthusiasts and researchers.",
    proj_eforo_name:"FMF Forum — English",
    proj_eforo_desc:"English-language community forum on minerals and mineralogy, connecting an international audience.",
    proj_mvm_name:"MVM — Virtual Museum of Minerals",
    proj_mvm_desc:"An online museum of mineral specimens.",
    visit:"Visit site",

    contact_head_h:"Contact", contact_head_p:"How to reach the foundation.",
    contact_email_h:"Email", contact_addr_h:"Registered office", contact_id_h:"Foundation",
    footer_reg:"Registered with the Foundations Registry of the Generalitat de Catalunya"
  },
  es:{
    nav_home:"Inicio", nav_about:"Quiénes somos", nav_projects:"Proyectos", nav_contact:"Contacto",
    kicker:"Fundación benéfica de tipo cultural y con fines científicos",
    lede:"Promovemos el conocimiento, el estudio y la difusión de la mineralogía y las ciencias de la tierra, y fomentamos su divulgación científica.",
    home_mv_h:"Misión y visión",
    home_mission:"Nuestra misión es promover el conocimiento, el estudio y la difusión de la mineralogía y las ciencias de la tierra, valorando su relevancia para la sociedad y fomentando su divulgación científica y educativa.",
    home_vision:"Nuestra visión es ser un punto de referencia en la puesta en valor de la mineralogía y las ciencias de la tierra, acercando el conocimiento y el patrimonio mineralógico a un público amplio.",
    home_what_h:"Qué hacemos",
    home_what_p:"La fundación promueve proyectos de divulgación consolidados que acercan la mineralogía a una amplia comunidad: dos foros de referencia en línea y un museo virtual de ejemplares minerales.",
    home_see_projects:"Ver nuestros proyectos →",
    home_ident_h:"La fundación",
    home_ident_p:"FMF - Fundació Mineralògica Fabre es una fundación privada sin ánimo de lucro (NIF G26807578), con domicilio en Barcelona e inscrita en el Registro de fundaciones de la Generalitat de Catalunya.",
    home_more_about:"Más sobre nosotros →",

    about_head_h:"Sobre la fundación",
    about_head_p:"Quiénes somos, nuestra historia y la misión y visión que guían nuestro trabajo.",
    about_who_h:"Quiénes somos",
    about_who_p1:"FMF - Fundació Mineralògica Fabre es una fundación privada sin ánimo de lucro, constituida en Barcelona e inscrita en el Registro de fundaciones de la Generalitat de Catalunya. Está clasificada como fundación benéfica de tipo cultural y con fines científicos.",
    about_who_p2:"La fundación da continuidad institucional a un conjunto de iniciativas de divulgación de la mineralogía creadas y mantenidas por sus fundadores, reuniéndolas bajo una única organización sin ánimo de lucro orientada al beneficio público.",
    about_hist_h:"Nuestra historia",
    about_hist_p1:"La fundación se constituyó el 9 de febrero de 2026 y quedó inscrita en el Registro de fundaciones de la Generalitat de Catalunya por resolución de 27 de abril de 2026.",
    about_hist_p2:"Nació para apoyar y dar estabilidad a largo plazo a proyectos de divulgación de la mineralogía que sus fundadores venían desarrollando desde hacía años —los foros de la comunidad FMF (en español e inglés) y el Museo Virtual de Minerales MVM—, asegurando su continuidad y crecimiento como un proyecto compartido y sin ánimo de lucro.",
    about_mission_h:"Misión",
    about_mission_p:"Promover el conocimiento, el estudio y la difusión de la mineralogía y las ciencias de la tierra en general, valorando su relevancia para la sociedad y fomentando su estudio, su educación y su divulgación científica.",
    about_vision_h:"Visión",
    about_vision_p:"Ser un punto de referencia en la puesta en valor y la difusión de la mineralogía y las ciencias de la tierra, acercando el conocimiento y el patrimonio mineralógico a la sociedad y conectando a una amplia comunidad internacional de aficionados, coleccionistas, estudiantes e investigadores.",
    details_h:"Datos de la fundación",
    l_name:"Denominación", l_nif:"NIF", l_nature:"Naturaleza", l_office:"Domicilio",
    l_reg:"Inscripción", l_class:"Clasificación", l_inc:"Fecha de constitución",
    v_nature:"Fundación privada sin ánimo de lucro",
    v_reg:"Registro de fundaciones de la Generalitat de Catalunya (resolución de 27 de abril de 2026)",
    v_class:"Fundación benéfica de tipo cultural y con fines científicos",
    v_inc:"9 de febrero de 2026",
    board_h:"Patronato",
    role_pres:"Presidente", role_sec:"Secretario", role_voc:"Vocal",

    proj_head_h:"Proyectos", proj_head_p:"Las iniciativas que la fundación promueve actualmente.",
    projects_intro:"La fundación promueve actualmente los siguientes proyectos:",
    proj_foro_name:"Foro FMF — Español",
    proj_foro_desc:"Foro comunitario en español sobre minerales y mineralogía, que reúne a coleccionistas, aficionados e investigadores.",
    proj_eforo_name:"Foro FMF — Inglés",
    proj_eforo_desc:"Foro comunitario en inglés sobre minerales y mineralogía, que conecta a un público internacional.",
    proj_mvm_name:"MVM — Museo Virtual de Minerales",
    proj_mvm_desc:"Museo en línea de ejemplares de minerales.",
    visit:"Visitar sitio",

    contact_head_h:"Contacto", contact_head_p:"Cómo contactar con la fundación.",
    contact_email_h:"Correo electrónico", contact_addr_h:"Domicilio", contact_id_h:"Fundación",
    footer_reg:"Inscrita en el Registro de fundaciones de la Generalitat de Catalunya"
  },
  ca:{
    nav_home:"Inici", nav_about:"Qui som", nav_projects:"Projectes", nav_contact:"Contacte",
    kicker:"Fundació benèfica de tipus cultural i amb fins científics",
    lede:"Promovem el coneixement, l'estudi i la difusió de la mineralogia i de les ciències de la terra, i en fomentem la divulgació científica.",
    home_mv_h:"Missió i visió",
    home_mission:"La nostra missió és promoure el coneixement, l'estudi i la difusió de la mineralogia i de les ciències de la terra, valorant-ne la rellevància per a la societat i fomentant-ne la divulgació científica i educativa.",
    home_vision:"La nostra visió és esdevenir un punt de referència en la posada en valor de la mineralogia i de les ciències de la terra, apropant el coneixement i el patrimoni mineralògic a un públic ampli.",
    home_what_h:"Què fem",
    home_what_p:"La fundació promou projectes de divulgació consolidats que apropen la mineralogia a una àmplia comunitat: dos fòrums de referència en línia i un museu virtual d'exemplars minerals.",
    home_see_projects:"Veure els nostres projectes →",
    home_ident_h:"La fundació",
    home_ident_p:"La FMF - Fundació Mineralògica Fabre és una fundació privada sense ànim de lucre (NIF G26807578), amb domicili a Barcelona i inscrita al Registre de fundacions de la Generalitat de Catalunya.",
    home_more_about:"Més sobre nosaltres →",

    about_head_h:"Sobre la fundació",
    about_head_p:"Qui som, la nostra història, i la missió i la visió que guien la nostra feina.",
    about_who_h:"Qui som",
    about_who_p1:"La FMF - Fundació Mineralògica Fabre és una fundació privada sense ànim de lucre, constituïda a Barcelona i inscrita al Registre de fundacions de la Generalitat de Catalunya. Està classificada com a fundació benèfica de tipus cultural i amb fins científics.",
    about_who_p2:"La fundació dona continuïtat institucional a un conjunt d'iniciatives de divulgació de la mineralogia creades i mantingudes pels seus fundadors, reunint-les sota una única organització sense ànim de lucre orientada al benefici públic.",
    about_hist_h:"La nostra història",
    about_hist_p1:"La fundació es va constituir el 9 de febrer de 2026 i va quedar inscrita al Registre de fundacions de la Generalitat de Catalunya per resolució de 27 d'abril de 2026.",
    about_hist_p2:"Va néixer per donar suport i estabilitat a llarg termini a projectes de divulgació de la mineralogia que els seus fundadors desenvolupaven des de feia anys —els fòrums de la comunitat FMF (en espanyol i anglès) i el Museu Virtual de Minerals MVM—, tot assegurant-ne la continuïtat i el creixement com a projecte compartit i sense ànim de lucre.",
    about_mission_h:"Missió",
    about_mission_p:"Promoure el coneixement, l'estudi i la difusió de la mineralogia i de les ciències de la terra en general, valorant-ne la rellevància per a la societat i fomentant-ne l'estudi, l'educació i la divulgació científica.",
    about_vision_h:"Visió",
    about_vision_p:"Ser un punt de referència en la posada en valor i la difusió de la mineralogia i de les ciències de la terra, apropant el coneixement i el patrimoni mineralògic a la societat i connectant una àmplia comunitat internacional d'aficionats, col·leccionistes, estudiants i investigadors.",
    details_h:"Dades de la fundació",
    l_name:"Denominació", l_nif:"NIF", l_nature:"Naturalesa", l_office:"Domicili",
    l_reg:"Inscripció", l_class:"Classificació", l_inc:"Data de constitució",
    v_nature:"Fundació privada sense ànim de lucre",
    v_reg:"Registre de fundacions de la Generalitat de Catalunya (resolució de 27 d'abril de 2026)",
    v_class:"Fundació benèfica de tipus cultural i amb fins científics",
    v_inc:"9 de febrer de 2026",
    board_h:"Patronat",
    role_pres:"President", role_sec:"Secretari", role_voc:"Vocal",

    proj_head_h:"Projectes", proj_head_p:"Les iniciatives que la fundació promou actualment.",
    projects_intro:"La fundació promou actualment els projectes següents:",
    proj_foro_name:"Fòrum FMF — Espanyol",
    proj_foro_desc:"Fòrum comunitari en espanyol sobre minerals i mineralogia, que reuneix col·leccionistes, aficionats i investigadors.",
    proj_eforo_name:"Fòrum FMF — Anglès",
    proj_eforo_desc:"Fòrum comunitari en anglès sobre minerals i mineralogia, que connecta un públic internacional.",
    proj_mvm_name:"MVM — Museu Virtual de Minerals",
    proj_mvm_desc:"Museu en línia d'exemplars de minerals.",
    visit:"Visita el web",

    contact_head_h:"Contacte", contact_head_p:"Com contactar amb la fundació.",
    contact_email_h:"Correu electrònic", contact_addr_h:"Domicili", contact_id_h:"Fundació",
    footer_reg:"Inscrita al Registre de fundacions de la Generalitat de Catalunya"
  }
};

function applyLang(lang){
  const d = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(k in d) el.textContent = d[k];
  });
  // MVM banner + link vary by language
  const mvm = document.getElementById('mvm-banner');
  if(mvm){
    const suffix = (lang === 'es' || lang === 'ca') ? 'es' : 'en';
    mvm.src = 'assets/banner-fabreminerals_' + suffix + '.jpg';
    mvm.style.display = '';
  }
  const mvmLink = document.getElementById('mvm-link');
  if(mvmLink){
    const links = {
      en:'https://www.fabreminerals.com/MVM-Minerals_Virtual_Museum.php',
      es:'https://www.fabreminerals.com/',
      ca:'https://www.fabreminerals.com/'
    };
    mvmLink.href = links[lang] || links.en;
  }
  document.querySelectorAll('.langbar button').forEach(b=>{
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
  });
}

function setLang(lang){
  try{ localStorage.setItem('fmf-lang', lang); }catch(e){}
  applyLang(lang);
}

(function(){
  const supported = ['en','es','ca'];
  let lang = null;
  try{ lang = localStorage.getItem('fmf-lang'); }catch(e){}
  if(!lang){
    const nav = (navigator.language || 'en').slice(0,2).toLowerCase();
    lang = supported.includes(nav) ? nav : 'en';
  }
  if(supported.includes(lang) && lang !== 'en') applyLang(lang);
  else applyLang(lang); // ensures MVM banner/link + aria states are set
})();
