export default (myKey) => {
  return { headers: { Authorization: `Bearer ${myKey}` } };
}