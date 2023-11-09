import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// ADICIONAR USUARIO
export const addUser = (req, res) => {
    const q =
        "INSERT INTO users(`name`, `email`, `phone`, `date`) VALUES(?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.date,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso!");
    });
};

// ATUALIZAR USUARIO
export const updateUser = (req, res) => {
    const q =
        "UPDATE users SET `name` = ?, `email` = ?, `phone` = ?, `date` = ? WHERE `id` = ?";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone,
        req.body.date,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso!");
    });
};

// DELETAR USUARIO
export const deleteUser = (req, res) => {
    const q = "DELETE FROM users WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso!");
    });
};
