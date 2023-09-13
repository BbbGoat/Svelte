<!-- Header.svelte -->
<script>
// @ts-nocheck

	import arrow_icon from '$lib/images/chevron-down.png';
	import call_icon from '$lib/images/notifications_active.png';
	import bill_icon from '$lib/images/receipt.png';
	import cart_icon from '$lib/images/shopping_cart.png';
	import table_icon from '$lib/images/table.png';

	import { Container, Row, Col } from 'sveltestrap';
	import { languages, tableNumber } from '../../data'
	
	// 클래스 추가
	let current = 'close';

	// 언어설정
	let lang = languages[0].name;
	function chgLang(pm) {
		lang = pm;
	}
</script>

<header>

	<nav class="navbar">
			<Container fluid class="text-center g-0">
			<div class="col">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="navbar-brand m-0" href="#" on:click={()=>{
					current === 'close' ? current = 'open' : current = 'close'
				}}>
					{lang}
					<img src={arrow_icon} alt="arrow" width="30" height="24" class="d-inline-block align-text-top" />
					<div class="sel-lang" class:open={current === 'open'}>

						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" on:click={(e)=>{
							chgLang(languages[0].name)
						}}>
							{languages[0].name}
						</a>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#" on:click={(e)=>{
							chgLang(languages[1].name)
						}}>
							{languages[1].name}
						</a>
						
					</div>
				</a>
			</div>
			<div class="col">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="navbar-brand m-0" href="#" on:click={()=>{alert('Waiter Called')}}>
					<img src={call_icon} alt="waiter" width="30" height="24" class="d-inline-block align-text-top" />
					Call Waiter
				</a>
			</div>
			<!-- svelte-ignore a11y-invalid-attribute -->
			<div class="col">
				<a class="navbar-brand m-0" href="#">
					<img src={bill_icon} alt="bill" width="30" height="24" class="d-inline-block align-text-top" />
					View Bill
				</a>
			</div>
			<div class="col">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="navbar-brand m-0" href="#">
					<img src={cart_icon} alt="cart" width="30" height="24" class="d-inline-block align-text-top" />
					My Cart
				</a>
			</div>
			<div class="col">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a class="navbar-brand m-0" href="#">
					<img src={table_icon} alt="table" width="30" height="24" class="d-inline-block align-text-top" />
					{tableNumber}
				</a>
			</div>
		</Container>
	</nav>

</header>

<style>
	a {
		color: rgba(255, 255, 255, 0.4);
		text-decoration: none;
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
	.sel-lang.open {
		display: block;
	}
	.sel-lang {
		display: none;
		position: absolute;
		top: 100%;
		left: 100%;
		margin-left: 1rem;
		transform: translateX(-100%);
		background-color: #271919;
		
		width: 150px;
		border: 1px solid #ccc;
		z-index: 10;
		padding: 0;
	}
	.sel-lang a {
		display: block;
		width: 100%;
		height: 100%;
		line-height: 42px;
	}
	.sel-lang a:nth-child(2) {
		border-top: 1px solid #ccc;
	}
</style>
