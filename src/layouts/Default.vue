<template>
  <div class="layout">
    <header
      class="absolute top-0 left-0 w-full px-20 py-7 z-[1000]"
    >
      <nav class="flex w-full" :class="{ fixed: active }">
        <!-- 這邊使用scroll監聽事件改為css fixed讓滑鼠往下滾動後能維持在固定位置 -->
        <g-link to="/">
          <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="125" />
        </g-link>
        <ul class="flex justify-center items-center text-black">
          <li class="ml-20">
            <g-link
              to="/blog/"
              >BLOG</g-link
            >
          </li>
          <li class="ml-20">
            <g-link
              to="/About/"
              >ABOUT</g-link
            >
          </li>
          <li class="ml-20">
            <g-link
              >PODCAST</g-link
            >
          </li>
        </ul>
      </nav>
    </header>
    <section class="relative w-full h-screen">
      <g-image id="landingPage" src="~/assets/landingPage.jpg" class="absolute object-cover w-full h-full z-10"></g-image>
    </section>


    <div class="relative z-20">
      <h1>TEST</h1>
      <p class="text-2xl">
        Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Illo
        similique velit modi magnam <br />sint reiciendis optio excepturi
        cupiditate laborum necessitatibus.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.parallaxScroll)
  },
  methods: {
    handleScroll() {
      console.log('fixed');
      this.active = window.scrollY > 28 ? true : false;
    },
    parallaxScroll() {
      console.log('parallax');
      let landingPage = document.getElementById('landingPage')
      let valueY = window.scrollY;
      landingPage.style.top = valueY * 0.5 + 'px';
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  background-color: #f5f5f5;
}
section::before {
  content: "";
  position: absolute;
  bottom: 0;
  background: #fff;
  height: 200px;
  width: 100%;
  z-index: 10000;
}
.fixed {
  position: fixed;
  top: 0;
}
</style>
