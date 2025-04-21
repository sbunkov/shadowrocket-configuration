console.log(`spotify-json-2023.06.13`);
let url = $request.url;
// console.log(`originalurl:${url}`);
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log(`exchangeplatform:${url}`);
} else {
    console.log('No handling required');
}
$done({
    url
});