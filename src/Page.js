import React from 'react'
import img1 from './image/Screenshot_2022-11-01_11-12-59 (1).png'
export const Page = () => {
  return (
    <div className='page flex'>
        <div className='flex'>
            <div className='containt'>
                    <h2>Get Started with apptio Today</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo fugit delectus tenetur, provident facilis asperiores?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus iusto reiciendis adipisci at quos corporis?</p>
            </div>
            <div className='Signup'>
               <div className='flex'>
                    <div>
                       <input type="text" placeholder='first name' />
                    </div>
                    <div>
                        <input type="text" placeholder='last' />
                    </div>
                </div>
                <br />
            <div className='flex'>
                <div><input type="text" placeholder='work Email' /></div>
                <div><input type="text" placeholder='Phone' /></div>
            </div>
            <br />
            <div className='flex'>
                <div><input type="text" placeholder='Company' /></div>
                <div><input type="text" placeholder='Job Function' /></div>
            </div>
            <br />
            <div>
                <input type="number" placeholder='contry' />
            </div>
            <br />
            <div> <textarea name="" id="" cols="45" rows="6" placeholder='How can we help?'></textarea> </div>
            <br />
            <div className='startedButtonDiv' >
                 <button className='startedButton'>Get Started</button>
                </div>
            </div>
            </div>
            <div className='logo'>
                <button className='logobutton'><img src={img1} alt="" srcset="" /></button>
            </div>
        </div>
  
  )
}
