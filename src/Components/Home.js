import React from 'react'
import CardProject from './CardProject';
import { links } from '../ProjectLinks/links'

function Home() {

    return (
        <>
            <div className='container'>
                <h2>Advanced Tutorial</h2>
                <br />
                <h4>React Course and projects from <a href="https://react-projects.netlify.app/">John Smilga</a></h4>

            </div>

            <div className="grid-container">

                {links.map((link, index) => {
                    const { id, url, text, image } = link;

                    return (
                        <div key={id} className='grid-items'>
                            <CardProject link={url} image={image} text={text} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Home