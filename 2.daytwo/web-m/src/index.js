import $ from 'jquery'
import './css/index.css'
import './css/indesm.less'
import './css/mm.scss'

$(() => {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', '#8b1623')
})

class pa {
    static info = 'aaa'
}
console.log(pa.info);


import Vue from 'vue'
import App from './components/App.vue'
const vm = new Vue({
    el: '#app',
    render: a => a(App)
})