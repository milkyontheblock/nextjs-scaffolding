import type { NextApiRequest, NextApiResponse } from "next";
import createAuthService from '@/server/services/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(500).json({ error: 'InvalidMethod' })
    }

    const { login } = createAuthService({ domain: 'api.thecloud1s.com' })
    const { usernameOrEmail, password } = req.body

    const response = await login({ usernameOrEmail, password })

    return res.status(200).json(response)
  } catch(err) {
    return res.status(500).json({
      error: err
    })
  }
}
