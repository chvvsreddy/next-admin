import React from 'react'
import Card from '../ui/dashboard/Card'
import Transactions from '../ui/dashboard/Transactions'
import Chart from '../ui/dashboard/Chart'
import RightBar from '../ui/dashboard/RightBar'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <div className="flex flex-row gap-4">
        <div className="basis-3/4 gap-4">
          <div className='columns-3'>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <Transactions />
          <Chart/>
        </div>       
        <div className="basis-1/4">
          <RightBar/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard