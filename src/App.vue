<template>
    <nav
      class="fixed z-50 w-full flex justify-center"
      :class="{ bg_black: active, bg_none: !active }"
    >
      <ul
        class="flex items-center justify-center font-serif text-sm font-black tracking-wider"
      >
        <li>
          <router-link to="/">
            <img
              alt="mwwte_LOGO"
              src="../public/images/LOGO.png"
              width="75"
              class="min-w-[75px] duration-150 hover:scale-105"
            />
          </router-link>

        </li>
        <li
          class="bg-main ml-5 rounded-full bg-primary p-3 text-gray-900 duration-150 hover:scale-105"
        >
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li
          class="bg-main ml-5 rounded-full bg-primary p-3 text-gray-900 duration-150 hover:scale-105"
        >
          <router-link to="/blog">BLOG</router-link>
        </li>
      </ul>
    </nav>
  <router-view />
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
    window.addEventListener("scroll", this.parallaxScroll);
  },
  methods: {
    handleScroll() {
      this.active = window.scrollY > 28 ? true : false;
    },
    // parallaxScroll() {
    //   let landingPage = document.getElementById("landingPage");
    //   let valueY = window.scrollY;
    //   let screenX = document.body.clientWidth;
    //   if (screenX>=768){
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
}

body {
  min-height: 100vh;
  background-color: #f5f5f5;
  scroll-behavior: smooth;
}
#landingPage {
  filter: brightness(0.75);
}

/* @media (min-width: 768px) {
  
} */

.bg_black {
    padding-left: 5rem;
    padding-right: 5rem;
    /* border-radius: 9999px; */
    transition: background-color 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.715);
  }
  .bg_none {
    /* border-radius: 9999px; */
    background: rgba(0, 0, 0, 0);
    transition: background-color 0.2s ease-in-out;
  }
</style>
