import Image from 'next/image'
import Image0 from '../public/0.jpg'

function PetsPage() {
  return (
    <>
      <div>
        <Image
          src={Image0}
          alt='image of pets'
          width={'280'}
          height='280'
          placeholder='blur'
        />
        {['1', '2', '3', '4'].map((path) => {
          return (
            <div key={path}>
              <Image
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
