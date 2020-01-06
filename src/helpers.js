const compose = (...fns) => arg => {
  return fns.reduceRight((res, f) => f(res), arg);
};

export { compose };
