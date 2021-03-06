import { useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

// Components
// import Navbar from '../../components/Navbar';
import EvaluationAnswer from '../../components/EvaluationAnswer';

// Utils
import { round10, range } from '../../Utils';

// Types
import type { GetServerSideProps } from 'next';
import type ComponentWithAuth from '../../types/ComponentWithAuth';
import type { Prisma, Notification } from '@prisma/client';

type Evaluation = Prisma.EvaluationGetPayload<{
    include: {
        evaluationQuestions: {
            include: {
                question: {
                    include: {
                        answerChoices: true,
                    }
                },
            },
        },
    }
}>;

type Props = {
    evaluation: Evaluation,
    notifications: Notification[],
};

const EvaluationPage: ComponentWithAuth<Props> = ({ evaluation, notifications }) => {
    const showNotifications = () => {
        notifications.map((notification) => {
            toast.success(
                notification.title,
                {
                    toastId: notification.title,
                    onClose: () => {
                        readNotification(notification.id)
                    }
                },
            );
        });
    };

    const readNotification = async (notificationId: string) => {
        try {
            await fetch(`/api/notifications/${notificationId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    isRead: true,
                }),
            });
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(showNotifications, [notifications]);

    return (
        <main className="flex flex-col h-screen pb-20">
            {/* <Navbar title="Hasil Evaluasi" /> */}

            <section className="flex flex-col flex-grow justify-center items-center text-center px-8">
                <div className="rating rating-lg rating-half mb-6">
                    <input type="radio" name="rating-10" className="rating-hidden" checked={!evaluation.score} readOnly />
                    {range(10).map((i) => (
                        <input
                            type="radio"
                            name="rating-10"
                            className={
                                'bg-yellow-400 mask mask-star-2' +
                                ((i + 1) % 2 ? ' mask-half-1 ml-0.5' : ' mask-half-2 mr-0.5')
                            }
                            checked={(i + 1) === (round10(evaluation.score) / 10)}
                            readOnly
                            key={i}
                        />
                    ))}
                </div>

                <div className="mb-6 px-8">
                    <h1 className="font-bold text-6xl text-gray-800 mb-4">{round10(evaluation.score)}</h1>
                    <h2 className="font-medium text-gray-800 mb-2">Lorem Ipsum!</h2>
                    <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div>
                    <ol className="flex flex-wrap justify-center p-1">
                        {evaluation.evaluationQuestions.map((evaluationQuestion, i) => (
                            <li className="p-1" key={evaluationQuestion.question.id}>
                                <EvaluationAnswer isCorrect={evaluationQuestion.isCorrect || false} no={i + 1} />
                            </li>
                        ))}
                        {/* {range(7).map((i) => (
                            <li className="p-1" key={i}>
                                <EvaluationAnswer isCorrect={true} no={i + 4} />
                            </li>
                        ))} */}
                    </ol>
                </div>
            </section>

            <section className="fixed left-0 bottom-0 z-20 w-screen p-4">
                <Link href="/">
                    <button className="btn btn-primary w-full shadow">
                        Selesai
                    </button>
                </Link>
            </section>
        </main>
    );
};

EvaluationPage.auth = true;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers = context.req.headers;
    const id = context?.params?.id || null;

    let res;
    res = await fetch(`${process.env.NEXTAUTH_URL}/api/evaluations/${id}`, {
        headers: { 'Cookie': headers.cookie as string },
    });
    const evaluation = await res.json();

    res = await fetch(`${process.env.NEXTAUTH_URL}/api/notifications`, {
        headers: { 'Cookie': headers.cookie as string },
    });
    const notifications = await res.json();

    return { props: { evaluation, notifications } };
};

export default EvaluationPage;