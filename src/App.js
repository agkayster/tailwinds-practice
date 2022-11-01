import './App.css';
import Footer from './common/Footer';

function App() {
	return (
		<>
			<div className='App h-screen'>
				<div className='flex flex-col justify-center items-center space-y-4 md:flex md:flex-row md:justify-evenly md:items-center'>
					<h1 className='mt-4'>This is me learning tailwinds well</h1>
					<div className='flex flex-col justify-center items-center space-y-4'>
						<div className='w-72 h-72 border-2 bg-red-400'></div>
						<button
							type='submit'
							className='border w-[343px] h-[56px] rounded-3xl bg-orange-500'>
							Submit
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
