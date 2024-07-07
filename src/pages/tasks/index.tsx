import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { tasks } from './data/tasks'
import Dashboard1 from '../dashboard/components/dashboard2'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Overview from '../dashboard/components/overview'
import Customer from '../dashboard/components/dashboard2/customer'
import Sales from '../dashboard/components/dashboard2/sales'
import Sliders from '../dashboard/components/sliders'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Tasks() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body
        style={{
          backgroundColor: '#F5F6FA',
        }}
      >
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <div className='w-[100%]'>
          <Card>
            <Dashboard1 />
          </Card>
        </div>
        <div className='mt-4 grid h-[200px] gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='rounded-md bg-white'>
            <Customer />
          </div>
          <div className='rounded-md bg-white'>
            <Sliders />
          </div>
          <div className='rounded-md bg-white'>
            <Sales />
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}
