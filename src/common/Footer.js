import React from 'react';
import Logo from '../asset/Logo_small.svg';
import DigitalSchemdia from '../asset/Digitalschmiede_Logo.svg';
// import DigitalSchemdia from '../../asset/Digitalschmiede_Logo.svg';
import { useNavigate } from 'react-router-dom';

/* Footer component is a reusable component for all the pages in the app */
const Footer = () => {
	// let navigate = useNavigate();
	return (
		<div className='bg-[#E7E5DF] h-auto'>
			<div className='flex flex-row justify-between items-center px-[20px] md:px-[160px]'>
				<img
					src={Logo}
					alt='logo'
					className='w-24 h-20 cursor-pointer'
				/>
				<div className='flex flex-row'>
					<p
						className="pb-0 font-['Poppins'] not-italic font-medium text-[8px] leading-[100%]
                    flex items-center">
						Made by
					</p>
					<img
						src={DigitalSchemdia}
						alt='logo'
						className='w-20 h-20'
					/>
				</div>
			</div>
			<div className='flex flex-row justify-between pb-2 px-[20px] md:hidden'>
				<p
					className="font-['Poppins'] not-italic font-normal text-[10px] leading-[100%]
                    flex items-center cursor-pointer">
					Legal notice
				</p>

				<p
					className="font-['Poppins'] not-italic font-normal text-[10px] leading-[100%]
                    flex items-center cursor-pointer">
					Data Privacy
				</p>

				<a
					href='https://www.digital-schemdia.com'
					className="font-['Poppins'] not-italic font-medium text-[10px] leading-[100%]
                    flex items-center text-blue-700">
					zuperpaws@gmail.com
				</a>
			</div>
			<div className='hidden md:flex md:flex-row md:justify-between md:px-[160px] md:pb-4'>
				<div className='md:flex md:flex-row md:justify-start md:space-x-4'>
					<p
						className="font-['Poppins'] not-italic font-normal text-[10px] leading-[100%]
                    flex items-center cursor-pointer">
						Legal notice
					</p>

					<p
						className="font-['Poppins'] not-italic font-normal text-[10px] leading-[100%]
                    flex items-center cursor-pointer">
						Data Privacy
					</p>
				</div>

				<a
					href='https://www.digital-schemdia.com'
					className="font-['Poppins'] not-italic font-medium text-[10px] leading-[100%]
                    flex items-center text-blue-700">
					zuperpaws@gmail.com
				</a>
			</div>
		</div>
	);
};

export default Footer;
