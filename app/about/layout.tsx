import Link from "next/link";

type Props = {
    children: React.ReactNode;
};

const AboutLayout = ({children}: Props) => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/about/team">Team</Link>
                </li>
                <li>
                    <Link href="/about/contacts">Contacts</Link>
                </li>
            </ul>

            <div>
                {children}
            </div>
        </div>
    )
};

export default AboutLayout;
