<!-- Header.svelte -->
<script>
	import { page } from '$app/stores';
	import { Styles } from 'sveltestrap';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<header>

	<nav class="navbar bg-body-tertiary" style="background-color: red;">
		<!-- Navbar content -->
		<div class="container-fluid">
			<a class="navbar-brand" href="/">
				<img src="$lib/images/chevron-down.png" alt="arrow" width="30" height="24" class="d-inline-block align-text-top" />
				English
			</a>
		</div>
	</nav>

</header>
