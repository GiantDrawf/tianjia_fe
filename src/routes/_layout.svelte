<script>
  import Tailwindcss from '../components/Tailwindcss.svelte';
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<Tailwindcss />

<Nav {segment} />

<main class="relative max-w-4xl bg-white p-8 mx-auto box-border">
  <slot />
</main>

<Footer />
