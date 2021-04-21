<script>
  import Tailwindcss from '../components/Tailwindcss.svelte';
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<Tailwindcss />

<Nav {segment} />

<main class="relative bg-white box-border">
  <slot />
</main>

<Footer />
