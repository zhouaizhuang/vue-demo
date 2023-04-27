const clickoutsideContext = '@@clickoutsideContext';
export const outside = {
    bind(el, binding, vnode) {
        console.log(el);
        const documentHandler = (e) => {
            if (vnode.context && el !== e.target && !el.contains(e.target)) {
                vnode.context[el[clickoutsideContext].methodName]();
            }
        };
        el[clickoutsideContext] = {
            documentHandler,
            methodName: binding.expression,
            arg: binding.arg || 'click',
        };
        document.addEventListener(el[clickoutsideContext].arg, documentHandler, false);
    },
    update(el, binding) {
        el[clickoutsideContext].methodName = binding.expression;
    },
    unbind(el) {
        document.removeEventListener(
            el[clickoutsideContext].arg,
            el[clickoutsideContext].documentHandler);
    },
    install(Vue) {
        Vue.directive('clickoutside', {
            bind: this.bind,
            unbind: this.unbind,
        });
    },
};