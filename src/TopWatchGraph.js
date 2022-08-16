import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import './TopWatchGraph.css'


const TopWatchGraph = () => {

    // Sample data
    const data = [
        { name: 'Jithin', students: 400 },
        { name: 'Casper', students: 700 },
        { name: 'Dmitry', students: 200 },
        { name: 'Joshua', students: 1000 }
    ];


    return (
        <div className='TopWatchGraph'>
            <BarChart width={300} height={300} data={data}>
                <Bar dataKey="students" fill="lightgreen" />
                <XAxis dataKey="name" />
                <YAxis />
            </BarChart>
        </div>
    );
}

export default TopWatchGraph;
