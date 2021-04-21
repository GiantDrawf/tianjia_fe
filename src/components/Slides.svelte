<script>
  import { onMount } from 'svelte';
  import 'swiper/swiper.min.css';
  import 'swiper/components/navigation/navigation.min.css';
  import 'swiper/components/pagination/pagination.min.css';

  let SwiperComponent;
  let SwiperSlideComponent;
  export let slides = [];

  // swiper组件兼容ssr
  onMount(async () => {
    const { Swiper, SwiperSlide } = await import('swiper/svelte');
    const {
      default: SwiperCore,
      Navigation,
      Pagination,
      A11y,
      Autoplay,
      Lazy,
    } = await import('swiper');
    SwiperComponent = Swiper;
    SwiperSlideComponent = SwiperSlide;
    SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Lazy]);
  });
</script>

{#if Object.prototype.toString.call(slides) === '[object Array]' && slides.length}
  <svelte:component
    this={SwiperComponent}
    class="relative h-56 w-full sm:h-72 md:h-72 lg:h-96"
    navigation
    pagination={{ clickable: true }}
    loop
    autoplay={{ delay: 5000 }}
  >
    {#each slides as itemSlide}
      <svelte:component this={SwiperSlideComponent} class="w-full h-full">
        <a href=".">
          <div
            class="w-full h-full bg-center bg-no-repeat bg-cover relative"
            style="background-image: url({itemSlide.thumbnail});"
          >
            <div
              class="absolute bottom-0 h-20 pt-3 w-full bg-gradient-to-t from-gray-900 pl-6 md:pl-16 text-2xl text-white flex flex-col justify-items-center items-start"
            >
              <p class="truncate font-semibold">{itemSlide.title}</p>
              <p class="text-base truncate w-3/4">
                {itemSlide.summary || ''}
              </p>
            </div>
          </div>
        </a>
      </svelte:component>
    {/each}
  </svelte:component>
{/if}

<style>
  :global(.swiper-container) {
    --swiper-theme-color: #fff; /* 设置按钮颜色 */
    --swiper-navigation-size: 20px; /* 设置按钮大小 */
  }
  :global(.swiper-button-prev, .swiper-button-next) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    outline: none;
  }
  :global(.swiper-button-prev:hover, .swiper-button-next:hover) {
    background-color: #000;
  }
  :global(.swiper-button-prev) {
    left: 5%;
  }
  :global(.swiper-button-next) {
    right: 5%;
  }
</style>
