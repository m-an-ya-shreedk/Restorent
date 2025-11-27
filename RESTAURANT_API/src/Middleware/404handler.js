const handler404 = (err , req, res, next) => {
  const error = new Error(
    "The page/resource you are looking for does not exist!"
  );
  error.status = 404;
  next(error);
};

export default handler404;