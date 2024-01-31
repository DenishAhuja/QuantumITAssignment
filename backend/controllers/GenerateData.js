const generateRandomDate = () => {
  const startDate = new Date(2022, 0, 1);
  const endDate = new Date();
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );
  return randomDate.toISOString().split("T")[0]; //YYYY-MM-DD
};

const generateRandomRole = () => {
  const roles = [
    "HR",
    "Manager",
    "Developer",
    "Data Analyst",
    "Teacher",
    "UX/UI",
  ];
  return roles[Math.floor(Math.random() * roles.length)];
};

const generateRandomStatus = () => {
  const statuses = ["Active", "Inactive"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const generateRandomActions = () => {
  return "Edit, Delete";
};

const generateRandomElement = (index) => {
  return {
    "#": index + 1,
    Name: `User ${index + 1}`,
    Email: `useer${index + 1}@example.com`,
    Role: generateRandomRole(),
    Status: generateRandomStatus(),
    Actions: generateRandomActions(),
    DateCreated: generateRandomDate(),
  };
};

const arr = [];

for (let i = 0; i < 20; i++) {
  arr.push(generateRandomElement(i));
}

module.exports = { arr };
