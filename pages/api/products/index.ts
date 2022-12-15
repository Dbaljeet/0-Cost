import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import Papa from 'papaparse'
import { IProduct } from '../../../interfaces'

type Data = { message: string } | IProduct[]

export default async function getProducts(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case 'POST' || 'PATCH' || 'DELETE':
      return response.status(400).json({
        message: 'Bad request',
      })
  }

  return axios
    .get(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQO3xqAdq38n7HxaKetjQvL-nHZw4sxWNILrvVAD1W7LSwU4YnrnrpwdcpMzVjnobbMkHk3r11dQ9Ne/pub?output=csv',
      {
        responseType: 'blob',
      }
    )
    .then((res) => {
      new Promise<IProduct[]>((resolve, reject) => {
        Papa.parse(res.data, {
          header: true,
          complete: (results) => {
            resolve(results.data as IProduct[])
          },
          error: (error) => {
            reject(error)
          },
        })
      })
        .then((results) => {
          const products = results.map((product) => ({
            ...product,
            price: Number(product.price),
          }))
          response.status(200).json(products as IProduct[])
        })
        .catch((error) =>
          response
            .status(400)
            .json({ message: 'error obteniendo los productos' })
        )
    })
}
