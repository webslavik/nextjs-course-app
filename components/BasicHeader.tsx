import Link from 'next/link';

const BasicHeader = () => {
    return (
        <header>
            <Link href='/'>Home</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/about'>About</Link>
        </header>
    )
};

export default BasicHeader;
