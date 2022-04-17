<template>
  <div class="layout">
    <header
      class="fixed top-0 left-0 z-[1000] flex w-full items-center justify-center px-20 py-7 sm:justify-start"
    >
      <nav class="flex justify-center rounded-full">
        <g-link to="/">
          <g-image
            alt="mwwte_LOGO"
            src="~/assets/LOGO.png"
            width="100"
            class="min-w-[100px] duration-150 hover:scale-105"
          />
        </g-link>
        <ul
          class="hidden items-center justify-center font-serif text-lg font-black tracking-wider text-white sm:flex"
        >
          <li
            class="bg-main ml-16 rounded-full p-3 text-gray-900 duration-150 bg-primary hover:scale-105"
          >
            <g-link to="/about/">ABOUT</g-link>
          </li>
          <li
            class="bg-main ml-16 rounded-full p-3 text-gray-900 duration-150 bg-primary hover:scale-105"
          >
            <g-link>PODCAST</g-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      test: "test",
    };
  },
  created() {
    // if (process.isClient) {
    // window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll", this.parallaxScroll);
    // }
  },
  methods: {
    // handleScroll() {
    //   if (process.isClient) {
    //     this.active = window.scrollY > 28 ? true : false;
    //   }
    // },
    // parallaxScroll() {
    //   if (process.isClient) {
    //     let landingPage = document.getElementById("landingPage");
    //     let valueY = window.scrollY;
    //     landingPage.style.top = valueY * 0.5 + "px";
    //   }
    // },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  background-color: #f5f5f5;
}
#landingPage {
  filter: brightness(0.75);
}
/* .fixed {
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5rem;
  padding-right: 5rem;
  transition: background-color 0.2s ease-in-out;
  background: rgba(0, 0, 0, 0.7);
} */
</style>
