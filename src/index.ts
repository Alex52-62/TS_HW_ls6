import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { callback, delayedFunc, renderToast } from './lib.js'
import { getUserData } from './lib.js'
import { getFavoritesAmount } from './lib.js'
import { search } from './lib.js'

  window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('Alfred Hitchcock', 'avatar2', 2) 
    localStorage.setItem('name','Alfred Hitchcock')
    localStorage.setItem('avatar','avatar2')
    localStorage.setItem('favoriteItemsAmount','2')
    getUserData ('Alfred Hitchcock', 'avatar2') 
    getFavoritesAmount (2)
        
    renderSearchFormBlock( '')
    search (null, null ,null, delayedFunc(callback))
    renderSearchStubBlock()
    renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    )
  });


