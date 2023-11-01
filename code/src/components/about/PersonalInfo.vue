<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        <span v-if="personalInfo.link">
          <a class="" :href="personalInfo.link" target="_blank"><span>{{ personalInfo.metaInfo }}</span></a>
        </span>
        <span v-else>
          {{ personalInfo.metaInfo }}
        </span>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "Name", metaInfo: "Jaroslav" },
        { id: 2, meta: "Surname", metaInfo: "Švardala" },
        { id: 3, meta: "Age", metaInfo: "25 years" },
        { id: 4, meta: "Nationality", metaInfo: "Czech Republic" },
        { id: 5, meta: "Freelance", metaInfo: "Available at" },
        { id: 6, meta: "Address", metaInfo: "Na Rybníčku 43, Žulová" },
        { id: 7, meta: "Phone", metaInfo: "+420 721 892 661" },
        { id: 8, meta: "Email", metaInfo: "j.svardala@seznam.cz" },
        { id: 9, meta: "Linked In", metaInfo: "LINK", link: 'https://www.linkedin.com/in/jaroslav-%C5%A1vardala-717aa9192/'},
        { id: 10, meta: "Language", metaInfo: "Česky, English" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
