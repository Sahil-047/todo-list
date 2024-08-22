



import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='flex flex-col min-h-screen'>
                <footer className='bg-black text-white mt-auto flex flex-col sm:flex-row justify-center items-center p-4'>
                    <div className='text-center sm:text-left'>
                        © All rights reserved 2024
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;


