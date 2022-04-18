import Image0 from '../public/0.jpg'

function PetsPage() {
  return (
    <>
      <div>
        {['1', '2', '3', '4'].map((path) => {
          return <div key={path}>pets</div>
        })}
      </div>
    </>
  )
}

export default PetsPage
