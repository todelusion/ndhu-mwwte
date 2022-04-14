<template>
  <Layout>
    <section class="relative h-screen w-full">
      <g-image
        id="landingPage"
        src="~/assets/landingPage.jpg"
        class="absolute z-10 h-full w-full object-cover"
      ></g-image>
      <div class="absolute z-10 bottom-0 w-full flex justify-center animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-white text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
    
    <div class="relative z-20 bg-third">
      <div class="mx-auto max-w-[1440px] py-20 text-center">
        <h1 class="font-sans text-base text-second font-normal">移工與她的老人</h1>
        <h2 class="font-serif text-4xl font-semibold text-gray-800">
          0321課堂側記 讀書會與壽豐國中組分享
        </h2>
        <g-image src="~/assets/post01.jpg" width="650" class="mx-auto mt-5"></g-image>
      </div> 
    </div>
    <div class="relative z-20 bg-white py-20">
      <div class="bg-white grid grid-rows-2 grid-flow-col gap-y-16 max-w-[1440px] mx-auto text-center justify-items-center">
        <div class="p-5 rounded-2xl bg-white hover:drop-shadow-2xl active:scale-95 duration-150">
          <h2 class="text-lg font-serif">110-2學期移工與她的老人_熱血快閃招募！！</h2>
          <g-image src="~/assets/post02.jpg" width="300" height="300" fit="cover" class="mt-6 mx-auto"></g-image>
        </div>
        <div class="p-5 rounded-2xl bg-white hover:drop-shadow-2xl active:scale-95 duration-150">
          <h2 class="text-lg font-serif">協助分享！社會系專題演講「亞洲女移工和同性親密」</h2>
          <g-image src="~/assets/post03.jpg" width="300" height="300" fit="cover" class="mt-6 mx-auto"></g-image>
        </div>
        <div class="p-5 rounded-2xl bg-white hover:drop-shadow-2xl active:scale-95 duration-150">
          <h2 class="text-lg font-serif">移工與她的老人系列講座–聘僱移工與家庭照顧的觀察筆記</h2>
          <g-image src="~/assets/post04.jpg" width="300" height="300" fit="cover" class="mt-6 mx-auto"></g-image>
        </div>
        <div class="p-5 rounded-2xl bg-white hover:drop-shadow-2xl active:scale-95 duration-150">
          <h2 class="text-lg font-serif">🌐多元文化視角 ｜🌐移工篇🌐</h2>
          <g-image src="~/assets/post05.jpg" width="300" height="300" fit="cover" class="mt-6 mx-auto"></g-image>
        </div>
        <div class="p-5 rounded-2xl bg-white hover:drop-shadow-2xl active:scale-95 duration-150">
          <h2 class="text-lg font-serif">110-1學期移工與她的老人_新！血！招！募！</h2>
          <g-image src="~/assets/post06.jpg" width="300" height="300" fit="cover" class="mt-6 mx-auto"></g-image>
        </div>
        <div class="p-5 rounded-2xl bg-white hover:drop-shadow-2xl active:scale-95 duration-150">
          <h2 class="text-lg font-serif">國際搶工與人權大浪來襲</h2>
          <g-image src="~/assets/post07.jpg" width="300" height="300" fit="cover" class="mt-6 mx-auto"></g-image>
        </div>
      </div> 
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Index",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
