function filter(data, category = "expensive") {
  return data.filter(({ type }) => type === category);
}
