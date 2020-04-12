export default function () {
    const token = sessionStorage.getItem('userToken');
    if(token){
        const [,baseUri] = token.split('.');
        const base64 = baseUri.replace('-','+').replace('_','/');
        const payload = JSON.parse(window.atob(base64));
        console.log('autenticado');
        return {
            isAuthenticate : true,
            payload
        };
    } else{
        console.log('No autenticado');
        return {
            isAuthenticate : false,
            payload: null
        };
    }
}