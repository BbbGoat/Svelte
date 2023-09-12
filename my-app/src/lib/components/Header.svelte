<!-- Header.svelte -->
<script>
	import arrow from '$lib/images/chevron-down.png';
	import { Container, Row, Col } from 'sveltestrap';
</script>

<header>

	<nav class="navbar" style="background-color: brown;">
		<!-- Navbar content -->
			<!-- <Row class="container-fluid"> -->
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
						<img src={arrow} alt="bill" width="30" height="24" class="d-inline-block align-text-top" />
						View Bill
					</a>
				</div>
				<div class="col">
					<a class="navbar-brand" href="/">
						<img src={arrow} alt="cart" width="30" height="24" class="d-inline-block align-text-top" />
						My Cart
					</a>
				</div>
				<div class="col">
					<a class="navbar-brand" href="/">
						<img src={arrow} alt="table" width="30" height="24" class="d-inline-block align-text-top" />
						숫자들어오ㅓㅁ
					</a>
				</div>
			</Container>
			<!-- </Row> -->
	</nav>

</header>

<style>
	a {
		color: white;;
	}
	div {
		box-sizing: border-box;
		padding: 4px;
		border-right: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.navbar {
		padding: 0;
	}
</style>