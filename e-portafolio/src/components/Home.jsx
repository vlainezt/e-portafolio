import React from 'react';
import { Principal } from './Principal';
import { About } from './About';
import { Services } from './Services/Services';
import { Skills } from './Skills/Skills';

export const Home = () => {

    return (
        <div>
            <Principal></Principal>
            <About></About>
            <Services></Services>
            <Skills></Skills>
        </div>
    )
}