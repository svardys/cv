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
          year: "2021 - until today",
          position: "Web Developer",
          compnayName: "Tanganica",
          details: `My&nbsp;job is&nbsp;to develop an&nbsp;application for&nbsp;automating marketing processes. We use modern technologies and&nbsp;tools that allow us&nbsp;to create robust and&nbsp;scalable solutions.<br><br>

I focus on&nbsp;developing the application using Vue.js 3 with the&nbsp;composition API.<br>
For state management, we use Pinia and&nbsp;for working with&nbsp;APIs, we use Axios.<br>
To monitor and&nbsp;manage errors, we use Sentry.io.<br>
We also use TypeScript for&nbsp;writing type definitions and&nbsp;for better data type management.<br>
For styling, we use Tailwind CSS.<br>
For versioning the code, we use Git.<br> My&nbsp;job is&nbsp;to develop an&nbsp;application for&nbsp;automating marketing processes. We use modern technologies and&nbsp;tools that allow us&nbsp;to create robust and&nbsp;scalable solutions.
<br><br>
<b>Skills</b>: Tailwind CSS &middot; CSS &middot; HTML5 &middot; JavaScript &middot; Vue &middot; TypeScript<br>`,
          link: "https://tanganica.com/",
        },
        {
          id: 2,
          year: "2023 - do dnes",
          position: " Web Developer",
          compnayName: "Agdata.ag",
          details: `My&nbsp;job position is&nbsp;application development for Agdata. Agdata is&nbsp;an online system for&nbsp;managing family farms and&nbsp;large agricultural enterprises.<br><br>
Development primarily takes place in&nbsp;Vue 2, Node.js, and&nbsp;MongoDB. For CSS management, the Vuetify library is&nbsp;most commonly used. My&nbsp;job position is&nbsp;application development for Agdata. Agdata is an online system for&nbsp;managing family farms&nbsp;and&nbsp;large agricultural enterprises. For CSS management, the Vuetify library is&nbsp;most commonly used.<br><br>
<b>Skills</b>: Node.js &middot; MongoDB &middot; JavaScript &middot; Vue<br>`,
          link: "https://agdata.ag/",
        },
        {
          id: 3,
          year: "2020 - 2023",
          position: "Back-end Developer",
          compnayName: "XORUX",
          details: `Development of an application for&nbsp;monitoring performances and&nbsp;infrastructure (Storage, SAN, and&nbsp;LAN). The main task is&nbsp;to gather information about data collection from various sources such as SNMP, SSH, and&nbsp;API. Additionally, it is&nbsp;essential to determine which metrics are available for data collection, such as IOPS, CPU, and&nbsp;response time.<br><br>

My other tasks include implementing and&nbsp;deploying solutions to&nbsp;the front-end interface. Perl is&nbsp;most commonly used for implementation. For storing and&nbsp;graphing data, we use RRDTool or store data in&nbsp;TimescaleDB with graphing on&nbsp;the frontend (React).<br><br>

Implementation of API for&nbsp;platforms like Service Now or Gira Cloud. The main task is&nbsp;to send notifications (alerts) based on&nbsp;set limits for&nbsp;various data.<br><br>
<b>Skills</b>: JavaScript &middot; Perl &middot; RRDTool<br>`,
          link: "https://xorux.com/",

        },
        {
          id: 4,
          year: "2018 - 2020",
          position: "Consultant",
          compnayName: "TESCOSW",
          details: `Working with integration bindings. Communication with customers. Workflow creation. Analysis and solution design.<br><br>
<b>Skills</b>: UML &middot; Agile methods and Scrum &middot; Workflow creation<br>`,
          link: "https://www.tescosw.cz/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
