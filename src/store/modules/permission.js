import {
    errorRoutes,
    testRoutes
} from '@/router';

export default {
    state: {
        accessRoutes: [],
    },

    mutations: {
        SET_ACCESS_ROUTES: (state, routes) => {
            state.accessRoutes = routes;
        }
    },

    actions: {
        async GenerateRoutes({
            commit,
            rootState
        }) {
            let routes;
            routes = [...testRoutes, ...errorRoutes];
            commit('SET_ACCESS_ROUTES', routes);
            return routes;
        }
    }
};
