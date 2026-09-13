'use client'

import { columns, ProductType } from "./columns"
import { DataTable } from "./data-table"
import useSWR from "swr"

const fetcher = (url: string)=> fetch(url)
  .then((res)=> res.json())
  .then((data: ProductType[])=> data)

export default function ProductDataTable() {
  const {data, error, isLoading} = useSWR("https:fakestoreapi.com/products", fetcher);
  console.log(`=> Data: ${data}`);

  if(error) return <div style={{fontWeight:'bold', fontSize:'2em'}}>Failed to load.</div>
  if(isLoading) return <div style={{fontWeight:'bold', fontSize:'2em'}}>Loading...</div>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data as ProductType[]} />
    </div>
  )
}