<script lang="ts">
  import './AccordionItem.scss';
  import { slide } from 'svelte/transition';
  import OpenBelow from './assets/chevron-down.svg';

  export let disabled = false;
  export let heading = '';
  export let loading = false;
  export let open = false;
</script>

<section class="accordion">
  <button class="header" {disabled}>
    <h2 class="heading">{heading}</h2>
    <img src={OpenBelow} alt="opens accordion below" />
  </button>
  <section class="body" transition:slide={{ duration: 500 }}>
    <slot />
    {#if loading}
      <p>Loading...</p>
    {/if}
  </section>
</section>
