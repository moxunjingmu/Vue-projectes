import $ from 'jquery'
import './css/index.css'
import './css/indesm.less'

$(() => {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', '#8b1623')
})