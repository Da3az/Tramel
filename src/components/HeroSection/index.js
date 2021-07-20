import React from 'react'
import Button  from '../Button'
import {Hero,HeroTitle,HeroDescription} from './HeroSectionElements.js'
import Form  from '../Form/index'

export default function HeroSection({home}) {
     return (
        <Hero home={home} >
            {home ?
            <>  
                <HeroTitle>
                </HeroTitle>
                <HeroDescription>
                    Apply now
                </HeroDescription>
                <Button fontbig big primary >
                    Get Started
                </Button>
            </>
            :
                <Form />
            }
            
        </Hero>
    )
}
