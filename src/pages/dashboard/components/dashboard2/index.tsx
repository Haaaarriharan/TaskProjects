import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Line } from 'react-chartjs-2'

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'july',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Sales',
      data: [33, 53, 85, 41, 44, 65, 33, 53, 20, 41, 44, 65],
      fill: true,
      backgroundColor: '#DBA5FF',
      borderColor: '#DBA5FF',
    },
    {
      label: 'Profit',
      data: [33, 25, 35, 51, 54, 76, 33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: '#FF8F6D',
      borderColor: '#FF8F6D',
    },
  ],
}

const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false, // Disable grid lines on x-axis
        },
      },
    ],
  },
}

export default function Dashboard1() {
  return (
    <div className='w-[100%]'>
      <div className='mb-2 flex items-center justify-between space-y-2  px-3 pt-1'>
        <h1 className='text-xl font-bold tracking-tight'>Revenue</h1>

        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a Month' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value='apple'>Jan</SelectItem>
              <SelectItem value='banana'>Feb</SelectItem>
              <SelectItem value='blueberry'>Mar</SelectItem>
              <SelectItem value='grapes'>Apr</SelectItem>
              <SelectItem value='pineapple'>May</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Line data={data} options={options} />
    </div>
  )
}
