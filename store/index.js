export const state = {
  token: "222222222222222",
};
export const actions = {
  nuxtServerInit(store) {
    console.log(store, "nuxtServerInit");
  },
};
