<!-- Header.svelte -->
<script>
	import arrow from '$lib/images/chevron-down.png';
	import { Container, Row, Col } from 'sveltestrap';
	
	const languages = [{name: 'English'}, {name: '한국어'}]
	const tableNumber = '12'
</script>

<header>

	<nav class="navbar">
			<Container fluid class="text-center g-0">
			<div class="col">
				<a class="navbar-brand" href="/" on:click={()=>{
					
				}}>
					{languages[0].name}
					<img src={arrow} alt="arrow" width="30" height="24" class="d-inline-block align-text-top" />
					<div class="sel-lang">
						<a href="#">
							가나다라
						</a>
						<a href="#">
							가나다라
						</a>
					</div>
				</a>
			</div>
			<div class="col">
				<a class="navbar-brand" href="/" on:click={()=>{alert('Waiter Called')}}>
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
	.col:nth-child(1) a {
		position: relative;
	}
	.sel-lang {
		display: block;
		position: absolute;
		top: 100%;
		left: 100%;
		transform: translateX(-100%);
		background-color: #271919;

	}
	.sel-lang a {
		display: block;
	}
</style>
