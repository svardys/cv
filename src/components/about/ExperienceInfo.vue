<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
        <span class="place open-sans-font"><a :href="experience.link" class="block ml-5" target="_blank">Link</a></span>
      </h5>
      <p class="open-sans-font" v-html="experience.details"></p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      experienceContent: [
      {
          id: 1,
          year: "2021 - do dnes",
          position: " Web Developer",
          compnayName: "Tanganica",
          details: `Mou prací je&nbsp;vývoj aplikace pro&nbsp;automatizaci marketingových procesů. Využíváme moderní technologie a&nbsp;nástroje, které nám&nbsp;umožňují vytvářet robustní a&nbsp;škálovatelné řešení.<br><br>

Soustředím se na&nbsp;vývoj aplikace pomocí Vue.js 3 s&nbsp;composition API.<br>
Pro správu stavu využíváme Pinii a&nbsp;pro práci s&nbsp;API Axios.<br> 
Pro sledování a&nbsp;řízení chyb používáme Sentry.io.<br> 
Také používáme TypeScript pro&nbsp;psaní typových definic a&nbsp;pro lepší správu datových typů.<br> 
K tvorbě stylů využíváme Tailwind CSS.<br> 
Pro verzování kódu Git.<br> Mou prací je&nbsp;vývoj aplikace pro&nbsp;automatizaci marketingových procesů. Využíváme moderní technologie anástroje, které nám umožňují vytvářet robustní a&nbsp;škálovatelné řešení.
<br><br>
<b>Dovednosti</b>: Tailwind CSS · CSS · HTML5 · JavaScript · Vue · TypeScript<br>`,
          link: "https://tanganica.com/",
        },
        {
          id: 2,
          year: "2023 - do dnes",
          position: " Web Developer",
          compnayName: "Agdata.ag",
          details: `Mou pracovní pozicí je&nbsp;vývoj aplikace Agdata. Agdata je&nbsp;online systém pro&nbsp;řízení rodinných farem i&nbsp;velkých zemědělských podniků.<br><br>
Vývoj probíhá primárně ve&nbsp;Vue 2, Node.js a&nbsp;MongoDB. Pro správu css&nbsp;je&nbsp;nejvíce využívána knihovna Vuetify. Mou pracovní pozicí je&nbsp;vývoj aplikace Agdata. Agdata je online systém pro&nbsp;řízení rodinných farem&nbsp;i&nbsp;velkých zemědělských podniků. Pro správu css je&nbsp;nejvíce využívána knihovna Vuetify.<br><br>
<b>Dovednosti</b>: Node.js · MongoDB · JavaScript · Vue`,
          link: "https://agdata.ag/",
        },
        {
          id: 3,
          year: "2020 - 2023",
          position: "Back-end Developer",
          compnayName: "XORUX",
          details: `Vývoj aplikace pro&nbsp;monitorování výkonů a&nbsp;infrastruktury (Storage, SAN a&nbsp;LAN). Hlavní náplní práce je&nbsp;získání informací o&nbsp;sběru dat z&nbsp;různých zdrojů, jako jsou SNMP, SSH a&nbsp;API. Dále je&nbsp;důležité zjistit, jaké metriky jsou k dispozici pro sběr dat, jako jsou IOPS, CPU a&nbsp;response time.<br><br>

Mé další úkoly zahrnují implementaci a&nbsp;nasazení řešení na&nbsp;front-end rozhraní. Pro implementaci se&nbsp;nejčastěji využívá programovací jazyk Perl. Pro ukládání a&nbsp;grafování dat používáme RRDTool nebo ukládání dat do&nbsp;TimescaleDB s&nbsp;grafováním na&nbsp;frontendu (React).<br><br>

Implementace API pro&nbsp;platformy Service Now nebo Gira Cloud. Hlavním úkolem je&nbsp;odesílání upozornění (alertů) na&nbsp;základě nastavených limitů pro&nbsp;různá data.<br><br>
<b>Dovednosti</b>: JavaScript · Perl · RRDTool`,
          link: "https://xorux.com/",

        },
        {
          id: 4,
          year: "2018 - 2020",
          position: "Konzultant",
          compnayName: "TESCOSW",
          details: `Práce s integračními vazby. Komunikace se zákazníky. Tvorba workflow. Analýza a návrh řešení.<br><br>
          <b>Dovednosti</b>: UML · Agilní metody a Scrum · Tvorba workflow`,
          link: "https://www.tescosw.cz/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
