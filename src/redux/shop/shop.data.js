const SHOP_DATA = async () =>{
	const response = await fetch('http://127.0.0.1:5000/');
	return response.json();
}


export default SHOP_DATA;
