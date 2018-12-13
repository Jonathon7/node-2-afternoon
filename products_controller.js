const create = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, description, price, image_url } = req.body;
  dbInstance
    .create_product([name, description, price, image_url])
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
    });
};

const getOne = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { params } = req;

  dbInstance
    .read_product(params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
    });
};

const getAll = (req, res, next) => {
  const dbInstance = req.app.get("db");

  dbInstance
    .read_products()
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
    });
};

const update = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { params, query } = req;

  dbInstance
    .update_product([params.id, query.desc])
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
    });
};

const deleted = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { params } = req;

  dbInstance
    .delete_product(params.id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send({ errorMessage: "Something went wrong" });
    });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleted
};
