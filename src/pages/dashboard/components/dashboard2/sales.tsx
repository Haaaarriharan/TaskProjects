import { Line } from 'react-chartjs-2'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: '',
      data: [2, 11, 3, 20],
      borderColor: '#4880FF',
    },
    {
      label: 'Sales Analytics',
      data: [33, 25, 35, 51],
      fill: true,
      borderColor: '#00B69B',
    },
  ],
}

const options: any = {
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false, // Disable grid lines on x-axis
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

export default function Sales() {
  return (
    <div className='mt-4 w-[100%]'>
      <Line data={data} options={options} />
    </div>
  )
}
