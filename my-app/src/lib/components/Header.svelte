<!-- Header.svelte -->
<script>
	import arrow from '$lib/images/chevron-down.png';
	import { Container, Row, Col } from 'sveltestrap';
</script>

<header>

	<nav class="navbar">
			<Container fluid class="text-center g-0">
			<div class="col">
				<a class="navbar-brand" href="/">
					English
					<img src={arrow} alt="arrow" width="30" height="24" class="d-inline-block align-text-top" />
				</a>
			</div>
			<div class="col">
				<a class="navbar-brand" href="/">
					<img src="./src/lib/images/notifications_active.png" alt="waiter" width="30" height="24" class="d-inline-block align-text-top" />
					Call Waiter
				</a>
			</div>
			<div class="col">
				<a class="navbar-brand" href="/">
					<img src="./src/lib/images/receipt.png" alt="bill" width="30" height="24" class="d-inline-block align-text-top" />
					View Bill
				</a>
			</div>
			<div class="col">
				<a class="navbar-brand" href="/">
					<img src="./src/lib/images/shopping_cart.png" alt="cart" width="30" height="24" class="d-inline-block align-text-top" />
					My Cart
				</a>
			</div>
			<div class="col">
				<a class="navbar-brand" href="/">
					<img src="./src/lib/images/table.png" alt="table" width="30" height="24" class="d-inline-block align-text-top" />
					12
				</a>
			</div>
		</Container>
	</nav>

</header>

<style>
	a {
		color: rgba(255, 255, 255, 0.4);
	}
	.col:last-child a {
		color: white;
	}
	a:hover {
		color: white;
	}
	img {
		height: 100%;
		object-fit: cover;
	}
	div {
		box-sizing: border-box;
		padding: 10px;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.navbar {
		background-color: #271919;
		padding: 0;
	}
</style>