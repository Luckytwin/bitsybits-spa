import Vue from 'vue'
import App from './App.vue'
import 'spectre.css'
import 'spectre.css/src/spectre-icons.scss'
import 'spectre.css/src/spectre-exp.scss'
import './fonts/index.css'
import 'highlight-lisp/themes/github.css'
import  HighlightLisp  from 'highlight-lisp/highlight-lisp.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
