import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import profile from '@/components/profile/profile'
import foo from '@/components/profile/foo'
import namedView from '@/components/namedViews/namedViews'
import filter from '@/components/filter/filter'
import directive from '@/directives/directive'
import Vuelidate from 'vuelidate'

//console.log(filter);

Vue.use(Vuelidate)
Vue.use(Router)

Vue.directive('background', {
  bind(el, binding, vnode) {
    console.log(binding)
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    var delayed = 0;

    if(binding.modifiers['delayed']) {
      delayed = 3000;
    }

    setTimeout(()=>{
      if(binding.arg == "background") {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delayed)
    
  }
})


const Too = { template: '<div>Too</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/profile/:id',
      component: profile,
      props: true,
      children: [{
          path: 'foo',
          component: foo
        }
      ]
    },
    {
      path: '/view',
      component: namedView,
      children: [
        {
          path: 'too',
          components: {
            default: Too,
            a : Bar,
            b: Baz
          }
        }, {
          path: 'baz',
          components: {
            default: Baz,
            a : Too,
            b: Bar
          }
        }
      ]
    },
    {
      path: '/filter',
      component: filter
    },
    {
      path: '/directive',
      component: directive
    }
  ]
})
