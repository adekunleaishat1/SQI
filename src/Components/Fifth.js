import './Landing.css'
import React from 'react'

const Fifth = () => {
    return (
        <>
            <div className='fifcont'>
                <div className='fifco'>
                    <div className='leftdiv'>
                        <div className='topcont'>
                            <h1 className='top'>Our Top Courses</h1>
                            <p className='look'>Take a look at some of our popular courses</p>
                            <div className='vieww'>
                                <a className='view'>View all courses</a><i className='fa fa-angle-right'></i>
                            </div>
                        </div>
                        <div className='secont'>
                           <div className='softdiv'>
                              <div className='imdiv'>
                                <img className='softimg' src={require('./software-engineering-630x330-1.webp')} alt="" />
                              </div>
                              <div className='texdiv'>
                                 <h1 className='ware'>Software Engineering</h1>
                                 <p className='engi'>Software Engineering is one of the most in-demand jobs across the globe today.</p>
                                 <p className='engi'>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
                                 <div className='w-100  mt-5'>
                                   <a className='amore' href="#">Learn More</a>
                                   <i className='fa fa-angle-right'></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className='thidcont'>
                           <div className='softdiv'>
                              <div className='imdiv'>
                                <img className='softimg' src={require('./product.webp')} alt="" />
                              </div>
                              <div className='texdiv'>
                                 <h1 className='ware'>UI/UX – Product Design</h1>
                                 <p className='engi'>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
                                 <p className='engi'>Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
                                 <div className='w-100  mt-5 pt-3'>
                                   <a className='amore' href="#">Learn More</a>
                                   <i className='fa fa-angle-right'></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                    </div>
                    <div className='rightdiv'>
                       <div className='fotcont'>
                           <div className='softdiv'>
                              <div className='imdiv'>
                                <img className='softimg' src={require('./DATA-SQI.webp')} alt="" />
                              </div>
                              <div className='texdiv'>
                                 <h1 className='ware'>Data Science & Analysis</h1>
                                 <p className='engi'>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
                                 <p className='engi'>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
                                 <div className='w-100 mt-5 pt-5'>
                                   <a className='amore' href="#">Learn More</a>
                                   <i className='fa fa-angle-right'></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className='ficont'>
                           <div className='sofdiv'>
                              <div className='imgdiv'>
                                <img className='fiimg' src={require('./digital-literacy.webp')} alt="" />
                              </div>
                              <div className='tediv'>
                                 <h1 className='ware'>Digital Literacy</h1>
                                 <p className='engi'>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
                                 <p className='engi'>Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
                                 <div className='w-100  mt-5'>
                                   <a className='amore' href="#">Learn More</a>
                                   <i className='fa fa-angle-right'></i>
                                 </div>
                              </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fifth