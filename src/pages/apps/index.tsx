import { useState } from 'react'
import { Layout } from '@/components/custom/layout'
import { Input } from '@/components/ui/input'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { apps } from './data'
import {
  CirclePlus,
  ImageUp,
  Inbox,
  Pencil,
  Send,
  ShieldAlert,
  Star,
  Trash2,
} from 'lucide-react'
import Plus from '@/assets/plus'
import { Checkbox } from '@/components/ui/checkbox'
import img1 from '../../assets/slider/Other Action.svg'

const appText = new Map<string, string>([
  ['all', 'All Apps'],
  ['connected', 'Connected'],
  ['notConnected', 'Not Connected'],
])

export default function Apps() {
  const [sort, setSort] = useState('ascending')
  const [appType, setAppType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredApps = apps
    .sort((a, b) =>
      sort === 'ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((app) =>
      appType === 'connected'
        ? app.connected
        : appType === 'notConnected'
          ? !app.connected
          : true
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const categories = [
    { id: 1, name: 'Inbox', icon: <Inbox />, count: 100 },
    { id: 2, name: 'Star  red', icon: <Star />, count: 300 },
    { id: 3, name: 'Sent', icon: <Send />, count: 1000 },
    { id: 4, name: 'Draft', icon: <Pencil />, count: 20 },
    { id: 5, name: 'Spam', icon: <ShieldAlert />, count: 30 },
    { id: 6, name: 'Important', icon: <ImageUp />, count: 40 },
    { id: 7, name: 'Bin', icon: <Trash2 />, count: 50 },
  ]

  let newColor = [
    '#D456FD',
    '#5A8CFF',
    '#00B69B',
    '#D456FD',
    '#5A8CFF',
    '#00B69B',
    '#D456FD',
    '#5A8CFF',
    '#00B69B',
    '#FF8743',
    '#5A8CFF',
    '#00B69B',
  ]

  return (
    <Layout fixed>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <div className='flex w-full items-center justify-between'>
          <Search />
          <div className='flex items-center space-x-4'>
            <ThemeSwitch />
            <UserNav />
          </div>
        </div>
      </Layout.Header>

      {/* ===== Content ===== */}
      <Layout.Body
        className='flex flex-col'
        style={{
          backgroundColor: '#F5F6FA',
          overflowY: 'scroll',
          minWidth: '900px',
        }}
      >
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Inbox</h1>
        </div>
        <main className='flex flex-row gap-4'>
          <div className='gap flex w-[30%]  flex-col rounded-md bg-white'>
            <div className='flex items-center justify-center'>
              <button
                style={{
                  backgroundColor: '#4880FF',
                  color: 'white',
                  borderRadius: '5px',
                  padding: '7px',
                  width: '90%',
                  fontWeight: 'bold',
                  marginTop: '5px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Plus />
                Compose
              </button>
            </div>
            <h1
              className='mt-5 font-bold'
              style={{
                // display: 'flex',
                alignItems: 'start',
                padding: '10px',
              }}
            >
              My Email
            </h1>
            {categories.map((a) => {
              return (
                <div className='flex flex-row justify-between p-3 hover:bg-gray-200 hover:text-blue-700'>
                  <main className='flex flex-row '>
                    <div className='ml-5'>{a.icon}</div>
                    <div className='ml-5'>{a.name}</div>
                  </main>
                  <div
                    className='mr-5'
                    style={{
                      color: '#b3a8af',
                    }}
                  >
                    {a.count}
                  </div>
                </div>
              )
            })}
            <h1
              className='mt-5 font-bold'
              style={{
                // display: 'flex',
                alignItems: 'start',
                padding: '10px',
              }}
            >
              Label
            </h1>
            <div className='flex flex-col justify-between '>
              <main className='flex flex-row p-3'>
                <Checkbox id='terms' className='ml-5 mt-1' />
                <p className='ml-5'>Primary</p>
              </main>{' '}
              <main className='flex flex-row p-3'>
                <Checkbox id='terms' className='ml-5 mt-1' />
                <p className='ml-5'>Social</p>
              </main>{' '}
              <main className='flex flex-row p-3'>
                <Checkbox id='terms' className='ml-5 mt-1' />
                <p className='ml-5'>Work</p>
              </main>{' '}
              <main className='flex flex-row p-3'>
                <Checkbox id='terms' className='ml-5 mt-1' />
                <p className='ml-5'>Friends</p>
              </main>
            </div>
            <main className='flex flex-row p-3'>
              <CirclePlus className='ml-5' />
              <p className='ml-5'>Create New Label</p>
            </main>{' '}
          </div>
          <div className='flex w-[70%] flex-col  rounded-md bg-white'>
            <div className='m-3 flex justify-between'>
              <Input
                type='search'
                placeholder='Search...'
                className=' md:w-[100px] lg:w-[200px]'
                style={{
                  backgroundColor: '#F5F6FA',
                  borderRadius: '10px',
                }}
              />
              <img src={img1} alt='' className='cursor-pointer' />
            </div>
            <div className='m-3'>
              <main className='grid grid-cols-12 gap-2'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a, i) => {
                  return (
                    <>
                      <Checkbox id='terms' className='mt-4 items-center' />
                      <Star className='mt-3' />
                      <p className='mt-3 items-center font-semibold'>hari</p>
                      <button
                        className='col-span-2 '
                        style={{
                          backgroundColor: `${newColor[i]}`,
                          margin: '10px',
                          color: 'white',
                          borderRadius: '5px',
                          fontWeight: 'bold',
                          fontSize: '10px',
                        }}
                      >
                        Get Started
                      </button>
                      <p className='col-span-6'>
                        Our Bachelor of Commerce program is ACBSP-accredited.
                      </p>
                      <p>8.38 AM</p>
                    </>
                  )
                })}
              </main>
            </div>
          </div>
        </main>
      </Layout.Body>
    </Layout>
  )
}
