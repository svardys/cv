<template>
  <div class="row">
    <div
      class="col-6"
      v-for="achievement in achievementsContent"
      :key="achievement.id"
    >
      <div class="box-stats with-margin">
        <h3 class="poppins-font position-relative">
          {{ achievement.title }}
        </h3>
        <p class="open-sans-font m-0 position-relative text-uppercase">
          {{ achievement.subTitle1 }}
          <span class="d-block" v-html="achievement.subTitle2"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementsContent: [
        { id: 1, title: "8", subTitle1: "years", subTitle2: "in IT" },
        { id: 2, title: "5", subTitle1: "years", subTitle2: "with&nbsp;Javascript" },
        { id: 3, title: "4", subTitle1: "years", subTitle2: "experience with&nbsp;Vue.js" },
        { id: 4, title: "3", subTitle1: "years", subTitle2: "with&nbsp;Tailwind CSS" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
