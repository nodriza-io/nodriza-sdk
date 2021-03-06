'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'quote'

export class Quote extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/quote/changeStatus [PRIVATE]
  *
  * Change quote status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a55470ce6519c07837bfa12
  * - @param  {String} status * -> (In Body)  e.g Accepted
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  changeStatus (body, callback) {
    let params = {url: '/v1/quote/changeStatus', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * POST /v1/quote/generateInvoice [PRIVATE]
  *
  * Generate Invoice from quote
  *
  * @param  {Object} params
  * - @param  {String} quoteId * -> (In Body)  e.g 5a5e5c5c321c3f05a1b7fce5
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  generateInvoice (body, callback) {
    let params = {url: '/v1/quote/generateInvoice', body}
    this.post(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/quote/starred [PRIVATE]
  *
  * Change starred status
  *
  * @param  {Object} params
  * - @param  {String} id * -> (In Body)  e.g 5a6a8feb3ac1f301fddd3950
  * - @param  {String} status * -> (In Body)  e.g true
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  starred (body, callback) {
    let params = {url: '/v1/quote/starred', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
