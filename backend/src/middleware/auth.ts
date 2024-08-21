// Authentication Process:
// 1. User enters their details like name, password, and email in a form.
// 2. When the form is submitted, it sends the details to our server.
// 3. On the server, we securely save the user's details in our database after encrypting the password.
// 4. We then create a special token that proves the user is who they say they are. This token is sent back to the browser along with a special code called a cookie.
// 5. The browser keeps the token safely stored.
// 6. When the user wants to access restricted parts of the website, like adding or editing tours, the browser sends the token along with the request to the server.
// 7. We use a cookie to store the token because it's secure and can only be read by the server.

import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// Déclaration pour étendre l'interface Request du module Express
declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}


// Middleware(fct qui s'exécute entre la réception d'une requête et l'envoi d'une réponse) pour vérifier le token d'authentification
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
   // Récupère le token d'authentification à partir des cookies de la requête
  const token = req.cookies["auth_token"];
  // Vérifie si le token n'est pas présent
  if (!token) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
     // Verifies the validity of the token using the JWT secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    // Extrait l'id du user à partir des informations décodées du token
    req.userId = (decoded as JwtPayload).userId;
    // Calls the next function in the middleware chain
    next();
  } catch (error) {
    return res.status(401).json({ message: "unauthorized" });
  }
};

export default verifyToken;// Exporte la fonction verifyToken comme middleware
