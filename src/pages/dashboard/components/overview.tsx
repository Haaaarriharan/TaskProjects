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

const Overview = () => {
  const data = {
    labels: [
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
    ],
    datasets: [
      {
        label: '',
        data: [2, 11, 3, 20, 2, 10, 1, 15, 4, 20, 10, 29],
        borderColor: '#4880FF',
        backgroundColor: '#e1eafc',
        pointBorderColor: '#AAA',
        pointBackgroundColor: '#FEF1F1',
      },
    ],
  }

  const options: any = {
    title: {
      display: true,
      text: 'Sales Overview',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
            stepSize: 3,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false, // Disable grid lines on x-axis
          },
        },
      ],
    },
  }
  return (
    <>
      <div className='flex flex-row justify-between px-3 pt-1'>
        <h1 className='text-xl font-bold tracking-tight'>Sales Details</h1>
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
    </>
  )
}

export default Overview
