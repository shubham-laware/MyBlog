import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    return (
        <div className='w-full'>
            <img src="/home_bg.jpg" alt="Img" 
            className='h-[100vh] w-full'
            />
        </div>
    )
}

export default Home
