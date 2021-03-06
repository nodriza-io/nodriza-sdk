'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'snippet'

export class Snippet extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/snippet/updateSnippetSku [PRIVATE]
  *
  * Add sku key to snippet
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5bd33c5402961c005484340d
  * - @param  {String} sku * -> (In Body)  e.g product-one
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  updateSnippetSku (body, callback) {
    let params = {url: '/v1/snippet/updateSnippetSku', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
