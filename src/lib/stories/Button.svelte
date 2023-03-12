<script lang="ts">
  import './button.css';

  export let primary = false;
  export let size: 'small' | 'medium' | 'large' = 'medium';
  export let label: string = '';

  $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
</script>

<button
  type="button"
  class={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
  on:click
>
  {label}
</button>
