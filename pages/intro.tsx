import Image from 'next/image';

// Components
import Navbar from '../components/Navbar';

// Constants
import { INTROS } from '../Constants';

// Types
import type ComponentWithAuth from '../types/ComponentWithAuth';

const Intro: ComponentWithAuth = () => (
    <main>
        <Navbar.Top title="Pendahuluan" backHref="/" />

        <section className="grid grid-cols-1 gap-4 p-4">
            {INTROS.map((intro) => (
                <div className="collapse collapse-arrow bg-white rounded-xl shadow" key={intro.title}>
                    <input type="checkbox" />
                    <div className="collapse-title flex justify-start items-center">
                        <div className="relative h-10 w-10 mr-4">
                            <Image src="/images/intro.png" alt="KI/KD" layout="fill" />
                        </div>
                        <h2 className="font-medium text-gray-800">
                            {intro.title}
                        </h2>
                    </div>
                    <div className="collapse-content">
                        <table className="text-gray-500 text-sm mx-2">
                            <tbody>
                                {intro.contents.map((content) => (
                                    <tr className="align-top" key={content.no}>
                                        <td className="pr-4">
                                            {content.no}
                                        </td>
                                        <td>
                                            {content.content}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </section>
    </main>
);

Intro.auth = true;

export default Intro;