<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "2013 - 2017",
          degree: "Střední škola",
          institute: "Střední průmyslová škola Šumperk",
          details: `Obor - Informační technologie - ukončeno Maturitní zkouškou`,
        },
        {
          id: 2,
          year: "2004 - 2013",
          degree: "Základní škola",
          institute: "Základní škola Žulová",
          details: ``,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
