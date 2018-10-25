const config = {
    'API_DOMAIN': process.env.ROUTERSOFT_API_DOMAIN === "undefined" ? 'http://mcp.api.test.routeryuncs.com' : process.env.ROUTERSOFT_API_DOMAIN,
    'USER_TOKEN': 'api-token'
};
export default config;
