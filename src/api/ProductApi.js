'use strict'
/* eslint-disable no-unused-vars */
import { Request } from '../request'
import queryString from 'query-string'
import _ from 'lodash'

const model = 'product'

export class Product extends Request {
  constructor (params) {
    params.model = model
    super(params)
  }
  /**
  * PUT /v1/product/drop [PRIVATE]
  *
  * Drop products database
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  drop (body, callback) {
    let params = {url: '/v1/product/drop', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/product/getBySku/{sku} [PRIVATE]
  *
  * Get product by sku
  *
  * @param  {Object} params
  * - @param  {String} sku * -> (In path) Product SKU
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getBySku (params, callback) {
    this.get('/v1/product/getBySku/' + params['sku'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * GET /v1/product/getSkus/{skus} [PRIVATE]
  *
  * Get array products by SKU
  *
  * @param  {Object} params
  * - @param  {String} skus * -> (In path) Products SKU list concatenate with ','
  * @param  {Function} callback
  * @return {Code} 200, 400
  */
  getSkus (params, callback) {
    this.get('/v1/product/getSkus/' + params['skus'], (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
  /**
  * PUT /v1/product/sync [PUBLIC]
  *
  * Sync products from external database
  *
  * @param  {Function} callback
  * @return {Code} 200, 400, 403
  */
  sync (body, callback) {
    let params = {url: '/v1/product/sync', body}
    this.put(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data)
    })
  }
}
