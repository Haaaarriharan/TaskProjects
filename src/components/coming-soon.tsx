import { IconPlanet } from '@tabler/icons-react'
import { Layout } from './custom/layout'
import ThemeSwitch from './theme-switch'
import { UserNav } from './user-nav'
import { Search } from './search'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import { Card } from './ui/card'
import Sliders from '@/pages/dashboard/components/sliders'
import img3 from '../assets/slider/Image.svg'
import NewSliders from '@/pages/dashboard/components/sliders/newSlider'

export default function ComingSoon() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body
        style={{
          backgroundColor: '#F5F6FA',
        }}
      >
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Product</h1>
        </div>

        <AwesomeSlider
          bullets={false}
          style={{}}
          className=' h-[60vh] w-[100%]'
        >
          <div
            className='flex h-[100%] w-[100%] flex-col
       items-center justify-center '
            style={{
              borderRadius: '5px',
              backgroundColor: '#4880FF',
            }}
          >
            <div>
              <h1
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                September 12-22
              </h1>
              <h1
                style={{
                  fontFamily: 'Nunito Sans, sans-serif',
                  fontSize: '37px',
                  lineHeight: '48px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Enjoy free home <br /> delivery in this summer
              </h1>
              <h1
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Designer Dresses - Pick from trendy Designer Dress.
              </h1>
              <button
                style={{
                  backgroundColor: '#FF8743',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '5px',
                  fontWeight: 'bold',
                  marginTop: '5px',
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </AwesomeSlider>

        <div className='mt-4 grid  h-[300px] gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <NewSliders />

          <NewSliders />

          <NewSliders />
        </div>
      </Layout.Body>
    </Layout>
  )
}
