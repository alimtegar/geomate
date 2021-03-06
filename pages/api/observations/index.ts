import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// Types
import type { NextApiRequest, NextApiResponse } from 'next';

// GET /api/observations
// POST /api/observations
// Required fields in body: shapeCode
const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (session) {
        switch (req.method) {
            case 'GET':
                const observations = await prisma.observation.findMany({
                    where: { user: { email: session.user?.email } },
                });

                res.json(observations);
                break;
            case 'POST':
                const { shapeCode } = req.body;

                const result = await prisma.observation.create({
                    data: {
                        shapeCode: shapeCode,
                        user: { connect: { email: session.user?.email as string } },
                    },
                });

                res.json(result);
                break;
            default:
                throw new Error(`The HTTP ${req.method} method is not supported at this route.`);
        }
    } else {
        res.status(401).send({ message: 'Unauthorized.' });
    }
};

export default handle;