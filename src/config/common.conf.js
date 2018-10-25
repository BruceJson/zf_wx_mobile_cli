console.log('######## config ##########');
console.log('########process.env', process.env);

// domain处理
let cookieDomain = process.env.ROUTERSOFT_COOKIE_DOMAIN === "undefined" ? 'localhost' : process.env.ROUTERSOFT_COOKIE_DOMAIN;

let cookieDomainExp = new RegExp(cookieDomain);

if (!cookieDomainExp.test(window.document.domain)) {
    cookieDomain = document.domain;
}

const config = {
    'API_DOMAIN': process.env.ROUTERSOFT_API_DOMAIN === "undefined" ? 'http://api.routersoft.cn' : process.env.ROUTERSOFT_API_DOMAIN,
    // 'API_DOMAIN': process.env.ROUTERSOFT_API_DOMAIN === "undefined" ? 'http://www.wxvolunteer.com' : process.env.ROUTERSOFT_API_DOMAIN,
    // 'COOKIE_DOMAIN': cookieDomain,
    'BUILD_CODE': process.env.ROUTERSOFT_BUILDCODE === "undefined" ? '' : process.env.ROUTERSOFT_BUILDCODE,
    'ENV': process.env.ROUTERSOFT_ENV === "undefined" ? 'dev' : process.env.ROUTERSOFT_ENV,
    'DEBUG': false,
    'DEV': false,
    // 'DOMAIN': '.routersoft.cn',
    // 'LOGIN_URL': 'http://login.routersoft.cn',
};

console.log('configconfigconfigconfigconfigconfig');
console.log(config);

export default config;
