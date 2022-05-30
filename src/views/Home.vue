<template>
  <section class="h-screen bg-dark flex items-center justify-center">
    <div v-motion-slide-bottom>
      <p class="text-xs text-left font-serif text-third font-bold tracking-widest mb-5">國立東華大學VIP課程</p>
      <h1 class="text-3xl text-left font-serif text-third font-bold leading-7">
      移工與她的老人<br><span class="text-lg">Migrant works with the elderly</span>
</h1>
    </div>
    <font-awesome-icon icon="arrow-down" id="arrowDown" class="text-white absolute bottom-1" />
  </section>
  <section class="h-screen bg-primary flex items-center justify-center">    
    <div
       v-motion
       :initial="{ opacity: 0, y: 50 }"
       :visible="{ opacity: 1, y: 0 }"
    >      
      <h1 class="text-4xl font-serif text-dark font-bold text-center">第二介紹頁</h1>
    </div>
  </section>
</template>

<style>
#arrowDown {
  animation: RefadeInDown 1s ease-in-out infinite;
}

@keyframes RefadeInDown {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(20%);

  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
}



</style>