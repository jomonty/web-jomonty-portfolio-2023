import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="container flex mx-auto justify-center py-8 font-Lato">
            <nav class="justify-center hidden md:block">
                <ul class="flex rounded-full p-1 px-3 border border-slate-200 shadow-md text-slate-700" >
                    <li ><Link to="/" class="relative block p-1 px-3 hover:text-emerald-600">Home</Link></li>
                    <li ><Link to="/about" class="relative block p-1 px-3 hover:text-emerald-600">About</Link></li>
                    <li ><Link to="/projects" class="relative block p-1 px-3 hover:text-emerald-600">Projects</Link></li>
                    <li ><Link to="/tech" class="relative block p-1 px-3 hover:text-emerald-600">Tech</Link></li>
                </ul>
            </nav>
        </header>
        // <h1 class="text-emerald-400 animate-pulse flex justify-center p-10">Arr, it's a header...</h1>
    )
}

export default Header;