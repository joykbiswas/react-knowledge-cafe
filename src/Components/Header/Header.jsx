import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='md:flex justify-between p-4 border-b-2 flex max-w-7xl mx-auto'>
            <h1 className="text-5xl font-bold">Knowledge cafe</h1>
            <img src={profile} alt="" />
            
        </div>
        
    );
};

export default Header;