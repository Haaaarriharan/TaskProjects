import { Line } from 'react-chartjs-2'

const Customer = () => {
  const data = {
    labels: ['2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Customer',
        data: [2, 11, 3, 20],

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
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 20,
            stepSize: 5,
          },
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
  return (
    <>
      <Line data={data} options={options} />
    </>
  )
}

export default Customer
