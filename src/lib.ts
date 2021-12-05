export function renderBlock (elementId: string, html: string ) {
  const element = document.getElementById(elementId)
  Object(element).innerHTML = html
}

export function renderToast (message: { text: string; type: string } | null, action: { name: string; handler: Function }) {
  let messageText = ''
  
  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }
  
  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, action)
    }
  }
}

export function getUserData (_name: unknown, _avatar: unknown) {
  localStorage.getItem('name')
  localStorage.getItem('avatar')
}

export function getFavoritesAmount (_favoriteItemsAmount: unknown) {
  localStorage.getItem('favoriteItemsAmount')
}

export interface ISearchFormData {
  maxPrice: string | HTMLElement
}

export interface IPlace {
  (place?: string [], error?: Error): void
}

export const callback: IPlace = (place, error) => {
    let choice = Math.round(Math.random())
    place = []
    if  (error == null && place != null && choice == 0) {
      console.log(place)
    } else {
      console.error('Fail')
      throw Error('Error!')
    }
    return Promise.resolve(place)
  }

export function delayedFunc (callback: IPlace){
  setTimeout(() => callback(),300)
}

export function search (maxPrice: null | HTMLElement, inDate: null | HTMLElement, outDate: null | HTMLElement, _delayedFunc: void) {
  const btn = document.querySelector('button')
  maxPrice = document.getElementById('max-price')
  inDate = document.getElementById('check-in-date')
  outDate = document.getElementById('check-out-date')
  Object(btn).onclick = function (e: { preventDefault: () => void }) {
    e.preventDefault()
    console.log(Object(maxPrice).value)
    console.log(Object(inDate).value)
    console.log(Object(outDate).value)
  }
}
