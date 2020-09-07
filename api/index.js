import request from '../common/request.js'

export function getData(data) {
  return request.get('appv1/banner', data)
}