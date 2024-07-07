import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import img1 from '../../../../assets/slider/imgwatch1.jpg'
import img3 from '../../../../assets/slider/imgwatch3.jpeg'
import img4 from '../../../../assets/slider/imgwatch3.jpg'

function Sliders() {
  return (
    <AwesomeSlider bullets={false} style={{}}>
      <div
        className='flex h-[100%] w-[100%] flex-col
       items-center justify-center bg-white'
      >
        <img
          src={img1}
          alt=''
          className='h-[70%] w-[60%] bg-white'
          style={{
            borderRadius: '5px',
          }}
        />
        <div>
          <h1>Beats Headphone 2019</h1>
          <p
            style={{
              color: '#4880FF',
            }}
          >
            $89.00
          </p>
        </div>
      </div>
      <div
        className='flex h-[100%] w-[100%] flex-col
       items-center justify-center bg-white'
      >
        <img src={img4} alt='' className='h-[70%] w-[60%] bg-white' />
        <div>
          <h1>Beats Headphone 2019</h1>
          <p
            style={{
              color: '#4880FF',
            }}
          >
            $89.00
          </p>
        </div>
      </div>
      <div
        className='flex h-[100%] w-[100%] flex-col
       items-center justify-center bg-white'
      >
        <img src={img3} alt='' className='h-[70%] w-[60%] bg-white' />
        <div>
          <h1>Beats Headphone 2019</h1>
          <p
            style={{
              color: '#4880FF',
            }}
          >
            $89.00
          </p>
        </div>
      </div>
    </AwesomeSlider>
  )
}

export default Sliders
