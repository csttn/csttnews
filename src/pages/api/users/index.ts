import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "cleyton" },
    { id: 2, name: "Sabrina" },
    { id: 3, name: "TEste" },
  ];

  return response.json(users);
};
