function fuzzySearch(query, items) {
  const q = query.toLowerCase();
  return items.filter(item => {
    const str = item.toLowerCase();
    return str.includes(q);
  });
}

const data = ['apple', 'banana', 'grape', 'pineapple', 'apricot'];
const results = fuzzySearch('app', data);
console.log(results); // ['apple', 'pineapple']
