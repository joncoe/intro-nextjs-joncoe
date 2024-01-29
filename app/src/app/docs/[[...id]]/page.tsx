const DocsPage = ({ params }) => {
  console.log('🚀 params', params)
  return <div>docs + {params.id}</div>
}

export default DocsPage
