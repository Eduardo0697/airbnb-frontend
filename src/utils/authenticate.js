export default function () {
    const token = sessionStorage.getItem('userToken');
    if(token){
        const [,baseUri] = token.split('.');
        const base64 = baseUri.replace('-','+').replace('_','/');
        const payload = JSON.parse(window.atob(base64));
        return {
            isAuthenticated : true,
            payload
        };
    } else{
        return {
            isAuthenticated : false,
            payload: null
        };
    }
}