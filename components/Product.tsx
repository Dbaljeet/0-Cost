import { FC, useState } from 'react'
import { IProduct } from '../interfaces'
import { Modal } from './ui'

interface Props {
  product: IProduct
}

export const Product: FC<Props> = ({ product }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="m-auto">
        <button
          type="button"
          onClick={() => {
            document.body.style.overflow = 'hidden'
            setOpen(true)
          }}
        >
          <div className="m-auto w-72 h-96 min-w-300px p-10 bg-slate-50 rounded-lg flex flex-col items-center justify-around object-cover hover:bg-slate-300 cursor-pointer">
            <h2 className="p-5">{product.title}</h2>
            <img className="h-60" src={product.image} alt={product.title} />
          </div>
        </button>
        {open && <Modal product={product} open={open} setOpen={setOpen} />}
      </div>
    </>
  )
}
