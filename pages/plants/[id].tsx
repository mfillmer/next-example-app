import { useRouter } from 'next/router'
import React from 'react'

const View = () => {
  const { query } = useRouter()
  return <div>View {JSON.stringify(query)}</div>
}

export default View
