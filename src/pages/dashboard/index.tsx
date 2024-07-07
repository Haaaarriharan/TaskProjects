import { Layout } from '@/components/custom/layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from '@/components/search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ThemeSwitch from '@/components/theme-switch'
import img1 from '../../assets/dashboard/Icon1.svg'
import img2 from '../../assets/dashboard/Icon2.svg'
import img3 from '../../assets/dashboard/Icon3.svg'
import img4 from '../../assets/dashboard/Icon.svg'
import { UserNav } from '@/components/user-nav'
import Overview from './components/overview'
import { DataTable } from '../tasks/components/data-table'
import { columns } from '../tasks/components/columns'
import { tasks } from '../tasks/data/tasks'

export default function Dashboard() {
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
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle
                    className='text-sm font-medium'
                    style={{
                      color: '#636566',
                    }}
                  >
                    Total Revenue
                  </CardTitle>
                  <img src={img1} alt='' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>$45,231.89</div>
                  <p className='text-xs text-muted-foreground'>
                    <span
                      style={{
                        color: '#00B69B',
                      }}
                    >
                      +20.1%
                    </span>{' '}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle
                    className='text-sm font-medium'
                    style={{
                      color: '#636566',
                    }}
                  >
                    Subscriptions
                  </CardTitle>
                  <img src={img2} alt='' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+2350</div>
                  <p className='text-xs text-muted-foreground'>
                    <span
                      style={{
                        color: '#00B69B',
                      }}
                    >
                      +180.1%
                    </span>{' '}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle
                    className='text-sm font-medium'
                    style={{
                      color: '#636566',
                    }}
                  >
                    Sales
                  </CardTitle>
                  <img src={img3} alt='' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+12,234</div>
                  <p className='text-xs text-muted-foreground'>
                    <span
                      style={{
                        color: '#00B69B',
                      }}
                    >
                      +19%
                    </span>{' '}
                    from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle
                    className='text-sm font-medium'
                    style={{
                      color: '#636566',
                    }}
                  >
                    Active Now
                  </CardTitle>
                  <img src={img4} alt='' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>+573</div>
                  <p className='text-xs text-muted-foreground'>
                    <span
                      style={{
                        color: '#00B69B',
                      }}
                    >
                      +201%
                    </span>{' '}
                    since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1'>
              <Card className='col-span-1 p-1 lg:col-span-4'>
                <Overview />
              </Card>
              <Card className='col-span-1 mt-4 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Deals Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <DataTable data={tasks} columns={columns} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}
