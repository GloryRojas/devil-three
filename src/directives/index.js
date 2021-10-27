import Vue from 'vue';

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

Vue.directive('diablo', {
  bind (el, binding) {
    const color = {
      bone: '#e8dcc2',
      white: '#ffffff'
    }

    el.style.fontFamily = 'DiabloHeavy, sans-serif'

    const arg = binding.arg === 'bone' ? 'bone' : 'white'
    el.style.color = binding.arg === 'bone' ? color.bone : color.white

    if (Object.keys(binding.modifiers).length) {
      const value = binding.value || 1
      const borderExp = `${value}px solid ${color[arg]}`

      if (binding.modifiers.bottom) {
        el.style.borderBottom = borderExp
        el.style.paddingBottom = '10px'
      }
      if (binding.modifiers.top) {
        el.style.borderTop = borderExp
        el.style.paddingTop = '10px'
      }
    }
  }
})
