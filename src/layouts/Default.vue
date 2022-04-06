<template>
  <div class="layout">
    <div class="landingImage h-screen">
      <header class="mx-auto max-w-[1440px] px-5 pt-10">
        <!-- 這邊使用scroll監聽事件改為css fixed讓滑鼠往下滾動後能維持在固定位置 -->
        <nav class="flex w-full items-center" :class="{ fixed: active }">
          <g-link to="/">
            <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="125" />
          </g-link>
          <div class="button">
            <g-link
              to="/blog/"
              class="mx-7 rounded-lg p-2 font-serif text-xl font-black tracking-wider text-white duration-100 hover:bg-[#FEC6B5] hover:text-[#2E4265]"
              >BLOG</g-link
            >
            <g-link
              to="/About/"
              class="mx-7 rounded-lg p-2 font-serif text-xl font-black tracking-wider text-white duration-100 hover:bg-[#FEC6B5] hover:text-[#2E4265]"
              >ABOUT</g-link
            >
            <g-link
              class="mx-7 rounded-lg p-2 font-serif text-xl font-black tracking-wider text-white duration-100 hover:bg-[#FEC6B5] hover:text-[#2E4265]"
              >PODCAST</g-link
            >
          </div>
        </nav>

        <!-- <div>
          <g-image alt="mwwte_LOGO" src="~/assets/LOGO.png" width="300" class="mx-auto mt-52" />
          <h1
            class="mt-96 pb-10 font-sans 2xl:text-7xl font-bold 2xl:leading-[5rem] tracking-widest text-white"
          >
            移工<br />與她的老人
          </h1>
        </div> -->
      </header>
    </div>
    <section id="Parallax-Scrolling">
      <div class="mx-auto max-w-[1440px] pt-10">
        <h1>TEST</h1>
        <p class="text-2xl">
          Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Illo
          similique velit modi magnam <br />sint reiciendis optio excepturi
          cupiditate laborum necessitatibus.
        </p>
      </div>
    </section>
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
  },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 40 ? true : false;
    },
  },
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.landingImage {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url("~@/assets/landingPage.jpg");
  background-size: cover;
  background-position: center;
}
.fixed {
  position: fixed;
  top: 0;
  padding-right: 2rem;
}

/* section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
} */

#Parallax-Scrolling::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  z-index: 10000;
}

</style>
