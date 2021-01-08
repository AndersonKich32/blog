
import React from 'react'
import Image from 'next/image'

function Home() {
    return(
        <div className='home'>
            <h1>Meu Blog pessoal sobre RH</h1>
            <p>Autor: Joice Kich</p>
            <Image
                src="/foto.jpg"
                alt="My Image"
                width={200}
                height={200}
            />
        </div>
    )
}

export default Home;