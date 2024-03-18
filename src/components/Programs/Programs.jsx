import React from 'react'
import './programs.css'
import {programsData} from "../../data/programsData"
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
{/* Header */}
        <div className='programs-header'>
            <span className="stroke-text">Poznaj nasze</span>
            <span> wszystkie programy</span>
            <span className="stroke-text">aby się ukształtować</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Dołącz teraz</span>
                        <img src={RightArrow} />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs