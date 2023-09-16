<template>
  <div>
    <!-- 汽車單頁介紹 -->
    <!-- 汽車單頁 Hero -->
    <div class="mt-10">
      <img
        src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000"
        class="w-full"
        alt=""
      />
      <h1 class="mt-10 text-4xl">Volvo 3XT</h1>
      <div
        class="text-slate-500 text-lg flex justify-between mt-3 pb-5 border-b"
      >
        <div class="flex">
          <p class="mr-2">5 Seats</p>
          <p class="mr-2">|</p>
          <p class="mr-2">67,444 Miles</p>
        </div>
        <div>
          <p class="font-bold text-2xl">$25,555</p>
        </div>
      </div>
    </div>
    <!-- 汽車單頁屬性 -->
    <main class="mr-10 mt-5 pb-5 border-b">
      <!-- 個別屬性 -->
      <div class="flex text-lg mb-3">
        <span class="rounded text-lime-800 mr-3">✔</span>
        <p>Leather Interior</p>
      </div>
      <!-- 個別屬性 -->
      <div class="flex text-lg mb-3">
        <span class="rounded text-lime-800 mr-3">✔</span>
        <p>Leather Interior</p>
      </div>
    </main>
    <!-- 汽車單頁描述 -->
    <p class="mt-5 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor
      non purus quis tempus. Proin blandit urna non tellus placerat posuere.
      Morbi nec mattis augue. Aenean molestie placerat elit eget egestas.
      Quisque eget interdum diam, id euismod ipsum. Aenean non laoreet nisl.
      Nulla viverra sagittis ipsum et vestibulum. Cras at commodo dolor. Fusce
      eleifend lobortis massa, sit amet dignissim ligula finibus faucibus.
      Nullam sed sem sed lorem elementum varius eu nec massa. Aliquam venenatis
      quam quis leo tristique faucibus. Maecenas.
    </p>
    <!-- 汽車單頁聯絡表單 -->
    <CarSinglePageForm />
  </div>
</template>
