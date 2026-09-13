import React from 'react'

export default async function ProductDetailPage({params} : {params : Promise<{slug:string}>}) {
    const {slug} = await params;
  return (
    <div>
      <h1> Product Slug : {slug}</h1>
    </div>
  )
}
