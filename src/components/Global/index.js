const contexts = require.context("./", true, /index.vue$/);
const globalCompoents = {};
contexts.keys().forEach(key => {
    const component = contexts(key).default
    globalCompoents[component.name] = component
});
export default {
    install: (Vue) => {
        Object.keys(globalCompoents).forEach(key => {
            Vue.component(key, globalCompoents[key])
        })
    }
}