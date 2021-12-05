import { renderBlock } from './lib.js'
import { ISearchFormData } from './lib.js'

export function renderSearchFormBlock (maxPrice: string ) {
  var maxPrice = ''
  var d = new Date();
  var m_inDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 1);

  class Datum implements ISearchFormData{
    maxPrice: string
    finalDate!: string | null;
    inDate: string
    outDate: string

    constructor ( inDate:string, outDate:string ) {
      this.maxPrice = maxPrice
      this.inDate = inDate
      this.outDate = outDate
      }

    }
    const datums: Datum[] | undefined = [ new Datum ( "2021-11-22", "2021-11-24" ),
                    new Datum ( "2022-12-28", "2022-12-30" ) ]

    var d2 = new Date("2022-12-28");

    var m_outDate = d2.getFullYear() + "-" + (d2.getMonth() + 1) + "-" + (d2.getDate() + 2);
    var last_date = new Date(d2);
    last_date.setUTCMonth(last_date.getUTCMonth() + 2);
    last_date.setUTCDate(0); 
    var finalDate = last_date.toJSON().substring(0, 10);
  
  
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${Object(datums[1]).inDate}" min="${m_inDate}" max="${finalDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${Object(datums[1]).outDate}" min="${m_outDate}" max="${finalDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="${maxPrice}" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
