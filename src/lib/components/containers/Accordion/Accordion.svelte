<script lang="ts">
  import AccordionItem from './AccordionItem/AccordionItem.svelte';
  import './Accordion.scss';
  import { prevent_default } from 'svelte/internal';

  // export let fullyDisabled = false;
  export let indexOpen: { [index: number]: boolean } = {};
  export let items: {
    body: string;
    disabled?: boolean;
    heading: string;
    loading?: boolean;
    open?: boolean;
  }[];
  export let loading = false;
  export let multipleOpen;

  const handleClick = (i: number, disabled: undefined | boolean) => {
    if (disabled) {
      return;
    } else {
      indexOpen[i] = true;
    }
  };
</script>

<section>
  {#if loading}
    <p>loading</p>
  {:else}
    {#each items as item, i (i)}
      {@const { body, disabled, heading, loading, open } = item}
      <AccordionItem
        {disabled}
        {heading}
        {loading}
        on:click={() => handleClick(i, disabled)}
        open={open || indexOpen[i]}
      >
        {body}
      </AccordionItem>
    {/each}
  {/if}
</section>
