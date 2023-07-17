<template>
  <div
    class="col-6 col-md-3 mb-3 mb-sm-5"
    :key="skills.id"
    v-for="skills in skillsContent"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        { id: 1, skillClass: "p80", skillPercent: "80", skillName: "HTML" },
        {
          id: 2,
          skillClass: "p88",
          skillPercent: "88",
          skillName: "Vue.js v3",
        },
        { id: 3, skillClass: "p70", skillPercent: "74", skillName: "Tailwind CSS" },
        { id: 4, skillClass: "p66", skillPercent: "50", skillName: "NODE.JS" },
        {
          id: 5,
          skillClass: "p63",
          skillPercent: "63",
          skillName: "PHP LARAVEL",
        },
        { id: 6, skillClass: "p91", skillPercent: "91", skillName: "PERL" },
        { id: 7, skillClass: "p77", skillPercent: "77", skillName: "SHELL" },
        { id: 8, skillClass: "p45", skillPercent: "45", skillName: "jQuery" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
