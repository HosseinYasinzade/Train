const person = {
  name: "Hossein Yasinzadeh",
  age: 22,
  job: "Student",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

for (let [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
