export const state = () => ({
  counter: 1,
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    // let auth = null
    // let user = null
    // const output = {}
    // if (req.headers.cookie) {
    //   // cookie found
    //   try {
    //     // check data user login with cookie

    //     await req.headers.cookie.split(/\s*;\s*/).forEach(function (pair) {
    //       pair = pair.split(/\s*=\s*/)
    //       output[pair[0]] = pair.splice(1).join('=')
    //     })
    //     if (output['auth._token.local']) {
    //       if (output['auth._token.local'] === 'false') {
    //         auth = false
    //         user = null
    //       } else {
    //         auth = true
    //         if (output['auth.user']) {
    //           user = JSON.parse(decodeURIComponent(output['auth.user']))
    //         }
    //       }
    //     } else {
    //       auth = false
    //       user = null
    //     }
    //   } catch (err) {
    //     // No valid cookie found
    //     auth = null
    //     user = null
    //   }
    // }
    // commit('SET_AUTH', { auth, user }) // set state auth
  },
}
