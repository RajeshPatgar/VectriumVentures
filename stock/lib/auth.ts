// Dummy user data
export const users = [
  {
    username: 'Abhi7247@',
    password: 'Abhi7247@',
    role: 'admin'
  },
  {
    username: 'Umesh1234',
    password: 'Umesh123',
    role: 'user'
  }
];

export const authenticate = (username: string, password: string) => {
  const user = users.find(u => u.username === username && u.password === password);
  return user || null;
};