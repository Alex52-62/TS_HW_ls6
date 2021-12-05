import { renderBlock } from './lib.js'

export function renderUserBlock (_name:string, _avatar:string, _favoriteItemsAmount?:number): void {
  const favoritesCaption = (localStorage['favoriteItemsAmount'] > 0) ? localStorage['favoriteItemsAmount'] : 'ничего нет'
  const hasFavoriteItems = localStorage['favoriteItemsAmount'] > 0 ? true : false
 
  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="/img/${localStorage['avatar']}.png" alt="Tom Cruise" />
      <div class="info">
          <p class="name">${localStorage['name']}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}


