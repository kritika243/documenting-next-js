function PetsPage() {
  return (
    <>
      <div>
        {['1', '2', '3', '4'].map((path) => {
          return (
            <div key={path}>
              <img
                src={`/${path}.jpeg`}
                alt='pet image'
                width='280'
                height='280'
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PetsPage
