echo "##### npm to taobao"

sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

echo "##### show baseinfo"
npm -v
ls

echo "##### cnpm install --save"
cnpm install

echo '##### set system env'
export ROUTERSOFT_API_DOMAIN="http://api.jsvolunteer.org"
export ROUTERSOFT_ENV="release"
# export ROUTERSOFT_COOKIE_DOMAIN=""
export ROUTERSOFT_BUILDCODE="v-$BUILD_VERSION"

echo '##### print nodejs env'
node ci-build/envShow.js

echo "##### cnpm build"
cnpm run build